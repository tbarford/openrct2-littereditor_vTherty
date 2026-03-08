// Get the latest version: https://github.com/Manticore-007/OpenRCT2-PeepEditor
!(function() {
    'use strict';
    var t = 'undefined' != typeof ui;
    function debug(t) {
        console.log(t);
    }
    var getTileElements = function(t, e) {
        return map.getTile(e.x / 32, e.y / 32).elements.reduce((function(i, r, n) {
            return r.type === t ? i.concat({
                element: r,
                index: n,
                coords: e
            }) : i;
        }), []);
    };
    function litterCount(t) {
        var e = map.getAllEntities('litter'), i = 0;
        return e.forEach((function(e) {
            e.litterType === t && i++;
        })), i.toString();
    }
    getTileElements('surface', {
        x: 0,
        y: 0
    })[0].element.baseZ;
    var e, i = {
        ' ': [ [ 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0 ] ],
        a: [ [ 0, 0, 0, 0, 0 ], [ 0, 1, 1, 1, 0 ], [ 0, 0, 0, 0, 1 ], [ 0, 1, 1, 1, 1 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 1, 1 ], [ 0, 1, 1, 0, 1 ] ],
        b: [ [ 1, 0, 0, 0, 0 ], [ 1, 0, 0, 0, 0 ], [ 1, 1, 1, 1, 0 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 1, 1, 1, 1, 0 ] ],
        c: [ [ 0, 0, 0, 0, 0 ], [ 0, 1, 1, 1, 0 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 0 ], [ 1, 0, 0, 0, 0 ], [ 1, 0, 0, 0, 1 ], [ 0, 1, 1, 1, 0 ] ],
        d: [ [ 0, 0, 0, 0, 1 ], [ 0, 0, 0, 0, 1 ], [ 0, 1, 1, 0, 1 ], [ 1, 0, 0, 1, 1 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 0, 1, 1, 1, 1 ] ],
        e: [ [ 0, 0, 0, 0, 0 ], [ 0, 1, 1, 1, 0 ], [ 1, 0, 0, 0, 1 ], [ 1, 1, 1, 1, 1 ], [ 1, 0, 0, 0, 0 ], [ 1, 0, 0, 0, 1 ], [ 0, 1, 1, 1, 0 ] ],
        f: [ [ 0, 0, 1, 1, 0 ], [ 0, 1, 0, 0, 1 ], [ 0, 1, 0, 0, 0 ], [ 1, 1, 1, 1, 0 ], [ 0, 1, 0, 0, 0 ], [ 0, 1, 0, 0, 0 ], [ 0, 1, 0, 0, 0 ] ],
        g: [ [ 0, 0, 0, 0, 0 ], [ 0, 1, 1, 1, 1 ], [ 1, 0, 0, 0, 0 ], [ 1, 0, 1, 1, 1 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 0, 1, 1, 1, 1 ] ],
        h: [ [ 1, 0, 0, 0, 0 ], [ 1, 0, 0, 0, 0 ], [ 1, 0, 1, 1, 0 ], [ 1, 1, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ] ],
        i: [ [ 0, 1, 1, 1, 0 ], [ 0, 0, 1, 0, 0 ], [ 0, 0, 0, 0, 0 ], [ 0, 0, 1, 0, 0 ], [ 0, 0, 1, 0, 0 ], [ 0, 0, 1, 0, 0 ], [ 0, 1, 1, 1, 0 ] ],
        j: [ [ 0, 0, 1, 1, 0 ], [ 0, 0, 0, 1, 0 ], [ 0, 0, 0, 0, 0 ], [ 0, 0, 0, 1, 0 ], [ 0, 0, 0, 1, 0 ], [ 1, 0, 0, 1, 0 ], [ 0, 1, 1, 0, 0 ] ],
        k: [ [ 1, 0, 0, 0, 0 ], [ 1, 0, 0, 1, 0 ], [ 1, 0, 1, 0, 0 ], [ 1, 1, 0, 0, 0 ], [ 1, 0, 1, 0, 0 ], [ 1, 0, 0, 1, 0 ], [ 1, 0, 0, 0, 1 ] ],
        l: [ [ 0, 1, 1, 0, 0 ], [ 0, 0, 1, 0, 0 ], [ 0, 0, 1, 0, 0 ], [ 0, 0, 1, 0, 0 ], [ 0, 0, 1, 0, 0 ], [ 0, 0, 1, 0, 0 ], [ 0, 1, 1, 1, 0 ] ],
        m: [ [ 0, 0, 0, 0, 0 ], [ 1, 0, 0, 0, 1 ], [ 1, 1, 0, 1, 1 ], [ 1, 0, 1, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ] ],
        n: [ [ 0, 0, 0, 0, 0 ], [ 1, 0, 1, 1, 0 ], [ 1, 1, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ] ],
        o: [ [ 0, 0, 0, 0, 0 ], [ 0, 1, 1, 1, 0 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 0, 1, 1, 1, 0 ] ],
        p: [ [ 0, 0, 0, 0, 0 ], [ 1, 1, 1, 1, 0 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 1, 1, 1, 1, 0 ], [ 1, 0, 0, 0, 0 ], [ 1, 0, 0, 0, 0 ] ],
        q: [ [ 0, 0, 0, 0, 0 ], [ 0, 1, 1, 1, 1 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 0, 1, 1, 0, 1 ], [ 0, 0, 0, 0, 1 ], [ 0, 0, 0, 0, 1 ] ],
        r: [ [ 0, 0, 0, 0, 0 ], [ 1, 0, 1, 1, 0 ], [ 1, 1, 0, 0, 1 ], [ 1, 0, 0, 0, 0 ], [ 1, 0, 0, 0, 0 ], [ 1, 0, 0, 0, 0 ], [ 1, 0, 0, 0, 0 ] ],
        s: [ [ 0, 0, 0, 0, 0 ], [ 0, 1, 1, 1, 1 ], [ 1, 0, 0, 0, 0 ], [ 0, 1, 1, 1, 0 ], [ 0, 0, 0, 0, 1 ], [ 0, 0, 0, 0, 1 ], [ 1, 1, 1, 1, 0 ] ],
        t: [ [ 0, 1, 1, 1, 0 ], [ 0, 0, 1, 0, 0 ], [ 0, 0, 1, 0, 0 ], [ 0, 0, 1, 0, 0 ], [ 0, 0, 1, 0, 0 ], [ 0, 0, 1, 0, 1 ], [ 0, 0, 0, 1, 0 ] ],
        u: [ [ 0, 0, 0, 0, 0 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 0, 1, 1, 1, 1 ] ],
        v: [ [ 0, 0, 0, 0, 0 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 0, 1, 0, 1, 0 ], [ 0, 1, 0, 1, 0 ], [ 0, 0, 1, 0, 0 ] ],
        w: [ [ 0, 0, 0, 0, 0 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 1, 0, 1 ], [ 1, 0, 1, 0, 1 ], [ 1, 1, 0, 1, 1 ], [ 1, 0, 0, 0, 1 ] ],
        x: [ [ 0, 0, 0, 0, 0 ], [ 1, 0, 0, 0, 1 ], [ 0, 1, 0, 1, 0 ], [ 0, 0, 1, 0, 0 ], [ 0, 0, 1, 0, 0 ], [ 0, 1, 0, 1, 0 ], [ 1, 0, 0, 0, 1 ] ],
        y: [ [ 0, 0, 0, 0, 0 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 0, 1, 0, 1, 0 ], [ 0, 0, 1, 0, 0 ], [ 0, 0, 1, 0, 0 ], [ 0, 1, 0, 0, 0 ] ],
        z: [ [ 0, 0, 0, 0, 0 ], [ 1, 1, 1, 1, 1 ], [ 0, 0, 0, 1, 0 ], [ 0, 0, 1, 0, 0 ], [ 0, 1, 0, 0, 0 ], [ 1, 0, 0, 0, 0 ], [ 1, 1, 1, 1, 1 ] ]
    }, r = 'litter-editor-window', n = 14, o = 'litter-editor-button-pipette', a = 'litter-editor-litter-type-drop-down', l = 'litter-editor-litter-type-label', d = 'litter-editor-button-delete', u = 'litter-editor-x-position-label', h = 'litter-editor-y-position-label', p = 'litter-editor-z-position-label', y = 'litter-editor-x-position-spinner', c = 'litter-editor-y-position-spinner', s = 'litter-editor-z-position-spinner', m = 'litter-editor-litter-viewport', x = 'litter-editor-multiplier-drop-down', b = 'litter-editor-button-create-litter', g = [ 'x1', 'x10', 'x100' ], w = 'litter-editor-multiplier-label', f = 'litter-editor-track-dist-count-spinner', v = 'litter-editor-track-dist-offset-spinner', _ = 1, C = 'vomit', E = [], D = [], T = 0, k = 4, B = 'vomit', L = 0, I = 'litter-editor-diag-text-string-label', R = 'litter-editor-diag-text-button-place', P = [ 2, 8, 16, 22, 28 ], W = '', A = 'vomit', H = (function() {
        function LitterEditorWindow() {}
        return LitterEditorWindow.prototype.open = function() {
            var t = ui.getWindow(r);
            if (t) debug('The Litter Editor window is already shown.'), t.bringToFront(); else {
                var H = 'Litter Editor (v'.concat('1.1', ')');
                H += ' [DEBUG]', E = [], D = [];
                for (var M = map.rides, O = 0; O < M.length; O++) {
                    var V = M[O];
                    E.push(V.id + ': ' + V.name), D.push(V.id);
                }
                T = 0, k = 4, B = 'vomit', L = 0, ui.openWindow({
                    onClose: function() {
                        var t;
                        null === (t = ui.tool) || void 0 === t || t.cancel();
                    },
                    classification: r,
                    title: H,
                    width: 260,
                    height: 250,
                    colours: [ 12, 12 ],
                    tabs: [ {
                        image: 5478,
                        widgets: [ {
                            type: 'label',
                            x: 0,
                            y: 232,
                            width: 260,
                            height: n,
                            textAlign: 'centred',
                            text: 'github.com/EnoxRCT/OpenRCT2-LitterEditor',
                            tooltip: 'Powered by Manticore_007 and Basssiiie',
                            isDisabled: !0
                        }, {
                            type: 'groupbox',
                            x: 10,
                            y: 55,
                            width: 240,
                            height: 170,
                            text: 'Litter'
                        }, {
                            name: o,
                            type: 'button',
                            border: !0,
                            tooltip: 'Select litter',
                            x: 20,
                            y: 75,
                            width: 25,
                            height: 25,
                            image: 29402,
                            isPressed: !1,
                            onClick: function() {
                                return (function selectLitter(t) {
                                    var i, n = ui.getWindow(r);
                                    if (n) {
                                        var g = n.findWidget(o), f = n.findWidget(d), v = n.findWidget(b), _ = n.findWidget(a), C = n.findWidget(x), E = n.findWidget(w), D = n.findWidget(y), T = n.findWidget(c), k = n.findWidget(s), B = n.findWidget(l), L = n.findWidget(u), I = n.findWidget(h), R = n.findWidget(p);
                                        !1 !== g.isPressed ? (g.isPressed = !1, null === (i = ui.tool) || void 0 === i || i.cancel()) : (g.isPressed = !0, 
                                        f.isPressed = !1, v.isPressed = !1, ui.activateTool({
                                            id: 'litter-editor-tool-select-litter',
                                            cursor: 'cross_hair',
                                            filter: [ 'entity' ],
                                            onDown: function(i) {
                                                var l;
                                                if (void 0 !== i.entityId) {
                                                    debug('Entity ID: '.concat(i.entityId));
                                                    var d = map.getEntity(i.entityId), u = d;
                                                    e = u, d && d.type === t ? ((function getLitter(t) {
                                                        var e = ui.getWindow(r);
                                                        if (e) {
                                                            var i = e.findWidget(a);
                                                            void 0 !== i.items && (i.selectedIndex = [ 'vomit', 'vomit_alt', 'empty_can', 'rubbish', 'burger_box', 'empty_cup', 'empty_box', 'empty_bottle', 'empty_bowl_red', 'empty_drink_carton', 'empty_juice_cup', 'empty_bowl_blue' ].indexOf(t));
                                                        }
                                                    })(u.litterType), n.findWidget(o).isPressed = !1, _.isDisabled = !1, C.isDisabled = !1, 
                                                    E.isDisabled = !1, B.isDisabled = !1, D.isDisabled = !1, T.isDisabled = !1, k.isDisabled = !1, 
                                                    L.isDisabled = !1, I.isDisabled = !1, R.isDisabled = !1, null === (l = ui.tool) || void 0 === l || l.cancel(), 
                                                    (function getLitterCoords(t) {
                                                        var e = ui.getWindow(r);
                                                        e && (e.findWidget(y).text = t.x.toString(), e.findWidget(c).text = t.y.toString(), 
                                                        e.findWidget(s).text = t.z.toString());
                                                    })(u), n.findWidget(m).viewport.moveTo(u)) : (ui.showError('WARNING:', 'This is not litter!'), 
                                                    n.findWidget(a).text = ' ');
                                                }
                                            }
                                        }));
                                    }
                                })('litter');
                            }
                        }, {
                            name: d,
                            type: 'button',
                            border: !0,
                            tooltip: 'Remove litter',
                            x: 80,
                            y: 75,
                            width: 25,
                            height: 25,
                            image: 5165,
                            isPressed: !1,
                            onClick: function() {
                                return (function removeLitter(t) {
                                    var i, n = ui.getWindow(r);
                                    if (n) {
                                        var g = n.findWidget(d), f = n.findWidget(o), v = n.findWidget(b), _ = n.findWidget(x), C = n.findWidget(w), E = n.findWidget(a), D = n.findWidget(y), T = n.findWidget(c), k = n.findWidget(s), B = n.findWidget(l), L = n.findWidget(u), I = n.findWidget(h), R = n.findWidget(p);
                                        !1 !== g.isPressed ? (g.isPressed = !1, null === (i = ui.tool) || void 0 === i || i.cancel()) : (g.isPressed = !0, 
                                        f.isPressed = !1, v.isPressed = !1, E.isDisabled = !0, _.isDisabled = !0, C.isDisabled = !0, 
                                        B.isDisabled = !0, D.isDisabled = !0, T.isDisabled = !0, k.isDisabled = !0, L.isDisabled = !0, 
                                        I.isDisabled = !0, R.isDisabled = !0, E.text = ' ', D.text = ' ', T.text = ' ', 
                                        k.text = ' ', ui.getWindow(r).findWidget(m).viewport.moveTo({
                                            x: -9e3,
                                            y: -9e3
                                        }), ui.activateTool({
                                            id: 'litter-editor-tool-remove-litter',
                                            cursor: 'bin_down',
                                            filter: [ 'entity' ],
                                            onDown: function(i) {
                                                if (void 0 !== i.entityId) {
                                                    debug('Entity ID: '.concat(i.entityId));
                                                    var r = map.getEntity(i.entityId), n = r;
                                                    e = n, r && r.type === t ? n.remove() : ui.showError('WARNING:', 'This is not litter!');
                                                }
                                            }
                                        }));
                                    }
                                })('litter');
                            }
                        }, {
                            name: b,
                            type: 'button',
                            border: !0,
                            tooltip: 'Place litter',
                            x: 50,
                            y: 75,
                            width: 25,
                            height: 25,
                            image: 5173,
                            isPressed: !1,
                            onClick: function() {
                                return (function createLitter(t) {
                                    var e, i = ui.getWindow(r);
                                    if (i) {
                                        var n = i.findWidget(b), g = i.findWidget(d), f = i.findWidget(o), v = i.findWidget(x), _ = i.findWidget(w), E = i.findWidget(a), D = i.findWidget(y), T = i.findWidget(c), k = i.findWidget(s), B = i.findWidget(l), L = i.findWidget(u), I = i.findWidget(h), R = i.findWidget(p);
                                        !1 !== n.isPressed ? (n.isPressed = !1, E.isDisabled = !0, B.isDisabled = !0, E.text = ' ', 
                                        null === (e = ui.tool) || void 0 === e || e.cancel()) : (n.isPressed = !0, f.isPressed = !1, 
                                        g.isPressed = !1, E.isDisabled = !1, v.isDisabled = !0, _.isDisabled = !0, B.isDisabled = !1, 
                                        D.isDisabled = !0, T.isDisabled = !0, k.isDisabled = !0, L.isDisabled = !0, I.isDisabled = !0, 
                                        R.isDisabled = !0, E.selectedIndex = 0, D.text = ' ', T.text = ' ', k.text = ' ', 
                                        ui.getWindow(r).findWidget(m).viewport.moveTo({
                                            x: -9e3,
                                            y: -9e3
                                        }), ui.activateTool({
                                            id: 'litter-editor-tool-create-litter',
                                            cursor: 'cross_hair',
                                            filter: [ 'terrain' ],
                                            onDown: function(e) {
                                                if (void 0 !== e.mapCoords) {
                                                    debug('Create litter: '.concat(e.mapCoords));
                                                    var i = e.mapCoords, r = getTileElements('surface', i)[0].element.baseZ;
                                                    map.createEntity(t, {
                                                        x: i.x,
                                                        y: i.y,
                                                        z: r
                                                    }).litterType = C;
                                                }
                                            }
                                        }));
                                    }
                                })('litter');
                            }
                        }, {
                            name: l,
                            type: 'label',
                            x: 20,
                            y: 110,
                            width: 75,
                            height: n,
                            text: 'Litter Type',
                            isDisabled: !0
                        }, {
                            name: a,
                            type: 'dropdown',
                            x: 90,
                            y: 110,
                            width: 125,
                            height: n,
                            items: [ 'Vomit', 'Vomit Alt', 'Empty Can', 'Rubbish', 'Burger Box', 'Empty Cup', 'Empty Box', 'Empty Bottle', 'Empty Bowl Red', 'Empty Drink Carton', 'Empty Juice Cup', 'Empty Bowl Blue' ],
                            selectedIndex: -1,
                            isDisabled: !0,
                            onChange: function(t) {
                                return (function setLitter(t) {
                                    var i = ui.getWindow(r).findWidget(b), n = [ 'vomit', 'vomit_alt', 'empty_can', 'rubbish', 'burger_box', 'empty_cup', 'empty_box', 'empty_bottle', 'empty_bowl_red', 'empty_drink_carton', 'empty_juice_cup', 'empty_bowl_blue' ];
                                    e && !i.isPressed ? e.litterType = n[t] : (C = n[t], debug('littertype set'));
                                })(t);
                            }
                        }, {
                            name: u,
                            type: 'label',
                            x: 20,
                            y: 135,
                            width: 125,
                            height: n,
                            text: 'X-Position',
                            isDisabled: !0
                        }, {
                            name: y,
                            type: 'spinner',
                            x: 90,
                            y: 135,
                            width: 70,
                            height: n,
                            text: ' ',
                            isDisabled: !0,
                            onIncrement: function() {
                                return increase(y, 'x');
                            },
                            onDecrement: function() {
                                return decrease(y, 'x');
                            }
                        }, {
                            name: h,
                            type: 'label',
                            x: 20,
                            y: 153,
                            width: 125,
                            height: n,
                            text: 'Y-Position',
                            isDisabled: !0
                        }, {
                            name: c,
                            type: 'spinner',
                            x: 90,
                            y: 153,
                            width: 70,
                            height: n,
                            text: ' ',
                            isDisabled: !0,
                            onIncrement: function() {
                                return increase(c, 'y');
                            },
                            onDecrement: function() {
                                return decrease(c, 'y');
                            }
                        }, {
                            name: p,
                            type: 'label',
                            x: 20,
                            y: 171,
                            width: 125,
                            height: n,
                            text: 'Z-Position',
                            isDisabled: !0
                        }, {
                            name: s,
                            type: 'spinner',
                            x: 90,
                            y: 171,
                            width: 70,
                            height: n,
                            text: ' ',
                            isDisabled: !0,
                            onIncrement: function() {
                                return increase(s, 'z');
                            },
                            onDecrement: function() {
                                return decrease(s, 'z');
                            }
                        }, {
                            name: w,
                            type: 'label',
                            x: 20,
                            y: 196,
                            width: 125,
                            height: n,
                            text: 'Multiplier',
                            isDisabled: !0
                        }, {
                            name: x,
                            type: 'dropdown',
                            x: 90,
                            y: 196,
                            width: 70,
                            height: n,
                            items: g,
                            selectedIndex: 0,
                            isDisabled: !0,
                            onChange: function(t) {
                                return (function setMultiplier(t) {
                                    0 === t && (_ = 1), 1 === t && (_ = 10), 2 === t && (_ = 100);
                                })(t);
                            }
                        }, {
                            name: m,
                            type: 'viewport',
                            x: 165,
                            y: 135,
                            width: 75,
                            height: 75
                        } ]
                    }, {
                        image: {
                            frameBase: 5391,
                            frameCount: 16,
                            frameDuration: 4
                        },
                        widgets: [ {
                            type: 'label',
                            x: 0,
                            y: 232,
                            width: 260,
                            height: n,
                            textAlign: 'centred',
                            text: 'github.com/EnoxRCT/OpenRCT2-LitterEditor',
                            tooltip: 'Powered by Manticore_007 and Basssiiie',
                            isDisabled: !0
                        }, {
                            type: 'groupbox',
                            x: 10,
                            y: 55,
                            width: 240,
                            height: 170,
                            text: 'Statistics'
                        }, {
                            type: 'custom',
                            x: 20,
                            y: 80,
                            width: 14,
                            height: 14,
                            onDraw: function(t) {
                                var e = t.getImage(23101);
                                e && t.image(e.id, 7, 7);
                            }
                        }, {
                            type: 'label',
                            x: 40,
                            y: 80,
                            width: 110,
                            height: n,
                            text: 'Vomit: {WHITE}'.concat(litterCount('vomit'))
                        }, {
                            type: 'custom',
                            x: 20,
                            y: 95,
                            width: 14,
                            height: 14,
                            onDraw: function(t) {
                                var e = t.getImage(23104);
                                e && t.image(e.id, 7, 7);
                            }
                        }, {
                            type: 'label',
                            x: 40,
                            y: 95,
                            width: 110,
                            height: n,
                            text: 'Vomit Alt: {WHITE}'.concat(litterCount('vomit_alt'))
                        }, {
                            type: 'custom',
                            x: 20,
                            y: 110,
                            width: 14,
                            height: 14,
                            onDraw: function(t) {
                                var e = t.getImage(5071);
                                e && t.image(e.id, 0, 0);
                            }
                        }, {
                            type: 'label',
                            x: 40,
                            y: 110,
                            width: 110,
                            height: n,
                            text: 'Empty Can: {WHITE}'.concat(litterCount('empty_can'))
                        }, {
                            type: 'custom',
                            x: 20,
                            y: 125,
                            width: 14,
                            height: 14,
                            onDraw: function(t) {
                                var e = t.getImage(5072);
                                e && t.image(e.id, 0, 0);
                            }
                        }, {
                            type: 'label',
                            x: 40,
                            y: 125,
                            width: 110,
                            height: n,
                            text: 'Rubbish: {WHITE}'.concat(litterCount('rubbish'))
                        }, {
                            type: 'custom',
                            x: 20,
                            y: 140,
                            width: 14,
                            height: 14,
                            onDraw: function(t) {
                                var e = t.getImage(5073);
                                e && t.image(e.id, 0, 0);
                            }
                        }, {
                            type: 'label',
                            x: 40,
                            y: 140,
                            width: 110,
                            height: n,
                            text: 'Burger Box: {WHITE}'.concat(litterCount('burger_box'))
                        }, {
                            type: 'custom',
                            x: 20,
                            y: 155,
                            width: 14,
                            height: 14,
                            onDraw: function(t) {
                                var e = t.getImage(5084);
                                e && t.image(e.id, 0, 0);
                            }
                        }, {
                            type: 'label',
                            x: 40,
                            y: 155,
                            width: 110,
                            height: n,
                            text: 'Empty Cup: {WHITE}'.concat(litterCount('empty_cup'))
                        }, {
                            type: 'custom',
                            x: 130,
                            y: 80,
                            width: 14,
                            height: 14,
                            onDraw: function(t) {
                                var e = t.getImage(5087);
                                e && t.image(e.id, 0, 0);
                            }
                        }, {
                            type: 'label',
                            x: 150,
                            y: 80,
                            width: 110,
                            height: n,
                            text: 'Empty Box: {WHITE}'.concat(litterCount('empty_box'))
                        }, {
                            type: 'custom',
                            x: 130,
                            y: 95,
                            width: 14,
                            height: 14,
                            onDraw: function(t) {
                                var e = t.getImage(5088);
                                e && t.image(e.id, 0, 0);
                            }
                        }, {
                            type: 'label',
                            x: 150,
                            y: 95,
                            width: 110,
                            height: n,
                            text: 'Empty Bottle: {WHITE}'.concat(litterCount('empty_bottle'))
                        }, {
                            type: 'custom',
                            x: 130,
                            y: 110,
                            width: 14,
                            height: 14,
                            onDraw: function(t) {
                                var e = t.getImage(5106);
                                e && t.image(e.id, 0, 0);
                            }
                        }, {
                            type: 'label',
                            x: 150,
                            y: 110,
                            width: 110,
                            height: n,
                            text: 'Bowl Red: {WHITE}'.concat(litterCount('empty_bowl_red'))
                        }, {
                            type: 'custom',
                            x: 130,
                            y: 125,
                            width: 14,
                            height: 14,
                            onDraw: function(t) {
                                var e = t.getImage(5107);
                                e && t.image(e.id, 0, 0);
                            }
                        }, {
                            type: 'label',
                            x: 150,
                            y: 125,
                            width: 110,
                            height: n,
                            text: 'Drink Carton: {WHITE}'.concat(litterCount('empty_drink_carton'))
                        }, {
                            type: 'custom',
                            x: 130,
                            y: 140,
                            width: 14,
                            height: 14,
                            onDraw: function(t) {
                                var e = t.getImage(5108);
                                e && (t.tertiaryColour = 18, t.image(e.id, 0, 0));
                            }
                        }, {
                            type: 'label',
                            x: 150,
                            y: 140,
                            width: 110,
                            height: n,
                            text: 'Juice Cup: {WHITE}'.concat(litterCount('empty_juice_cup'))
                        }, {
                            type: 'custom',
                            x: 130,
                            y: 155,
                            width: 14,
                            height: 14,
                            onDraw: function(t) {
                                var e = t.getImage(5110);
                                e && t.image(e.id, 0, 0);
                            }
                        }, {
                            type: 'label',
                            x: 150,
                            y: 155,
                            width: 110,
                            height: n,
                            text: 'Bowl Blue: {WHITE}'.concat(litterCount('empty_bowl_blue'))
                        }, {
                            type: 'custom',
                            x: 20,
                            y: 190,
                            width: 14,
                            height: 14,
                            onDraw: function(t) {
                                var e = t.getImage(5115);
                                e && t.image(e.id, 0, 0);
                            }
                        }, {
                            type: 'label',
                            x: 40,
                            y: 190,
                            width: 200,
                            height: n,
                            text: 'Total amount of litter: {WHITE}'.concat(map.getAllEntities('litter').length.toString())
                        } ]
                    }, {
                        image: 5193,
                        widgets: [ {
                            type: 'label',
                            x: 0,
                            y: 232,
                            width: 260,
                            height: n,
                            textAlign: 'centred',
                            text: 'github.com/EnoxRCT/OpenRCT2-LitterEditor',
                            tooltip: 'Powered by Manticore_007 and Basssiiie',
                            isDisabled: !0
                        }, {
                            type: 'groupbox',
                            x: 10,
                            y: 55,
                            width: 240,
                            height: 170,
                            text: 'Track Distributor'
                        }, {
                            name: 'litter-editor-track-dist-ride-label',
                            type: 'label',
                            x: 20,
                            y: 72,
                            width: 65,
                            height: n,
                            text: 'Ride'
                        }, {
                            name: 'litter-editor-track-dist-ride-dropdown',
                            type: 'dropdown',
                            x: 90,
                            y: 72,
                            width: 150,
                            height: n,
                            items: E.length > 0 ? E : [ '(no rides)' ],
                            selectedIndex: 0,
                            onChange: function(t) {
                                return (function onTrackDistRideChanged(t) {
                                    T = t;
                                })(t);
                            }
                        }, {
                            name: 'litter-editor-track-dist-count-label',
                            type: 'label',
                            x: 20,
                            y: 92,
                            width: 65,
                            height: n,
                            text: 'Num. Litter'
                        }, {
                            name: f,
                            type: 'spinner',
                            x: 90,
                            y: 92,
                            width: 70,
                            height: n,
                            text: '4',
                            onIncrement: function() {
                                return onTrackDistCountChange(1);
                            },
                            onDecrement: function() {
                                return onTrackDistCountChange(-1);
                            }
                        }, {
                            name: 'litter-editor-track-dist-litter-label',
                            type: 'label',
                            x: 20,
                            y: 112,
                            width: 65,
                            height: n,
                            text: 'Litter Type'
                        }, {
                            name: 'litter-editor-track-dist-litter-dropdown',
                            type: 'dropdown',
                            x: 90,
                            y: 112,
                            width: 150,
                            height: n,
                            items: [ 'Vomit', 'Vomit Alt', 'Empty Can', 'Rubbish', 'Burger Box', 'Empty Cup', 'Empty Box', 'Empty Bottle', 'Empty Bowl Red', 'Empty Drink Carton', 'Empty Juice Cup', 'Empty Bowl Blue' ],
                            selectedIndex: 0,
                            onChange: function(t) {
                                return (function onTrackDistLitterTypeChanged(t) {
                                    var e = [ 'vomit', 'vomit_alt', 'empty_can', 'rubbish', 'burger_box', 'empty_cup', 'empty_box', 'empty_bottle', 'empty_bowl_red', 'empty_drink_carton', 'empty_juice_cup', 'empty_bowl_blue' ];
                                    t >= 0 && t < e.length && (B = e[t]);
                                })(t);
                            }
                        }, {
                            name: 'litter-editor-track-dist-offset-label',
                            type: 'label',
                            x: 20,
                            y: 132,
                            width: 65,
                            height: n,
                            text: 'Z Offset'
                        }, {
                            name: v,
                            type: 'spinner',
                            x: 90,
                            y: 132,
                            width: 70,
                            height: n,
                            text: '0',
                            onIncrement: function() {
                                return onTrackDistOffsetChange(1);
                            },
                            onDecrement: function() {
                                return onTrackDistOffsetChange(-1);
                            }
                        }, {
                            name: 'litter-editor-track-dist-button',
                            type: 'button',
                            x: 20,
                            y: 160,
                            width: 220,
                            height: 25,
                            text: 'Distribute Litter',
                            onClick: function() {
                                return (function distributeTrackLitter() {
                                    if (0 === D.length || T >= D.length) ui.showError('Warning:', 'No valid ride selected.'); else {
                                        for (var t = D[T], e = map.size, i = k, r = 0, n = 0; n < e.x; n++) for (var o = 0; o < e.y; o++) for (var a = map.getTile(n, o).elements, l = 0; l < a.length; l++) {
                                            var d = a[l];
                                            if ('track' === d.type) {
                                                var u = d;
                                                if (0 === u.trackType && u.ride === t) for (var h = u.direction, p = u.baseZ + L, y = 32 * n, c = 32 * o, s = 0; s < i; s++) {
                                                    var m = Math.floor(32 * (2 * s + 1) / (2 * i)), x = void 0, b = void 0;
                                                    0 === h || 2 === h ? (x = y + 16, b = c + m) : (x = y + m, b = c + 16), map.createEntity('litter', {
                                                        x: x,
                                                        y: b,
                                                        z: p
                                                    }).litterType = B, r++;
                                                }
                                            }
                                        }
                                        debug('Track litter distribution complete. Placed: ' + r);
                                    }
                                })();
                            }
                        } ]
                    }, {
                        image: {
                            frameBase: 5221,
                            frameCount: 8,
                            frameDuration: 4
                        },
                        widgets: [ {
                            type: 'label',
                            x: 0,
                            y: 232,
                            width: 260,
                            height: n,
                            textAlign: 'centred',
                            text: 'github.com/EnoxRCT/OpenRCT2-LitterEditor',
                            tooltip: 'Powered by Manticore_007 and Basssiiie',
                            isDisabled: !0
                        }, {
                            type: 'groupbox',
                            x: 10,
                            y: 55,
                            width: 240,
                            height: 170,
                            text: 'Pixel Art'
                        }, {
                            type: 'label',
                            x: 20,
                            y: 120,
                            width: 220,
                            height: n,
                            textAlign: 'centred',
                            text: 'Under development'
                        } ]
                    }, {
                        image: {
                            frameBase: 5199,
                            frameCount: 8,
                            frameDuration: 4
                        },
                        widgets: [ {
                            type: 'label',
                            x: 0,
                            y: 232,
                            width: 260,
                            height: n,
                            textAlign: 'centred',
                            text: 'github.com/EnoxRCT/OpenRCT2-LitterEditor',
                            tooltip: 'Powered by Manticore_007 and Basssiiie',
                            isDisabled: !0
                        }, {
                            type: 'groupbox',
                            x: 10,
                            y: 55,
                            width: 240,
                            height: 170,
                            text: 'Diagonal Text'
                        }, {
                            type: 'label',
                            x: 20,
                            y: 72,
                            width: 65,
                            height: n,
                            text: 'Text'
                        }, {
                            name: 'litter-editor-diag-text-button-set-text',
                            type: 'button',
                            x: 90,
                            y: 70,
                            width: 90,
                            height: 16,
                            text: 'Set Text...',
                            onClick: function() {
                                return (function onDiagTextSetText() {
                                    ui.showTextInput({
                                        title: 'Enter Text',
                                        description: 'Enter the text to write diagonally (a–z and space only):',
                                        initialValue: W,
                                        maxLength: 64,
                                        callback: function(t) {
                                            W = t.toLowerCase();
                                            var e = ui.getWindow(r);
                                            e && (e.findWidget(I).text = W || '(none)');
                                        }
                                    });
                                })();
                            }
                        }, {
                            name: I,
                            type: 'label',
                            x: 20,
                            y: 92,
                            width: 220,
                            height: n,
                            text: '(none)'
                        }, {
                            type: 'label',
                            x: 20,
                            y: 114,
                            width: 65,
                            height: n,
                            text: 'Litter Type'
                        }, {
                            name: 'litter-editor-diag-text-litter-dropdown',
                            type: 'dropdown',
                            x: 90,
                            y: 114,
                            width: 150,
                            height: n,
                            items: [ 'Vomit', 'Vomit Alt', 'Empty Can', 'Rubbish', 'Burger Box', 'Empty Cup', 'Empty Box', 'Empty Bottle', 'Empty Bowl Red', 'Empty Drink Carton', 'Empty Juice Cup', 'Empty Bowl Blue' ],
                            selectedIndex: 0,
                            onChange: function(t) {
                                return (function onDiagTextLitterTypeChanged(t) {
                                    var e = [ 'vomit', 'vomit_alt', 'empty_can', 'rubbish', 'burger_box', 'empty_cup', 'empty_box', 'empty_bottle', 'empty_bowl_red', 'empty_drink_carton', 'empty_juice_cup', 'empty_bowl_blue' ];
                                    t >= 0 && t < e.length && (A = e[t]);
                                })(t);
                            }
                        }, {
                            name: R,
                            type: 'button',
                            x: 20,
                            y: 142,
                            width: 220,
                            height: 25,
                            text: 'Place Text',
                            isPressed: !1,
                            onClick: function() {
                                return (function onDiagTextPlace() {
                                    var t, e = ui.getWindow(r);
                                    if (e) {
                                        var n = e.findWidget(R);
                                        if (n.isPressed) return n.isPressed = !1, void (null === (t = ui.tool) || void 0 === t || t.cancel());
                                        W ? (n.isPressed = !0, ui.activateTool({
                                            id: 'litter-editor-diag-text-tool',
                                            cursor: 'cross_hair',
                                            filter: [ 'terrain' ],
                                            onDown: function(t) {
                                                var e;
                                                if (void 0 !== t.mapCoords) {
                                                    var n = t.mapCoords;
                                                    !(function placeDiagonalText(t, e, r, n) {
                                                        for (var o = ui.mainViewport.rotation, a = r.toLowerCase().split(''), l = 0; l < a.length; l++) for (var d = a[l], u = void 0 !== i[d] ? i[d] : i[' '], h = 32 * l, p = u.length, y = 0; y < p; y++) for (var c = 0; c < u[y].length; c++) if (u[y][c]) {
                                                            var s = P[c], m = void 0, x = void 0;
                                                            switch (o) {
                                                              case 1:
                                                                m = t.x, x = t.y + h + s;
                                                                break;

                                                              case 2:
                                                                m = t.x - h - s, x = t.y;
                                                                break;

                                                              case 3:
                                                                m = t.x, x = t.y - h - s;
                                                                break;

                                                              default:
                                                                m = t.x + h + s, x = t.y;
                                                            }
                                                            var b = e + 16 * (p - 1 - y);
                                                            map.createEntity('litter', {
                                                                x: m,
                                                                y: x,
                                                                z: b
                                                            }).litterType = n;
                                                        }
                                                        debug('Diagonal text placement complete. Text: ' + r);
                                                    })(n, getTileElements('surface', n)[0].element.baseZ, W, A);
                                                    var o = ui.getWindow(r);
                                                    o && (o.findWidget(R).isPressed = !1), null === (e = ui.tool) || void 0 === e || e.cancel();
                                                }
                                            },
                                            onFinish: function() {
                                                var t = ui.getWindow(r);
                                                t && (t.findWidget(R).isPressed = !1);
                                            }
                                        })) : ui.showError('Warning:', 'No text set. Use \'Set Text...\' first.');
                                    }
                                })();
                            }
                        } ]
                    }, {
                        image: {
                            frameBase: 5367,
                            frameCount: 8,
                            frameDuration: 4
                        },
                        widgets: [ {
                            type: 'label',
                            x: 0,
                            y: 232,
                            width: 260,
                            height: n,
                            textAlign: 'centred',
                            text: 'github.com/EnoxRCT/OpenRCT2-LitterEditor',
                            tooltip: 'Powered by Manticore_007 and Basssiiie',
                            isDisabled: !0
                        }, {
                            type: 'groupbox',
                            x: 10,
                            y: 55,
                            width: 240,
                            height: 170,
                            text: 'Info'
                        }, {
                            type: 'label',
                            x: 20,
                            y: 120,
                            width: 220,
                            height: n,
                            textAlign: 'centred',
                            text: 'This LitterEditor is my first expierence with coding.\n\nSpecial thanks to:\nManticore_007, Basssiiie, Smitty\nand Gymnasiast.'
                        } ]
                    } ]
                });
            }
        }, LitterEditorWindow;
    })();
    function increase(t, i) {
        var n = ui.getWindow(r).findWidget(t);
        e[i] = e[i] + 1 * _, n.text = e[i].toString(), ui.getWindow(r).findWidget(m).viewport.moveTo(e);
    }
    function decrease(t, i) {
        var n = ui.getWindow(r).findWidget(t);
        e[i] = e[i] - 1 * _, n.text = e[i].toString(), ui.getWindow(r).findWidget(m).viewport.moveTo(e);
    }
    function onTrackDistCountChange(t) {
        var e = k + t;
        if (!(e < 1 || e > 8)) {
            k = e;
            var i = ui.getWindow(r);
            i && (i.findWidget(f).text = k.toString());
        }
    }
    function onTrackDistOffsetChange(t) {
        var e = L + t;
        if (!(e < -8 || e > 8)) {
            L = e;
            var i = ui.getWindow(r);
            i && (i.findWidget(v).text = L.toString());
        }
    }
    var M = new H;
    registerPlugin({
        name: 'Litter Editor',
        version: '1.1',
        authors: [ 'Enox' ],
        type: 'local',
        licence: 'MIT',
        targetApiVersion: 64,
        main: function main() {
            debug('Plugin started.'), t && 'none' == network.mode && ui.registerMenuItem('Litter Editor', (function() {
                return M.open();
            }));
        }
    });
})();
