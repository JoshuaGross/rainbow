/**
 * LaTeX patterns
 *
 * @author Joshua Gross
 * @version 1.0.0
 */
Rainbow.extend('latex', [
     /**
      *  % style comment
      */
    //{
        //'name': 'comment',
        //'pattern': /(\%)[\s\S]*?$/gm
    //},

    /**
     * match commands \etc
     */
    //{
        //'name': 'entity.function',
        //'pattern': /\\[a-zA-Z0-9_]+\b/gm
    //},
    //{
        //'matches': {
          //1: 'string',
          //3: 'string'
        //},
        //'pattern': /(\{)([^\}]+)(\})/gm
    //},
    //{
        //'name': 'support',
        //'pattern': /\[[^\]]+\]/gm
    //}
]);

