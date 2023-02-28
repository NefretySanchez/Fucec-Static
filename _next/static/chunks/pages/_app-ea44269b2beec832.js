(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    8679: function (e, t, r) {
      "use strict";
      var n = r(9864),
        o = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        u = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        i = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        c = {};
      function a(e) {
        return n.isMemo(e) ? i : c[e.$$typeof] || o;
      }
      (c[n.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (c[n.Memo] = i);
      var f = Object.defineProperty,
        s = Object.getOwnPropertyNames,
        p = Object.getOwnPropertySymbols,
        l = Object.getOwnPropertyDescriptor,
        y = Object.getPrototypeOf,
        d = Object.prototype;
      e.exports = function e(t, r, n) {
        if ("string" !== typeof r) {
          if (d) {
            var o = y(r);
            o && o !== d && e(t, o, n);
          }
          var i = s(r);
          p && (i = i.concat(p(r)));
          for (var c = a(t), v = a(r), b = 0; b < i.length; ++b) {
            var h = i[b];
            if (!u[h] && (!n || !n[h]) && (!v || !v[h]) && (!c || !c[h])) {
              var m = l(r, h);
              try {
                f(t, h, m);
              } catch (w) {}
            }
          }
        }
        return t;
      };
    },
    7544: function (e, t, r) {
      e.exports = r(6029);
    },
    1780: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return r(7850);
        },
      ]);
    },
    6029: function (e, t, r) {
      "use strict";
      var n,
        o = (n = r(4051)) && n.__esModule ? n : { default: n };
      function u(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function i(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function c(e) {
        return (c = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function a(e, t) {
        return !t || ("object" !== s(t) && "function" !== typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function f(e, t) {
        return (f =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var s = function (e) {
        return e && "undefined" !== typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      };
      function p(e) {
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
            n = c(e);
          if (t) {
            var o = c(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return a(this, r);
        };
      }
      t.default = void 0;
      var l = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(r(7294)),
        y = r(3794);
      function d(e, t, r, n, o, u, i) {
        try {
          var c = e[u](i),
            a = c.value;
        } catch (f) {
          return void r(f);
        }
        c.done ? t(a) : Promise.resolve(a).then(n, o);
      }
      function v(e) {
        return function () {
          var t = this,
            r = arguments;
          return new Promise(function (n, o) {
            var u = e.apply(t, r);
            function i(e) {
              d(u, n, o, i, c, "next", e);
            }
            function c(e) {
              d(u, n, o, i, c, "throw", e);
            }
            i(void 0);
          });
        };
      }
      function b() {
        return (b = v(
          o.default.mark(function e(t) {
            var r, n, u;
            return o.default.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = t.Component),
                      (n = t.ctx),
                      (e.next = 3),
                      y.loadGetInitialProps(r, n)
                    );
                  case 3:
                    return (u = e.sent), e.abrupt("return", { pageProps: u });
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function h(e) {
        return b.apply(this, arguments);
      }
      var m = (function (e) {
        !(function (e, t) {
          if ("function" !== typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && f(e, t);
        })(c, e);
        var t,
          r,
          n,
          o = p(c);
        function c() {
          return u(this, c), o.apply(this, arguments);
        }
        return (
          (t = c),
          (r = [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.Component,
                  r = e.pageProps;
                return l.default.createElement(t, Object.assign({}, r));
              },
            },
          ]) && i(t.prototype, r),
          n && i(t, n),
          c
        );
      })(l.default.Component);
      (m.origGetInitialProps = h), (m.getInitialProps = h), (t.default = m);
    },
    7850: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return _;
          },
        });
      var n = r(4051),
        o = r.n(n),
        u = r(5893),
        i = (r(6136), r(7544)),
        c = r(6628),
        a = r(7294),
        f = (function () {
          var e = function (t, r) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
              })(t, r);
          };
          return function (t, r) {
            function n() {
              this.constructor = t;
            }
            e(t, r),
              (t.prototype =
                null === r
                  ? Object.create(r)
                  : ((n.prototype = r.prototype), new n()));
          };
        })(),
        s = function () {
          return (s =
            Object.assign ||
            function (e) {
              for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var o in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        },
        p = function (e, t, r, n) {
          return new (r || (r = Promise))(function (o, u) {
            function i(e) {
              try {
                a(n.next(e));
              } catch (t) {
                u(t);
              }
            }
            function c(e) {
              try {
                a(n.throw(e));
              } catch (t) {
                u(t);
              }
            }
            function a(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof r
                    ? t
                    : new r(function (e) {
                        e(t);
                      })).then(i, c);
            }
            a((n = n.apply(e, t || [])).next());
          });
        },
        l = function (e, t) {
          var r,
            n,
            o,
            u,
            i = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (u = { next: c(0), throw: c(1), return: c(2) }),
            "function" === typeof Symbol &&
              (u[Symbol.iterator] = function () {
                return this;
              }),
            u
          );
          function c(u) {
            return function (c) {
              return (function (u) {
                if (r) throw new TypeError("Generator is already executing.");
                for (; i; )
                  try {
                    if (
                      ((r = 1),
                      n &&
                        (o =
                          2 & u[0]
                            ? n.return
                            : u[0]
                            ? n.throw || ((o = n.return) && o.call(n), 0)
                            : n.next) &&
                        !(o = o.call(n, u[1])).done)
                    )
                      return o;
                    switch (((n = 0), o && (u = [2 & u[0], o.value]), u[0])) {
                      case 0:
                      case 1:
                        o = u;
                        break;
                      case 4:
                        return i.label++, { value: u[1], done: !1 };
                      case 5:
                        i.label++, (n = u[1]), (u = [0]);
                        continue;
                      case 7:
                        (u = i.ops.pop()), i.trys.pop();
                        continue;
                      default:
                        if (
                          !(o = (o = i.trys).length > 0 && o[o.length - 1]) &&
                          (6 === u[0] || 2 === u[0])
                        ) {
                          i = 0;
                          continue;
                        }
                        if (
                          3 === u[0] &&
                          (!o || (u[1] > o[0] && u[1] < o[3]))
                        ) {
                          i.label = u[1];
                          break;
                        }
                        if (6 === u[0] && i.label < o[1]) {
                          (i.label = o[1]), (o = u);
                          break;
                        }
                        if (o && i.label < o[2]) {
                          (i.label = o[2]), i.ops.push(u);
                          break;
                        }
                        o[2] && i.ops.pop(), i.trys.pop();
                        continue;
                    }
                    u = t.call(e, i);
                  } catch (c) {
                    (u = [6, c]), (n = 0);
                  } finally {
                    r = o = 0;
                  }
                if (5 & u[0]) throw u[1];
                return { value: u[0] ? u[1] : void 0, done: !0 };
              })([u, c]);
            };
          }
        },
        y = function (e, t) {
          var r = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              t.indexOf(n) < 0 &&
              (r[n] = e[n]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (n = Object.getOwnPropertySymbols(e); o < n.length; o++)
              t.indexOf(n[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
                (r[n[o]] = e[n[o]]);
          }
          return r;
        },
        d = {
          storeKey: "__NEXT_REDUX_STORE__",
          debug: !1,
          serializeState: function (e) {
            return e;
          },
          deserializeState: function (e) {
            return e;
          },
        },
        v = r(9148);
      function b(e, t, r, n, o, u, i) {
        try {
          var c = e[u](i),
            a = c.value;
        } catch (f) {
          return void r(f);
        }
        c.done ? t(a) : Promise.resolve(a).then(n, o);
      }
      function h(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function m(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function w(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function g(e) {
        return (g = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(r).filter(function (e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable;
              })
            )),
            n.forEach(function (t) {
              w(e, t, r[t]);
            });
        }
        return e;
      }
      function P(e, t) {
        return !t || ("object" !== E(t) && "function" !== typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function S(e, t) {
        return (S =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var E = function (e) {
        return e && "undefined" !== typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      };
      function j(e) {
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
            n = g(e);
          if (t) {
            var o = g(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return P(this, r);
        };
      }
      var x = (function (e) {
          !(function (e, t) {
            if ("function" !== typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && S(e, t);
          })(a, e);
          var t,
            r,
            n,
            i = j(a);
          function a() {
            return h(this, a), i.apply(this, arguments);
          }
          return (
            (t = a),
            (n = [
              {
                key: "getInitialProps",
                value: function (e) {
                  var t,
                    r = e.Component,
                    n = e.ctx;
                  return ((t = o().mark(function e() {
                    var t;
                    return o().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!r.getInitialProps) {
                              e.next = 6;
                              break;
                            }
                            return (e.next = 3), r.getInitialProps(n);
                          case 3:
                            (e.t0 = e.sent), (e.next = 7);
                            break;
                          case 6:
                            e.t0 = {};
                          case 7:
                            return (
                              (t = e.t0), e.abrupt("return", { pageProps: t })
                            );
                          case 9:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })),
                  function () {
                    var e = this,
                      r = arguments;
                    return new Promise(function (n, o) {
                      var u = t.apply(e, r);
                      function i(e) {
                        b(u, n, o, i, c, "next", e);
                      }
                      function c(e) {
                        b(u, n, o, i, c, "throw", e);
                      }
                      i(void 0);
                    });
                  })();
                },
              },
            ]),
            (r = [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.Component,
                    r = e.pageProps,
                    n = e.store;
                  return (0, u.jsx)(c.zt, {
                    store: n,
                    children: (0, u.jsx)(t, O({}, r)),
                  });
                },
              },
            ]) && m(t.prototype, r),
            n && m(t, n),
            a
          );
        })(i.default),
        _ = (function (e, t) {
          t = s(s({}, d), t);
          var r = "undefined" === typeof window,
            n = function (n) {
              var o = n.initialState,
                u = n.ctx,
                i = t.storeKey,
                c = function () {
                  return e(
                    t.deserializeState(o),
                    s(s(s({}, u), t), { isServer: r })
                  );
                };
              return r ? c() : (i in window || (window[i] = c()), window[i]);
            };
          return function (e) {
            var o;
            return (
              ((o = (function (r) {
                function o(e, o) {
                  var u = r.call(this, e, o) || this,
                    i = e.initialState;
                  return (
                    t.debug &&
                      console.log(
                        "4. WrappedApp.render created new store with initialState",
                        i
                      ),
                    (u.store = n({ initialState: i })),
                    u
                  );
                }
                return (
                  f(o, r),
                  (o.prototype.render = function () {
                    var t = this.props,
                      r = t.initialProps,
                      n =
                        (t.initialState,
                        y(t, ["initialProps", "initialState"]));
                    return a.createElement(
                      e,
                      s({}, n, r, { store: this.store })
                    );
                  }),
                  o
                );
              })(a.Component)).displayName =
                "withRedux(" + (e.displayName || e.name || "App") + ")"),
              (o.getInitialProps = function (o) {
                return p(void 0, void 0, void 0, function () {
                  var u, i;
                  return l(this, function (c) {
                    switch (c.label) {
                      case 0:
                        if (!o) throw new Error("No app context");
                        if (!o.ctx) throw new Error("No page context");
                        return (
                          (u = n({ ctx: o.ctx })),
                          t.debug &&
                            console.log(
                              "1. WrappedApp.getInitialProps wrapper got the store with state",
                              u.getState()
                            ),
                          (o.ctx.store = u),
                          (o.ctx.isServer = r),
                          (i = {}),
                          "getInitialProps" in e
                            ? [4, e.getInitialProps.call(e, o)]
                            : [3, 2]
                        );
                      case 1:
                        (i = c.sent()), (c.label = 2);
                      case 2:
                        return (
                          t.debug &&
                            console.log(
                              "3. WrappedApp.getInitialProps has store state",
                              u.getState()
                            ),
                          [
                            2,
                            {
                              isServer: r,
                              initialState: r
                                ? t.serializeState(u.getState())
                                : u.getState(),
                              initialProps: i,
                            },
                          ]
                        );
                    }
                  });
                });
              }),
              o
            );
          };
        })(function () {
          return v.Z;
        })(x);
    },
    9148: function (e, t, r) {
      "use strict";
      function n(e) {
        return (n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function o(e) {
        var t = (function (e, t) {
          if ("object" !== n(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var o = r.call(e, t || "default");
            if ("object" !== n(o)) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === n(t) ? t : String(t);
      }
      function u(e, t, r) {
        return (
          (t = o(t)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function i(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(r), !0).forEach(function (t) {
                u(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : i(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function a(e) {
        return (
          "Minified Redux error #" +
          e +
          "; visit https://redux.js.org/Errors?code=" +
          e +
          " for the full message or use the non-minified dev environment for full errors. "
        );
      }
      r.d(t, {
        Z: function () {
          return w;
        },
      });
      var f =
          ("function" === typeof Symbol && Symbol.observable) || "@@observable",
        s = function () {
          return Math.random().toString(36).substring(7).split("").join(".");
        },
        p = {
          INIT: "@@redux/INIT" + s(),
          REPLACE: "@@redux/REPLACE" + s(),
          PROBE_UNKNOWN_ACTION: function () {
            return "@@redux/PROBE_UNKNOWN_ACTION" + s();
          },
        };
      function l(e) {
        if ("object" !== typeof e || null === e) return !1;
        for (var t = e; null !== Object.getPrototypeOf(t); )
          t = Object.getPrototypeOf(t);
        return Object.getPrototypeOf(e) === t;
      }
      function y(e, t, r) {
        var n;
        if (
          ("function" === typeof t && "function" === typeof r) ||
          ("function" === typeof r && "function" === typeof arguments[3])
        )
          throw new Error(a(0));
        if (
          ("function" === typeof t &&
            "undefined" === typeof r &&
            ((r = t), (t = void 0)),
          "undefined" !== typeof r)
        ) {
          if ("function" !== typeof r) throw new Error(a(1));
          return r(y)(e, t);
        }
        if ("function" !== typeof e) throw new Error(a(2));
        var o = e,
          u = t,
          i = [],
          c = i,
          s = !1;
        function d() {
          c === i && (c = i.slice());
        }
        function v() {
          if (s) throw new Error(a(3));
          return u;
        }
        function b(e) {
          if ("function" !== typeof e) throw new Error(a(4));
          if (s) throw new Error(a(5));
          var t = !0;
          return (
            d(),
            c.push(e),
            function () {
              if (t) {
                if (s) throw new Error(a(6));
                (t = !1), d();
                var r = c.indexOf(e);
                c.splice(r, 1), (i = null);
              }
            }
          );
        }
        function h(e) {
          if (!l(e)) throw new Error(a(7));
          if ("undefined" === typeof e.type) throw new Error(a(8));
          if (s) throw new Error(a(9));
          try {
            (s = !0), (u = o(u, e));
          } finally {
            s = !1;
          }
          for (var t = (i = c), r = 0; r < t.length; r++) {
            (0, t[r])();
          }
          return e;
        }
        function m(e) {
          if ("function" !== typeof e) throw new Error(a(10));
          (o = e), h({ type: p.REPLACE });
        }
        function w() {
          var e,
            t = b;
          return (
            ((e = {
              subscribe: function (e) {
                if ("object" !== typeof e || null === e) throw new Error(a(11));
                function r() {
                  e.next && e.next(v());
                }
                return r(), { unsubscribe: t(r) };
              },
            })[f] = function () {
              return this;
            }),
            e
          );
        }
        return (
          h({ type: p.INIT }),
          ((n = { dispatch: h, subscribe: b, getState: v, replaceReducer: m })[
            f
          ] = w),
          n
        );
      }
      function d() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return 0 === t.length
          ? function (e) {
              return e;
            }
          : 1 === t.length
          ? t[0]
          : t.reduce(function (e, t) {
              return function () {
                return e(t.apply(void 0, arguments));
              };
            });
      }
      function v(e) {
        return function (t) {
          var r = t.dispatch,
            n = t.getState;
          return function (t) {
            return function (o) {
              return "function" === typeof o ? o(r, n, e) : t(o);
            };
          };
        };
      }
      var b = v();
      b.withExtraArgument = v;
      var h = b,
        m = { newsDetails: [] },
        w = y(
          (function (e) {
            for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
              var o = t[n];
              0, "function" === typeof e[o] && (r[o] = e[o]);
            }
            var u,
              i = Object.keys(r);
            try {
              !(function (e) {
                Object.keys(e).forEach(function (t) {
                  var r = e[t];
                  if ("undefined" === typeof r(void 0, { type: p.INIT }))
                    throw new Error(a(12));
                  if (
                    "undefined" ===
                    typeof r(void 0, { type: p.PROBE_UNKNOWN_ACTION() })
                  )
                    throw new Error(a(13));
                });
              })(r);
            } catch (c) {
              u = c;
            }
            return function (e, t) {
              if ((void 0 === e && (e = {}), u)) throw u;
              for (var n = !1, o = {}, c = 0; c < i.length; c++) {
                var f = i[c],
                  s = r[f],
                  p = e[f],
                  l = s(p, t);
                if ("undefined" === typeof l) {
                  t && t.type;
                  throw new Error(a(14));
                }
                (o[f] = l), (n = n || l !== p);
              }
              return (n = n || i.length !== Object.keys(e).length) ? o : e;
            };
          })({
            newsDetails: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : m,
                t = arguments.length > 1 ? arguments[1] : void 0;
              switch (t.type) {
                case "NEWS_DETAILS_SUCCESS":
                  return Object.assign({}, e, { newsDetails: t.newsDetails });
              }
              return e;
            },
          }),
          (function () {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
              t[r] = arguments[r];
            return function (e) {
              return function () {
                var r = e.apply(void 0, arguments),
                  n = function () {
                    throw new Error(a(15));
                  },
                  o = {
                    getState: r.getState,
                    dispatch: function () {
                      return n.apply(void 0, arguments);
                    },
                  },
                  u = t.map(function (e) {
                    return e(o);
                  });
                return (
                  (n = d.apply(void 0, u)(r.dispatch)),
                  c(c({}, r), {}, { dispatch: n })
                );
              };
            };
          })(h)
        );
    },
    6136: function () {},
    9921: function (e, t) {
      "use strict";
      var r = "function" === typeof Symbol && Symbol.for,
        n = r ? Symbol.for("react.element") : 60103,
        o = r ? Symbol.for("react.portal") : 60106,
        u = r ? Symbol.for("react.fragment") : 60107,
        i = r ? Symbol.for("react.strict_mode") : 60108,
        c = r ? Symbol.for("react.profiler") : 60114,
        a = r ? Symbol.for("react.provider") : 60109,
        f = r ? Symbol.for("react.context") : 60110,
        s = r ? Symbol.for("react.async_mode") : 60111,
        p = r ? Symbol.for("react.concurrent_mode") : 60111,
        l = r ? Symbol.for("react.forward_ref") : 60112,
        y = r ? Symbol.for("react.suspense") : 60113,
        d = r ? Symbol.for("react.suspense_list") : 60120,
        v = r ? Symbol.for("react.memo") : 60115,
        b = r ? Symbol.for("react.lazy") : 60116,
        h = r ? Symbol.for("react.block") : 60121,
        m = r ? Symbol.for("react.fundamental") : 60117,
        w = r ? Symbol.for("react.responder") : 60118,
        g = r ? Symbol.for("react.scope") : 60119;
      function O(e) {
        if ("object" === typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case n:
              switch ((e = e.type)) {
                case s:
                case p:
                case u:
                case c:
                case i:
                case y:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case f:
                    case l:
                    case b:
                    case v:
                    case a:
                      return e;
                    default:
                      return t;
                  }
              }
            case o:
              return t;
          }
        }
      }
      function P(e) {
        return O(e) === p;
      }
      (t.AsyncMode = s),
        (t.ConcurrentMode = p),
        (t.ContextConsumer = f),
        (t.ContextProvider = a),
        (t.Element = n),
        (t.ForwardRef = l),
        (t.Fragment = u),
        (t.Lazy = b),
        (t.Memo = v),
        (t.Portal = o),
        (t.Profiler = c),
        (t.StrictMode = i),
        (t.Suspense = y),
        (t.isAsyncMode = function (e) {
          return P(e) || O(e) === s;
        }),
        (t.isConcurrentMode = P),
        (t.isContextConsumer = function (e) {
          return O(e) === f;
        }),
        (t.isContextProvider = function (e) {
          return O(e) === a;
        }),
        (t.isElement = function (e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }),
        (t.isForwardRef = function (e) {
          return O(e) === l;
        }),
        (t.isFragment = function (e) {
          return O(e) === u;
        }),
        (t.isLazy = function (e) {
          return O(e) === b;
        }),
        (t.isMemo = function (e) {
          return O(e) === v;
        }),
        (t.isPortal = function (e) {
          return O(e) === o;
        }),
        (t.isProfiler = function (e) {
          return O(e) === c;
        }),
        (t.isStrictMode = function (e) {
          return O(e) === i;
        }),
        (t.isSuspense = function (e) {
          return O(e) === y;
        }),
        (t.isValidElementType = function (e) {
          return (
            "string" === typeof e ||
            "function" === typeof e ||
            e === u ||
            e === p ||
            e === c ||
            e === i ||
            e === y ||
            e === d ||
            ("object" === typeof e &&
              null !== e &&
              (e.$$typeof === b ||
                e.$$typeof === v ||
                e.$$typeof === a ||
                e.$$typeof === f ||
                e.$$typeof === l ||
                e.$$typeof === m ||
                e.$$typeof === w ||
                e.$$typeof === g ||
                e.$$typeof === h))
          );
        }),
        (t.typeOf = O);
    },
    9864: function (e, t, r) {
      "use strict";
      e.exports = r(9921);
    },
    6628: function (e, t, r) {
      "use strict";
      r.d(t, {
        zt: function () {
          return s;
        },
        $j: function () {
          return U;
        },
      });
      var n = r(7294),
        o = n.createContext(null);
      var u = function (e) {
          e();
        },
        i = function () {
          return u;
        };
      var c = {
        notify: function () {},
        get: function () {
          return [];
        },
      };
      function a(e, t) {
        var r,
          n = c;
        function o() {
          a.onStateChange && a.onStateChange();
        }
        function u() {
          r ||
            ((r = t ? t.addNestedSub(o) : e.subscribe(o)),
            (n = (function () {
              var e = i(),
                t = null,
                r = null;
              return {
                clear: function () {
                  (t = null), (r = null);
                },
                notify: function () {
                  e(function () {
                    for (var e = t; e; ) e.callback(), (e = e.next);
                  });
                },
                get: function () {
                  for (var e = [], r = t; r; ) e.push(r), (r = r.next);
                  return e;
                },
                subscribe: function (e) {
                  var n = !0,
                    o = (r = { callback: e, next: null, prev: r });
                  return (
                    o.prev ? (o.prev.next = o) : (t = o),
                    function () {
                      n &&
                        null !== t &&
                        ((n = !1),
                        o.next ? (o.next.prev = o.prev) : (r = o.prev),
                        o.prev ? (o.prev.next = o.next) : (t = o.next));
                    }
                  );
                },
              };
            })()));
        }
        var a = {
          addNestedSub: function (e) {
            return u(), n.subscribe(e);
          },
          notifyNestedSubs: function () {
            n.notify();
          },
          handleChangeWrapper: o,
          isSubscribed: function () {
            return Boolean(r);
          },
          trySubscribe: u,
          tryUnsubscribe: function () {
            r && (r(), (r = void 0), n.clear(), (n = c));
          },
          getListeners: function () {
            return n;
          },
        };
        return a;
      }
      var f =
        "undefined" !== typeof window &&
        "undefined" !== typeof window.document &&
        "undefined" !== typeof window.document.createElement
          ? n.useLayoutEffect
          : n.useEffect;
      var s = function (e) {
        var t = e.store,
          r = e.context,
          u = e.children,
          i = (0, n.useMemo)(
            function () {
              var e = a(t);
              return { store: t, subscription: e };
            },
            [t]
          ),
          c = (0, n.useMemo)(
            function () {
              return t.getState();
            },
            [t]
          );
        f(
          function () {
            var e = i.subscription;
            return (
              (e.onStateChange = e.notifyNestedSubs),
              e.trySubscribe(),
              c !== t.getState() && e.notifyNestedSubs(),
              function () {
                e.tryUnsubscribe(), (e.onStateChange = null);
              }
            );
          },
          [i, c]
        );
        var s = r || o;
        return n.createElement(s.Provider, { value: i }, u);
      };
      function p() {
        return (p = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      function l(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = {},
          u = Object.keys(e);
        for (n = 0; n < u.length; n++)
          (r = u[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
        return o;
      }
      var y = r(8679),
        d = r.n(y),
        v = r(2973),
        b = [
          "getDisplayName",
          "methodName",
          "renderCountProp",
          "shouldHandleStateChanges",
          "storeKey",
          "withRef",
          "forwardRef",
          "context",
        ],
        h = ["reactReduxForwardedRef"],
        m = [],
        w = [null, null];
      function g(e, t) {
        var r = e[1];
        return [t.payload, r + 1];
      }
      function O(e, t, r) {
        f(function () {
          return e.apply(void 0, t);
        }, r);
      }
      function P(e, t, r, n, o, u, i) {
        (e.current = n),
          (t.current = o),
          (r.current = !1),
          u.current && ((u.current = null), i());
      }
      function S(e, t, r, n, o, u, i, c, a, f) {
        if (e) {
          var s = !1,
            p = null,
            l = function () {
              if (!s) {
                var e,
                  r,
                  l = t.getState();
                try {
                  e = n(l, o.current);
                } catch (y) {
                  (r = y), (p = y);
                }
                r || (p = null),
                  e === u.current
                    ? i.current || a()
                    : ((u.current = e),
                      (c.current = e),
                      (i.current = !0),
                      f({ type: "STORE_UPDATED", payload: { error: r } }));
              }
            };
          (r.onStateChange = l), r.trySubscribe(), l();
          return function () {
            if (((s = !0), r.tryUnsubscribe(), (r.onStateChange = null), p))
              throw p;
          };
        }
      }
      var E = function () {
        return [null, 0];
      };
      function j(e, t) {
        void 0 === t && (t = {});
        var r = t,
          u = r.getDisplayName,
          i =
            void 0 === u
              ? function (e) {
                  return "ConnectAdvanced(" + e + ")";
                }
              : u,
          c = r.methodName,
          f = void 0 === c ? "connectAdvanced" : c,
          s = r.renderCountProp,
          y = void 0 === s ? void 0 : s,
          j = r.shouldHandleStateChanges,
          x = void 0 === j || j,
          _ = r.storeKey,
          C = void 0 === _ ? "store" : _,
          N = (r.withRef, r.forwardRef),
          R = void 0 !== N && N,
          T = r.context,
          M = void 0 === T ? o : T,
          $ = l(r, b),
          k = M;
        return function (t) {
          var r = t.displayName || t.name || "Component",
            o = i(r),
            u = p({}, $, {
              getDisplayName: i,
              methodName: f,
              renderCountProp: y,
              shouldHandleStateChanges: x,
              storeKey: C,
              displayName: o,
              wrappedComponentName: r,
              WrappedComponent: t,
            }),
            c = $.pure;
          var s = c
            ? n.useMemo
            : function (e) {
                return e();
              };
          function b(r) {
            var o = (0, n.useMemo)(
                function () {
                  var e = r.reactReduxForwardedRef,
                    t = l(r, h);
                  return [r.context, e, t];
                },
                [r]
              ),
              i = o[0],
              c = o[1],
              f = o[2],
              y = (0, n.useMemo)(
                function () {
                  return i &&
                    i.Consumer &&
                    (0, v.isContextConsumer)(n.createElement(i.Consumer, null))
                    ? i
                    : k;
                },
                [i, k]
              ),
              d = (0, n.useContext)(y),
              b =
                Boolean(r.store) &&
                Boolean(r.store.getState) &&
                Boolean(r.store.dispatch);
            Boolean(d) && Boolean(d.store);
            var j = b ? r.store : d.store,
              _ = (0, n.useMemo)(
                function () {
                  return (function (t) {
                    return e(t.dispatch, u);
                  })(j);
                },
                [j]
              ),
              C = (0, n.useMemo)(
                function () {
                  if (!x) return w;
                  var e = a(j, b ? null : d.subscription),
                    t = e.notifyNestedSubs.bind(e);
                  return [e, t];
                },
                [j, b, d]
              ),
              N = C[0],
              R = C[1],
              T = (0, n.useMemo)(
                function () {
                  return b ? d : p({}, d, { subscription: N });
                },
                [b, d, N]
              ),
              M = (0, n.useReducer)(g, m, E),
              $ = M[0][0],
              D = M[1];
            if ($ && $.error) throw $.error;
            var I = (0, n.useRef)(),
              A = (0, n.useRef)(f),
              q = (0, n.useRef)(),
              B = (0, n.useRef)(!1),
              F = s(
                function () {
                  return q.current && f === A.current
                    ? q.current
                    : _(j.getState(), f);
                },
                [j, $, f]
              );
            O(P, [A, I, B, f, F, q, R]),
              O(S, [x, j, N, _, A, I, B, q, R, D], [j, N, _]);
            var W = (0, n.useMemo)(
              function () {
                return n.createElement(t, p({}, F, { ref: c }));
              },
              [c, t, F]
            );
            return (0, n.useMemo)(
              function () {
                return x ? n.createElement(y.Provider, { value: T }, W) : W;
              },
              [y, W, T]
            );
          }
          var j = c ? n.memo(b) : b;
          if (
            ((j.WrappedComponent = t), (j.displayName = b.displayName = o), R)
          ) {
            var _ = n.forwardRef(function (e, t) {
              return n.createElement(
                j,
                p({}, e, { reactReduxForwardedRef: t })
              );
            });
            return (_.displayName = o), (_.WrappedComponent = t), d()(_, t);
          }
          return d()(j, t);
        };
      }
      function x(e, t) {
        return e === t
          ? 0 !== e || 0 !== t || 1 / e === 1 / t
          : e !== e && t !== t;
      }
      function _(e, t) {
        if (x(e, t)) return !0;
        if (
          "object" !== typeof e ||
          null === e ||
          "object" !== typeof t ||
          null === t
        )
          return !1;
        var r = Object.keys(e),
          n = Object.keys(t);
        if (r.length !== n.length) return !1;
        for (var o = 0; o < r.length; o++)
          if (
            !Object.prototype.hasOwnProperty.call(t, r[o]) ||
            !x(e[r[o]], t[r[o]])
          )
            return !1;
        return !0;
      }
      function C(e) {
        return function (t, r) {
          var n = e(t, r);
          function o() {
            return n;
          }
          return (o.dependsOnOwnProps = !1), o;
        };
      }
      function N(e) {
        return null !== e.dependsOnOwnProps && void 0 !== e.dependsOnOwnProps
          ? Boolean(e.dependsOnOwnProps)
          : 1 !== e.length;
      }
      function R(e, t) {
        return function (t, r) {
          r.displayName;
          var n = function (e, t) {
            return n.dependsOnOwnProps ? n.mapToProps(e, t) : n.mapToProps(e);
          };
          return (
            (n.dependsOnOwnProps = !0),
            (n.mapToProps = function (t, r) {
              (n.mapToProps = e), (n.dependsOnOwnProps = N(e));
              var o = n(t, r);
              return (
                "function" === typeof o &&
                  ((n.mapToProps = o),
                  (n.dependsOnOwnProps = N(o)),
                  (o = n(t, r))),
                o
              );
            }),
            n
          );
        };
      }
      var T = [
        function (e) {
          return "function" === typeof e ? R(e) : void 0;
        },
        function (e) {
          return e
            ? void 0
            : C(function (e) {
                return { dispatch: e };
              });
        },
        function (e) {
          return e && "object" === typeof e
            ? C(function (t) {
                return (function (e, t) {
                  var r = {},
                    n = function (n) {
                      var o = e[n];
                      "function" === typeof o &&
                        (r[n] = function () {
                          return t(o.apply(void 0, arguments));
                        });
                    };
                  for (var o in e) n(o);
                  return r;
                })(e, t);
              })
            : void 0;
        },
      ];
      var M = [
        function (e) {
          return "function" === typeof e ? R(e) : void 0;
        },
        function (e) {
          return e
            ? void 0
            : C(function () {
                return {};
              });
        },
      ];
      function $(e, t, r) {
        return p({}, r, e, t);
      }
      var k = [
          function (e) {
            return "function" === typeof e
              ? (function (e) {
                  return function (t, r) {
                    r.displayName;
                    var n,
                      o = r.pure,
                      u = r.areMergedPropsEqual,
                      i = !1;
                    return function (t, r, c) {
                      var a = e(t, r, c);
                      return (
                        i ? (o && u(a, n)) || (n = a) : ((i = !0), (n = a)), n
                      );
                    };
                  };
                })(e)
              : void 0;
          },
          function (e) {
            return e
              ? void 0
              : function () {
                  return $;
                };
          },
        ],
        D = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
      function I(e, t, r, n) {
        return function (o, u) {
          return r(e(o, u), t(n, u), u);
        };
      }
      function A(e, t, r, n, o) {
        var u,
          i,
          c,
          a,
          f,
          s = o.areStatesEqual,
          p = o.areOwnPropsEqual,
          l = o.areStatePropsEqual,
          y = !1;
        function d(o, y) {
          var d = !p(y, i),
            v = !s(o, u, y, i);
          return (
            (u = o),
            (i = y),
            d && v
              ? ((c = e(u, i)),
                t.dependsOnOwnProps && (a = t(n, i)),
                (f = r(c, a, i)))
              : d
              ? (e.dependsOnOwnProps && (c = e(u, i)),
                t.dependsOnOwnProps && (a = t(n, i)),
                (f = r(c, a, i)))
              : v
              ? (function () {
                  var t = e(u, i),
                    n = !l(t, c);
                  return (c = t), n && (f = r(c, a, i)), f;
                })()
              : f
          );
        }
        return function (o, s) {
          return y
            ? d(o, s)
            : ((c = e((u = o), (i = s))),
              (a = t(n, i)),
              (f = r(c, a, i)),
              (y = !0),
              f);
        };
      }
      function q(e, t) {
        var r = t.initMapStateToProps,
          n = t.initMapDispatchToProps,
          o = t.initMergeProps,
          u = l(t, D),
          i = r(e, u),
          c = n(e, u),
          a = o(e, u);
        return (u.pure ? A : I)(i, c, a, e, u);
      }
      var B = [
        "pure",
        "areStatesEqual",
        "areOwnPropsEqual",
        "areStatePropsEqual",
        "areMergedPropsEqual",
      ];
      function F(e, t, r) {
        for (var n = t.length - 1; n >= 0; n--) {
          var o = t[n](e);
          if (o) return o;
        }
        return function (t, n) {
          throw new Error(
            "Invalid value of type " +
              typeof e +
              " for " +
              r +
              " argument when connecting component " +
              n.wrappedComponentName +
              "."
          );
        };
      }
      function W(e, t) {
        return e === t;
      }
      function z(e) {
        var t = void 0 === e ? {} : e,
          r = t.connectHOC,
          n = void 0 === r ? j : r,
          o = t.mapStateToPropsFactories,
          u = void 0 === o ? M : o,
          i = t.mapDispatchToPropsFactories,
          c = void 0 === i ? T : i,
          a = t.mergePropsFactories,
          f = void 0 === a ? k : a,
          s = t.selectorFactory,
          y = void 0 === s ? q : s;
        return function (e, t, r, o) {
          void 0 === o && (o = {});
          var i = o,
            a = i.pure,
            s = void 0 === a || a,
            d = i.areStatesEqual,
            v = void 0 === d ? W : d,
            b = i.areOwnPropsEqual,
            h = void 0 === b ? _ : b,
            m = i.areStatePropsEqual,
            w = void 0 === m ? _ : m,
            g = i.areMergedPropsEqual,
            O = void 0 === g ? _ : g,
            P = l(i, B),
            S = F(e, u, "mapStateToProps"),
            E = F(t, c, "mapDispatchToProps"),
            j = F(r, f, "mergeProps");
          return n(
            y,
            p(
              {
                methodName: "connect",
                getDisplayName: function (e) {
                  return "Connect(" + e + ")";
                },
                shouldHandleStateChanges: Boolean(e),
                initMapStateToProps: S,
                initMapDispatchToProps: E,
                initMergeProps: j,
                pure: s,
                areStatesEqual: v,
                areOwnPropsEqual: h,
                areStatePropsEqual: w,
                areMergedPropsEqual: O,
              },
              P
            )
          );
        };
      }
      var U = z();
      var K,
        L = r(3935);
      (K = L.unstable_batchedUpdates), (u = K);
    },
    8359: function (e, t) {
      "use strict";
      var r = 60103,
        n = 60106,
        o = 60107,
        u = 60108,
        i = 60114,
        c = 60109,
        a = 60110,
        f = 60112,
        s = 60113,
        p = 60120,
        l = 60115,
        y = 60116,
        d = 60121,
        v = 60122,
        b = 60117,
        h = 60129,
        m = 60131;
      if ("function" === typeof Symbol && Symbol.for) {
        var w = Symbol.for;
        (r = w("react.element")),
          (n = w("react.portal")),
          (o = w("react.fragment")),
          (u = w("react.strict_mode")),
          (i = w("react.profiler")),
          (c = w("react.provider")),
          (a = w("react.context")),
          (f = w("react.forward_ref")),
          (s = w("react.suspense")),
          (p = w("react.suspense_list")),
          (l = w("react.memo")),
          (y = w("react.lazy")),
          (d = w("react.block")),
          (v = w("react.server.block")),
          (b = w("react.fundamental")),
          (h = w("react.debug_trace_mode")),
          (m = w("react.legacy_hidden"));
      }
      function g(e) {
        if ("object" === typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case r:
              switch ((e = e.type)) {
                case o:
                case i:
                case u:
                case s:
                case p:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case a:
                    case f:
                    case y:
                    case l:
                    case c:
                      return e;
                    default:
                      return t;
                  }
              }
            case n:
              return t;
          }
        }
      }
      t.isContextConsumer = function (e) {
        return g(e) === a;
      };
    },
    2973: function (e, t, r) {
      "use strict";
      e.exports = r(8359);
    },
  },
  function (e) {
    var t = function (t) {
      return e((e.s = t));
    };
    e.O(0, [774, 179], function () {
      return t(1780), t(387);
    });
    var r = e.O();
    _N_E = r;
  },
]);
