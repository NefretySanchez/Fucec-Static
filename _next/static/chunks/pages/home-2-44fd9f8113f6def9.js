(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [976],
  {
    6361: function (t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/home-2",
        function () {
          return n(3586);
        },
      ]);
    },
    3586: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(5893),
        o = n(7294),
        u = n(8652),
        c = n(8105),
        i = n(1126);
      function f(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function a(t) {
        return (a = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function l(t, e) {
        return !e || ("object" !== p(e) && "function" !== typeof e)
          ? (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t)
          : e;
      }
      function s(t, e) {
        return (s =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      var p = function (t) {
        return t && "undefined" !== typeof Symbol && t.constructor === Symbol
          ? "symbol"
          : typeof t;
      };
      function y(t) {
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
            r = a(t);
          if (e) {
            var o = a(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return l(this, n);
        };
      }
      var b = (function (t) {
        !(function (t, e) {
          if ("function" !== typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null  or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && s(t, e);
        })(p, t);
        var e,
          n,
          a,
          l = y(p);
        function p(t) {
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, p),
            l.call(this, t)
          );
        }
        return (
          (e = p),
          (a = [
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
                    (0, r.jsx)(i.Z, {}),
                    (0, r.jsx)(u.Z, {}),
                    (0, r.jsx)(c.Z, {}),
                  ],
                });
              },
            },
          ]) && f(e.prototype, n),
          a && f(e, a),
          p
        );
      })(o.Component);
      e.default = b;
    },
  },
  function (t) {
    t.O(0, [774, 675, 282, 430, 655, 958, 606, 652, 888, 179], function () {
      return (e = 6361), t((t.s = e));
      var e;
    });
    var e = t.O();
    _N_E = e;
  },
]);
