/* Patterns bundle configuration.
 *
 * This file is used to tell r.js which Patterns to load when it generates a
 * bundle. This is only used when generating a full Patterns bundle, or when
 * you want a simple way to include all patterns in your own project. If you
 * only want to use selected patterns you will need to pull in the patterns
 * directly in your RequireJS configuration.
 */
define('patterns', [
    // Don't ever outcomment these: 
    "pat-registry",
    "jquery",
    "prefixfree",

    // You can outcomment from these if you don't need them
    "pat-ajax",
    "pat-autofocus",
    "pat-autoscale",
    "pat-autosubmit",
    "pat-autosuggest",
    "pat-breadcrumbs",
    "pat-bumper",
    "pat-calendar",
    "pat-carousel",
    "pat-checkedflag",
    "pat-checklist",
    "pat-chosen",
    "pat-clone",
    "pat-collapsible",
    "pat-colour-picker",
    "pat-date-picker",
    "pat-depends",
    "pat-equaliser",
    "pat-expandable",
    "pat-focus",
    "pat-form-state",
    "pat-forward",
    "pat-gallery",
    "pat-image-crop",
    "pat-inject",
    "pat-input-change-events",
    "pat-legend",
    "pat-markdown",
    "pat-masonry",
    "pat-menu",
    "pat-modal",
    "pat-navigation",
    "pat-notification",
    "pat-placeholder",
    "pat-scroll",
    "pat-selectbox",
    "pat-slides",
    "pat-slideshow-builder",
    "pat-sortable",
    "pat-stacks",
    "pat-subform",
    "pat-switch",
    "pat-syntax-highlight",
    "pat-toggle",
    "pat-tooltip",
    "pat-url",
    "pat-validation",
    "pat-zoom"
], function(registry) {
    // Since we are in a non-AMD env, register a few useful utilites
    window.patterns = registry;
    registry.init();
    return registry;
});

require(['patterns']);
