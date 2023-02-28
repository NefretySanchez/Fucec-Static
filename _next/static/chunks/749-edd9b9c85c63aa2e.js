"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [749],
  {
    1213: function (e, t, r) {
      var n = r(5893),
        c = r(7294),
        i = r(1664);
      function o(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function s(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
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
        return !t || ("object" !== f(t) && "function" !== typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function u(e, t) {
        return (u =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var f = function (e) {
        return e && "undefined" !== typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      };
      function d(e) {
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
          var r,
            n = a(e);
          if (t) {
            var c = a(this).constructor;
            r = Reflect.construct(n, arguments, c);
          } else r = n.apply(this, arguments);
          return l(this, r);
        };
      }
      var h = (function (e) {
        !(function (e, t) {
          if ("function" !== typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && u(e, t);
        })(l, e);
        var t,
          r,
          c,
          a = d(l);
        function l() {
          return o(this, l), a.apply(this, arguments);
        }
        return (
          (t = l),
          (r = [
            {
              key: "render",
              value: function () {
                return (0, n.jsxs)("div", {
                  className: "sidebar__widget",
                  children: [
                 
                  ],
                });
              },
            },
          ]) && s(t.prototype, r),
          c && s(t, c),
          l
        );
      })(c.Component);
      t.Z = h;
    },
    3652: function (e, t, r) {
      var n = r(5893),
        c = r(7294),
        i = r(1664);
      function o(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function s(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
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
        return !t || ("object" !== f(t) && "function" !== typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function u(e, t) {
        return (u =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var f = function (e) {
        return e && "undefined" !== typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      };
      function d(e) {
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
          var r,
            n = a(e);
          if (t) {
            var c = a(this).constructor;
            r = Reflect.construct(n, arguments, c);
          } else r = n.apply(this, arguments);
          return l(this, r);
        };
      }
      var h = (function (e) {
        !(function (e, t) {
          if ("function" !== typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && u(e, t);
        })(l, e);
        var t,
          r,
          c,
          a = d(l);
        function l() {
          return o(this, l), a.apply(this, arguments);
        }
        return (
          (t = l),
          (r = [
            {
              key: "render",
              value: function () {
                return (0, n.jsxs)("div", {
                  className: "sidebar__widget mb-55",
                  children: [
                    (0, n.jsx)("div", {
                      className: "sidebar__widget-head mb-35",
                      children: (0, n.jsx)("h3", {
                        className: "sidebar__widget-title",
                        children: "Entradas recientes",
                      }),
                    }),
                    (0, n.jsx)("div", {
                      className: "sidebar__widget-content",
                      children: (0, n.jsxs)("div", {
                        className: "rc__post-wrapper",
                        children: [
                          (0, n.jsxs)("div", {
                            className: "rc__post d-flex align-items-center",
                            children: [
                              (0, n.jsx)("div", {
                                className: "rc__thumb mr-20",
                                children: (0, n.jsx)("img", {
                                  src: "assets/img/img_fucec/blog-item.png",
                                  alt: "img not found",
                                }),
                              }),
                              (0, n.jsxs)("div", {
                                className: "rc__content",
                                children: [
                                  (0, n.jsx)("div", {
                                    className: "rc__meta",
                                    children: (0, n.jsx)("span", {
                                      children: "Febrero 27, 2023",
                                    }),
                                  }),
                                  (0, n.jsx)("h6", {
                                    className: "rc__title",
                                    children: (0, n.jsx)(i.default, {
                                      href: "Fucec-Static/la-educacion-contra-la-exclusion.html",
                                      children: (0, n.jsx)("a", {
                                        children: "La educación contra la exclusión",
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, n.jsxs)("div", {
                            className: "rc__post d-flex align-items-center",
                            children: [
                              (0, n.jsx)("div", {
                                className: "rc__thumb mr-20",
                                children: (0, n.jsx)("img", {
                                  src: "assets/img/img_fucec/blog-item-2.png",
                                  alt: "img not found",
                                }),
                              }),
                              (0, n.jsxs)("div", {
                                className: "rc__content",
                                children: [
                                  (0, n.jsx)("div", {
                                    className: "rc__meta",
                                    children: (0, n.jsx)("span", {
                                      children: "Febrero 27, 2023",
                                    }),
                                  }),
                                  (0, n.jsx)("h6", {
                                    className: "rc__title",
                                    children: (0, n.jsx)(i.default, {
                                      href: "Fucec-Static/la-neuroeducacion.html",
                                      children: (0, n.jsx)("a", {
                                        children: "La neuroeducación",
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, n.jsxs)("div", {
                            className: "rc__post d-flex align-items-center",
                            children: [
                              (0, n.jsx)("div", {
                                className: "rc__thumb mr-20",
                                children: (0, n.jsx)("img", {
                                  src: "assets/img/img_fucec/Rect\xe1ngulo 25.png",
                                  alt: "img not found",
                                }),
                              }),
                              (0, n.jsxs)("div", {
                                className: "rc__content",
                                children: [
                                  (0, n.jsx)("div", {
                                    className: "rc__meta",
                                    children: (0, n.jsx)("span", {
                                      children: "Febrero 27, 2023",
                                    }),
                                  }),
                                  (0, n.jsx)("h6", {
                                    className: "rc__title",
                                    children: (0, n.jsx)(i.default, {
                                      href: "Fucec-Static/neoesclavitud.html",
                                      children: (0, n.jsx)("a", {
                                        children: "Neoesclavitud",
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                });
              },
            },
          ]) && s(t.prototype, r),
          c && s(t, c),
          l
        );
      })(c.Component);
      t.Z = h;
    },
    2930: function (e, t, r) {
      var n = r(5893),
        c = r(7294);
      function i(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function o(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function s(e) {
        return (s = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function a(e, t) {
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
      function l(e, t) {
        return (l =
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
          var r,
            n = s(e);
          if (t) {
            var c = s(this).constructor;
            r = Reflect.construct(n, arguments, c);
          } else r = n.apply(this, arguments);
          return a(this, r);
        };
      }
      var d = (function (e) {
        !(function (e, t) {
          if ("function" !== typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && l(e, t);
        })(a, e);
        var t,
          r,
          c,
          s = f(a);
        function a() {
          return i(this, a), s.apply(this, arguments);
        }
        return (
          (t = a),
          (r = [
            {
              key: "render",
              value: function () {
                return (0, n.jsx)("div", {
                  className: "sidebar__widget mb-60",
                  children: (0, n.jsx)("div", {
                    className: "sidebar__widget-content",
                    children: (0, n.jsx)("div", {
                      className: "sidebar__search p-relative",
                      children: (0, n.jsxs)("form", {
                        action: "#",
                        children: [
                          (0, n.jsx)("input", {
                            type: "text",
                            placeholder: "Buscar una entrada",
                          }),
                          (0, n.jsx)("button", {
                            type: "submit",
                            children: (0, n.jsx)("i", {
                              className: "fas fa-search",
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                });
              },
            },
          ]) && o(t.prototype, r),
          c && o(t, c),
          a
        );
      })(c.Component);
      t.Z = d;
    },
    4339: function (e, t, r) {
      var n = r(5893);
      r(7294), r(1664);
      t.Z = function (e) {
        var t = e.pageTitle,
          r = e.bannerImg;
        return (0, n.jsx)("section", {
          className:
            "page__title-area page__title-height page__title-overlay d-flex align-items-center",
          style: {
            backgroundImage: "url(".concat(
              "assets/img/img_fucec/".concat(r),
              ")"
            ),
          },
          children: (0, n.jsx)("div", {
            className: "container",
            children: (0, n.jsx)("div", {
              className: "row",
              children: (0, n.jsx)("div", {
                className: "col-xxl-12",
                children: (0, n.jsx)("div", {
                  className: "page__title-wrapper mt-110",
                  children: (0, n.jsx)("h3", {
                    className: "page__title",
                    children: t || "Courses",
                  }),
                }),
              }),
            }),
          }),
        });
      };
    },
  },
]);
