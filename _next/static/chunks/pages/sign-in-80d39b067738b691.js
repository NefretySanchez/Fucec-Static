(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [312],
  {
    4805: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/sign-in",
        function () {
          return t(3773);
        },
      ]);
    },
    3773: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return v;
          },
        });
      var r = t(5893),
        s = t(7294),
        i = t(254),
        c = t(1664);
      function o(e, n) {
        if (!(e instanceof n))
          throw new TypeError("Cannot call a class as a function");
      }
      function a(e, n) {
        for (var t = 0; t < n.length; t++) {
          var r = n[t];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function l(e) {
        return (l = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function u(e, n) {
        return !n || ("object" !== p(n) && "function" !== typeof n)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : n;
      }
      function f(e, n) {
        return (f =
          Object.setPrototypeOf ||
          function (e, n) {
            return (e.__proto__ = n), e;
          })(e, n);
      }
      var p = function (e) {
        return e && "undefined" !== typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      };
      function d(e) {
        var n = (function () {
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
          var t,
            r = l(e);
          if (n) {
            var s = l(this).constructor;
            t = Reflect.construct(r, arguments, s);
          } else t = r.apply(this, arguments);
          return u(this, t);
        };
      }
      var h = (function (e) {
          !(function (e, n) {
            if ("function" !== typeof n && null !== n)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(n && n.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              n && f(e, n);
          })(l, e);
          var n,
            t,
            s,
            i = d(l);
          function l() {
            return o(this, l), i.apply(this, arguments);
          }
          return (
            (n = l),
            (t = [
              {
                key: "render",
                value: function () {
                  return (0, r.jsx)("main", {
                    children: (0, r.jsxs)("section", {
                      className: "signup__area po-rel-z1 pt-100 pb-145",
                      children: [
                        (0, r.jsxs)("div", {
                          className: "sign__shape",
                          children: [
                            (0, r.jsx)("img", {
                              className: "man-1",
                              src: "assets/img/icon/sign/man-1.png",
                              alt: "img not found",
                            }),
                            (0, r.jsx)("img", {
                              className: "man-2",
                              src: "assets/img/icon/sign/man-2.png",
                              alt: "img not found",
                            }),
                            (0, r.jsx)("img", {
                              className: "circle",
                              src: "assets/img/icon/sign/circle.png",
                              alt: "img not found",
                            }),
                            (0, r.jsx)("img", {
                              className: "zigzag",
                              src: "assets/img/icon/sign/zigzag.png",
                              alt: "img not found",
                            }),
                            (0, r.jsx)("img", {
                              className: "dot",
                              src: "assets/img/icon/sign/dot.png",
                              alt: "img not found",
                            }),
                            (0, r.jsx)("img", {
                              className: "bg",
                              src: "assets/img/icon/sign/sign-up.png",
                              alt: "img not found",
                            }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className: "container",
                          children: [
                            (0, r.jsx)("div", {
                              className: "row",
                              children: (0, r.jsx)("div", {
                                className:
                                  "col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2",
                                children: (0, r.jsxs)("div", {
                                  className:
                                    "section__title-wrapper text-center mb-55",
                                  children: [
                                    (0, r.jsxs)("h2", {
                                      className: "section__title",
                                      children: [
                                        "Sign in to ",
                                        (0, r.jsx)("br", {}),
                                        "  recharge direct.",
                                      ],
                                    }),
                                    (0, r.jsxs)("p", {
                                      children: [
                                        "it you don't have an account you can ",
                                        (0, r.jsx)(c.default, {
                                          href: "/sign-up",
                                          children: (0, r.jsx)("a", {
                                            children: "Register here!",
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            }),
                            (0, r.jsx)("div", {
                              className: "row",
                              children: (0, r.jsx)("div", {
                                className:
                                  "col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2",
                                children: (0, r.jsxs)("div", {
                                  className: "sign__wrapper white-bg",
                                  children: [
                                    (0, r.jsx)("div", {
                                      className: "sign__header mb-35",
                                      children: (0, r.jsxs)("div", {
                                        className: "sign__in text-center",
                                        children: [
                                          (0, r.jsx)("a", {
                                            href: "#",
                                            className:
                                              "sign__social text-start mb-15",
                                            children: (0, r.jsx)("i", {
                                              className: "fab fa-facebook-f",
                                            }),
                                          }),
                                          (0, r.jsxs)("p", {
                                            children: [
                                              " ",
                                              (0, r.jsx)("span", {
                                                children: "........",
                                              }),
                                              " Or, ",
                                              (0, r.jsx)(c.default, {
                                                href: "/sign-in",
                                                children: (0, r.jsx)("a", {
                                                  children: "sign in",
                                                }),
                                              }),
                                              " with your email",
                                              (0, r.jsx)("span", {
                                                children: " ........",
                                              }),
                                              " ",
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                    (0, r.jsx)("div", {
                                      className: "sign__form",
                                      children: (0, r.jsxs)("form", {
                                        action: "#",
                                        children: [
                                          (0, r.jsxs)("div", {
                                            className:
                                              "sign__input-wrapper mb-25",
                                            children: [
                                              (0, r.jsx)("h5", {
                                                children: "Work email",
                                              }),
                                              (0, r.jsxs)("div", {
                                                className: "sign__input",
                                                children: [
                                                  (0, r.jsx)("input", {
                                                    type: "text",
                                                    placeholder:
                                                      "e-mail address",
                                                  }),
                                                  (0, r.jsx)("i", {
                                                    className:
                                                      "fas fa-envelope",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, r.jsxs)("div", {
                                            className:
                                              "sign__input-wrapper mb-10",
                                            children: [
                                              (0, r.jsx)("h5", {
                                                children: "Password",
                                              }),
                                              (0, r.jsxs)("div", {
                                                className: "sign__input",
                                                children: [
                                                  (0, r.jsx)("input", {
                                                    type: "text",
                                                    placeholder: "Password",
                                                  }),
                                                  (0, r.jsx)("i", {
                                                    className: "fas fa-lock",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, r.jsxs)("div", {
                                            className:
                                              "sign__action d-sm-flex justify-content-between mb-30",
                                            children: [
                                              (0, r.jsxs)("div", {
                                                className:
                                                  "sign__agree d-flex align-items-center",
                                                children: [
                                                  (0, r.jsx)("input", {
                                                    className: "m-check-input",
                                                    type: "checkbox",
                                                    id: "m-agree",
                                                  }),
                                                  (0, r.jsx)("label", {
                                                    className: "m-check-label",
                                                    htmlFor: "m-agree",
                                                    children:
                                                      "Keep me signed in",
                                                  }),
                                                ],
                                              }),
                                              (0, r.jsx)("div", {
                                                className: "sign__forgot",
                                                children: (0, r.jsx)("a", {
                                                  href: "#",
                                                  children:
                                                    "Forgot your password?",
                                                }),
                                              }),
                                            ],
                                          }),
                                          (0, r.jsxs)("button", {
                                            className: "e-btn w-100",
                                            children: [
                                              " ",
                                              (0, r.jsx)("span", {}),
                                              " Sign In",
                                            ],
                                          }),
                                          (0, r.jsx)("div", {
                                            className:
                                              "sign__new text-center mt-20",
                                            children: (0, r.jsxs)("p", {
                                              children: [
                                                "New to Markit? ",
                                                (0, r.jsx)(c.default, {
                                                  href: "/sign-up",
                                                  children: (0, r.jsx)("a", {
                                                    children: "Sign Up",
                                                  }),
                                                }),
                                              ],
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  });
                },
              },
            ]) && a(n.prototype, t),
            s && a(n, s),
            l
          );
        })(s.Component),
        m = t(1675);
      function g(e, n) {
        for (var t = 0; t < n.length; t++) {
          var r = n[t];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function x(e) {
        return (x = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function j(e, n) {
        return !n || ("object" !== y(n) && "function" !== typeof n)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : n;
      }
      function _(e, n) {
        return (_ =
          Object.setPrototypeOf ||
          function (e, n) {
            return (e.__proto__ = n), e;
          })(e, n);
      }
      var y = function (e) {
        return e && "undefined" !== typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      };
      function b(e) {
        var n = (function () {
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
          var t,
            r = x(e);
          if (n) {
            var s = x(this).constructor;
            t = Reflect.construct(r, arguments, s);
          } else t = r.apply(this, arguments);
          return j(this, t);
        };
      }
      var v = (function (e) {
        !(function (e, n) {
          if ("function" !== typeof n && null !== n)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(n && n.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            n && _(e, n);
        })(a, e);
        var n,
          t,
          c,
          o = b(a);
        function a(e) {
          return (
            (function (e, n) {
              if (!(e instanceof n))
                throw new TypeError("Cannot call a class as a function");
            })(this, a),
            o.call(this, e)
          );
        }
        return (
          (n = a),
          (c = [
            {
              key: "getInitialProps",
              value: function (e) {
                e.store;
              },
            },
          ]),
          (t = [
            {
              key: "render",
              value: function () {
                return (0, r.jsxs)(s.Fragment, {
                  children: [
                    (0, r.jsx)(m.Z, {}),
                    (0, r.jsx)(h, {}),
                    (0, r.jsx)(i.Z, {}),
                  ],
                });
              },
            },
          ]) && g(n.prototype, t),
          c && g(n, c),
          a
        );
      })(s.Component);
    },
  },
  function (e) {
    e.O(0, [675, 232, 920, 774, 888, 179], function () {
      return (n = 4805), e((e.s = n));
      var n;
    });
    var n = e.O();
    _N_E = n;
  },
]);
