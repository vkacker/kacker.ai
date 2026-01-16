---
title: "React Server Components: A First Look"
date: "Mar 2024"
category: "Note"
excerpt: "Exploring the mental model shift required for RSC and how it impacts data fetching patterns."
slug: "react-server-components"
---

React Server Components represent a **fundamental shift** in how we think about React applications. They're not just another API—they change the mental model.

---

## The Old World

In traditional React, components run on the **client**. They fetch data, render UI, handle interactivity.

```jsx
// Traditional React pattern
function ProductPage({ productId }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/products/${productId}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      });
  }, [productId]);

  if (loading) return <Spinner />;
  return <ProductDetails product={product} />;
}
```

The server's role was to serve the initial HTML and maybe provide some API endpoints. **Everything else was client-side.**

This model has limits:
- Large bundle sizes
- Waterfalls of network requests
- Secrets leaking in client-side code

---

## The New World

With Server Components, some components render exclusively on the **server**. They can access:

- Database credentials
- File systems
- Other server-only resources

Their output is serialized and sent to the client as React elements.

> The key insight: Server Components don't send JavaScript to the client. They send the *result*.

---

## The Mental Shift

You start thinking in terms of which components need to be interactive (`"use client"`) and which can run on the server.

**Most of your UI can be server-rendered**, with islands of interactivity sprinkled in.

```jsx
// Server Component - runs on server
async function ProductPage({ id }) {
  const product = await db.product.find(id);
  return <ProductDetails product={product} />;
}
```

> No loading states, no useSWR, no React Query. Just code that runs on the server and returns UI.

---

## What's Hard

The boundary between server and client is now a **first-class concern**:

- You need to think about it from day one
- Some libraries only work on the client
- Some patterns need adjustment

---

*The future of React is server-first. It's worth learning.*
