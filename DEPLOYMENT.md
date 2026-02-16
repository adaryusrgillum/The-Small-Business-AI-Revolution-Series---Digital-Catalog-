# GitHub Pages Deployment Guide

This guide explains how to deploy The Small Business AI Revolution Series to GitHub Pages for public viewing.

## Prerequisites

- Repository must be public or GitHub Pro account with private pages
- GitHub Pages must be enabled in repository settings
- `_config.yml` file must be present (already included)

## Quick Start Deployment

### Option 1: Deploy from GitHub Settings (Recommended)

1. **Navigate to Repository Settings**
   - Go to your repository on GitHub
   - Click "Settings" in the top navigation
   - Scroll to "Pages" in the left sidebar

2. **Configure Source**
   - Under "Source", select "Deploy from a branch"
   - Choose the `main` branch (or your default branch)
   - Select `/ (root)` as the folder
   - Click "Save"

3. **Wait for Deployment**
   - GitHub will automatically build and deploy your site
   - This usually takes 1-3 minutes
   - You'll receive a notification when complete

4. **Access Your Site**
   - Your site will be available at:
     ```
     https://<username>.github.io/<repository-name>/
     ```
   - For this repository:
     ```
     https://adaryusrgillum.github.io/The-Small-Business-AI-Revolution-Series---Digital-Catalog-/
     ```

### Option 2: Deploy Using GitHub Actions

For more control, you can use GitHub Actions for deployment:

1. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Pages
        uses: actions/configure-pages@v3
        
      - name: Build with Jekyll
        uses: actions/jekyll-build-pages@v1
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        
      - name: Deploy to GitHub Pages
        uses: actions/deploy-pages@v2
```

## Customizing Your Deployment

### Updating Site Title and Description

Edit `_config.yml`:

```yaml
title: "Your Custom Title"
description: "Your custom description"
```

### Changing Theme

GitHub Pages supports several themes. To change the theme, edit `_config.yml`:

```yaml
theme: jekyll-theme-minimal
# Other options: jekyll-theme-cayman, jekyll-theme-slate, 
# jekyll-theme-architect, jekyll-theme-tactile, etc.
```

### Adding Custom Domain

1. Add a `CNAME` file to the repository root with your domain:
   ```
   yourdomain.com
   ```

2. Configure DNS with your domain provider:
   - Add a CNAME record pointing to `<username>.github.io`
   - Or add A records pointing to GitHub's IP addresses

3. In GitHub Settings → Pages, enter your custom domain

## Site Structure

When deployed, your site will have this structure:

```
Homepage (README.md)
├── Book 1: AI for the Rest of Us (book_01_ai_for_the_rest_of_us.md)
├── Book 2: Demystifying AI (book_02_demystifying_ai.md)
├── ... (all other books)
├── Digital Catalog (digital_catalog.html)
└── Accessibility Guidelines (ACCESSIBILITY.md)
```

## Navigation and Links

### Internal Links

All internal links use relative paths and will work automatically:

```markdown
[Book 1](book_01_ai_for_the_rest_of_us.md)
```

### External Links

External links work as standard markdown:

```markdown
[GitHub](https://github.com)
```

## Previewing Locally

To preview your site before deploying:

### Using Jekyll (Recommended)

1. **Install Ruby and Jekyll**:
   ```bash
   # On macOS
   brew install ruby
   gem install jekyll bundler
   
   # On Ubuntu/Debian
   sudo apt-get install ruby-full
   sudo gem install jekyll bundler
   
   # On Windows
   # Use RubyInstaller from rubyinstaller.org
   gem install jekyll bundler
   ```

2. **Install Dependencies**:
   ```bash
   bundle install
   ```

3. **Serve Locally**:
   ```bash
   bundle exec jekyll serve
   ```

4. **View in Browser**:
   - Open `http://localhost:4000`

### Using Python SimpleHTTPServer (Quick Preview)

For a quick preview without Jekyll:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

**Note**: This won't process Jekyll templates, so markdown files won't render.

## Troubleshooting

### Site Not Updating

1. **Check Build Status**:
   - Go to "Actions" tab in your repository
   - Look for failed builds (red X)
   - Click on failed build for error details

2. **Clear Cache**:
   - Force refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
   - Clear browser cache completely

3. **Verify Branch**:
   - Ensure you're pushing to the correct branch
   - Check GitHub Pages settings for configured branch

### 404 Errors

1. **File Names**: Ensure all file names match exactly (case-sensitive)
2. **File Paths**: Use relative paths for internal links
3. **Index File**: Ensure README.md exists in the root

### Theme Not Applied

1. **Config File**: Verify `_config.yml` is in the repository root
2. **Theme Name**: Check theme name is spelled correctly
3. **Supported Themes**: Verify theme is supported by GitHub Pages

## Advanced Features

### Adding Google Analytics

Edit `_config.yml`:

```yaml
google_analytics: UA-XXXXXXXXX-X
```

### Custom 404 Page

Create `404.md` in the repository root:

```markdown
---
layout: default
permalink: /404.html
---

# Page Not Found

The page you're looking for doesn't exist. 

[Return to Home](/)
```

### Adding Search Functionality

GitHub Pages doesn't support server-side search, but you can add client-side search using:

1. **Lunr.js**: JavaScript-based search
2. **Algolia DocSearch**: Free for open-source projects
3. **Custom Google Search**: Embedded search box

## Monitoring and Analytics

### GitHub Insights

Track repository traffic:
- Go to "Insights" → "Traffic"
- View visitor statistics, popular content, referrers

### Google Analytics

Set up Google Analytics (see above) for detailed analytics:
- User demographics
- Session duration
- Popular pages
- Conversion tracking

## Maintenance Schedule

Recommended maintenance tasks:

**Weekly**:
- Check for broken links
- Review analytics for popular content

**Monthly**:
- Update external links
- Review and respond to feedback
- Check accessibility with automated tools

**Quarterly**:
- Review entire site for outdated content
- Test on multiple browsers and devices
- Update dependencies (Jekyll, plugins)

## Support Resources

### Official Documentation

- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [Jekyll Themes](https://pages.github.com/themes/)

### Community Support

- [GitHub Community Forum](https://github.community/)
- [Jekyll Talk](https://talk.jekyllrb.com/)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/github-pages)

## Next Steps

After deploying:

1. **Test All Links**: Click through every link on your site
2. **Test on Mobile**: View on different screen sizes
3. **Share the URL**: Add to README, social media, email signature
4. **Enable Analytics**: Track visitor engagement
5. **Gather Feedback**: Ask readers for improvement suggestions

## Deployment Checklist

- [ ] `_config.yml` is configured with correct title and description
- [ ] All markdown files have proper YAML front matter
- [ ] README.md exists and is complete
- [ ] All internal links use relative paths
- [ ] Images have alt-text
- [ ] GitHub Pages is enabled in settings
- [ ] Site builds successfully (check Actions tab)
- [ ] Site is accessible at the GitHub Pages URL
- [ ] All pages load correctly
- [ ] Navigation works on mobile and desktop
- [ ] Analytics is configured (optional)
- [ ] Custom domain is configured (if applicable)

---

**Need Help?**

If you encounter issues during deployment, please:
1. Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
2. Review build logs in the Actions tab
3. Open an issue in this repository with details about the problem

---

**Last Updated**: February 2026
