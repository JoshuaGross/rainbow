/**
 * Diff patterns
 *
 * @author Joshua Gross
 * @version 1.0.0
 */
Rainbow.extend([
    {
        'matches': {
            1: 'hidden',
            2: 'change.deleted',
            3: 'hidden',
        },
        'pattern': /(\&lt;del\&gt;)([\s\S]*?)(\&lt;\/del\&gt;)/g
    },
    {
        'matches': {
            1: 'hidden',
            2: 'change.inserted',
            3: 'hidden',
        },
        'pattern': /(\&lt;ins\&gt;)([\s\S]*?)(\&lt;\/ins\&gt;)/g
    }
]);
