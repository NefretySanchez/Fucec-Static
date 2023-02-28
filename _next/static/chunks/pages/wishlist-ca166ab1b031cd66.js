(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [737],
  {
    5026: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/wishlist",
        function () {
          return n(6509);
        },
      ]);
    },
    6509: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return w;
          },
        });
      var r = n(5893),
        c = n(7294),
        o = n(8462),
        s = n(254),
        a = n(4339),
        i = n(1664);
      function u(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function l(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function f(e) {
        return (f = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function d(e, t) {
        return !t || ("object" !== p(t) && "function" !== typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function h(e, t) {
        return (h =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var p = function (e) {
        return e && "undefined" !== typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      };
      function m(e) {
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
            r = f(e);
          if (t) {
            var c = f(this).constructor;
            n = Reflect.construct(r, arguments, c);
          } else n = r.apply(this, arguments);
          return d(this, n);
        };
      }
      var j = (function (e) {
        !(function (e, t) {
          if ("function" !== typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && h(e, t);
        })(s, e);
        var t,
          n,
          c,
          o = m(s);
        function s() {
          return u(this, s), o.apply(this, arguments);
        }
        return (
          (t = s),
          (n = [
            {
              key: "render",
              value: function () {
                return (0, r.jsxs)("main", {
                  children: [
                    (0, r.jsx)(a.Z, { pageTitle: "My Wishlist" }),
                    (0, r.jsx)("section", {
                      className: "cart-area pt-100 pb-100",
                      children: (0, r.jsx)("div", {
                        className: "container",
                        children: (0, r.jsx)("div", {
                          className: "row",
                          children: (0, r.jsx)("div", {
                            className: "col-12",
                            children: (0, r.jsx)("form", {
                              action: "#",
                              children: (0, r.jsx)("div", {
                                className: "table-content table-responsive",
                                children: (0, r.jsxs)("table", {
                                  className: "table",
                                  children: [
                                    (0, r.jsx)("thead", {
                                      children: (0, r.jsxs)("tr", {
                                        children: [
                                          (0, r.jsx)("th", {
                                            className: "product-thumbnail",
                                            children: "Images",
                                          }),
                                          (0, r.jsx)("th", {
                                            className: "cart-product-name",
                                            children: "Product",
                                          }),
                                          (0, r.jsx)("th", {
                                            className: "product-price",
                                            children: "Unit Price",
                                          }),
                                          (0, r.jsx)("th", {
                                            className: "product-quantity",
                                            children: "Quantity",
                                          }),
                                          (0, r.jsx)("th", {
                                            className: "product-subtotal",
                                            children: "Total",
                                          }),
                                          (0, r.jsx)("th", {
                                            className: "product-remove",
                                            children: "Remove",
                                          }),
                                        ],
                                      }),
                                    }),
                                    (0, r.jsxs)("tbody", {
                                      children: [
                                        (0, r.jsxs)("tr", {
                                          children: [
                                            (0, r.jsx)("td", {
                                              className: "product-thumbnail",
                                              children: (0, r.jsx)(i.default, {
                                                href: "/course-details",
                                                children: (0, r.jsx)("a", {
                                                  children: (0, r.jsx)("img", {
                                                    src: "assets/img/course/sm/cart-1.jpg",
                                                    alt: "img not found",
                                                  }),
                                                }),
                                              }),
                                            }),
                                            (0, r.jsx)("td", {
                                              className: "product-name",
                                              children: (0, r.jsx)(i.default, {
                                                href: "/course-details",
                                                children: (0, r.jsx)("a", {
                                                  children:
                                                    "Fundamentals of music theory Learn new",
                                                }),
                                              }),
                                            }),
                                            (0, r.jsx)("td", {
                                              className: "product-price",
                                              children: (0, r.jsx)("span", {
                                                className: "amount",
                                                children: "$130.00",
                                              }),
                                            }),
                                            (0, r.jsx)("td", {
                                              className: "product-quantity",
                                              children: (0, r.jsx)("button", {
                                                className: "e-btn e-btn-border",
                                                type: "submit",
                                                children: "Add TO Cart",
                                              }),
                                            }),
                                            (0, r.jsx)("td", {
                                              className: "product-subtotal",
                                              children: (0, r.jsx)("span", {
                                                className: "amount",
                                                children: "$130.00",
                                              }),
                                            }),
                                            (0, r.jsx)("td", {
                                              className: "product-remove",
                                              children: (0, r.jsx)("a", {
                                                href: "#",
                                                children: (0, r.jsx)("i", {
                                                  className: "fas fa-times",
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                        (0, r.jsxs)("tr", {
                                          children: [
                                            (0, r.jsx)("td", {
                                              className: "product-thumbnail",
                                              children: (0, r.jsx)(i.default, {
                                                href: "/course-details",
                                                children: (0, r.jsx)("a", {
                                                  children: (0, r.jsx)("img", {
                                                    src: "assets/img/course/sm/cart-2.jpg",
                                                    alt: "img not found",
                                                  }),
                                                }),
                                              }),
                                            }),
                                            (0, r.jsx)("td", {
                                              className: "product-name",
                                              children: (0, r.jsx)(i.default, {
                                                href: "/course-details",
                                                children: (0, r.jsx)("a", {
                                                  children:
                                                    "Strategy law and organization Foundation",
                                                }),
                                              }),
                                            }),
                                            (0, r.jsx)("td", {
                                              className: "product-price",
                                              children: (0, r.jsx)("span", {
                                                className: "amount",
                                                children: "$120.50",
                                              }),
                                            }),
                                            (0, r.jsx)("td", {
                                              className: "product-quantity",
                                              children: (0, r.jsx)("button", {
                                                className: "e-btn e-btn-border",
                                                type: "submit",
                                                children: "Add TO Cart",
                                              }),
                                            }),
                                            (0, r.jsx)("td", {
                                              className: "product-subtotal",
                                              children: (0, r.jsx)("span", {
                                                className: "amount",
                                                children: "$120.50",
                                              }),
                                            }),
                                            (0, r.jsx)("td", {
                                              className: "product-remove",
                                              children: (0, r.jsx)("a", {
                                                href: "#",
                                                children: (0, r.jsx)("i", {
                                                  className: "fas fa-times",
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
                            }),
                          }),
                        }),
                      }),
                    }),
                  ],
                });
              },
            },
          ]) && l(t.prototype, n),
          c && l(t, c),
          s
        );
      })(c.Component);
      function b(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function y(e) {
        return (y = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function x(e, t) {
        return !t || ("object" !== N(t) && "function" !== typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function v(e, t) {
        return (v =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var N = function (e) {
        return e && "undefined" !== typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      };
      function _(e) {
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
            r = y(e);
          if (t) {
            var c = y(this).constructor;
            n = Reflect.construct(r, arguments, c);
          } else n = r.apply(this, arguments);
          return x(this, n);
        };
      }
      var w = (function (e) {
        !(function (e, t) {
          if ("function" !== typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && v(e, t);
        })(u, e);
        var t,
          n,
          a,
          i = _(u);
        function u(e) {
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, u),
            i.call(this, e)
          );
        }
        return (
          (t = u),
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
                return (0, r.jsxs)(c.Fragment, {
                  children: [
                    (0, r.jsx)(o.Z, {}),
                    (0, r.jsx)(j, {}),
                    (0, r.jsx)(s.Z, {}),
                  ],
                });
              },
            },
          ]) && b(t.prototype, n),
          a && b(t, a),
          u
        );
      })(c.Component);
    },
  },
  function (e) {
    e.O(0, [675, 232, 775, 774, 888, 179], function () {
      return (t = 5026), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
