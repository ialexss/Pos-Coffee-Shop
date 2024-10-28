import '../css/app.css';
import './bootstrap';
import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import Layout from '@/Layouts/Layout';
import React from 'react';

createInertiaApp({
  title: (title) => `${title}`,
  resolve: (name) => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true });
    let page = pages[`./Pages/${name}.jsx`];
    page.default.layout = page.default.layout || ((page) => <Layout Children={page} />);
    return page;
  },
  setup({ el, App, props }) {
    const root = createRoot(el);
    root.render(<App {...props} />);
  },
  progress: {
    color: '#4B5563',
  },
});
