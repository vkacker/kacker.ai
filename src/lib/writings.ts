export interface WritingPost {
  id: string;
  title: string;
  date: string;
  category: 'Note' | 'Thought' | 'Essay';
  excerpt: string;
  slug: string;
  content: string;
}

export interface WritingPostPreview {
  id: string;
  title: string;
  date: string;
  category: 'Note' | 'Thought' | 'Essay';
  excerpt: string;
  slug: string;
}

function parseFrontmatter(content: string): { data: Record<string, string>; content: string } {
  const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);

  if (!match) {
    return { data: {}, content };
  }

  const frontmatterBlock = match[1];
  const body = match[2];

  const data: Record<string, string> = {};
  const lines = frontmatterBlock.split('\n');

  for (const line of lines) {
    const colonIndex = line.indexOf(':');
    if (colonIndex > -1) {
      const key = line.slice(0, colonIndex).trim();
      let value = line.slice(colonIndex + 1).trim();

      // Strip surrounding quotes if present
      if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }

      data[key] = value;
    }
  }

  return { data, content: body };
}

async function loadMarkdownFiles(): Promise<WritingPostPreview[]> {
  const modules = import.meta.glob('/content/writings/*.md', { query: '?raw', import: 'default', eager: true });

  const posts: WritingPostPreview[] = [];

  for (const path in modules) {
    const rawContent = modules[path] as string;
    const { data } = parseFrontmatter(rawContent);
    const slug = path.split('/').pop()?.replace('.md', '') || '';

    posts.push({
      id: slug,
      title: data.title || '',
      date: data.date || '',
      category: (data.category as 'Note' | 'Thought' | 'Essay') || 'Essay',
      excerpt: data.excerpt || '',
      slug,
    });
  }

  return posts.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  });
}

async function loadMarkdownContent(slug: string): Promise<WritingPost | null> {
  const modules = import.meta.glob('/content/writings/*.md', { query: '?raw', import: 'default', eager: true });

  for (const path in modules) {
    const rawContent = modules[path] as string;
    const fileSlug = path.split('/').pop()?.replace('.md', '');

    if (fileSlug === slug) {
      const { data, content } = parseFrontmatter(rawContent);
      return {
        id: slug,
        title: data.title || '',
        date: data.date || '',
        category: (data.category as 'Note' | 'Thought' | 'Essay') || 'Essay',
        excerpt: data.excerpt || '',
        slug,
        content,
      };
    }
  }

  return null;
}

export const getAllPosts = loadMarkdownFiles;
export const getPostBySlug = loadMarkdownContent;
