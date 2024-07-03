(window.tawkJsonp = window.tawkJsonp || []).push([
    ["chunk-9294da6c"], {
        "1e0f": function(t, i, e) {
            "use strict";
            (function(t) {
                var o = e("2f62"),
                    n = e("f0b0"),
                    a = e("5a60"),
                    s = e("ff3f"),
                    r = e("87dd");

                function c(t) {
                    return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    })(t)
                }

                function h(t, i) {
                    var e = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(t);
                        i && (o = o.filter((function(i) {
                            return Object.getOwnPropertyDescriptor(t, i).enumerable
                        }))), e.push.apply(e, o)
                    }
                    return e
                }

                function l(t) {
                    for (var i = 1; i < arguments.length; i++) {
                        var e = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? h(Object(e), !0).forEach((function(i) {
                            m(t, i, e[i])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : h(Object(e)).forEach((function(i) {
                            Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(e, i))
                        }))
                    }
                    return t
                }

                function m(t, i, e) {
                    return (i = function(t) {
                        var i = function(t, i) {
                            if ("object" != c(t) || !t) return t;
                            var e = t[Symbol.toPrimitive];
                            if (void 0 !== e) {
                                var o = e.call(t, i || "default");
                                if ("object" != c(o)) return o;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return ("string" === i ? String : Number)(t)
                        }(t, "string");
                        return "symbol" == c(i) ? i : String(i)
                    }(i)) in t ? Object.defineProperty(t, i, {
                        value: e,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[i] = e, t
                }
                i.a = {
                    name: "MinimizeWidget",
                    components: {
                        IFrame: a.a,
                        TawkBadge: n.TawkBadge,
                        TawkButton: n.TawkButton,
                        MinContent: s.a
                    },
                    mixins: [r.a],
                    data: function() {
                        return {
                            cssLink: "".concat("https://embed.tawk.to/_s/v4/app/6625f366c87", "/css/min-widget.css"),
                            isLoaded: !1,
                            clickEvent: "touchend",
                            resizeWidth: 0,
                            key: n.Helper.generateUUID()
                        }
                    },
                    mounted: function() {
                        var i = this;
                        t.Tawk_Window.eventBus.$on("switchWidget", (function() {
                            i.key = n.Helper.generateUUID()
                        }))
                    },
                    computed: l(l({}, Object(o.c)({
                        chatWindowState: "session/chatWindowState",
                        isRight: "widget/isRight",
                        isBottom: "widget/isBottom",
                        isCenter: "widget/isCenter",
                        isRTL: "widget/isRTL",
                        isRoundWidget: "widget/isRoundWidget",
                        minDesktop: "widget/minDesktop",
                        minMobile: "widget/minMobile",
                        unreadMessageCount: "chat/unreadMessageCount",
                        mobileBrowserName: "browserData/mobileBrowserName",
                        pageStatus: "session/pageStatus",
                        zoomRatio: "widget/zoomRatio",
                        hasLiveChat: "widget/hasLiveChat",
                        hasChatStarted: "chat/hasChatStarted",
                        agentsCount: "chat/agentsCount",
                        isMobileLandscape: "widget/isMobileLandscape",
                        os: "browserData/os",
                        onClick: "widget/onClick"
                    })), {}, {
                        xOffset: function() {
                            return t.Tawk_Window.widgetSettings.xOffset()
                        },
                        yOffset: function() {
                            return t.Tawk_Window.widgetSettings.yOffset()
                        },
                        xOffsetMobile: function() {
                            return t.Tawk_Window.widgetSettings.xOffsetMobile()
                        },
                        yOffsetMobile: function() {
                            return t.Tawk_Window.widgetSettings.yOffsetMobile()
                        },
                        buttonStyles: function() {
                            var t = {};
                            return this.isRoundWidget || (this.mobileBrowserName ? (t.borderRadius = "3px", t.width = this.resizeWidth ? "".concat(this.resizeWidth, "px") : "".concat(this.minMobile.width, "px"), t.height = "".concat(this.minMobile.height, "px"), t.padding = "0 8px") : (t.borderRadius = "".concat(this.minDesktop.borderRadiusTop, "px ").concat(this.minDesktop.borderRadiusTop, "px\n\t\t\t\t\t").concat(this.minDesktop.borderRadiusBottom, "px ").concat(this.minDesktop.borderRadiusBottom, "px"), t.width = "".concat(this.minDesktop.width, "px"), t.height = "".concat(this.minDesktop.height, "px"), t.padding = "0 15px")), this.isBottom || this.isCenter ? t.bottom = "0" : t.top = "0", this.isRTL ? t.right = "0" : t.left = "0", t.position = "absolute", t.zIndex = "1000", t.border = "0", t
                        },
                        iFrameHeight: function() {
                            return this.mobileBrowserName ? this.isRoundWidget ? this.isMobileLandscape ? "safari" !== this.mobileBrowserName || "iphone" !== this.os.identity && "mac" !== this.os.identity ? "safari" === this.mobileBrowserName || "iphone" !== this.os.identity && "mac" !== this.os.identity ? "".concat((this.minMobile.height + 4) * this.zoomRatio, "px") : "".concat((this.minMobile.height + 4) * (this.zoomRatio / 1.7), "px") : "".concat((this.minMobile.height + 4) * this.zoomRatio * 1.2, "px") : "".concat((this.minMobile.height + 4) * this.zoomRatio, "px") : "".concat((this.minMobile.height + 6) * this.zoomRatio, "px") : this.isRoundWidget ? "".concat(this.minDesktop.height, "px") : "".concat(this.minDesktop.height + 4, "px")
                        },
                        iFrameWidth: function() {
                            if (this.mobileBrowserName) {
                                var t = this.resizeWidth || this.minMobile.width;
                                return !this.isMobileLandscape || "iphone" !== this.os.identity && "mac" !== this.os.identity ? "".concat((t + 7) * this.zoomRatio, "px") : "safari" === this.mobileBrowserName ? "".concat((t + 7) * (1.2 * this.zoomRatio), "px") : "".concat((t + 7) * (this.zoomRatio / 1.7), "px")
                            }
                            return "".concat(this.minDesktop.width + 4, "px")
                        },
                        styleObject: function() {
                            var t, i, e = this.mobileBrowserName ? this.minMobile : this.minDesktop,
                                o = {
                                    "position:": "fixed !important;",
                                    "z-index:": "1000001 !important;",
                                    "width:": "".concat(this.iFrameWidth, " !important;"),
                                    "height:": "".concat(this.iFrameHeight, " !important;"),
                                    "min-width:": "".concat(this.iFrameWidth, " !important;"),
                                    "min-height:": "".concat(this.iFrameHeight, " !important;"),
                                    "max-width:": "".concat(this.iFrameWidth, " !important;"),
                                    "max-height:": "".concat(this.iFrameHeight, " !important;")
                                };
                            this.mobileBrowserName ? this.isMobileLandscape ? "safari" === this.mobileBrowserName ? (t = this.xOffsetMobile, i = this.yOffsetMobile) : (t = this.xOffsetMobile / 1.7, i = this.yOffsetMobile / 1.7) : (t = this.xOffsetMobile, i = this.yOffsetMobile) : (t = this.xOffset, i = this.yOffset);
                            var n = t * this.zoomRatio;
                            if (this.isRight ? o["right:"] = "".concat(n, "px !important;") : o["left:"] = "".concat(n, "px !important;"), this.isCenter) {
                                if (o["top:"] = "calc((50% - ".concat(.5 * e.height, "px) + ").concat(i, "px) !important;"), !this.isRoundWidget) {
                                    var a = .5 * e.height - .5 * e.width + t,
                                        s = "49% !important",
                                        r = "rotate(".concat(this.isRight ? "-90deg" : "90deg", ") !important");
                                    this.mobileBrowserName ? (s = "0 0 !important", this.isRight ? (o["left:"] = "calc(100% - ".concat(this.iFrameHeight, " - ").concat(this.xOffsetMobile * this.zoomRatio, "px) !important;"), r = "rotate(-90deg) translateX(-50%) !important") : (o["right:"] = "85% !important;", o["left:"] = "calc(".concat(this.iFrameHeight, " + ").concat(this.xOffsetMobile * this.zoomRatio, "px) !important;"), r = "rotate(90deg) translateX(-50%) !important")) : this.isRight ? o["right:"] = "".concat(a, "px !important;") : o["left:"] = "".concat(a, "px !important;"), o["transform-origin:"] = s, o["-webkit-transform:"] = "".concat(r, ";"), o["-ms-transform:"] = "".concat(r, ";"), o["transform:"] = "".concat(r, ";")
                                }
                            } else this.isBottom ? o["bottom:"] = "".concat(i * this.zoomRatio, "px !important;") : o["top:"] = "".concat(i * this.zoomRatio, "px !important;");
                            return "max" !== this.chatWindowState || this.isRoundWidget && !this.mobileBrowserName ? this.mobileBrowserName ? o["display:"] = "block !important;" : setTimeout((function() {
                                o["display:"] = "block !important;"
                            }), 250) : o["display:"] = "none !important;", l(l({}, this.genericStyles), o)
                        },
                        badgePosition: function() {
                            var t, i, e = this.mobileBrowserName ? this.minMobile : this.minDesktop,
                                o = {};
                            return this.mobileBrowserName && this.resizeWidth && (e.width = this.resizeWidth + 5), this.isRoundWidget ? (t = "".concat(e.width - 20, "px"), i = "".concat(e.height - 20, "px")) : (t = "".concat(e.width - 16, "px"), i = "".concat(e.height - 16, "px")), this.isBottom || this.isCenter ? (o.left = t, o.bottom = i, o.right = "auto", o.top = "auto") : (o.left = t, o.top = "0px", o.right = "auto", o.bottom = "auto"), o
                        },
                        isLiveChatFeatureEnabled: function() {
                            return !!(this.hasLiveChat || this.hasChatStarted && this.agentsCount > 0)
                        },
                        hideMinimizeWidget: function() {
                            return "slide" === this.onClick && "max" === this.chatWindowState
                        }
                    }),
                    watch: {
                        zoomRatio: function() {
                            this.mobileBrowserName && this.isLoaded && this.scaleContent()
                        },
                        isMobileLandscape: function() {
                            this.mobileBrowserName && this.scaleContent()
                        }
                    },
                    methods: l(l({}, Object(o.b)({
                        toggleWidget: "session/toggleWidget"
                    })), {}, {
                        loaded: function() {
                            var t = this;
                            this.isLoaded = !0, this.$nextTick((function() {
                                t.contentChange()
                            })), this.mobileBrowserName && this.scaleContent()
                        },
                        scaleContent: function() {
                            var t, i = this.isRTL ? "right" : "left",
                                e = "scale(".concat(this.zoomRatio, ")");
                            t = this.isBottom || this.isCenter ? "bottom" : "top", this.mobileBrowserName && this.isMobileLandscape && ("safari" !== this.mobileBrowserName || "iphone" !== this.os.identity && "mac" !== this.os.identity ? "safari" === this.mobileBrowserName || "iphone" !== this.os.identity && "mac" !== this.os.identity || (e = "scale(".concat(this.zoomRatio / 1.7, ")")) : e = "scale(".concat(1.2 * this.zoomRatio, ")"));
                            var o = "-moz-transform: ".concat(e, ";\n\t\t\t\t\t\t\t-webkit-transform: ").concat(e, ";\n\t\t\t\t\t\t\t-o-transform: ").concat(e, ";\n\t\t\t\t\t\t\t-ms-transform: ").concat(e, ";\n\t\t\t\t\t\t\ttransform: ").concat(e, ";"),
                                n = "-moz-transform-origin: ".concat(t, " ").concat(i, ";\n\t\t\t\t\t\t\t\t-webkit-transform-origin: ").concat(t, "  ").concat(i, ";\n\t\t\t\t\t\t\t\t-o-transform-orgin: ").concat(t, "  ").concat(i, ";\n\t\t\t\t\t\t\t\t-ms-transform-origin: ").concat(t, "  ").concat(i, ";\n\t\t\t\t\t\t\t\ttransform-origin: ").concat(t, "  ").concat(i);
                            this.$refs.container.style.cssText += o + n
                        },
                        contentChange: function() {
                            var t = this;
                            this.mobileBrowserName && !this.isRoundWidget && setTimeout((function() {
                                if (t.$refs && t.$refs["min-content"] && t.$refs["min-content"].$refs) {
                                    var i = t.$refs["min-content"].$refs["content-icon"],
                                        e = t.$refs["min-content"].$refs["content-text"];
                                    if (i && e) {
                                        e.className = e.className.replace(/tawk-text-truncate/g, "").trim();
                                        var o = i.clientWidth + e.clientWidth + 8;
                                        o && o + 16 > t.minMobile.width ? t.resizeWidth = o + 16 : t.resizeWidth = 0
                                    }
                                    t.resizeWidth > screen.width && (t.resizeWidth = screen.width - 2 * t.xOffsetMobile, e.className += " tawk-text-truncate")
                                }
                            }), 1e3 / 66)
                        }
                    })
                }
            }).call(this, e("c8ba"))
        },
        e0ca: function(t, i, e) {
            "use strict";
            e.r(i);
            var o = e("1e0f").a,
                n = e("2877"),
                a = Object(n.a)(o, (function() {
                    var t = this,
                        i = t._self._c;
                    return i("i-frame", {
                        key: t.key,
                        ref: "iframe",
                        attrs: {
                            width: t.iFrameWidth,
                            height: t.iFrameHeight,
                            cssLink: t.cssLink,
                            styleObject: t.styleObject
                        }
                    }, [i("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.isLoaded && !t.hideMinimizeWidget,
                            expression: "isLoaded && !hideMinimizeWidget"
                        }],
                        ref: "container",
                        staticClass: "tawk-min-container"
                    }, [t.unreadMessageCount > 0 && "offline" !== t.pageStatus && "min" === t.chatWindowState && t.isLiveChatFeatureEnabled ? i("tawk-badge", {
                        staticClass: "tawk-min-badge",
                        style: t.badgePosition,
                        attrs: {
                            count: t.unreadMessageCount
                        }
                    }) : t._e(), i("tawk-button", {
                        staticClass: "tawk-custom-color tawk-custom-border-color",
                        style: t.buttonStyles,
                        attrs: {
                            isCircle: t.isRoundWidget,
                            size: t.isRoundWidget ? "large" : "",
                            tabindex: "0"
                        },
                        on: {
                            click: t.toggleWidget
                        }
                    }, [i("min-content", {
                        ref: "min-content",
                        attrs: {
                            minDesktop: t.minDesktop,
                            isRoundWidget: t.isRoundWidget
                        },
                        on: {
                            contentChange: t.contentChange
                        }
                    })], 1)], 1)])
                }), [], !1, null, null, null);
            i.default = a.exports
        },
        ff3f: function(t, i, e) {
            "use strict";
            var o = e("2f62");

            function n(t) {
                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function a(t, i) {
                var e = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    i && (o = o.filter((function(i) {
                        return Object.getOwnPropertyDescriptor(t, i).enumerable
                    }))), e.push.apply(e, o)
                }
                return e
            }

            function s(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var e = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? a(Object(e), !0).forEach((function(i) {
                        r(t, i, e[i])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : a(Object(e)).forEach((function(i) {
                        Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(e, i))
                    }))
                }
                return t
            }

            function r(t, i, e) {
                return (i = function(t) {
                    var i = function(t, i) {
                        if ("object" != n(t) || !t) return t;
                        var e = t[Symbol.toPrimitive];
                        if (void 0 !== e) {
                            var o = e.call(t, i || "default");
                            if ("object" != n(o)) return o;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === i ? String : Number)(t)
                    }(t, "string");
                    return "symbol" == n(i) ? i : String(i)
                }(i)) in t ? Object.defineProperty(t, i, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[i] = e, t
            }
            var c = {
                    name: "min-content",
                    components: {
                        TawkImage: e("f0b0").TawkImage
                    },
                    props: {
                        minDesktop: {
                            type: Object,
                            required: !0
                        }
                    },
                    computed: s(s({}, Object(o.c)({
                        activeProfiles: "chat/activeProfiles",
                        chatWindowState: "session/chatWindowState",
                        pageStatus: "session/pageStatus",
                        states: "widget/states",
                        isRoundWidget: "widget/isRoundWidget",
                        hasLiveChat: "widget/hasLiveChat",
                        mobileBrowserName: "browserData/mobileBrowserName",
                        hasChatStarted: "chat/hasChatStarted",
                        agentsCount: "chat/agentsCount"
                    })), {}, {
                        firstActiveProfile: function() {
                            return this.activeProfiles.length ? this.activeProfiles[0] : ""
                        },
                        minimizeText: function() {
                            if (this.mobileBrowserName) return "offline" === this.pageStatus ? this.$i18n("form", "message") : this.$i18n("chat", "chat_text");
                            var t = this.states[this.pageStatus];
                            return t ? t.minimizedText : ""
                        },
                        isLiveChatFeatureEnabled: function() {
                            return !!(this.hasLiveChat || this.hasChatStarted && this.agentsCount > 0)
                        }
                    }),
                    watch: {
                        minimizeText: function() {
                            this.$emit("contentChange")
                        },
                        firstActiveProfile: function() {
                            this.$emit("contentChange")
                        }
                    },
                    mounted: function() {
                        this.$emit("contentChange")
                    }
                },
                h = e("2877"),
                l = Object(h.a)(c, (function() {
                    var t = this,
                        i = t._self._c;
                    return i("div", [t.isRoundWidget ? [t.firstActiveProfile ? i("tawk-image", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: "min" === t.chatWindowState && t.isLiveChatFeatureEnabled,
                            expression: "chatWindowState === 'min' &&\n\t\t\t\tisLiveChatFeatureEnabled"
                        }],
                        staticClass: "tawk-min-chat-icon",
                        attrs: {
                            src: t.firstActiveProfile.profileImage,
                            alt: "".concat(t.$i18n("chat", "agent_profile_image"))
                        }
                    }) : t._e(), i("div", [t.firstActiveProfile || "min" !== t.chatWindowState ? "max" === t.chatWindowState ? i("svg", {
                        key: "close",
                        staticClass: "tawk-min-chat-icon",
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 800 800",
                            height: "25px",
                            width: "25px",
                            role: "img",
                            alt: "".concat(t.$i18n("chat", "close_icon"))
                        }
                    }, [i("path", {
                        attrs: {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M466.24042,400.4053l272.927-275.99463c6.94586-8.76452,11.13092-20.00501,11.13092-32.20959 s-4.18506-23.42317-11.21857-32.29724l0.08765,0.10955c-8.76453-6.94588-20.005-11.13094-32.20959-11.13094 c-12.20453,0-23.42316,4.18505-32.29724,11.21858l0.10956-0.08765L401.84311,336.008L125.84851,60.0134 c-8.76452-6.94588-20.00501-11.13094-32.2096-11.13094s-23.42316,4.18506-32.29724,11.21858l0.10955-0.08765 C54.50535,68.77792,50.32029,80.01842,50.32029,92.223s4.18505,23.42317,11.21858,32.29724l-0.08764-0.10956l275.9946,275.99463 L61.45122,673.33234c-6.94588,8.76453-11.13094,20.005-11.13094,32.20959s4.18506,23.42316,11.21858,32.29724l-0.08765-0.1095 c8.19483,7.64703,19.2162,12.33606,31.33314,12.33606c0.83263,0,1.68717-0.02191,2.49789-0.06573h-0.10957 c0.54779,0.02191,1.20512,0.04382,1.86246,0.04382c11.32813,0,21.5388-4.71094,28.79144-12.29224l0.0219-0.02191 l275.99463-272.92703l272.92703,272.92703c7.2746,7.58136,17.48523,12.31415,28.81335,12.31415 c0.65735,0,1.29279-0.02191,1.95013-0.04382h-0.08765c0.72308,0.04382,1.55573,0.06573,2.38831,0.06573 c12.11694,0,23.16022-4.68903,31.37695-12.35797l-0.02185,0.02191c6.94586-8.76447,11.13092-20.005,11.13092-32.20959 c0-12.20453-4.18506-23.42316-11.21857-32.29724l0.08765,0.10956L466.24042,400.4053z"
                        }
                    })]) : t._e() : i("svg", {
                        key: "chat",
                        staticClass: "tawk-min-chat-icon",
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 800 800",
                            height: "32px",
                            width: "32px",
                            role: "img",
                            alt: "".concat(t.$i18n("chat", "chat_icon"))
                        }
                    }, [i("path", {
                        attrs: {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M400 26.2c-193.3 0-350 156.7-350 350 0 136.2 77.9 254.3 191.5 312.1 15.4 8.1 31.4 15.1 48.1 20.8l-16.5 63.5c-2 7.8 5.4 14.7 13 12.1l229.8-77.6c14.6-5.3 28.8-11.6 42.4-18.7C672 630.6 750 512.5 750 376.2c0-193.3-156.7-350-350-350zm211.1 510.7c-10.8 26.5-41.9 77.2-121.5 77.2-79.9 0-110.9-51-121.6-77.4-2.8-6.8 5-13.4 13.8-11.8 76.2 13.7 147.7 13 215.3.3 8.9-1.8 16.8 4.8 14 11.7z"
                        }
                    })])])] : [i("div", {
                        ref: "full-content",
                        staticClass: "tawk-text-left tawk-flex tawk-flex-middle"
                    }, [t.mobileBrowserName ? [i("div", {
                        ref: "content-icon"
                    }, [t.firstActiveProfile ? i("div", {
                        staticClass: "tawk-flex tawk-flex-middle tawk-flex-none"
                    }, [t.firstActiveProfile.profileImage && t.firstActiveProfile.profileImage.length > 0 ? i("tawk-image", {
                        staticClass: "tawk-min-agent-image tawk-flex-none",
                        attrs: {
                            src: t.firstActiveProfile.profileImage,
                            alt: "".concat(t.$i18n("chat", "agent_profile_image"))
                        }
                    }) : t._e()], 1) : i("svg", {
                        key: "chat",
                        staticClass: "tawk-min-chat-icon",
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 800 800",
                            height: "22px",
                            width: "22px",
                            role: "img",
                            alt: "".concat(t.$i18n("chat", "chat_icon"))
                        }
                    }, [i("path", {
                        attrs: {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M400 26.2c-193.3 0-350 156.7-350 350 0 136.2 77.9 254.3 191.5 312.1 15.4 8.1 31.4 15.1 48.1 20.8l-16.5 63.5c-2 7.8 5.4 14.7 13 12.1l229.8-77.6c14.6-5.3 28.8-11.6 42.4-18.7C672 630.6 750 512.5 750 376.2c0-193.3-156.7-350-350-350zm211.1 510.7c-10.8 26.5-41.9 77.2-121.5 77.2-79.9 0-110.9-51-121.6-77.4-2.8-6.8 5-13.4 13.8-11.8 76.2 13.7 147.7 13 215.3.3 8.9-1.8 16.8 4.8 14 11.7z"
                        }
                    })])]), i("span", {
                        ref: "content-text",
                        staticClass: "tawk-text-bold-3 tawk-margin-xsmall-left tawk-text-truncate",
                        staticStyle: {
                            color: "inherit",
                            "white-space": "nowrap"
                        }
                    }, [t._v(" " + t._s(t.minimizeText) + " ")])] : [i("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: "min" === t.chatWindowState && !t.firstActiveProfile,
                            expression: "chatWindowState === 'min' &&\n\t\t\t\t\t\t!firstActiveProfile"
                        }],
                        staticClass: "tawk-text-truncate",
                        style: {
                            width: "100%",
                            flex: "0 0 auto"
                        }
                    }, [t._v(" " + t._s(t.minimizeText) + " ")]), i("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: "min" === t.chatWindowState && t.firstActiveProfile && t.isLiveChatFeatureEnabled,
                            expression: "chatWindowState === 'min' &&\n\t\t\t\t\tfirstActiveProfile &&\n\t\t\t\t\tisLiveChatFeatureEnabled"
                        }],
                        staticClass: "tawk-flex tawk-flex-middle",
                        style: {
                            width: "100%"
                        }
                    }, [t.firstActiveProfile.profileImage && t.firstActiveProfile.profileImage.length > 0 ? i("tawk-image", {
                        staticClass: "tawk-min-agent-image tawk-flex-none",
                        attrs: {
                            src: t.firstActiveProfile.profileImage,
                            alt: "".concat(t.$i18n("chat", "agent_profile_image"))
                        }
                    }) : t._e(), i("div", {
                        staticClass: "tawk-margin-xsmall-left",
                        style: {
                            overflow: "hidden",
                            width: "100%"
                        }
                    }, [t.firstActiveProfile.displayName && t.firstActiveProfile.displayName.length > 0 ? i("p", {
                        staticClass: "tawk-min-agent-label tawk-text-bold tawk-text-truncate"
                    }, [t._v(" " + t._s(t.firstActiveProfile.displayName) + " ")]) : t._e(), t.firstActiveProfile.profileTitle && t.firstActiveProfile.profileTitle.length > 0 ? i("p", {
                        staticClass: "tawk-min-agent-label tawk-text-regular-2 tawk-text-truncate"
                    }, [t._v(" " + t._s(t.firstActiveProfile.profileTitle) + " ")]) : t._e()])], 1)]], 2)]], 2)
                }), [], !1, null, null, null);
            i.a = l.exports
        }
    }
]);