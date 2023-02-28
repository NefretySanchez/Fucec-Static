(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [801],
  {
    7590: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/sign-up",
        function () {
          return t(4905);
        },
      ]);
    },
    4905: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return v;
          },
        });
      var s = t(5893),
        r = t(7294),
        i = t(254),
        c = t(1675),
        o = t(1664);
      function a(e, n) {
        if (!(e instanceof n))
          throw new TypeError("Cannot call a class as a function");
      }
      function l(e, n) {
        for (var t = 0; t < n.length; t++) {
          var s = n[t];
          (s.enumerable = s.enumerable || !1),
            (s.configurable = !0),
            "value" in s && (s.writable = !0),
            Object.defineProperty(e, s.key, s);
        }
      }
      function u(e) {
        return (u = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function f(e, n) {
        return !n || ("object" !== d(n) && "function" !== typeof n)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : n;
      }
      function p(e, n) {
        return (p =
          Object.setPrototypeOf ||
          function (e, n) {
            return (e.__proto__ = n), e;
          })(e, n);
      }
      var d = function (e) {
        return e && "undefined" !== typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      };
      function m(e) {
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
            s = u(e);
          if (n) {
            var r = u(this).constructor;
            t = Reflect.construct(s, arguments, r);
          } else t = s.apply(this, arguments);
          return f(this, t);
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
            n && p(e, n);
        })(c, e);
        var n,
          t,
          r,
          i = m(c);
        function c() {
          return a(this, c), i.apply(this, arguments);
        }
        return (
          (n = c),
          (t = [
            {
              key: "render",
              value: function () {
                return (0, s.jsx)("main", {
                  children: (0, s.jsxs)("section", {
                    className: "signup__area po-rel-z1 pt-100 pb-145",
                    children: [
                      (0, s.jsxs)("div", {
                        className: "sign__shape",
                        children: [
                          (0, s.jsx)("img", {
                            className: "man-1",
                            src: "assets/img/icon/sign/man-3.png",
                            alt: "img not found",
                          }),
                          (0, s.jsx)("img", {
                            className: "man-2 man-22",
                            src: "assets/img/icon/sign/man-2.png",
                            alt: "img not found",
                          }),
                          (0, s.jsx)("img", {
                            className: "circle",
                            src: "assets/img/icon/sign/circle.png",
                            alt: "img not found",
                          }),
                          (0, s.jsx)("img", {
                            className: "zigzag",
                            src: "assets/img/icon/sign/zigzag.png",
                            alt: "img not found",
                          }),
                          (0, s.jsx)("img", {
                            className: "dot",
                            src: "assets/img/icon/sign/dot.png",
                            alt: "img not found",
                          }),
                          (0, s.jsx)("img", {
                            className: "bg",
                            src: "assets/img/icon/sign/sign-up.png",
                            alt: "img not found",
                          }),
                          (0, s.jsx)("img", {
                            className: "flower",
                            src: "assets/img/icon/sign/flower.png",
                            alt: "img not found",
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "container",
                        children: [
                          (0, s.jsx)("div", {
                            className: "row",
                            children: (0, s.jsx)("div", {
                              className:
                                "col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2",
                              children: (0, s.jsxs)("div", {
                                className:
                                  "section__title-wrapper text-center mb-55",
                                children: [
                                  (0, s.jsxs)("h2", {
                                    className: "section__title",
                                    children: [
                                      "Create a free ",
                                      (0, s.jsx)("br", {}),
                                      "  Account",
                                    ],
                                  }),
                                  (0, s.jsx)("p", {
                                    children:
                                      "I'm a subhead that goes with a story.",
                                  }),
                                ],
                              }),
                            }),
                          }),
                          (0, s.jsx)("div", {
                            className: "row",
                            children: (0, s.jsx)("div", {
                              className:
                                "col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2",
                              children: (0, s.jsxs)("div", {
                                className: "sign__wrapper white-bg",
                                children: [
                                  (0, s.jsx)("div", {
                                    className: "sign__header mb-35",
                                    children: (0, s.jsxs)("div", {
                                      className: "sign__in text-center",
                                      children: [
                                        (0, s.jsxs)("a", {
                                          href: "#",
                                          className:
                                            "sign__social g-plus text-start mb-15",
                                          children: [
                                            (0, s.jsx)("i", {
                                              className: "fab fa-google",
                                            }),
                                            "Sign Up with Google",
                                          ],
                                        }),
                                        (0, s.jsxs)("p", {
                                          children: [
                                            " ",
                                            (0, s.jsx)("span", {
                                              children: "........",
                                            }),
                                            " Or, ",
                                            (0, s.jsx)(o.default, {
                                              href: "/sign-up",
                                              children: (0, s.jsx)("a", {
                                                children: "sign up",
                                              }),
                                            }),
                                            " with your email",
                                            (0, s.jsx)("span", {
                                              children: " ........",
                                            }),
                                            " ",
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, s.jsx)("div", {
                                    className: "sign__form",
                                    children: (0, s.jsxs)("form", {
                                      action: "#",
                                      children: [
                                        (0, s.jsxs)("div", {
                                          className:
                                            "sign__input-wrapper mb-25",
                                          children: [
                                            (0, s.jsx)("h5", {
                                              children: "Full Name",
                                            }),
                                            (0, s.jsxs)("div", {
                                              className: "sign__input",
                                              children: [
                                                (0, s.jsx)("input", {
                                                  type: "text",
                                                  placeholder: "Full name",
                                                }),
                                                (0, s.jsx)("i", {
                                                  className: "fas fa-user",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, s.jsxs)("div", {
                                          className:
                                            "sign__input-wrapper mb-25",
                                          children: [
                                            (0, s.jsx)("h5", {
                                              children: "Work email",
                                            }),
                                            (0, s.jsxs)("div", {
                                              className: "sign__input",
                                              children: [
                                                (0, s.jsx)("input", {
                                                  type: "text",
                                                  placeholder: "e-mail address",
                                                }),
                                                (0, s.jsx)("i", {
                                                  className: "fas fa-envelope",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, s.jsxs)("div", {
                                          className:
                                            "sign__input-wrapper mb-25",
                                          children: [
                                            (0, s.jsx)("h5", {
                                              children: "Password",
                                            }),
                                            (0, s.jsxs)("div", {
                                              className: "sign__input",
                                              children: [
                                                (0, s.jsx)("input", {
                                                  type: "text",
                                                  placeholder: "Password",
                                                }),
                                                (0, s.jsx)("i", {
                                                  className: "fas fa-lock",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, s.jsxs)("div", {
                                          className:
                                            "sign__input-wrapper mb-10",
                                          children: [
                                            (0, s.jsx)("h5", {
                                              children: "Re-Password",
                                            }),
                                            (0, s.jsxs)("div", {
                                              className: "sign__input",
                                              children: [
                                                (0, s.jsx)("input", {
                                                  type: "text",
                                                  placeholder: "Re-Password",
                                                }),
                                                (0, s.jsx)("i", {
                                                  className: "fas fa-lock",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, s.jsx)("div", {
                                          className:
                                            "sign__action d-flex justify-content-between mb-30",
                                          children: (0, s.jsxs)("div", {
                                            className:
                                              "sign__agree d-flex align-items-center",
                                            children: [
                                              (0, s.jsx)("input", {
                                                className: "m-check-input",
                                                type: "checkbox",
                                                id: "m-agree",
                                              }),
                                              (0, s.jsxs)("label", {
                                                className: "m-check-label",
                                                htmlFor: "m-agree",
                                                children: [
                                                  "I agree to the ",
                                                  (0, s.jsx)("a", {
                                                    href: "#",
                                                    children:
                                                      "Terms y Conditions",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, s.jsxs)("button", {
                                          className: "e-btn w-100",
                                          children: [
                                            " ",
                                            (0, s.jsx)("span", {}),
                                            " Sign Up",
                                          ],
                                        }),
                                        (0, s.jsx)("div", {
                                          className:
                                            "sign__new text-center mt-20",
                                          children: (0, s.jsxs)("p", {
                                            children: [
                                              "Already in Markit ? ",
                                              (0, s.jsx)(o.default, {
                                                href: "/sign-in",
                                                children: (0, s.jsx)("a", {
                                                  children: "Sign In",
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
          ]) && l(n.prototype, t),
          r && l(n, r),
          c
        );
      })(r.Component);
      function x(e, n) {
        for (var t = 0; t < n.length; t++) {
          var s = n[t];
          (s.enumerable = s.enumerable || !1),
            (s.configurable = !0),
            "value" in s && (s.writable = !0),
            Object.defineProperty(e, s.key, s);
        }
      }
      function g(e) {
        return (g = Object.setPrototypeOf
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
            s = g(e);
          if (n) {
            var r = g(this).constructor;
            t = Reflect.construct(s, arguments, r);
          } else t = s.apply(this, arguments);
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
        })(l, e);
        var n,
          t,
          o,
          a = b(l);
        function l(e) {
          return (
            (function (e, n) {
              if (!(e instanceof n))
                throw new TypeError("Cannot call a class as a function");
            })(this, l),
            a.call(this, e)
          );
        }
        return (
          (n = l),
          (o = [
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
                return (0, s.jsxs)(r.Fragment, {
                  children: [
                    (0, s.jsx)(c.Z, {}),
                    (0, s.jsx)(h, {}),
                    (0, s.jsx)(i.Z, {}),
                  ],
                });
              },
            },
          ]) && x(n.prototype, t),
          o && x(n, o),
          l
        );
      })(r.Component);
    },
  },
  function (e) {
    e.O(0, [675, 232, 920, 774, 888, 179], function () {
      return (n = 7590), e((e.s = n));
      var n;
    });
    var n = e.O();
    _N_E = n;
  },
]);
