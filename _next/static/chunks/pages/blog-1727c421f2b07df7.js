(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [195],
  {
    2890: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/blog",
        function () {
          return n(7183);
        },
      ]);
    },
    290: function (e, t, n) {
      "use strict";
      var r = n(5893),
        o = n(7294);
      function i(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function c(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function a(e) {
        return (a = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function l(e, t) {
        return !t || ("object" !== u(t) && "function" !== typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function s(e, t) {
        return (s =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var u = function (e) {
        return e && "undefined" !== typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      };
      function f(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = a(e);
          if (t) {
            var o = a(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return l(this, n);
        };
      }
      var p = (function (e) {
        !(function (e, t) {
          if ("function" !== typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && s(e, t);
        })(l, e);
        var t,
          n,
          o,
          a = f(l);
        function l() {
          return i(this, l), a.apply(this, arguments);
        }
        return (
          (t = l),
          (n = [
            {
              key: "render",
              value: function () {
                return (0, r.jsx)("div", {
                 
                });
              },
            },
          ]) && c(t.prototype, n),
          o && c(t, o),
          l
        );
      })(o.Component);
      t.Z = p;
    },
    7183: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return k;
          },
        });
      var r = n(5893),
        o = n(7294),
        i = n(8105),
        c = n(1126),
        a = n(1664),
        l = function (e) {
          var t = e.post,
            n = e.color;
          return (0, r.jsx)("div", {
            className: "blog__wrapper",
            children: (0, r.jsxs)("div", {
              className: "blog__item white-bg mb-30 transition-3 fix",
              children: [
                (0, r.jsx)("div", {
                  className: "blog__thumb w-img fix",
                  children: (0, r.jsx)(a.default, {
                    href: t.url,
                    children: (0, r.jsx)("img", {
                      src: "/" + t.image,
                      alt: "blog image",
                    }),
                  }),
                }),
                (0, r.jsxs)("div", {
                  className: "blog__content",
                  children: [
                    (0, r.jsx)("div", {
                     
                    }),
                    (0, r.jsx)("h3", {
                      className: "blog__title",
                      children: (0, r.jsx)(a.default, {
                        href: t.url,
                        children: t.title,
                      }),
                    }),
                    (0, r.jsxs)("div", {
                      className:
                        "blog__meta d-flex align-items-center justify-content-between",
                      children: [
                        (0, r.jsxs)("div", {
                          className: "blog__author d-flex align-items-center",
                          children: [
                            (0, r.jsx)("div", {
                              className: "blog__author-thumb mr-10",
                              children: (0, r.jsx)("img", {
                                src: "/" + t.authorImage,
                                alt: "blog image",
                              }),
                            }),
                            (0, r.jsx)("div", {
                              className: "blog__author-info",
                              children: (0, r.jsx)("h5", {
                                children: t.authorTitle,
                              }),
                            }),
                          ],
                        }),
                        (0, r.jsx)("div", {
                          className: "blog__date d-flex align-items-center",
                          children: (0, r.jsx)("span", { children: t.date }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        s = JSON.parse(
          '[{"id":"1","tag":"Emprendimiento","title":"La educación contra la exclusión","image":"assets/img/img_fucec/blog-item.png","authorImage":"assets/img/img_fucec/Elipse 10.png","authorTitle":"Milton Acosta","url":"Fucec-Static/la-educacion-contra-la-exclusion.html","date":"Febrero 27, 2023"},{"id":"2","title":"La neuroeducación. Reto para padres y docentes","image":"assets/img/img_fucec/blog-item-2.png","authorImage":"assets/img/img_fucec/Elipse 10.png","authorTitle":"Jaime Acosta","url":"Fucec-Static/la-neuroeducacion.html","date":"Febrero 27, 2023"},{"id":"3","tag":"Tecnolog\xeda","title":"Neoesclavitud","image":"assets/img/img_fucec/Rect\xe1ngulo 25.png","authorImage":"assets/img/img_fucec/Elipse 10.png","authorTitle":"Ariel Espinosa","url":"Fucec-Static/neoesclavitud.html","date":"Febrero 27, 2023"},{"id":"4","tag":"Tecnología","title":"Una enfermedad actual…","image":"Fucec-Static/assets/img/img_fucec/Rectángulo 25.png","authorImage":"Fucec-Static/assets/img/img_fucec/Elipse 10.png","authorTitle":"Ariel Bello","url":"Fucec-Static/una-enfermedad-actual.html","date":"Febrero 27, 2023"},{"id":"5","tag":"Tecnología","title":"Teatro y derecho","image":"Fucec-Static/assets/img/img_fucec/blog-item.png","authorImage":"Fucec-Static/assets/img/img_fucec/Elipse 10.png","authorTitle":"Alonso Cortina","url":"Fucec-Static/teatro-y-derecho.html","date":"Febrero 27, 2023"}]'
        ),
        u = n(4339),
        f = n(290),
        p = n(2930),
        d = n(3652),
        h = n(1213);
      function m(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function g(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function b(e) {
        return (b = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function x(e, t) {
        return !t || ("object" !== y(t) && "function" !== typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function j(e, t) {
        return (j =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var y = function (e) {
        return e && "undefined" !== typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      };
      function v(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = b(e);
          if (t) {
            var o = b(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return x(this, n);
        };
      }
      var _ = (function (e) {
        !(function (e, t) {
          if ("function" !== typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && j(e, t);
        })(c, e);
        var t,
          n,
          o,
          i = v(c);
        function c() {
          return m(this, c), i.apply(this, arguments);
        }
        return (
          (t = c),
          (n = [
            {
              key: "render",
              value: function () {
                return (0, r.jsxs)("main", {
                  children: [
                    (0, r.jsx)(u.Z, {
                      pageTitle: "Mantente informado",
                      bannerImg: "Rect\xe1ngulo%20113.png",
                    }),
                    (0, r.jsx)("section", {
                      className: "blog__area pt-120 pb-120",
                      children: (0, r.jsx)("div", {
                        className: "container",
                        children: (0, r.jsxs)("div", {
                          className: "row",
                          children: [
                            (0, r.jsxs)("div", {
                              className: "col-xxl-8 col-xl-8 col-lg-8",
                              children: [
                                (0, r.jsx)("div", {
                                  className: "row",
                                  children:
                                    s &&
                                    s.map(function (e, t) {
                                      return (0,
                                      r.jsx)("div", { className: "col-xxl-6 col-xl-6 col-lg-6 col-md-6", children: (0, r.jsx)(l, { post: e, color: ((n = t), (n + 1) % 2 == 0 ? "blue" : (n + 1) % 3 == 0 ? "green" : "") }) }, t);
                                      var n;
                                    }),
                                }),
                                (0, r.jsx)(f.Z, {}),
                              ],
                            }),
                            (0, r.jsx)("div", {
                              className: "col-xxl-4 col-xl-4 col-lg-4",
                              children: (0, r.jsxs)("div", {
                                className: "blog__sidebar pl-70",
                                children: [
                                  (0, r.jsx)(p.Z, {}),
                                  (0, r.jsx)(d.Z, {}),
                                  (0, r.jsx)(h.Z, {}),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                });
              },
            },
          ]) && g(t.prototype, n),
          o && g(t, o),
          c
        );
      })(o.Component);
      function w(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function N(e) {
        return (N = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function O(e, t) {
        return !t || ("object" !== R(t) && "function" !== typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function P(e, t) {
        return (P =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var R = function (e) {
        return e && "undefined" !== typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      };
      function E(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = N(e);
          if (t) {
            var o = N(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return O(this, n);
        };
      }
      var k = (function (e) {
        !(function (e, t) {
          if ("function" !== typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && P(e, t);
        })(s, e);
        var t,
          n,
          a,
          l = E(s);
        function s(e) {
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, s),
            l.call(this, e)
          );
        }
        return (
          (t = s),
          (a = [
            {
              key: "getInitialProps",
              value: function (e) {
                e.store;
              },
            },
          ]),
          (n = [
            {
              key: "render",
              value: function () {
                return (0, r.jsxs)(o.Fragment, {
                  children: [
                    (0, r.jsx)(c.Z, { isHome: !1 }),
                    (0, r.jsx)(_, {}),
                    (0, r.jsx)(i.Z, {}),
                  ],
                });
              },
            },
          ]) && w(t.prototype, n),
          a && w(t, a),
          s
        );
      })(o.Component);
    },
  },
  function (e) {
    e.O(0, [675, 958, 749, 774, 888, 179], function () {
      return (t = 2890), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
