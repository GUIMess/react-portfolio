import React from "react";
import { Helmet } from "react-helmet-async";

export default function SEO() {
  const title = "Catalin Siegling - Web Developer";
  const description = "Portfolio website for Catalin Siegling, a web developer based in Wichita, KS";
  const url = "https://yourdomain.com"; // Replace with your actual domain

  return (
    <Helmet>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#6366F1" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <link rel="canonical" href={url} />
    </Helmet>
  );
}
