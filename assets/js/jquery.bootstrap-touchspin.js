! function(t) {
    "use strict";

    function o(t, o) {
        return t + ".touchspin_" + o
    }

    function n(n, s) {
        return t.map(n, function(t) {
            return o(t, s)
        })
    }
    var s = 0;
    t.fn.TouchSpin = function(o) {
        if ("destroy" !== o) {
            var e = {
                    min: 0,
                    max: 100,
                    initval: "",
                    replacementval: "",
                    step: 1,
                    decimals: 0,
                    stepinterval: 100,
                    forcestepdivisibility: "round",
                    stepintervaldelay: 500,
                    verticalbuttons: !1,
                    verticalupclass: "glyphicon glyphicon-chevron-up",
                    verticaldownclass: "glyphicon glyphicon-chevron-down",
                    prefix: "",
                    postfix: "",
                    prefix_extraclass: "",
                    postfix_extraclass: "",
                    booster: !0,
                    boostat: 10,
                    maxboostedstep: !1,
                    mousewheel: !0,
                    buttondown_class: "btn btn-default",
                    buttonup_class: "btn btn-default",
                    buttondown_txt: "-",
                    buttonup_txt: "+"
                },
                a = {
                    min: "min",
                    max: "max",
                    initval: "init-val",
                    replacementval: "replacement-val",
                    step: "step",
                    decimals: "decimals",
                    stepinterval: "step-interval",
                    verticalbuttons: "vertical-buttons",
                    verticalupclass: "vertical-up-class",
                    verticaldownclass: "vertical-down-class",
                    forcestepdivisibility: "force-step-divisibility",
                    stepintervaldelay: "step-interval-delay",
                    prefix: "prefix",
                    postfix: "postfix",
                    prefix_extraclass: "prefix-extra-class",
                    postfix_extraclass: "postfix-extra-class",
                    booster: "booster",
                    boostat: "boostat",
                    maxboostedstep: "max-boosted-step",
                    mousewheel: "mouse-wheel",
                    buttondown_class: "button-down-class",
                    buttonup_class: "button-up-class",
                    buttondown_txt: "button-down-txt",
                    buttonup_txt: "button-up-txt"
                };
            return this.each(function() {
                function i() {
                    "" !== F.initval && "" === B.val() && B.val(F.initval)
                }

                function u(t) {
                    c(t), g();
                    var o = N.input.val();
                    "" !== o && (o = Number(N.input.val()), N.input.val(o.toFixed(F.decimals)))
                }

                function p() {
                    F = t.extend({}, e, E, r(), o)
                }

                function r() {
                    var o = {};
                    return t.each(a, function(t, n) {
                        var s = "bts-" + n;
                        B.is("[data-" + s + "]") && (o[t] = B.data(s))
                    }), o
                }

                function c(o) {
                    F = t.extend({}, F, o)
                }

                function l() {
                    var t = B.val(),
                        o = B.parent();
                    "" !== t && (t = Number(t).toFixed(F.decimals)), B.data("initvalue", t).val(t), B.addClass("form-control"), o.hasClass("input-group") ? d(o) : f()
                }

                function d(o) {
                    o.addClass("bootstrap-touchspin");
                    var n, s, e = B.prev(),
                        a = B.next(),
                        i = '<span class="input-group-addon bootstrap-touchspin-prefix">' + F.prefix + "</span>",
                        u = '<span class="input-group-addon bootstrap-touchspin-postfix">' + F.postfix + "</span>";
                    e.hasClass("input-group-btn") ? (n = '<button class="' + F.buttondown_class + ' bootstrap-touchspin-down" type="button">' + F.buttondown_txt + "</button>", e.append(n)) : (n = '<span class="input-group-btn"><button class="' + F.buttondown_class + ' bootstrap-touchspin-down" type="button">' + F.buttondown_txt + "</button></span>", t(n).insertBefore(B)), a.hasClass("input-group-btn") ? (s = '<button class="' + F.buttonup_class + ' bootstrap-touchspin-up" type="button">' + F.buttonup_txt + "</button>", a.prepend(s)) : (s = '<span class="input-group-btn"><button class="' + F.buttonup_class + ' bootstrap-touchspin-up" type="button">' + F.buttonup_txt + "</button></span>", t(s).insertAfter(B)), t(i).insertBefore(B), t(u).insertAfter(B), M = o
                }

                function f() {
                    var o;
                    o = F.verticalbuttons ? '<div class="input-group bootstrap-touchspin"><span class="input-group-addon bootstrap-touchspin-prefix">' + F.prefix + '</span><span class="input-group-addon bootstrap-touchspin-postfix">' + F.postfix + '</span><span class="input-group-btn-vertical"><button class="' + F.buttondown_class + ' bootstrap-touchspin-up" type="button"><i class="' + F.verticalupclass + '"></i></button><button class="' + F.buttonup_class + ' bootstrap-touchspin-down" type="button"><i class="' + F.verticaldownclass + '"></i></button></span></div>' : '<div class="input-group bootstrap-touchspin"><span class="input-group-btn"><button class="' + F.buttondown_class + ' bootstrap-touchspin-down" type="button">' + F.buttondown_txt + '</button></span><span class="input-group-addon bootstrap-touchspin-prefix">' + F.prefix + '</span><span class="input-group-addon bootstrap-touchspin-postfix">' + F.postfix + '</span><span class="input-group-btn"><button class="' + F.buttonup_class + ' bootstrap-touchspin-up" type="button">' + F.buttonup_txt + "</button></span></div>", M = t(o).insertBefore(B), t(".bootstrap-touchspin-prefix", M).after(B), B.hasClass("input-sm") ? M.addClass("input-group-sm") : B.hasClass("input-lg") && M.addClass("input-group-lg")
                }

                function b() {
                    N = {
                        down: t(".bootstrap-touchspin-down", M),
                        up: t(".bootstrap-touchspin-up", M),
                        input: t("input", M),
                        prefix: t(".bootstrap-touchspin-prefix", M).addClass(F.prefix_extraclass),
                        postfix: t(".bootstrap-touchspin-postfix", M).addClass(F.postfix_extraclass)
                    }
                }

                function h() {
                    "" === F.prefix && N.prefix.hide(), "" === F.postfix && N.postfix.hide()
                }

                function v() {
                    B.on("keydown", function(t) {
                        var o = t.keyCode || t.which;
                        38 === o ? ("up" !== A && (y(), D()), t.preventDefault()) : 40 === o && ("down" !== A && (_(), C()), t.preventDefault())
                    }), B.on("keyup", function(t) {
                        var o = t.keyCode || t.which;
                        38 === o ? k() : 40 === o && k()
                    }), B.on("blur", function() {
                        g()
                    }), N.down.on("keydown", function(t) {
                        var o = t.keyCode || t.which;
                        32 !== o && 13 !== o || ("down" !== A && (_(), C()), t.preventDefault())
                    }), N.down.on("keyup", function(t) {
                        var o = t.keyCode || t.which;
                        32 !== o && 13 !== o || k()
                    }), N.up.on("keydown", function(t) {
                        var o = t.keyCode || t.which;
                        32 !== o && 13 !== o || ("up" !== A && (y(), D()), t.preventDefault())
                    }), N.up.on("keyup", function(t) {
                        var o = t.keyCode || t.which;
                        32 !== o && 13 !== o || k()
                    }), N.down.on("mousedown.touchspin", function(t) {
                        N.down.off("touchstart.touchspin"), B.is(":disabled") || (_(), C(), t.preventDefault(), t.stopPropagation())
                    }), N.down.on("touchstart.touchspin", function(t) {
                        N.down.off("mousedown.touchspin"), B.is(":disabled") || (_(), C(), t.preventDefault(), t.stopPropagation())
                    }), N.up.on("mousedown.touchspin", function(t) {
                        N.up.off("touchstart.touchspin"), B.is(":disabled") || (y(), D(), t.preventDefault(), t.stopPropagation())
                    }), N.up.on("touchstart.touchspin", function(t) {
                        N.up.off("mousedown.touchspin"), B.is(":disabled") || (y(), D(), t.preventDefault(), t.stopPropagation())
                    }), N.up.on("mouseout touchleave touchend touchcancel", function(t) {
                        A && (t.stopPropagation(), k())
                    }), N.down.on("mouseout touchleave touchend touchcancel", function(t) {
                        A && (t.stopPropagation(), k())
                    }), N.down.on("mousemove touchmove", function(t) {
                        A && (t.stopPropagation(), t.preventDefault())
                    }), N.up.on("mousemove touchmove", function(t) {
                        A && (t.stopPropagation(), t.preventDefault())
                    }), t(document).on(n(["mouseup", "touchend", "touchcancel"], s).join(" "), function(t) {
                        A && (t.preventDefault(), k())
                    }), t(document).on(n(["mousemove", "touchmove", "scroll", "scrollstart"], s).join(" "), function(t) {
                        A && (t.preventDefault(), k())
                    }), B.on("mousewheel DOMMouseScroll", function(t) {
                        if (F.mousewheel && B.is(":focus")) {
                            var o = t.originalEvent.wheelDelta || -t.originalEvent.deltaY || -t.originalEvent.detail;
                            t.stopPropagation(), t.preventDefault(), o < 0 ? _() : y()
                        }
                    })
                }

                function m() {
                    B.on("touchspin.uponce", function() {
                        k(), y()
                    }), B.on("touchspin.downonce", function() {
                        k(), _()
                    }), B.on("touchspin.startupspin", function() {
                        D()
                    }), B.on("touchspin.startdownspin", function() {
                        C()
                    }), B.on("touchspin.stopspin", function() {
                        k()
                    }), B.on("touchspin.updatesettings", function(t, o) {
                        u(o)
                    })
                }

                function x(t) {
                    switch (F.forcestepdivisibility) {
                        case "round":
                            return (Math.round(t / F.step) * F.step).toFixed(F.decimals);
                        case "floor":
                            return (Math.floor(t / F.step) * F.step).toFixed(F.decimals);
                        case "ceil":
                            return (Math.ceil(t / F.step) * F.step).toFixed(F.decimals);
                        default:
                            return t
                    }
                }

                function g() {
                    var t, o, n;
                    "" !== (t = B.val()) ? F.decimals > 0 && "." === t || (o = parseFloat(t), isNaN(o) && (o = "" !== F.replacementval ? F.replacementval : 0), n = o, o.toString() !== t && (n = o), o < F.min && (n = F.min), o > F.max && (n = F.max), n = x(n), Number(t).toString() !== n.toString() && (B.val(n), B.trigger("change"))): "" !== F.replacementval && (B.val(F.replacementval), B.trigger("change"))
                }

                function w() {
                    if (F.booster) {
                        var t = Math.pow(2, Math.floor(z / F.boostat)) * F.step;
                        return F.maxboostedstep && t > F.maxboostedstep && (t = F.maxboostedstep, P = Math.round(P / t) * t), Math.max(F.step, t)
                    }
                    return F.step
                }

                function y() {
                    g(), P = parseFloat(N.input.val()), isNaN(P) && (P = 0);
                    var t = P,
                        o = w();
                    (P += o) > F.max && (P = F.max, B.trigger("touchspin.on.max"), k()), N.input.val(Number(P).toFixed(F.decimals)), t !== P && B.trigger("change")
                }

                function _() {
                    g(), P = parseFloat(N.input.val()), isNaN(P) && (P = 0);
                    var t = P,
                        o = w();
                    (P -= o) < F.min && (P = F.min, B.trigger("touchspin.on.min"), k()), N.input.val(P.toFixed(F.decimals)), t !== P && B.trigger("change")
                }

                function C() {
                    k(), z = 0, A = "down", B.trigger("touchspin.on.startspin"), B.trigger("touchspin.on.startdownspin"), j = setTimeout(function() {
                        S = setInterval(function() {
                            z++, _()
                        }, F.stepinterval)
                    }, F.stepintervaldelay)
                }

                function D() {
                    k(), z = 0, A = "up", B.trigger("touchspin.on.startspin"), B.trigger("touchspin.on.startupspin"), I = setTimeout(function() {
                        T = setInterval(function() {
                            z++, y()
                        }, F.stepinterval)
                    }, F.stepintervaldelay)
                }

                function k() {
                    switch (clearTimeout(j), clearTimeout(I), clearInterval(S), clearInterval(T), A) {
                        case "up":
                            B.trigger("touchspin.on.stopupspin"), B.trigger("touchspin.on.stopspin");
                            break;
                        case "down":
                            B.trigger("touchspin.on.stopdownspin"), B.trigger("touchspin.on.stopspin")
                    }
                    z = 0, A = !1
                }
                var F, M, N, P, S, T, j, I, B = t(this),
                    E = B.data(),
                    z = 0,
                    A = !1;
                B.data("alreadyinitialized") || (B.data("alreadyinitialized", !0), s += 1, B.data("spinnerid", s), B.is("input") ? (p(), i(), g(), l(), b(), h(), v(), m(), N.input.css("display", "block")) : console.log("Must be an input."))
            })
        }
        this.each(function() {
            var o = t(this).data();
            t(document).off(n(["mouseup", "touchend", "touchcancel", "mousemove", "touchmove", "scroll", "scrollstart"], o.spinnerid).join(" "))
        })
    }
}(jQuery);