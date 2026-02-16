// Simple markdown to HTML parser for basic markdown features
function parseMarkdown(markdown) {
    let html = markdown;
    
    // Escape HTML to prevent XSS, but we'll process markdown first
    // Convert headers (must be done before other replacements)
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
    
    // Convert horizontal rules
    html = html.replace(/^\-\-\-+$/gim, '<hr>');
    html = html.replace(/^\*\*\*+$/gim, '<hr>');
    
    // Convert bold and italic
    html = html.replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>');
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
    html = html.replace(/\_\_\_(.*?)\_\_\_/g, '<strong><em>$1</em></strong>');
    html = html.replace(/\_\_(.*?)\_\_/g, '<strong>$1</strong>');
    html = html.replace(/\_(.*?)\_/g, '<em>$1</em>');
    
    // Convert lists (simple version)
    html = html.replace(/^\- (.*$)/gim, '<li>$1</li>');
    html = html.replace(/^\* (.*$)/gim, '<li>$1</li>');
    html = html.replace(/^\d+\. (.*$)/gim, '<li>$1</li>');
    
    // Wrap consecutive <li> tags in <ul>
    html = html.replace(/(<li>.*<\/li>\n?)+/gim, function(match) {
        return '<ul>' + match + '</ul>';
    });
    
    // Convert blockquotes
    html = html.replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>');
    
    // Convert links
    html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');
    
    // Convert paragraphs (lines separated by blank lines)
    html = html.split('\n\n').map(para => {
        para = para.trim();
        if (para && !para.match(/^<[h|u|o|b]/)) {
            return '<p>' + para.replace(/\n/g, '<br>') + '</p>';
        }
        return para;
    }).join('\n');
    
    return html;
}

// Make it compatible with marked.js API
const marked = {
    parse: parseMarkdown
};
