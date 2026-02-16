# Accessibility and Content Guidelines

This document provides guidelines for maintaining accessibility and content quality across The Small Business AI Revolution Series.

## Image Alt-Text Guidelines

All images and visual assets should include descriptive alt-text that conveys the same information as the visual element.

### Format for Alt-Text

```markdown
![Alt text describing the image content](image_path.png)
```

### Best Practices

1. **Be Descriptive**: Describe what the image shows, not just "image" or "diagram"
2. **Include Context**: If the image illustrates a concept, explain what it demonstrates
3. **Keep it Concise**: Aim for 125 characters or less when possible
4. **Avoid Redundancy**: Don't start with "Image of..." or "Picture of..."
5. **Include Text Content**: If the image contains important text, include it in the alt-text

### Examples

#### Good Alt-Text Examples

```markdown
![Workflow diagram showing customer email flowing through AI categorization system to support team routing](assets/email-workflow.png)

![Bar chart comparing 34% cost reduction before and after AI implementation in a laundromat](assets/cost-savings-chart.png)

![Screenshot of AI dashboard displaying real-time inventory predictions for a bakery](assets/bakery-dashboard.png)
```

#### Poor Alt-Text Examples (Avoid These)

```markdown
![Image](assets/diagram.png)
![Chart](assets/chart1.png)
![Screenshot](assets/screenshot.png)
```

## Visual Asset Placeholders

When a visual asset is planned but not yet created, use this format:

```markdown
> 📊 **[Visual Asset: Descriptive Title]**
> *Detailed description of what this visual will show and why it's valuable to the reader.*
```

### Example Placeholders

```markdown
> 📊 **[Visual Asset: AI Decision Tree for Small Business]**
> *An interactive decision tree helping readers determine which AI tools best fit their business needs based on industry, budget, and technical capability.*

> 🎨 **[Infographic: The AI Implementation Timeline]**
> *A visual timeline showing the typical 90-day AI implementation journey with key milestones, common pitfalls, and success indicators at each stage.*

> 📸 **[Screenshot: Sample AI Dashboard]**
> *Example dashboard showing how a small retail business monitors AI-powered inventory predictions, including metrics like accuracy scores, stock levels, and reorder suggestions.*
```

## Icons for Different Content Types

Use these emoji icons consistently throughout the series:

- 📊 - Charts, graphs, data visualizations
- 🎨 - Infographics, illustrated content
- 📸 - Screenshots, interface examples
- 🎬 - Video content
- 🔗 - External links, resources
- 💡 - Pro-Tips, insights
- ⚠️ - Warnings, alerts, important notices
- ✅ - Checklists, action items
- 📚 - Additional reading, resources

## Callout Formatting Standards

### Pro-Tips

Use for positive, actionable advice:

```markdown
> **💡 Pro-Tip:** Your helpful advice here that provides immediate value to small business owners.
```

### Small Business Alerts

Use for warnings, critical timing information, or common pitfalls:

```markdown
> **⚠️ Small Business Alert:** Your warning or important information that helps readers avoid mistakes.
```

### Key Takeaways

Use for summarizing important concepts:

```markdown
> **✅ Key Takeaway:** The essential point readers should remember from this section.
```

## Interactive Checklists

Format checklists using GitHub's task list syntax at the end of each chapter:

```markdown
### Chapter [X] Action Checklist

- [ ] First actionable item
- [ ] Second actionable item
- [ ] Third actionable item
```

### Checklist Best Practices

1. **Make Items Actionable**: Use verbs (Research, Identify, Sign up, Block time)
2. **Keep it Manageable**: 5-8 items per chapter maximum
3. **Be Specific**: "Sign up for ChatGPT Plus trial" not "Try AI"
4. **Sequence Logically**: Order items by priority or natural workflow
5. **Include Resources**: Link to tools or templates when relevant

## Link Validation

### Internal Links

Always use relative paths for internal links:

```markdown
[Book 1: AI for the Rest of Us](book_01_ai_for_the_rest_of_us.md)
[Digital Catalog](digital_catalog.html)
[README](README.md)
```

### External Links

External links should:
1. Open in the same tab (default markdown behavior)
2. Include descriptive link text (not "click here")
3. Be validated periodically for broken links

```markdown
[ChatGPT by OpenAI](https://chat.openai.com)
```

## Accessibility Checklist for New Content

When adding new content, verify:

- [ ] All images have descriptive alt-text
- [ ] Links have meaningful text (not "click here")
- [ ] Headings follow proper hierarchy (H1 → H2 → H3, no skipping)
- [ ] Color is not the only means of conveying information
- [ ] Text has sufficient contrast ratios
- [ ] Tables include proper header rows
- [ ] Lists are properly formatted (not just dashes)
- [ ] Blockquotes are used for actual quotes/callouts, not styling

## Content Structure Standards

### Chapter Structure

Each chapter should include:

1. **Introduction**: Set context and learning objectives
2. **Body Content**: Main teaching content with examples
3. **Callouts**: 1-2 Pro-Tips or Alerts per chapter
4. **Visual Assets**: At least one diagram or placeholder per chapter
5. **Action Checklist**: 5-8 specific, actionable items
6. **Chapter Break**: Horizontal rule (`---`) before next chapter

### Book Structure

Each book should have:

1. **YAML Front Matter**: Metadata for cataloging
2. **Title and Subtitle**: Consistent with front matter
3. **Introduction**: Purpose and target audience
4. **Part Divisions**: If book has multiple parts
5. **Chapters**: Main content
6. **Conclusion**: Summary and next steps

## Testing Accessibility

### Manual Tests

1. **Screen Reader**: Test with NVDA (Windows) or VoiceOver (Mac)
2. **Keyboard Navigation**: Navigate without mouse using Tab, Arrow keys
3. **Zoom Test**: View at 200% zoom and verify readability
4. **Color Contrast**: Use WebAIM Contrast Checker for text

### Automated Tools

Consider using these tools periodically:
- [WAVE Web Accessibility Evaluation Tool](https://wave.webaim.org/)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) (built into Chrome)

## Version Control for Assets

When adding visual assets:

1. **Naming Convention**: Use lowercase with hyphens: `ai-workflow-diagram.png`
2. **Organization**: Store in `/assets` or `/images` directory
3. **Size Optimization**: Compress images before committing
4. **Format**: Use PNG for diagrams, JPG for photos, SVG for icons when possible
5. **Licensing**: Only use images you have rights to or properly licensed materials

## Questions or Suggestions?

If you have questions about these guidelines or suggestions for improvements, please open an issue on GitHub or contact the maintainer.

---

**Last Updated**: February 2026
**Maintainer**: Adaryus Gillum
