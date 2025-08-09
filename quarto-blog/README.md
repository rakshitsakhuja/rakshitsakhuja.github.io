# AI/ML Notes Blog

A modern blog built with [Quarto](https://quarto.org/) focusing on Machine Learning, Deep Learning, and AI topics.

## Features

- 🚀 Modern, responsive design
- 📝 Support for Jupyter notebooks and Markdown
- 🎨 Syntax highlighting for code
- 📊 Interactive plots and visualizations
- 🔍 Full-text search
- 📱 Mobile-friendly
- ⚡ Fast loading with static site generation

## Local Development

### Prerequisites

1. Install [Quarto](https://quarto.org/docs/get-started/)
2. Install Python 3.8+ with Jupyter

### Running locally

```bash
# Preview the site
quarto preview

# Render the site
quarto render
```

## Deployment

This blog automatically deploys to GitHub Pages when you push to the `main` branch.

## Writing Posts

### Markdown Posts

Create a new `.qmd` file in the `posts/` directory:

```yaml
---
title: "Your Post Title"
description: "Brief description"
author: "Your Name"
date: "2024-01-01"
categories: [category1, category2]
---

Your content here...
```

### Jupyter Notebook Posts

1. Create your notebook in the `posts/` directory
2. Add YAML front matter in a raw cell at the top
3. The notebook will be automatically rendered

## Categories

Current categories include:
- Machine Learning
- Deep Learning
- Azure
- Python
- Data Science