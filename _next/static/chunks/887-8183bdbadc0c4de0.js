(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [887],
  {
    638: function (e, t, n) {
      "use strict";
      function r(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            o = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            o.forEach(function (t) {
              r(e, t, n[t]);
            });
        }
        return e;
      }
      t.default = function (e, t) {
        var n = a.default,
          r = {
            loading: function (e) {
              e.error, e.isLoading;
              return e.pastDelay, null;
            },
          };
        (i = e),
          (l = Promise),
          (
            null != l && "undefined" !== typeof Symbol && l[Symbol.hasInstance]
              ? l[Symbol.hasInstance](i)
              : i instanceof l
          )
            ? (r.loader = function () {
                return e;
              })
            : "function" === typeof e
            ? (r.loader = e)
            : "object" === typeof e && (r = o({}, r, e));
        var i, l;
        var u = (r = o({}, r, t));
        if (u.suspense)
          throw new Error(
            "Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense"
          );
        if (u.suspense) return n(u);
        r.loadableGenerated &&
          delete (r = o({}, r, r.loadableGenerated)).loadableGenerated;
        if ("boolean" === typeof r.ssr) {
          if (!r.ssr) return delete r.ssr, s(n, r);
          delete r.ssr;
        }
        return n(r);
      };
      i(n(7294));
      var a = i(n(4302));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function s(e, t) {
        return delete t.webpack, delete t.modules, e(t);
      }
    },
    6319: function (e, t, n) {
      "use strict";
      var r;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.LoadableContext = void 0);
      var o = (
        (r = n(7294)) && r.__esModule ? r : { default: r }
      ).default.createContext(null);
      t.LoadableContext = o;
    },
    4302: function (e, t, n) {
      "use strict";
      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function o(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            r.forEach(function (t) {
              o(e, t, n[t]);
            });
        }
        return e;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i,
        s = (i = n(7294)) && i.__esModule ? i : { default: i },
        l = n(7161),
        u = n(6319);
      var c = [],
        d = [],
        f = !1;
      function m(e) {
        var t = e(),
          n = { loading: !0, loaded: null, error: null };
        return (
          (n.promise = t
            .then(function (e) {
              return (n.loading = !1), (n.loaded = e), e;
            })
            .catch(function (e) {
              throw ((n.loading = !1), (n.error = e), e);
            })),
          n
        );
      }
      var p = (function () {
        function e(t, n) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this._loadFn = t),
            (this._opts = n),
            (this._callbacks = new Set()),
            (this._delay = null),
            (this._timeout = null),
            this.retry();
        }
        var t, n, o;
        return (
          (t = e),
          (n = [
            {
              key: "promise",
              value: function () {
                return this._res.promise;
              },
            },
            {
              key: "retry",
              value: function () {
                var e = this;
                this._clearTimeouts(),
                  (this._res = this._loadFn(this._opts.loader)),
                  (this._state = { pastDelay: !1, timedOut: !1 });
                var t = this._res,
                  n = this._opts;
                if (t.loading) {
                  if ("number" === typeof n.delay)
                    if (0 === n.delay) this._state.pastDelay = !0;
                    else {
                      var r = this;
                      this._delay = setTimeout(function () {
                        r._update({ pastDelay: !0 });
                      }, n.delay);
                    }
                  if ("number" === typeof n.timeout) {
                    var o = this;
                    this._timeout = setTimeout(function () {
                      o._update({ timedOut: !0 });
                    }, n.timeout);
                  }
                }
                this._res.promise
                  .then(function () {
                    e._update({}), e._clearTimeouts();
                  })
                  .catch(function (t) {
                    e._update({}), e._clearTimeouts();
                  }),
                  this._update({});
              },
            },
            {
              key: "_update",
              value: function (e) {
                (this._state = a(
                  {},
                  this._state,
                  {
                    error: this._res.error,
                    loaded: this._res.loaded,
                    loading: this._res.loading,
                  },
                  e
                )),
                  this._callbacks.forEach(function (e) {
                    return e();
                  });
              },
            },
            {
              key: "_clearTimeouts",
              value: function () {
                clearTimeout(this._delay), clearTimeout(this._timeout);
              },
            },
            {
              key: "getCurrentValue",
              value: function () {
                return this._state;
              },
            },
            {
              key: "subscribe",
              value: function (e) {
                var t = this;
                return (
                  this._callbacks.add(e),
                  function () {
                    t._callbacks.delete(e);
                  }
                );
              },
            },
          ]) && r(t.prototype, n),
          o && r(t, o),
          e
        );
      })();
      function h(e) {
        return (function (e, t) {
          var n = function () {
              if (!o) {
                var t = new p(e, r);
                o = {
                  getCurrentValue: t.getCurrentValue.bind(t),
                  subscribe: t.subscribe.bind(t),
                  retry: t.retry.bind(t),
                  promise: t.promise.bind(t),
                };
              }
              return o.promise();
            },
            r = Object.assign(
              {
                loader: null,
                loading: null,
                delay: 200,
                timeout: null,
                webpack: null,
                modules: null,
                suspense: !1,
              },
              t
            );
          r.suspense && (r.lazy = s.default.lazy(r.loader));
          var o = null;
          if (!f && !r.suspense) {
            var i = r.webpack ? r.webpack() : r.modules;
            i &&
              d.push(function (e) {
                var t = !0,
                  r = !1,
                  o = void 0;
                try {
                  for (
                    var a, s = i[Symbol.iterator]();
                    !(t = (a = s.next()).done);
                    t = !0
                  ) {
                    var l = a.value;
                    if (-1 !== e.indexOf(l)) return n();
                  }
                } catch (u) {
                  (r = !0), (o = u);
                } finally {
                  try {
                    t || null == s.return || s.return();
                  } finally {
                    if (r) throw o;
                  }
                }
              });
          }
          var c = r.suspense
            ? function (e, t) {
                return s.default.createElement(r.lazy, a({}, e, { ref: t }));
              }
            : function (e, t) {
                n();
                var a = s.default.useContext(u.LoadableContext),
                  i = l.useSubscription(o);
                return (
                  s.default.useImperativeHandle(
                    t,
                    function () {
                      return { retry: o.retry };
                    },
                    []
                  ),
                  a &&
                    Array.isArray(r.modules) &&
                    r.modules.forEach(function (e) {
                      a(e);
                    }),
                  s.default.useMemo(
                    function () {
                      return i.loading || i.error
                        ? s.default.createElement(r.loading, {
                            isLoading: i.loading,
                            pastDelay: i.pastDelay,
                            timedOut: i.timedOut,
                            error: i.error,
                            retry: o.retry,
                          })
                        : i.loaded
                        ? s.default.createElement(
                            (function (e) {
                              return e && e.__esModule ? e.default : e;
                            })(i.loaded),
                            e
                          )
                        : null;
                    },
                    [e, i]
                  )
                );
              };
          return (
            (c.preload = function () {
              return !r.suspense && n();
            }),
            (c.displayName = "LoadableComponent"),
            s.default.forwardRef(c)
          );
        })(m, e);
      }
      function y(e, t) {
        for (var n = []; e.length; ) {
          var r = e.pop();
          n.push(r(t));
        }
        return Promise.all(n).then(function () {
          if (e.length) return y(e, t);
        });
      }
      (h.preloadAll = function () {
        return new Promise(function (e, t) {
          y(c).then(e, t);
        });
      }),
        (h.preloadReady = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return new Promise(function (t) {
            var n = function () {
              return (f = !0), t();
            };
            y(d, e).then(n, n);
          });
        }),
        (window.__NEXT_PRELOADREADY = h.preloadReady);
      var b = h;
      t.default = b;
    },
    5944: function (e, t, n) {
      "use strict";
      var r = n(5893),
        o = n(7294);
      n(8116), n(2873), n(933), n(92), n(8770), n(3390), n(5519), n(1664);
      function a(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function s(e) {
        return (s = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function l(e, t) {
        return !t || ("object" !== c(t) && "function" !== typeof t)
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
      var c = function (e) {
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
          var n,
            r = s(e);
          if (t) {
            var o = s(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return l(this, n);
        };
      }
      var f = (function (e) {
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
          n,
          o,
          s = d(l);
        function l() {
          return a(this, l), s.apply(this, arguments);
        }
        return (
          (t = l),
          (n = [
            {
              key: "render",
              value: function () {
                return (0, r.jsx)("section", {
                  className:
                    "testimonial__area figure_testimonial pt-145 pb-150 green-bg-2",
                  children: (0, r.jsx)("div", {
                    className: "container",
                    children: (0, r.jsxs)("div", {
                      className: "row",
                      children: [
                        (0, r.jsx)("div", {
                          className: "col-xxl-6 col-xl-6 col-lg-6 col-md-10",
                          children: (0, r.jsxs)("div", {
                            className: "testimonial__slider-3",
                            children: [
                              (0, r.jsx)("h3", {
                                className: "testimonial__title",
                                children:
                                  "Una instituci\xf3n para el desarrollo personal",
                              }),
                              (0, r.jsx)("div", {
                                className:
                                  "testimonial__slider-wrapper testimonial-text mb-35",
                                children: (0, r.jsxs)("div", {
                                  className: "testimonial__item-3",
                                  children: [
                                    (0, r.jsx)("p", {
                                      children:
                                        "\u201cDurante nuestro s\xf3lido recorrido de m\xe1s de ocho a\xf1os, hemos desarrollado y apoyado programas de gesti\xf3n del conocimiento y generaci\xf3n de ingresos adaptados a las necesidades laborales y productivas, lo que ha permitido a muchas personas a trav\xe9s del aprendizaje puedan mejorar sus condiciones de vida.\u201d",
                                    }),
                                    (0, r.jsxs)("div", {
                                      className: "testimonial__info-2 mb-45",
                                      children: [
                                        (0, r.jsx)("h4", {
                                          children: "Juan Hern\xe1ndez,",
                                        }),
                                        (0, r.jsx)("span", {
                                          children: " Director de programa",
                                        }),
                                      ],
                                    }),
                                    (0, r.jsx)("div", {
                                      className: "testimonial__nav-thumb",
                                      children: (0, r.jsx)("img", {
                                        src: "assets/img/img_fucec/Elipse_testimonial.png",
                                        alt: "img not found",
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, r.jsx)("div", {
                          className: "col-xxl-6 col-xl-6 col-lg-6 col-md-10",
                          children: (0, r.jsxs)("div", {
                            className: "testimonial__video ml-70 fix",
                            children: [
                              (0, r.jsx)("div", {
                                className: "testimonial__thumb-3",
                                children: (0, r.jsx)("img", {
                                  src: "assets/img/img_fucec/testimonio_about.png",
                                  alt: "img not found",
                                }),
                              }),
                              (0, r.jsxs)("div", {
                                className:
                                  "testimonial__video-content d-sm-flex",
                                children: [
                                  (0, r.jsx)("div", {
                                    className:
                                      "testimonial__video-icon mr-20 mb-20",
                                    children: (0, r.jsx)("span", {
                                      children: (0, r.jsx)("img", {
                                        src: "assets/img/img_fucec/Trazado 57.svg",
                                        alt: "img not found",
                                      }),
                                    }),
                                  }),
                                  (0, r.jsxs)("div", {
                                    className: "testimonial__video-text",
                                    children: [
                                      (0, r.jsx)("h4", {
                                        children: "Con\xf3cenos m\xe1s",
                                      }),
                                      (0, r.jsx)("p", {
                                        children:
                                          "Cada d\xeda trabajamos para formar mejores personas, basando nuestro aprendizaje en los valores y orientando a nuestros estudiantes a ser excelentes seres humanos.",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                });
              },
            },
          ]) && i(t.prototype, n),
          o && i(t, o),
          l
        );
      })(o.Component);
      t.Z = f;
    },
    5519: function () {},
    5152: function (e, t, n) {
      e.exports = n(638);
    },
  },
]);
