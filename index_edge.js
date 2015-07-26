/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-1.7.1.min.js",
            js+"jquery-2.0.3.min.js",
            "http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['9.8%', '23.3%', '81.3%', '57.8%', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,0.29)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            c: [
                            {
                                id: 'Text',
                                type: 'text',
                                rect: ['22', '18', '89.9%', '128px', 'auto', 'auto'],
                                cursor: 'pointer',
                                text: "Snow Effect: adapted from original source from<br><br>http://thecodeplayer.com/walkthrough/html5-canvas-snow-effect<br><br>----------------------------<br><br>The only difference in the code:<br>-  is the exclusion of the source css;<br>-  append() HTML5 Canvas reference to the body;<br><br>----------------------------<br><br>Source is in the Stage &gt; creationComplete {}",
                                font: ['Arial, Helvetica, sans-serif', [12, "px"], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", ""]
                            }]
                        },
                        {
                            id: 'petal',
                            type: 'image',
                            rect: ['35px', '0px', '58px', '57px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"petal.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '100%', '100%', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-15337036");
