# Adding New Articles

This document explains how to add new articles to into pse.dev blog section.

## Step 1: Create the Article File

1. Duplicate the `_article-template.md` file in the `articles` directory
2. Rename it to match your article's title using kebab-case (e.g., `my-new-article.md`)

## Step 2: Fill in the Article Information

Edit the frontmatter section at the top of the file:

```
---
authors: ["Your Name"] # Add your name or multiple authors in an array
title: "Your Article Title" # The title of your article
image: "/articles/my-new-article/cover.webp" # Image used as cover
tldr: "A brief summary of your article" #Short summary
date: "YYYY-MM-DD" # Publication date in ISO format
canonical: "mirror.xyz/my-new-article" # (Optional) The original source URL, this tells search engines the primary version of the content
---
```

Write your article content using Markdown formatting:

- Use `#` for main headings (H1), `##` for subheadings (H2), etc.
- Use `*italic*` for italic text and `**bold**` for bold text
- For code blocks, use triple backticks with optional language specification:
  ```javascript
  // Your code here
  ```
- For images, use the Markdown image syntax: `![Alt text](/articles/your-article-name/image-name.png)`
- For LaTeX math formulas:
  - Use single dollar signs for inline math: `$E=mc^2$` will render as $E=mc^2$
  - Use double dollar signs for block math:
    ```
    $$
    F(x) = \int_{-\infty}^{x} f(t) dt
    $$
    ```
    Will render as a centered math equation block

## Step 3: Add Images

1. Create a new folder in the `/public/articles` directory with **exactly the same name** as your markdown file (without the .md extension)

   - Example: If your article is named `my-new-article.md`, create a folder named `my-new-article`

2. Add your images to this folder:
   - Any additional images you want to use in your article should be placed in this folder
   - Reference images in your article using just the file name and the extensions of it

## Step 4: Preview Your Article

Before submitting, make sure to:

1. Check that your markdown formatting is correct
2. Verify all images are displaying properly

## Step 5: PR Review process

Open Pull request following the previews step and for any help

- Suggest to tag: @kalidiagne, @b1gk4t, @AtHeartEngineer for PR review.
- If question, please reach out in discord channel #website-pse

## Important Notes

- The folder name in `/public/articles` must **exactly match** your markdown filename (without the .md extension)
- Use descriptive file names for your additional images
- Optimize your images for web before adding them to keep page load times fast
