// Get the latest version: https://github.com/Manticore-007/OpenRCT2-PeepEditor
!(function() {
    'use strict';
    var t = 'undefined' != typeof ui;
    function debug(t) {
        console.log(t);
    }
    var getTileElements = function(t, e) {
        return map.getTile(e.x / 32, e.y / 32).elements.reduce((function(i, o, r) {
            return o.type === t ? i.concat({
                element: o,
                index: r,
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
        A: [ [ 0, 1, 1, 1, 0 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 1, 1, 1, 1, 1 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ] ],
        B: [ [ 1, 1, 1, 1, 0 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 1, 1, 1, 1, 0 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 1, 1, 1, 1, 0 ] ],
        C: [ [ 0, 1, 1, 1, 0 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 0 ], [ 1, 0, 0, 0, 0 ], [ 1, 0, 0, 0, 0 ], [ 1, 0, 0, 0, 1 ], [ 0, 1, 1, 1, 0 ] ],
        D: [ [ 1, 1, 1, 0, 0 ], [ 1, 0, 0, 1, 0 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 1, 0 ], [ 1, 1, 1, 0, 0 ] ],
        E: [ [ 1, 1, 1, 1, 1 ], [ 1, 0, 0, 0, 0 ], [ 1, 0, 0, 0, 0 ], [ 1, 1, 1, 1, 0 ], [ 1, 0, 0, 0, 0 ], [ 1, 0, 0, 0, 0 ], [ 1, 1, 1, 1, 1 ] ],
        F: [ [ 1, 1, 1, 1, 1 ], [ 1, 0, 0, 0, 0 ], [ 1, 0, 0, 0, 0 ], [ 1, 1, 1, 1, 0 ], [ 1, 0, 0, 0, 0 ], [ 1, 0, 0, 0, 0 ], [ 1, 0, 0, 0, 0 ] ],
        G: [ [ 0, 1, 1, 1, 0 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 0 ], [ 1, 0, 1, 1, 1 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 0, 1, 1, 1, 0 ] ],
        H: [ [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 1, 1, 1, 1, 1 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ] ],
        I: [ [ 0, 1, 1, 1, 0 ], [ 0, 0, 1, 0, 0 ], [ 0, 0, 1, 0, 0 ], [ 0, 0, 1, 0, 0 ], [ 0, 0, 1, 0, 0 ], [ 0, 0, 1, 0, 0 ], [ 0, 1, 1, 1, 0 ] ],
        J: [ [ 0, 0, 1, 1, 1 ], [ 0, 0, 0, 1, 0 ], [ 0, 0, 0, 1, 0 ], [ 0, 0, 0, 1, 0 ], [ 1, 0, 0, 1, 0 ], [ 1, 0, 0, 1, 0 ], [ 0, 1, 1, 0, 0 ] ],
        K: [ [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 1, 0 ], [ 1, 0, 1, 0, 0 ], [ 1, 1, 0, 0, 0 ], [ 1, 0, 1, 0, 0 ], [ 1, 0, 0, 1, 0 ], [ 1, 0, 0, 0, 1 ] ],
        L: [ [ 1, 0, 0, 0, 0 ], [ 1, 0, 0, 0, 0 ], [ 1, 0, 0, 0, 0 ], [ 1, 0, 0, 0, 0 ], [ 1, 0, 0, 0, 0 ], [ 1, 0, 0, 0, 0 ], [ 1, 1, 1, 1, 1 ] ],
        M: [ [ 1, 0, 0, 0, 1 ], [ 1, 1, 0, 1, 1 ], [ 1, 0, 1, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ] ],
        N: [ [ 1, 0, 0, 0, 1 ], [ 1, 1, 0, 0, 1 ], [ 1, 0, 1, 0, 1 ], [ 1, 0, 0, 1, 1 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ] ],
        O: [ [ 0, 1, 1, 1, 0 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 0, 1, 1, 1, 0 ] ],
        P: [ [ 1, 1, 1, 1, 0 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 1, 1, 1, 1, 0 ], [ 1, 0, 0, 0, 0 ], [ 1, 0, 0, 0, 0 ], [ 1, 0, 0, 0, 0 ] ],
        Q: [ [ 0, 1, 1, 1, 0 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 1, 0, 1 ], [ 1, 0, 0, 1, 0 ], [ 0, 1, 1, 0, 1 ] ],
        R: [ [ 1, 1, 1, 1, 0 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 1, 1, 1, 1, 0 ], [ 1, 0, 1, 0, 0 ], [ 1, 0, 0, 1, 0 ], [ 1, 0, 0, 0, 1 ] ],
        S: [ [ 0, 1, 1, 1, 1 ], [ 1, 0, 0, 0, 0 ], [ 1, 0, 0, 0, 0 ], [ 0, 1, 1, 1, 0 ], [ 0, 0, 0, 0, 1 ], [ 0, 0, 0, 0, 1 ], [ 1, 1, 1, 1, 0 ] ],
        T: [ [ 1, 1, 1, 1, 1 ], [ 0, 0, 1, 0, 0 ], [ 0, 0, 1, 0, 0 ], [ 0, 0, 1, 0, 0 ], [ 0, 0, 1, 0, 0 ], [ 0, 0, 1, 0, 0 ], [ 0, 0, 1, 0, 0 ] ],
        U: [ [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 0, 1, 1, 1, 0 ] ],
        V: [ [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 0, 1, 0, 1, 0 ], [ 0, 0, 1, 0, 0 ] ],
        W: [ [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 1, 0, 1 ], [ 1, 1, 0, 1, 1 ], [ 1, 0, 0, 0, 1 ] ],
        X: [ [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 0, 1, 0, 1, 0 ], [ 0, 0, 1, 0, 0 ], [ 0, 1, 0, 1, 0 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ] ],
        Y: [ [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 0, 1, 0, 1, 0 ], [ 0, 0, 1, 0, 0 ], [ 0, 0, 1, 0, 0 ], [ 0, 0, 1, 0, 0 ], [ 0, 0, 1, 0, 0 ] ],
        Z: [ [ 1, 1, 1, 1, 1 ], [ 0, 0, 0, 0, 1 ], [ 0, 0, 0, 1, 0 ], [ 0, 0, 1, 0, 0 ], [ 0, 1, 0, 0, 0 ], [ 1, 0, 0, 0, 0 ], [ 1, 1, 1, 1, 1 ] ]
    }, o = 'litter-editor-window', r = 14, n = 'litter-editor-button-pipette', l = 'litter-editor-litter-type-drop-down', a = 'litter-editor-litter-type-label', u = 'litter-editor-button-delete', d = 'litter-editor-x-position-label', h = 'litter-editor-y-position-label', y = 'litter-editor-z-position-label', p = 'litter-editor-x-position-spinner', s = 'litter-editor-y-position-spinner', c = 'litter-editor-z-position-spinner', x = 'litter-editor-litter-viewport', m = 'litter-editor-multiplier-drop-down', b = 'litter-editor-button-create-litter', g = [ 'x1', 'x10', 'x100' ], w = 'litter-editor-multiplier-label', f = 'litter-editor-diag-text-current-label', v = 'litter-editor-diag-text-place-button', _ = 1, E = 'vomit', D = '', C = 'vomit', T = (function() {
        function LitterEditorWindow() {}
        return LitterEditorWindow.prototype.open = function() {
            var t = ui.getWindow(o);
            if (t) debug('The Litter Editor window is already shown.'), t.bringToFront(); else {
                var T = 'Litter Editor (v'.concat('1.1', ')');
                T += ' [DEBUG]', ui.openWindow({
                    onClose: function() {
                        var t;
                        null === (t = ui.tool) || void 0 === t || t.cancel();
                    },
                    classification: o,
                    title: T,
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
                            height: r,
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
                            name: n,
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
                                    var i, r = ui.getWindow(o);
                                    if (r) {
                                        var g = r.findWidget(n), f = r.findWidget(u), v = r.findWidget(b), _ = r.findWidget(l), E = r.findWidget(m), D = r.findWidget(w), C = r.findWidget(p), T = r.findWidget(s), B = r.findWidget(c), I = r.findWidget(a), L = r.findWidget(d), R = r.findWidget(h), P = r.findWidget(y);
                                        !1 !== g.isPressed ? (g.isPressed = !1, null === (i = ui.tool) || void 0 === i || i.cancel()) : (g.isPressed = !0, 
                                        f.isPressed = !1, v.isPressed = !1, ui.activateTool({
                                            id: 'litter-editor-tool-select-litter',
                                            cursor: 'cross_hair',
                                            filter: [ 'entity' ],
                                            onDown: function(i) {
                                                var a;
                                                if (void 0 !== i.entityId) {
                                                    debug('Entity ID: '.concat(i.entityId));
                                                    var u = map.getEntity(i.entityId), d = u;
                                                    e = d, u && u.type === t ? ((function getLitter(t) {
                                                        var e = ui.getWindow(o);
                                                        if (e) {
                                                            var i = e.findWidget(l);
                                                            void 0 !== i.items && (i.selectedIndex = [ 'vomit', 'vomit_alt', 'empty_can', 'rubbish', 'burger_box', 'empty_cup', 'empty_box', 'empty_bottle', 'empty_bowl_red', 'empty_drink_carton', 'empty_juice_cup', 'empty_bowl_blue' ].indexOf(t));
                                                        }
                                                    })(d.litterType), r.findWidget(n).isPressed = !1, _.isDisabled = !1, E.isDisabled = !1, 
                                                    D.isDisabled = !1, I.isDisabled = !1, C.isDisabled = !1, T.isDisabled = !1, B.isDisabled = !1, 
                                                    L.isDisabled = !1, R.isDisabled = !1, P.isDisabled = !1, null === (a = ui.tool) || void 0 === a || a.cancel(), 
                                                    (function getLitterCoords(t) {
                                                        var e = ui.getWindow(o);
                                                        e && (e.findWidget(p).text = t.x.toString(), e.findWidget(s).text = t.y.toString(), 
                                                        e.findWidget(c).text = t.z.toString());
                                                    })(d), r.findWidget(x).viewport.moveTo(d)) : (ui.showError('WARNING:', 'This is not litter!'), 
                                                    r.findWidget(l).text = ' ');
                                                }
                                            }
                                        }));
                                    }
                                })('litter');
                            }
                        }, {
                            name: u,
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
                                    var i, r = ui.getWindow(o);
                                    if (r) {
                                        var g = r.findWidget(u), f = r.findWidget(n), v = r.findWidget(b), _ = r.findWidget(m), E = r.findWidget(w), D = r.findWidget(l), C = r.findWidget(p), T = r.findWidget(s), B = r.findWidget(c), I = r.findWidget(a), L = r.findWidget(d), R = r.findWidget(h), P = r.findWidget(y);
                                        !1 !== g.isPressed ? (g.isPressed = !1, null === (i = ui.tool) || void 0 === i || i.cancel()) : (g.isPressed = !0, 
                                        f.isPressed = !1, v.isPressed = !1, D.isDisabled = !0, _.isDisabled = !0, E.isDisabled = !0, 
                                        I.isDisabled = !0, C.isDisabled = !0, T.isDisabled = !0, B.isDisabled = !0, L.isDisabled = !0, 
                                        R.isDisabled = !0, P.isDisabled = !0, D.text = ' ', C.text = ' ', T.text = ' ', 
                                        B.text = ' ', ui.getWindow(o).findWidget(x).viewport.moveTo({
                                            x: -9e3,
                                            y: -9e3
                                        }), ui.activateTool({
                                            id: 'litter-editor-tool-remove-litter',
                                            cursor: 'bin_down',
                                            filter: [ 'entity' ],
                                            onDown: function(i) {
                                                if (void 0 !== i.entityId) {
                                                    debug('Entity ID: '.concat(i.entityId));
                                                    var o = map.getEntity(i.entityId), r = o;
                                                    e = r, o && o.type === t ? r.remove() : ui.showError('WARNING:', 'This is not litter!');
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
                                    var e, i = ui.getWindow(o);
                                    if (i) {
                                        var r = i.findWidget(b), g = i.findWidget(u), f = i.findWidget(n), v = i.findWidget(m), _ = i.findWidget(w), D = i.findWidget(l), C = i.findWidget(p), T = i.findWidget(s), B = i.findWidget(c), I = i.findWidget(a), L = i.findWidget(d), R = i.findWidget(h), P = i.findWidget(y);
                                        !1 !== r.isPressed ? (r.isPressed = !1, D.isDisabled = !0, I.isDisabled = !0, D.text = ' ', 
                                        null === (e = ui.tool) || void 0 === e || e.cancel()) : (r.isPressed = !0, f.isPressed = !1, 
                                        g.isPressed = !1, D.isDisabled = !1, v.isDisabled = !0, _.isDisabled = !0, I.isDisabled = !1, 
                                        C.isDisabled = !0, T.isDisabled = !0, B.isDisabled = !0, L.isDisabled = !0, R.isDisabled = !0, 
                                        P.isDisabled = !0, D.selectedIndex = 0, C.text = ' ', T.text = ' ', B.text = ' ', 
                                        ui.getWindow(o).findWidget(x).viewport.moveTo({
                                            x: -9e3,
                                            y: -9e3
                                        }), ui.activateTool({
                                            id: 'litter-editor-tool-create-litter',
                                            cursor: 'cross_hair',
                                            filter: [ 'terrain' ],
                                            onDown: function(e) {
                                                if (void 0 !== e.mapCoords) {
                                                    debug('Create litter: '.concat(e.mapCoords));
                                                    var i = e.mapCoords, o = getTileElements('surface', i)[0].element.baseZ;
                                                    map.createEntity(t, {
                                                        x: i.x,
                                                        y: i.y,
                                                        z: o
                                                    }).litterType = E;
                                                }
                                            }
                                        }));
                                    }
                                })('litter');
                            }
                        }, {
                            name: a,
                            type: 'label',
                            x: 20,
                            y: 110,
                            width: 75,
                            height: r,
                            text: 'Litter Type',
                            isDisabled: !0
                        }, {
                            name: l,
                            type: 'dropdown',
                            x: 90,
                            y: 110,
                            width: 125,
                            height: r,
                            items: [ 'Vomit', 'Vomit Alt', 'Empty Can', 'Rubbish', 'Burger Box', 'Empty Cup', 'Empty Box', 'Empty Bottle', 'Empty Bowl Red', 'Empty Drink Carton', 'Empty Juice Cup', 'Empty Bowl Blue' ],
                            selectedIndex: -1,
                            isDisabled: !0,
                            onChange: function(t) {
                                return (function setLitter(t) {
                                    var i = ui.getWindow(o).findWidget(b), r = [ 'vomit', 'vomit_alt', 'empty_can', 'rubbish', 'burger_box', 'empty_cup', 'empty_box', 'empty_bottle', 'empty_bowl_red', 'empty_drink_carton', 'empty_juice_cup', 'empty_bowl_blue' ];
                                    e && !i.isPressed ? e.litterType = r[t] : (E = r[t], debug('littertype set'));
                                })(t);
                            }
                        }, {
                            name: d,
                            type: 'label',
                            x: 20,
                            y: 135,
                            width: 125,
                            height: r,
                            text: 'X-Position',
                            isDisabled: !0
                        }, {
                            name: p,
                            type: 'spinner',
                            x: 90,
                            y: 135,
                            width: 70,
                            height: r,
                            text: ' ',
                            isDisabled: !0,
                            onIncrement: function() {
                                return increase(p, 'x');
                            },
                            onDecrement: function() {
                                return decrease(p, 'x');
                            }
                        }, {
                            name: h,
                            type: 'label',
                            x: 20,
                            y: 153,
                            width: 125,
                            height: r,
                            text: 'Y-Position',
                            isDisabled: !0
                        }, {
                            name: s,
                            type: 'spinner',
                            x: 90,
                            y: 153,
                            width: 70,
                            height: r,
                            text: ' ',
                            isDisabled: !0,
                            onIncrement: function() {
                                return increase(s, 'y');
                            },
                            onDecrement: function() {
                                return decrease(s, 'y');
                            }
                        }, {
                            name: y,
                            type: 'label',
                            x: 20,
                            y: 171,
                            width: 125,
                            height: r,
                            text: 'Z-Position',
                            isDisabled: !0
                        }, {
                            name: c,
                            type: 'spinner',
                            x: 90,
                            y: 171,
                            width: 70,
                            height: r,
                            text: ' ',
                            isDisabled: !0,
                            onIncrement: function() {
                                return increase(c, 'z');
                            },
                            onDecrement: function() {
                                return decrease(c, 'z');
                            }
                        }, {
                            name: w,
                            type: 'label',
                            x: 20,
                            y: 196,
                            width: 125,
                            height: r,
                            text: 'Multiplier',
                            isDisabled: !0
                        }, {
                            name: m,
                            type: 'dropdown',
                            x: 90,
                            y: 196,
                            width: 70,
                            height: r,
                            items: g,
                            selectedIndex: 0,
                            isDisabled: !0,
                            onChange: function(t) {
                                return (function setMultiplier(t) {
                                    0 === t && (_ = 1), 1 === t && (_ = 10), 2 === t && (_ = 100);
                                })(t);
                            }
                        }, {
                            name: x,
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
                            height: r,
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
                            height: r,
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
                            height: r,
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
                            height: r,
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
                            height: r,
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
                            height: r,
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
                            height: r,
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
                            height: r,
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
                            height: r,
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
                            height: r,
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
                            height: r,
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
                            height: r,
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
                            height: r,
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
                            height: r,
                            text: 'Total amount of litter: {WHITE}'.concat(map.getAllEntities('litter').length.toString())
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
                            height: r,
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
                            height: r,
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
                            height: r,
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
                            name: 'litter-editor-diag-text-label',
                            type: 'label',
                            x: 20,
                            y: 75,
                            width: 50,
                            height: r,
                            text: 'Text',
                            isDisabled: !0
                        }, {
                            type: 'button',
                            border: !0,
                            x: 70,
                            y: 72,
                            width: 70,
                            height: 16,
                            text: 'Set Text...',
                            onClick: function() {
                                ui.showTextInput({
                                    title: 'Diagonal Text',
                                    description: 'Enter the text to place (A-Z):',
                                    initialValue: D,
                                    callback: function(t) {
                                        D = t.toUpperCase();
                                        var e = ui.getWindow(o);
                                        e && (e.findWidget(f).text = D || '(none)');
                                    }
                                });
                            }
                        }, {
                            name: f,
                            type: 'label',
                            x: 145,
                            y: 75,
                            width: 100,
                            height: r,
                            text: '(none)'
                        }, {
                            name: 'litter-editor-diag-text-drop-down-label',
                            type: 'label',
                            x: 20,
                            y: 100,
                            width: 75,
                            height: r,
                            text: 'Litter Type',
                            isDisabled: !0
                        }, {
                            name: 'litter-editor-diag-text-drop-down',
                            type: 'dropdown',
                            x: 90,
                            y: 100,
                            width: 125,
                            height: r,
                            items: [ 'Vomit', 'Vomit Alt', 'Empty Can', 'Rubbish', 'Burger Box', 'Empty Cup', 'Empty Box', 'Empty Bottle', 'Empty Bowl Red', 'Empty Drink Carton', 'Empty Juice Cup', 'Empty Bowl Blue' ],
                            selectedIndex: 0,
                            onChange: function(t) {
                                return (function setDiagTextLitterType(t) {
                                    C = [ 'vomit', 'vomit_alt', 'empty_can', 'rubbish', 'burger_box', 'empty_cup', 'empty_box', 'empty_bottle', 'empty_bowl_red', 'empty_drink_carton', 'empty_juice_cup', 'empty_bowl_blue' ][t];
                                })(t);
                            }
                        }, {
                            name: v,
                            type: 'button',
                            border: !0,
                            x: 70,
                            y: 125,
                            width: 120,
                            height: 16,
                            text: 'Place Text',
                            isPressed: !1,
                            onClick: function() {
                                return (function onDiagTextPlace() {
                                    var t, e = ui.getWindow(o);
                                    if (e) {
                                        var r = e.findWidget(v);
                                        !1 !== r.isPressed ? (r.isPressed = !1, null === (t = ui.tool) || void 0 === t || t.cancel()) : (r.isPressed = !0, 
                                        ui.activateTool({
                                            id: 'litter-editor-diag-text-tool',
                                            cursor: 'cross_hair',
                                            filter: [ 'terrain' ],
                                            onDown: function(t) {
                                                var e;
                                                if (void 0 !== t.mapCoords) {
                                                    var r = t.mapCoords;
                                                    !(function placeDiagonalText(t, e, o, r) {
                                                        for (var n, l = ui.mainViewport.rotation, a = 0; a < o.length; a++) for (var u = o[a], d = null !== (n = i[u]) && void 0 !== n ? n : i[' '], h = 0; h < 7; h++) for (var y = 0; y < 5; y++) if (1 === d[h][y]) {
                                                            var p = void 0, s = void 0;
                                                            0 === l ? (p = t.x + 17 * a + 3 * y, s = t.y) : 1 === l ? (p = t.x, s = t.y + 17 * a + 3 * y) : 2 === l ? (p = t.x - 17 * a - 3 * y, 
                                                            s = t.y) : (p = t.x, s = t.y - 17 * a - 3 * y);
                                                            var c = e + 0 + 3 * (6 - h);
                                                            map.createEntity('litter', {
                                                                x: p,
                                                                y: s,
                                                                z: c
                                                            }).litterType = r;
                                                        }
                                                    })(r, getTileElements('surface', r)[0].element.baseZ, D, C);
                                                    var n = ui.getWindow(o);
                                                    n && (n.findWidget(v).isPressed = !1), null === (e = ui.tool) || void 0 === e || e.cancel();
                                                }
                                            }
                                        }));
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
                            height: r,
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
                            height: r,
                            textAlign: 'centred',
                            text: 'This LitterEditor is my first expierence with coding.\n\nSpecial thanks to:\nManticore_007, Basssiiie, Smitty\nand Gymnasiast.'
                        } ]
                    } ]
                });
            }
        }, LitterEditorWindow;
    })();
    function increase(t, i) {
        var r = ui.getWindow(o).findWidget(t);
        e[i] = e[i] + 1 * _, r.text = e[i].toString(), ui.getWindow(o).findWidget(x).viewport.moveTo(e);
    }
    function decrease(t, i) {
        var r = ui.getWindow(o).findWidget(t);
        e[i] = e[i] - 1 * _, r.text = e[i].toString(), ui.getWindow(o).findWidget(x).viewport.moveTo(e);
    }
    var B = new T;
    registerPlugin({
        name: 'Litter Editor',
        version: '1.1',
        authors: [ 'Enox' ],
        type: 'local',
        licence: 'MIT',
        targetApiVersion: 64,
        main: function main() {
            debug('Plugin started.'), t && 'none' == network.mode && ui.registerMenuItem('Litter Editor', (function() {
                return B.open();
            }));
        }
    });
})();
