(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [832],
  {
    5584: function (t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/formacion-continua",
        function () {
          return n(5180);
        },
      ]);
    },
    5180: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return P;
          },
        });
      var r = n(5893),
        o = n(7294),
        u = n(4339),
        c = n(7308),
        i = n(6517);
      function f(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function a(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function l(t) {
        return (l = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function s(t, e) {
        return !e || ("object" !== y(e) && "function" !== typeof e)
          ? (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t)
          : e;
      }
      function p(t, e) {
        return (p =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      var y = function (t) {
        return t && "undefined" !== typeof Symbol && t.constructor === Symbol
          ? "symbol"
          : typeof t;
      };
      function b(t) {
        var e = (function () {
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
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = l(t);
          if (e) {
            var o = l(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return s(this, n);
        };
      }
      var h = (function (t) {
          !(function (t, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && p(t, e);
          })(s, t);
          var e,
            n,
            o,
            l = b(s);
          function s() {
            return f(this, s), l.apply(this, arguments);
          }
          return (
            (e = s),
            (n = [
              {
                key: "render",
                value: function () {
                  return (0, r.jsxs)("main", {
                    children: [
                      (0, r.jsx)(u.Z, {
                        pageTitle: "Formaci\xf3n continua",
                        bannerImg: "Rect\xe1ngulo%20111.png",
                      }),
                      (0, r.jsx)(c.Z, {}),
                      (0, r.jsx)(i.Z, {}),
                    ],
                  });
                },
              },
            ]) && a(e.prototype, n),
            o && a(e, o),
            s
          );
        })(o.Component),
        v = n(8105),
        _ = n(1126);
      function d(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function O(t) {
        return (O = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function j(t, e) {
        return !e || ("object" !== w(e) && "function" !== typeof e)
          ? (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t)
          : e;
      }
      function m(t, e) {
        return (m =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      var w = function (t) {
        return t && "undefined" !== typeof Symbol && t.constructor === Symbol
          ? "symbol"
          : typeof t;
      };
      function g(t) {
        var e = (function () {
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
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = O(t);
          if (e) {
            var o = O(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return j(this, n);
        };
      }
      var P = (function (t) {
        !(function (t, e) {
          if ("function" !== typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && m(t, e);
        })(i, t);
        var e,
          n,
          u,
          c = g(i);
        function i(t) {
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, i),
            c.call(this, t)
          );
        }
        return (
          (e = i),
          (u = [
            {
              key: "getInitialProps",
              value: function (t) {
                t.store;
              },
            },
          ]),
          (n = [
            {
              key: "render",
              value: function () {
                return (0, r.jsxs)(o.Fragment, {
                  children: [
                    (0, r.jsx)(_.Z, { isHome: !1 }),
                    (0, r.jsx)(h, {}),
                    (0, r.jsx)(v.Z, {}),
                  ],
                });
              },
            },
          ]) && d(e.prototype, n),
          u && d(e, u),
          i
        );
      })(o.Component);
    },
  },
  function (t) {
    t.O(0, [774, 675, 282, 958, 387, 888, 179], function () {
      return (e = 5584), t((t.s = e));
      var e;
    });
    var e = t.O();
    _N_E = e;
  },
]);
