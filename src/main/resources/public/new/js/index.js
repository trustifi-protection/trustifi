!function(e) {
    function t(t) {
        for (var n, o, c = t[0], s = t[1], l = t[2], d = 0, p = []; d < c.length; d++)
            o = c[d],
            Object.prototype.hasOwnProperty.call(a, o) && a[o] && p.push(a[o][0]),
            a[o] = 0;
        for (n in s)
            Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
        for (u && u(t); p.length; )
            p.shift()();
        return i.push.apply(i, l || []),
        r()
    }
    function r() {
        for (var e, t = 0; t < i.length; t++) {
            for (var r = i[t], n = !0, c = 1; c < r.length; c++) {
                var s = r[c];
                0 !== a[s] && (n = !1)
            }
            n && (i.splice(t--, 1),
            e = o(o.s = r[0]))
        }
        return e
    }
    var n = {}
      , a = {
        9: 0
    }
      , i = [];
    function o(t) {
        if (n[t])
            return n[t].exports;
        var r = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(r.exports, r, r.exports, o),
        r.l = !0,
        r.exports
    }
    o.m = e,
    o.c = n,
    o.d = function(e, t, r) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }
    ,
    o.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    o.t = function(e, t) {
        if (1 & t && (e = o(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var r = Object.create(null);
        if (o.r(r),
        Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var n in e)
                o.d(r, n, function(t) {
                    return e[t]
                }
                .bind(null, n));
        return r
    }
    ,
    o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return o.d(t, "a", t),
        t
    }
    ,
    o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    o.p = "/";
    var c = window.webpackJsonp = window.webpackJsonp || []
      , s = c.push.bind(c);
    c.push = t,
    c = c.slice();
    for (var l = 0; l < c.length; l++)
        t(c[l]);
    var u = s;
    i.push([339, 1, 0]),
    r()
}({
    287: function(e, t, r) {},
    303: function(e, t, r) {},
    339: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(10)
          , a = r.n(n)
          , i = (r(17),
        r(16),
        r(14),
        r(106),
        r(287),
        r(2))
          , o = r(3)
          , c = r(80)
          , s = r(29)
          , l = r.n(s)
          , u = r(0)
          , d = r(5)
          , p = r(24)
          , f = r.n(p)
          , g = r(1)
          , w = r.n(g)
          , h = r(49)
          , y = r(48)
          , b = (r(303),
        r(47))
          , v = (r(7),
        r(52),
        r(28),
        r(77));
        $(document).ready((function() {
            window.DATracker.abtest.get_variation((function(e) {
                var t = e.get("plan");
                document.querySelector(".reg-form-wrap-box").style.opacity = "1",
                localStorage.setItem("regPlan", t),
                function(e) {
                    var t, r = new IntersectionObserver((function(t, r) {
                        var n = t[0];
                        if (n.isIntersecting) {
                            var a = n.target.getAttribute("data-tj-target");
                            window.DATracker && a && window.DATracker.track("view_qiye.163.com", {
                                target: a,
                                regPlan: e
                            })
                        }
                    }
                    ));
                    a()(t = document.querySelectorAll(".scrollArea")).call(t, (function(e) {
                        r.observe(e)
                    }
                    ))
                }(t),
                function(e) {
                    var t;
                    window.autoPopuped = {
                        why: !1,
                        feat: !1
                    };
                    var r = new IntersectionObserver((function(t, r) {
                        var n = t[0];
                        if (n.isIntersecting) {
                            var a = n.target.getAttribute("data-auto-pop");
                            window.DATracker && a && window.DATracker.track("view_qiye.163.com", {
                                target: a,
                                regPlan: e
                            }),
                            window.autoPopuped && !1 === window.autoPopuped.why && "为什么选择-自动弹出" === a && (window.autoPopuped.why = !0,
                            Object(i.f)({
                                modalType: "adviser",
                                position: a,
                                regPlan: e
                            })),
                            window.autoPopuped && !1 === window.autoPopuped.feat && "产品特色-自动弹出" === a && (window.autoPopuped.feat = !0,
                            Object(i.f)({
                                modalType: "discount",
                                position: a,
                                regPlan: e
                            }))
                        }
                    }
                    ));
                    a()(t = document.querySelectorAll(".auto-popup")).call(t, (function(e) {
                        r.observe(e)
                    }
                    ))
                }(t);
                var r, n = {
                    target: "regName",
                    rule_type: "require",
                    tips: "请输入完整的公司/单位名称",
                    error: "请输入完整的公司/单位名称",
                    afterBlur: function(e, t, r) {
                        window.DATracker.track("input_content", {
                            type: "公司名称",
                            value: t
                        })
                    }
                };
                "3" === t && (w()(r = $("#index_reg_form")).call(r, ".form-item")[0].style.display = "none",
                n = null);
                var o = new h.a($("#regSubmitBtn")[0],"正在创建账号，请稍等")
                  , c = Object(b.a)({
                    form: "index_reg_form",
                    async: !0,
                    submitFn: function(e, r) {
                        "3" === t && (r = f()(r).call(r, 6)),
                        $.ajax({
                            url: "//services.qiye.163.com/service/official/checkMobile?" + r,
                            dataType: "jsonp",
                            timeout: 1e4,
                            jsonp: "jsonpcallback"
                        }).then((function(n) {
                            n.result ? Object(v.a)((function() {
                                Object(i.b)(e, o, r, {
                                    regPlan: t,
                                    isBannerForm: !0,
                                    position: "banner"
                                })
                            }
                            )) : Object(i.b)(e, o, r, {
                                regPlan: t,
                                isBannerForm: !0,
                                position: "banner"
                            })
                        }
                        ), (function() {
                            Object(i.b)(e, o, r, {
                                regPlan: t,
                                isBannerForm: !0,
                                position: "banner"
                            })
                        }
                        ))
                    }
                }).add(n).add({
                    target: "regMobile",
                    rule_type: "mobile",
                    tips: "请输入正确的手机号码",
                    error: "请输入正确的手机号码",
                    afterBlur: function(e, t, r) {
                        window.DATracker.track("input_content", {
                            type: "联系手机",
                            value: t
                        }),
                        r || Object(i.c)(this, e, t, !0)
                    }
                }).add({
                    target: "regCode",
                    rule_type: "require",
                    error: "请输入短信验证码",
                    afterBlur: function(e, t, r) {
                        window.DATracker.track("input_content", {
                            type: "验证码",
                            value: t
                        })
                    }
                }).add({
                    target: "regAgreement",
                    rule_type: "agreement",
                    afterChange: function(e, t) {
                        t ? $("#regSubmitBtn").attr("disabled", !0) : $("#regSubmitBtn").attr("disabled", !1)
                    }
                })
                  , s = $("#getCodeBtn")
                  , l = Object(y.a)({
                    emitterBtn: s[0],
                    waitingTxt: ""
                });
                s.click((function() {
                    if (!l.run) {
                        var e = document.getElementById("regMobile").value;
                        /^[1-9]\d{10}$/.test(e) ? (l.start(),
                        Object(i.d)(c, l, e)) : c.showErrorTip({
                            target: "regMobile",
                            error: "请输入正确的手机号码"
                        })
                    }
                }
                ))
            }
            ))
        }
        ));
        var m = ""
          , k = ""
          , _ = "";
        $((function() {
            u.c.fCheckBrowser() && "pc" != u.c.getQueryHash("force") && (window.location.href = "https://m.qiye.163.com" + window.location.search),
            window.sessionStorage.firstenter || (window.DATracker.track("open_qiye_mail", {
                target: "首次进入"
            }),
            window.sessionStorage.firstenter = 1),
            j(),
            o.a.init(),
            i.a.init(),
            Object(c.a)(),
            x(),
            T()
        }
        ));
        var T = function() {
            var e = [];
            u.c.fGetQuerySearch("from") && e.push("from=" + u.c.fGetQuerySearch("from")),
            u.c.fGetQuerySearch("qhclickid") && e.push("qhclickid=" + u.c.fGetQuerySearch("qhclickid")),
            u.c.fGetQuerySearch("bd_vid") && e.push("bd_vid=" + u.c.fGetQuerySearch("bd_vid")),
            $.ajax({
                type: "get",
                url: "https://services.qiye.163.com/service/adminsys/queryupdateslist/",
                dataType: "jsonp",
                success: function(t) {
                    if (t.success && t.items && t.items.length > 0) {
                        for (var r = "", n = Math.min(4, t.items.length), a = 0; a < n; a++)
                            r += '<p><a href="' + t.items[a].url + '" target="_blank" data-tj-value="' + t.items[a].title + '">&bull;&nbsp;' + t.items[a].pubDate + t.items[a].title.replace(/webmail/i, "Webmail") + "</a></p>";
                        r += '<a href="/entry/news/news-list.htm' + (e.length ? "?".concat(e.join("&")) : "") + '" target="_blank">更多信息&nbsp;&gt;</a>',
                        $(".g-help-center .right").append(r)
                    }
                }
            })
        }
          , x = function() {
            window.DATracker.track_links(".g-use-mail .btn-look-more", "open_story_page", {
                target: "品牌Logo"
            }),
            $(".g-use-mail .btn-look-more").on("click", (function() {
                u.c.setRegisterPoint(6)
            }
            )),
            $(".g-banner .swiper-slide a").click((function() {
                $(this).attr("data-tj-value") && window.DATracker.track("click_banner", {
                    target: $(this).attr("data-tj-value")
                })
            }
            )),
            $(".g-help-center .left p a").click((function() {
                window.DATracker.track("open_help_detail", {
                    name: $(this).html().replace(/&gt;(.*)？/, "$1")
                }),
                u.c.setRegisterPoint(15)
            }
            )),
            $(".g-help-center .left>a").click((function() {
                window.DATracker.track("open_help_page", {
                    target: "首页-热门问题"
                })
            }
            )),
            $(".g-help-center .right p a").click((function() {
                window.DATracker.track("open_update_detail", {
                    name: $(this).attr("data-tj-value")
                })
            }
            )),
            $(".g-help-center .right>a").click((function() {
                window.DATracker.track("open_update_page", {
                    target: "首页-更新日志"
                })
            }
            )),
            $("#twelve").attr("href", "https://qiye.163.com/hd/618th/index.html?from=" + (u.c.fGetQuerySearch("from") || "618thpc")),
            $("#recommend").attr("href", "/hd/tjyl/index.html?from=" + (u.c.fGetQuerySearch("from") || "web-dly")),
            $(".to_login").on("click", (function() {
                window.DATracker && window.DATracker.track("index_fast_to_login")
            }
            )),
            $(".g-animate-nav>div").click((function() {
                var e = $(this);
                if (!e.hasClass("active")) {
                    switch (e.index()) {
                    case 0:
                        m.slideTo(1);
                        break;
                    case 1:
                        m.slideTo(2);
                        break;
                    case 2:
                        m.slideTo(3);
                        break;
                    case 3:
                        m.slideTo(4);
                        break;
                    case 4:
                        m.slideTo(5);
                        break;
                    case 5:
                        m.slideTo(6)
                    }
                    e.addClass("active").siblings().removeClass("active")
                }
            }
            )),
            $(".g-industry-solutions .g-industry-solutions-contanier-header").on("click", "li", (function() {
                window.DATracker.track("click_industry", {
                    target: "首页",
                    category: $(this).html()
                }),
                u.c.setRegisterPoint(12);
                var e = $(this);
                if (!e.hasClass("active")) {
                    e.addClass("active").siblings().removeClass("active");
                    var t = e.index();
                    _.slideToLoop(t)
                }
            }
            )),
            $(".g-industry-solutions .g-industry-solutions-contanier .swiper-slide .swiper-slide-content .content-footer").on("click", ".js-know-more", (function() {
                var e = _.realIndex
                  , t = window.location.search.length > 0 ? "&" + window.location.search.substr(1) : "";
                window.DATracker.track("click_industry", {
                    target: "首页",
                    category: $(".g-industry-solutions-contanier-header li").eq(e).html()
                }),
                u.c.setRegisterPoint(12),
                window.location.href = "/entry/user-story.htm?id=" + e + t
            }
            )),
            $(".g-swiper .swiper-pagination div").hover((function() {
                k.slideTo($(this).index() + 1),
                k.autoplay.stop()
            }
            ), (function() {
                k.autoplay.start()
            }
            )),
            $(".g-swiper .swiper-slide .g-wrapper").hover((function() {
                k.autoplay.stop()
            }
            ), (function() {
                k.autoplay.start()
            }
            )),
            window.DATracker.track_links("a.btn-look-strategy", "open_Strategy_page", {
                target: "查看攻略"
            }),
            window.DATracker.track_links("a.btn-click-understand", "open_office_page", {
                target: "点击了解"
            }),
            $("a.btn-click-understand").on("click", (function() {
                u.c.setRegisterPoint(14)
            }
            ))
        }
          , j = function() {
            Object(d.c)(202301091022).always((function(e) {
                var t = [];
                a()(e).call(e, (function(e, r) {
                    var n = e.advertResourceList[0].content;
                    if (n) {
                        var a = {};
                        if (e.ext)
                            try {
                                a = JSON.parse(e.ext)
                            } catch (e) {}
                        t.push({
                            imgUrl: n.images[0].url,
                            clickUrl: 0 === r ? u.c.wrapperUrlWithCurFrom(n.clickUrl) : n.clickUrl,
                            duration: a.duration
                        })
                    }
                }
                ));
                var r, n = [];
                a()(t).call(t, (function(e, t) {
                    n.push('<div class="swiper-slide" ' + (0 === t ? 'data-swiper-autoplay="15000"' : "") + ' style="width: 1905px;position:relative;"' + (e.duration ? 'data-swiper-autoplay="'.concat(e.duration, '"') : "") + '>        <a target="_blank" href="' + e.clickUrl + '" style="background:url(' + e.imgUrl + ') no-repeat center;background-size:cover;"></a>      </div>')
                }
                )),
                $(n.join("")).insertBefore($("#banner_lighthouse")),
                r = new l.a(".g-banner .swiper-container",{
                    autoplay: {
                        disableOnInteraction: !1,
                        delay: 5500
                    },
                    loop: !0,
                    pagination: {
                        el: ".g-banner .swiper-pagination",
                        clickable: !0,
                        renderBullet: function(e, t) {
                            return '<div class="' + t + '"><span></span></div>'
                        }
                    },
                    navigation: {
                        nextEl: ".g-banner .swiper-button-next",
                        prevEl: ".g-banner .swiper-button-prev"
                    },
                    on: {
                        slideNextTransitionStart: function() {
                            0 === this.realIndex ? document.querySelector(".reg-form-wrap-box").style.opacity = "1" : document.querySelector(".reg-form-wrap-box").style.opacity = "0"
                        },
                        slidePrevTransitionStart: function() {
                            0 === this.realIndex ? document.querySelector(".reg-form-wrap-box").style.opacity = "1" : document.querySelector(".reg-form-wrap-box").style.opacity = "0"
                        }
                    }
                }),
                document.querySelector("#reg-form-wrap").onmouseover = function() {
                    r.autoplay.stop()
                }
                ,
                document.querySelector("#reg-form-wrap").onmouseleave = function() {
                    r.autoplay.start()
                }
                ,
                $(".g-banner .swiper-container").css("opacity", 1)
            }
            )),
            k = new l.a(".g-why-select-us .swiper-container",{
                autoplay: {
                    disableOnInteraction: !1
                },
                loop: !0,
                pagination: {
                    el: ".g-why-select-us .swiper-pagination",
                    clickable: !0,
                    renderBullet: function(e, t) {
                        var r = "";
                        switch (e) {
                        case 0:
                            r = "双证守护<br>极致安全";
                            break;
                        case 1:
                            r = "稳定服务<br>100万+企业";
                            break;
                        case 2:
                            r = "优质IP资源<br>全球收发无阻";
                            break;
                        case 3:
                            r = "25年<br>专业技术沉淀"
                        }
                        return '<div class="' + t + " icon-" + (e + 1) + '">' + r + "</div>"
                    }
                }
            }),
            m = new l.a(".g-animate .swiper-container",{
                noSwiping: !0,
                direction: "vertical",
                observer: !0,
                resizeObserver: !0,
                effect: "fade",
                on: {
                    slideChangeTransitionEnd: function() {
                        this.activeIndex;
                        var e = 0;
                        e = 0 === this.realIndex ? 0 : 1 == this.realIndex ? 1 : 2 == this.realIndex ? 2 : 3 == this.realIndex ? 3 : 4 == this.realIndex ? 4 : 5,
                        $(".g-animate-nav>div").removeClass("active").eq(e).addClass("active")
                    }
                },
                autoplay: {
                    disableOnInteraction: !1
                },
                loop: !0
            }),
            _ = new l.a(".g-industry-solutions-contanier",{
                autoplay: !1,
                loop: !0,
                effect: "fade",
                fadeEffect: {
                    crossFade: !0
                },
                pagination: {
                    el: ".g-industry-solutions-contanier .swiper-pagination"
                },
                on: {
                    slideChangeTransitionEnd: function() {
                        $(".g-industry-solutions-contanier-header ul li").eq(this.realIndex).addClass("active").siblings().removeClass("active")
                    }
                }
            })
        }
    }
});
