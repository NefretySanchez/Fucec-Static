(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [778],
  {
    6101: function (e, s, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/home-3",
        function () {
          return r(286);
        },
      ]);
    },
    286: function (e, s, r) {
      "use strict";
      r.r(s),
        r.d(s, {
          default: function () {
            return le;
          },
        });
      var n = r(5893),
        t = r(7294),
        l = r(266),
        i = r(1664);
      function c(e, s) {
        if (!(e instanceof s))
          throw new TypeError("Cannot call a class as a function");
      }
      function a(e, s) {
        for (var r = 0; r < s.length; r++) {
          var n = s[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function o(e) {
        return (o = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function d(e, s) {
        return !s || ("object" !== u(s) && "function" !== typeof s)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : s;
      }
      function h(e, s) {
        return (h =
          Object.setPrototypeOf ||
          function (e, s) {
            return (e.__proto__ = s), e;
          })(e, s);
      }
      var u = function (e) {
        return e && "undefined" !== typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      };
      function f(e) {
        var s = (function () {
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
            n = o(e);
          if (s) {
            var t = o(this).constructor;
            r = Reflect.construct(n, arguments, t);
          } else r = n.apply(this, arguments);
          return d(this, r);
        };
      }
      var x = (function (e) {
        !(function (e, s) {
          if ("function" !== typeof s && null !== s)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(s && s.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            s && h(e, s);
        })(o, e);
        var s,
          r,
          t,
          l = f(o);
        function o() {
          return c(this, o), l.apply(this, arguments);
        }
        return (
          (s = o),
          (r = [
            {
              key: "render",
              value: function () {
                return (0, n.jsx)("section", {
                  className: "course__area grey-bg pt-115 pb-120",
                  children: (0, n.jsxs)("div", {
                    className: "container",
                    children: [
                      (0, n.jsxs)("div", {
                        className: "row align-items-end",
                        children: [
                          (0, n.jsx)("div", {
                            className: "col-xxl-6 col-xl-6 col-lg-6 col-md-8",
                            children: (0, n.jsxs)("div", {
                              className: "section__title-wrapper mb-60",
                              children: [
                                (0, n.jsxs)("h2", {
                                  className: "section__title",
                                  children: [
                                    "Online",
                                    (0, n.jsxs)("span", {
                                      className: "yellow-bg",
                                      children: [
                                        " Courses ",
                                        (0, n.jsx)("img", {
                                          src: "assets/img/shape/yellow-bg-2.png",
                                          alt: "img not found",
                                        }),
                                      ],
                                    }),
                                    " ",
                                    (0, n.jsx)("br", {}),
                                    " For anyone, anywhere",
                                  ],
                                }),
                                (0, n.jsx)("p", {
                                  children:
                                    "You don't have to struggle alone, you've got our assistance and help.",
                                }),
                              ],
                            }),
                          }),
                          (0, n.jsx)("div", {
                            className: "col-xxl-6 col-xl-6 col-lg-6 col-md-4",
                            children: (0, n.jsx)("div", {
                              className:
                                "category__more mb-60 float-md-end fix",
                              children: (0, n.jsx)(i.default, {
                                href: "/course-grid",
                                children: (0, n.jsxs)("a", {
                                  className: "link-btn",
                                  children: [
                                    "View All Courses",
                                    (0, n.jsx)("i", {
                                      className: "fas fa-arrow-right",
                                    }),
                                    (0, n.jsx)("i", {
                                      className: "fas fa-arrow-right",
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, n.jsxs)("div", {
                        className: "row",
                        children: [
                          (0, n.jsx)("div", {
                            className: "col-xxl-6 col-xl-6 col-lg-6 col-md-6",
                            children: (0, n.jsxs)("div", {
                              className:
                                "course__item course__item-2 white-bg mb-30 transition-3",
                              children: [
                                (0, n.jsx)("div", {
                                  className: "course__thumb fix w-img",
                                  children: (0, n.jsx)(i.default, {
                                    href: "/course-details",
                                    children: (0, n.jsx)("a", {
                                      children: (0, n.jsx)("img", {
                                        src: "assets/img/course/home-3/course-1.jpg",
                                        alt: "img not found",
                                      }),
                                    }),
                                  }),
                                }),
                                (0, n.jsxs)("div", {
                                  className: "course__content-2",
                                  children: [
                                    (0, n.jsx)("h3", {
                                      className: "course__title-2",
                                      children: (0, n.jsx)(i.default, {
                                        href: "/course-details",
                                        children: (0, n.jsx)("a", {
                                          children:
                                            "Product Manager Learn the Skills & job.",
                                        }),
                                      }),
                                    }),
                                    (0, n.jsx)("p", {
                                      children:
                                        "Top instructors from around the world teach millions of students on Quillow. Get unlimited.",
                                    }),
                                    (0, n.jsxs)("div", {
                                      className:
                                        "course__bottom d-sm-flex justify-content-between align-items-center",
                                      children: [
                                        (0, n.jsxs)("div", {
                                          className:
                                            "course__teacher-2 d-flex align-items-center",
                                          children: [
                                            (0, n.jsxs)("div", {
                                              className:
                                                "course__teacher-thumb-2 mr-20",
                                              children: [
                                                (0, n.jsx)("img", {
                                                  src: "assets/img/course/teacher/home-3/teacher-1.jpg",
                                                  alt: "img not found",
                                                }),
                                                (0, n.jsx)("div", {
                                                  className:
                                                    "course__teacher-rating",
                                                  children: (0, n.jsx)("i", {
                                                    className: "fas fa-star",
                                                  }),
                                                }),
                                              ],
                                            }),
                                            (0, n.jsxs)("div", {
                                              className: "course__teacher-info",
                                              children: [
                                                (0, n.jsx)("h6", {
                                                  children: (0, n.jsx)(
                                                    i.default,
                                                    {
                                                      href: "/instructor-details",
                                                      children: (0, n.jsx)(
                                                        "a",
                                                        {
                                                          children:
                                                            "Jim S\xe9chen",
                                                        }
                                                      ),
                                                    }
                                                  ),
                                                }),
                                                (0, n.jsx)("span", {
                                                  children: "Product Designer",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, n.jsx)("div", {
                                          className: "course__meta",
                                          children: (0, n.jsx)("div", {
                                            className: "course__lesson",
                                            children: (0, n.jsxs)("span", {
                                              children: [
                                                (0, n.jsx)("i", {
                                                  className: "fas fa-book",
                                                }),
                                                "43 Lesson",
                                              ],
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
                          (0, n.jsx)("div", {
                            className: "col-xxl-6 col-xl-6 col-lg-6 col-md-6",
                            children: (0, n.jsxs)("div", {
                              className:
                                "course__item course__item-2 white-bg mb-30 transition-3",
                              children: [
                                (0, n.jsx)("div", {
                                  className: "course__thumb fix w-img",
                                  children: (0, n.jsx)(i.default, {
                                    href: "/course-details",
                                    children: (0, n.jsx)("a", {
                                      children: (0, n.jsx)("img", {
                                        src: "assets/img/course/home-3/course-2.jpg",
                                        alt: "img not found",
                                      }),
                                    }),
                                  }),
                                }),
                                (0, n.jsxs)("div", {
                                  className: "course__content-2",
                                  children: [
                                    (0, n.jsx)("h3", {
                                      className: "course__title-2",
                                      children: (0, n.jsx)(i.default, {
                                        href: "/course-details",
                                        children: (0, n.jsx)("a", {
                                          children:
                                            "The Importance Of Intrinsic for Students.",
                                        }),
                                      }),
                                    }),
                                    (0, n.jsx)("p", {
                                      children:
                                        "Top instructors from around the world teach millions of students on Quillow. Get unlimited.",
                                    }),
                                    (0, n.jsxs)("div", {
                                      className:
                                        "course__bottom d-sm-flex justify-content-between align-items-center",
                                      children: [
                                        (0, n.jsxs)("div", {
                                          className:
                                            "course__teacher-2 d-flex align-items-center",
                                          children: [
                                            (0, n.jsxs)("div", {
                                              className:
                                                "course__teacher-thumb-2 mr-20",
                                              children: [
                                                (0, n.jsx)("img", {
                                                  src: "assets/img/course/teacher/home-3/teacher-2.jpg",
                                                  alt: "img not found",
                                                }),
                                                (0, n.jsx)("div", {
                                                  className:
                                                    "course__teacher-rating",
                                                  children: (0, n.jsx)("i", {
                                                    className: "fas fa-star",
                                                  }),
                                                }),
                                              ],
                                            }),
                                            (0, n.jsxs)("div", {
                                              className: "course__teacher-info",
                                              children: [
                                                (0, n.jsx)("h6", {
                                                  children: (0, n.jsx)(
                                                    i.default,
                                                    {
                                                      href: "/instructor-details",
                                                      children: (0, n.jsx)(
                                                        "a",
                                                        {
                                                          children:
                                                            "JCraig Weber",
                                                        }
                                                      ),
                                                    }
                                                  ),
                                                }),
                                                (0, n.jsx)("span", {
                                                  children: "UX Designer",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, n.jsx)("div", {
                                          className: "course__meta",
                                          children: (0, n.jsx)("div", {
                                            className: "course__lesson",
                                            children: (0, n.jsxs)("span", {
                                              children: [
                                                (0, n.jsx)("i", {
                                                  className: "fas fa-book",
                                                }),
                                                "30 Lesson",
                                              ],
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
                      }),
                    ],
                  }),
                });
              },
            },
          ]) && a(s.prototype, r),
          t && a(s, t),
          o
        );
      })(t.Component);
      function j(e, s) {
        if (!(e instanceof s))
          throw new TypeError("Cannot call a class as a function");
      }
      function m(e, s) {
        for (var r = 0; r < s.length; r++) {
          var n = s[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function p(e) {
        return (p = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function g(e, s) {
        return !s || ("object" !== v(s) && "function" !== typeof s)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : s;
      }
      function _(e, s) {
        return (_ =
          Object.setPrototypeOf ||
          function (e, s) {
            return (e.__proto__ = s), e;
          })(e, s);
      }
      var v = function (e) {
        return e && "undefined" !== typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      };
      function b(e) {
        var s = (function () {
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
            n = p(e);
          if (s) {
            var t = p(this).constructor;
            r = Reflect.construct(n, arguments, t);
          } else r = n.apply(this, arguments);
          return g(this, r);
        };
      }
      var y = (function (e) {
        !(function (e, s) {
          if ("function" !== typeof s && null !== s)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(s && s.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            s && _(e, s);
        })(i, e);
        var s,
          r,
          t,
          l = b(i);
        function i() {
          return j(this, i), l.apply(this, arguments);
        }
        return (
          (s = i),
          (r = [
            {
              key: "render",
              value: function () {
                return (0, n.jsx)("section", {
                  className: "cta__area pb-150",
                  children: (0, n.jsx)("div", {
                    className: "container",
                    children: (0, n.jsxs)("div", {
                      className:
                        "cta__inner-3 p-relative grey-bg-2 pt-75 pb-75 fix",
                      children: [
                        (0, n.jsxs)("div", {
                          className: "cta__shape-3",
                          children: [
                            (0, n.jsx)("img", {
                              className: "cta-2",
                              src: "assets/img/cta/cta-shape-1.png",
                              alt: "img not found",
                            }),
                            (0, n.jsx)("img", {
                              className: "cta-3",
                              src: "assets/img/cta/cta-shape-2.png",
                              alt: "img not found",
                            }),
                          ],
                        }),
                        (0, n.jsx)("div", {
                          className: "row",
                          children: (0, n.jsx)("div", {
                            className: "col-xxl-12",
                            children: (0, n.jsxs)("div", {
                              className: "cta__content text-center p-relative",
                              children: [
                                (0, n.jsx)("span", { children: "Coming June" }),
                                (0, n.jsx)("h3", {
                                  className: "cta__title-2",
                                  children: "Built to stand out.",
                                }),
                              ],
                            }),
                          }),
                        }),
                        (0, n.jsx)("div", {
                          className: "row",
                          children: (0, n.jsx)("div", {
                            className: "col-xxl-12",
                            children: (0, n.jsxs)("div", {
                              className: "cta__form grey-bg-2",
                              children: [
                                (0, n.jsx)("div", {
                                  className: "cta__form-inner",
                                  children: (0, n.jsxs)("form", {
                                    action: "#",
                                    children: [
                                      (0, n.jsx)("input", {
                                        type: "text",
                                        placeholder: "Your Name",
                                      }),
                                      (0, n.jsx)("input", {
                                        type: "email",
                                        placeholder: "Your Email",
                                      }),
                                      (0, n.jsx)("button", {
                                        type: "submit",
                                        className: "e-btn e-btn-6",
                                        children: "Take A Free Course",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, n.jsxs)("div", {
                                  className:
                                    "cta__agree d-flex align-items-center",
                                  children: [
                                    (0, n.jsx)("input", {
                                      className: "e-check-input",
                                      type: "checkbox",
                                      id: "e-agree",
                                    }),
                                    (0, n.jsxs)("label", {
                                      className: "e-check-label",
                                      htmlFor: "e-agree",
                                      children: [
                                        "By signing up you agree to our ",
                                        (0, n.jsx)("a", {
                                          href: "#",
                                          children: " Terms & Conditions",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                });
              },
            },
          ]) && m(s.prototype, r),
          t && m(s, t),
          i
        );
      })(t.Component);
      function N(e, s) {
        if (!(e instanceof s))
          throw new TypeError("Cannot call a class as a function");
      }
      function w(e, s) {
        for (var r = 0; r < s.length; r++) {
          var n = s[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function O(e) {
        return (O = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function k(e, s) {
        return !s || ("object" !== C(s) && "function" !== typeof s)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : s;
      }
      function S(e, s) {
        return (S =
          Object.setPrototypeOf ||
          function (e, s) {
            return (e.__proto__ = s), e;
          })(e, s);
      }
      var C = function (e) {
        return e && "undefined" !== typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      };
      function P(e) {
        var s = (function () {
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
            n = O(e);
          if (s) {
            var t = O(this).constructor;
            r = Reflect.construct(n, arguments, t);
          } else r = n.apply(this, arguments);
          return k(this, r);
        };
      }
      var R = (function (e) {
          !(function (e, s) {
            if ("function" !== typeof s && null !== s)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(s && s.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              s && S(e, s);
          })(c, e);
          var s,
            r,
            t,
            l = P(c);
          function c() {
            return N(this, c), l.apply(this, arguments);
          }
          return (
            (s = c),
            (r = [
              {
                key: "render",
                value: function () {
                  return (0, n.jsx)("section", {
                    className: "teacher__area pt-115 pb-100",
                    children: (0, n.jsxs)("div", {
                      className: "container",
                      children: [
                        (0, n.jsx)("div", {
                          className: "row",
                          children: (0, n.jsx)("div", {
                            className: "col-xxl-6 offset-xxl-3",
                            children: (0, n.jsxs)("div", {
                              className:
                                "section__title-wrapper text-center mb-60",
                              children: [
                                (0, n.jsxs)("h2", {
                                  className: "section__title",
                                  children: [
                                    "Our Most ",
                                    (0, n.jsx)("br", {}),
                                    "Popular ",
                                    (0, n.jsxs)("span", {
                                      className: "yellow-bg",
                                      children: [
                                        " Teachers ",
                                        (0, n.jsx)("img", {
                                          src: "assets/img/shape/yellow-bg-2.png",
                                          alt: "img not found",
                                        }),
                                        "  ",
                                      ],
                                    }),
                                    " ",
                                    (0, n.jsx)("br", {}),
                                  ],
                                }),
                                (0, n.jsx)("p", {
                                  children:
                                    "You don't have to struggle alone, you've got our assistance and help.",
                                }),
                              ],
                            }),
                          }),
                        }),
                        (0, n.jsxs)("div", {
                          className: "row",
                          children: [
                            (0, n.jsx)("div", {
                              className: "col-xxl-4 col-xl-4 col-lg-4 col-md-6",
                              children: (0, n.jsxs)("div", {
                                className:
                                  "teacher__item text-center grey-bg-5 transition-3 mb-30",
                                children: [
                                  (0, n.jsx)("div", {
                                    className: "teacher__thumb w-img fix",
                                    children: (0, n.jsx)(i.default, {
                                      href: "/instructor-details",
                                      children: (0, n.jsx)("a", {
                                        children: (0, n.jsx)("img", {
                                          src: "assets/img/teacher/teacger-1.jpg",
                                          alt: "img not found",
                                        }),
                                      }),
                                    }),
                                  }),
                                  (0, n.jsxs)("div", {
                                    className: "teacher__content",
                                    children: [
                                      (0, n.jsx)("h3", {
                                        className: "teacher__title",
                                        children: (0, n.jsx)(i.default, {
                                          href: "/instructor-details",
                                          children: (0, n.jsx)("a", {
                                            children: "Lillian Walsh,",
                                          }),
                                        }),
                                      }),
                                      (0, n.jsx)("span", {
                                        children: " CO Founder",
                                      }),
                                      (0, n.jsx)("div", {
                                        className: "teacher__social",
                                        children: (0, n.jsxs)("ul", {
                                          children: [
                                            (0, n.jsx)("li", {
                                              children: (0, n.jsx)("a", {
                                                href: "#",
                                                children: (0, n.jsx)("i", {
                                                  className:
                                                    "fab fa-facebook-f",
                                                }),
                                              }),
                                            }),
                                            (0, n.jsx)("li", {
                                              children: (0, n.jsx)("a", {
                                                href: "#",
                                                children: (0, n.jsx)("i", {
                                                  className: "fab fa-twitter",
                                                }),
                                              }),
                                            }),
                                            (0, n.jsx)("li", {
                                              children: (0, n.jsx)("a", {
                                                href: "#",
                                                children: (0, n.jsx)("i", {
                                                  className: "fab fa-vimeo-v",
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            (0, n.jsx)("div", {
                              className: "col-xxl-4 col-xl-4 col-lg-4 col-md-6",
                              children: (0, n.jsxs)("div", {
                                className:
                                  "teacher__item text-center grey-bg-5 transition-3 mb-30",
                                children: [
                                  (0, n.jsx)("div", {
                                    className: "teacher__thumb w-img fix",
                                    children: (0, n.jsx)(i.default, {
                                      href: "/instructor-details",
                                      children: (0, n.jsx)("a", {
                                        children: (0, n.jsx)("img", {
                                          src: "assets/img/teacher/teacher-2.jpg",
                                          alt: "img not found",
                                        }),
                                      }),
                                    }),
                                  }),
                                  (0, n.jsxs)("div", {
                                    className: "teacher__content",
                                    children: [
                                      (0, n.jsx)("h3", {
                                        className: "teacher__title",
                                        children: (0, n.jsx)(i.default, {
                                          href: "/instructor-details",
                                          children: (0, n.jsx)("a", {
                                            children: "Kelly Franklin,",
                                          }),
                                        }),
                                      }),
                                      (0, n.jsx)("span", {
                                        children: "Desginer",
                                      }),
                                      (0, n.jsx)("div", {
                                        className: "teacher__social",
                                        children: (0, n.jsxs)("ul", {
                                          children: [
                                            (0, n.jsx)("li", {
                                              children: (0, n.jsx)("a", {
                                                href: "#",
                                                children: (0, n.jsx)("i", {
                                                  className:
                                                    "fab fa-facebook-f",
                                                }),
                                              }),
                                            }),
                                            (0, n.jsx)("li", {
                                              children: (0, n.jsx)("a", {
                                                href: "#",
                                                children: (0, n.jsx)("i", {
                                                  className: "fab fa-twitter",
                                                }),
                                              }),
                                            }),
                                            (0, n.jsx)("li", {
                                              children: (0, n.jsx)("a", {
                                                href: "#",
                                                children: (0, n.jsx)("i", {
                                                  className: "fab fa-vimeo-v",
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            (0, n.jsx)("div", {
                              className: "col-xxl-4 col-xl-4 col-lg-4 col-md-6",
                              children: (0, n.jsxs)("div", {
                                className:
                                  "teacher__item text-center grey-bg-5 transition-3 mb-30",
                                children: [
                                  (0, n.jsx)("div", {
                                    className: "teacher__thumb w-img fix",
                                    children: (0, n.jsx)(i.default, {
                                      href: "/instructor-details",
                                      children: (0, n.jsx)("a", {
                                        children: (0, n.jsx)("img", {
                                          src: "assets/img/teacher/teacher-3.jpg",
                                          alt: "img not found",
                                        }),
                                      }),
                                    }),
                                  }),
                                  (0, n.jsxs)("div", {
                                    className: "teacher__content",
                                    children: [
                                      (0, n.jsx)("h3", {
                                        className: "teacher__title",
                                        children: (0, n.jsx)(i.default, {
                                          href: "/instructor-details",
                                          children: (0, n.jsx)("a", {
                                            children: "Hilary Ouse,",
                                          }),
                                        }),
                                      }),
                                      (0, n.jsx)("span", {
                                        children: "Markater",
                                      }),
                                      (0, n.jsx)("div", {
                                        className: "teacher__social",
                                        children: (0, n.jsxs)("ul", {
                                          children: [
                                            (0, n.jsx)("li", {
                                              children: (0, n.jsx)("a", {
                                                href: "#",
                                                children: (0, n.jsx)("i", {
                                                  className:
                                                    "fab fa-facebook-f",
                                                }),
                                              }),
                                            }),
                                            (0, n.jsx)("li", {
                                              children: (0, n.jsx)("a", {
                                                href: "#",
                                                children: (0, n.jsx)("i", {
                                                  className: "fab fa-twitter",
                                                }),
                                              }),
                                            }),
                                            (0, n.jsx)("li", {
                                              children: (0, n.jsx)("a", {
                                                href: "#",
                                                children: (0, n.jsx)("i", {
                                                  className: "fab fa-vimeo-v",
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        (0, n.jsx)("div", {
                          className: "row",
                          children: (0, n.jsx)("div", {
                            className: "col-xxl-12",
                            children: (0, n.jsx)("div", {
                              className: "teacher__more text-center mt-30",
                              children: (0, n.jsx)(i.default, {
                                href: "/contact",
                                children: (0, n.jsx)("a", {
                                  className: "e-btn e-btn-border e-btn-5",
                                  children: "Become an Instructor",
                                }),
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                  });
                },
              },
            ]) && w(s.prototype, r),
            t && w(s, t),
            c
          );
        })(t.Component),
        E = r(1236),
        B = r(396),
        T = r(5944),
        I = r(2873),
        L = (r(933), r(706), r(9846), r(92), r(5083), r(8116));
      function M() {
        var e = (0, t.useState)(null),
          s = e[0],
          r = e[1];
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsxs)(I.t, {
              style: {
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              },
              spaceBetween: 10,
              navigation: !1,
              thumbs: { swiper: s },
              effect: "fade",
              loop: !0,
              modules: [L.Rv, L.W_, L.o3, L.xW],
              className: "mySwiper",
              children: [
                (0, n.jsx)(I.o, {
                  children: (0, n.jsx)("div", {
                    className:
                      "single-slider swiper-slide slider__height slider__overlay d-flex align-items-center",
                    style: {
                      backgroundImage: "url(assets/img/slider/slider-4.jpg)",
                    },
                    children: (0, n.jsx)("div", {
                      className: "container",
                      children: (0, n.jsx)("div", {
                        className: "row",
                        children: (0, n.jsx)("div", {
                          className:
                            "col-xxl-7 col-xl-8 col-lg-9 col-md-9 col-sm-10",
                          children: (0, n.jsxs)("div", {
                            className: "slider__content",
                            children: [
                              (0, n.jsx)("span", {
                                children: "Learn & Achieve",
                              }),
                              (0, n.jsxs)("h3", {
                                className: "slider__title",
                                children: [
                                  "Find the right Online ",
                                  (0, n.jsxs)("span", {
                                    className: "yellow-bg",
                                    children: [
                                      "tutor ",
                                      (0, n.jsx)("img", {
                                        src: "assets/img/shape/yellow-bg.png",
                                        alt: "img not found",
                                      }),
                                      " ",
                                    ],
                                  }),
                                  " for you.",
                                ],
                              }),
                              (0, n.jsx)("p", {
                                children:
                                  "Meet university,and cultural institutions, who'll share their experience.",
                              }),
                              (0, n.jsx)(i.default, {
                                href: "/about",
                                children: (0, n.jsx)("a", {
                                  className: "e-btn slider__btn",
                                  children: "Ready to get Started?",
                                }),
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                  }),
                }),
                (0, n.jsx)(I.o, {
                  children: (0, n.jsx)("div", {
                    className:
                      "single-slider swiper-slide slider__height slider__overlay d-flex align-items-center",
                    style: {
                      backgroundImage: "url(assets/img/slider/slider-1.jpg)",
                    },
                    children: (0, n.jsx)("div", {
                      className: "container",
                      children: (0, n.jsx)("div", {
                        className: "row",
                        children: (0, n.jsx)("div", {
                          className:
                            "col-xxl-7 col-xl-8 col-lg-9 col-md-9 col-sm-10",
                          children: (0, n.jsxs)("div", {
                            className: "slider__content",
                            children: [
                              (0, n.jsx)("span", {
                                children: "Learn & Achieve",
                              }),
                              (0, n.jsxs)("h3", {
                                className: "slider__title",
                                children: [
                                  "Fundamentals of music ",
                                  (0, n.jsxs)("span", {
                                    className: "yellow-bg",
                                    children: [
                                      "theory ",
                                      (0, n.jsx)("img", {
                                        src: "assets/img/shape/yellow-bg.png",
                                        alt: "img not found",
                                      }),
                                      " ",
                                    ],
                                  }),
                                  " Learn",
                                ],
                              }),
                              (0, n.jsx)("p", {
                                children:
                                  "Meet university,and cultural institutions, who'll share their experience.",
                              }),
                              (0, n.jsx)(i.default, {
                                href: "/about",
                                children: (0, n.jsx)("a", {
                                  className: "e-btn slider__btn",
                                  children: "Ready to get Started?",
                                }),
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                  }),
                }),
                (0, n.jsx)(I.o, {
                  children: (0, n.jsx)("div", {
                    className:
                      "single-slider swiper-slide slider__height slider__overlay d-flex align-items-center",
                    style: {
                      backgroundImage: "url(assets/img/slider/slider-2.jpg)",
                    },
                    children: (0, n.jsx)("div", {
                      className: "container",
                      children: (0, n.jsx)("div", {
                        className: "row",
                        children: (0, n.jsx)("div", {
                          className:
                            "col-xxl-7 col-xl-8 col-lg-9 col-md-9 col-sm-10",
                          children: (0, n.jsxs)("div", {
                            className: "slider__content",
                            children: [
                              (0, n.jsx)("span", {
                                children: "Learn & Achieve",
                              }),
                              (0, n.jsxs)("h3", {
                                className: "slider__title",
                                children: [
                                  "Become a product  ",
                                  (0, n.jsxs)("span", {
                                    className: "yellow-bg",
                                    children: [
                                      "Manager ",
                                      (0, n.jsx)("img", {
                                        src: "assets/img/shape/yellow-bg.png",
                                        alt: "img not found",
                                      }),
                                      " ",
                                    ],
                                  }),
                                  " & learn.",
                                ],
                              }),
                              (0, n.jsx)("p", {
                                children:
                                  "Meet university,and cultural institutions, who'll share their experience.",
                              }),
                              (0, n.jsx)(i.default, {
                                href: "/about",
                                children: (0, n.jsx)("a", {
                                  className: "e-btn slider__btn",
                                  children: "Ready to get Started?",
                                }),
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                  }),
                }),
                (0, n.jsx)(I.o, {
                  children: (0, n.jsx)("div", {
                    className:
                      "single-slider swiper-slide slider__height slider__overlay d-flex align-items-center",
                    style: {
                      backgroundImage: "url(assets/img/slider/slider-3.jpg)",
                    },
                    children: (0, n.jsx)("div", {
                      className: "container",
                      children: (0, n.jsx)("div", {
                        className: "row",
                        children: (0, n.jsx)("div", {
                          className:
                            "col-xxl-7 col-xl-8 col-lg-9 col-md-9 col-sm-10",
                          children: (0, n.jsxs)("div", {
                            className: "slider__content",
                            children: [
                              (0, n.jsx)("span", {
                                children: "Learn & Achieve",
                              }),
                              (0, n.jsxs)("h3", {
                                className: "slider__title",
                                children: [
                                  "Launch your ",
                                  (0, n.jsxs)("span", {
                                    className: "yellow-bg",
                                    children: [
                                      "online ",
                                      (0, n.jsx)("img", {
                                        src: "assets/img/shape/yellow-bg.png",
                                        alt: "img not found",
                                      }),
                                      " ",
                                    ],
                                  }),
                                  " learning Platform.",
                                ],
                              }),
                              (0, n.jsx)("p", {
                                children:
                                  "Meet university,and cultural institutions, who'll share their experience.",
                              }),
                              (0, n.jsx)(i.default, {
                                href: "/about",
                                children: (0, n.jsx)("a", {
                                  className: "e-btn slider__btn",
                                  children: "Ready to get Started?",
                                }),
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                  }),
                }),
              ],
            }),
            (0, n.jsxs)(I.t, {
              onSwiper: r,
              spaceBetween: 10,
              slidesPerView: 4,
              freeMode: !0,
              watchSlidesProgress: !0,
              modules: [L.Rv, L.W_, L.o3],
              className: "mySwiper2",
              children: [
                (0, n.jsx)(I.o, {
                  children: (0, n.jsx)("div", {
                    className: "slider__nav-item swiper-slide orange-bg",
                    style: {
                      backgroundImage:
                        "url(assets/img/slider/nav/slider-nav-4.jpg)",
                    },
                    children: (0, n.jsxs)("div", {
                      className: "slider__nav-content",
                      children: [
                        (0, n.jsx)("span", { children: "6 Courses" }),
                        (0, n.jsx)("h4", { children: "Programming Languages" }),
                      ],
                    }),
                  }),
                }),
                (0, n.jsx)(I.o, {
                  children: (0, n.jsx)("div", {
                    className: "slider__nav-item swiper-slide blue-bg",
                    style: {
                      backgroundImage:
                        "url(assets/img/slider/nav/slider-nav-1.jpg)",
                    },
                    children: (0, n.jsxs)("div", {
                      className: "slider__nav-content",
                      children: [
                        (0, n.jsx)("span", { children: "4 Courses" }),
                        (0, n.jsx)("h4", { children: "Idea Discussion" }),
                      ],
                    }),
                  }),
                }),
                (0, n.jsx)(I.o, {
                  children: (0, n.jsx)("div", {
                    className: "slider__nav-item swiper-slide pink-bg",
                    style: {
                      backgroundImage:
                        "url(assets/img/slider/nav/slider-nav-2.jpg)",
                    },
                    children: (0, n.jsxs)("div", {
                      className: "slider__nav-content",
                      children: [
                        (0, n.jsx)("span", { children: "8 Courses" }),
                        (0, n.jsx)("h4", { children: "Web Development" }),
                      ],
                    }),
                  }),
                }),
                (0, n.jsx)(I.o, {
                  children: (0, n.jsx)("div", {
                    className: "slider__nav-item swiper-slide green-bg",
                    style: {
                      backgroundImage:
                        "url(assets/img/slider/nav/slider-nav-3.jpg)",
                    },
                    children: (0, n.jsxs)("div", {
                      className: "slider__nav-content",
                      children: [
                        (0, n.jsx)("span", { children: "8 Courses" }),
                        (0, n.jsx)("h4", { children: "System Administration" }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          ],
        });
      }
      var F = r(5152);
      function A(e, s) {
        if (!(e instanceof s))
          throw new TypeError("Cannot call a class as a function");
      }
      function D(e, s) {
        for (var r = 0; r < s.length; r++) {
          var n = s[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function W(e) {
        return (W = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function H(e, s) {
        return !s || ("object" !== Y(s) && "function" !== typeof s)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : s;
      }
      function Z(e, s) {
        return (Z =
          Object.setPrototypeOf ||
          function (e, s) {
            return (e.__proto__ = s), e;
          })(e, s);
      }
      var Y = function (e) {
        return e && "undefined" !== typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      };
      function z(e) {
        var s = (function () {
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
            n = W(e);
          if (s) {
            var t = W(this).constructor;
            r = Reflect.construct(n, arguments, t);
          } else r = n.apply(this, arguments);
          return H(this, r);
        };
      }
      var G = (0, F.default)(
          function () {
            return r.e(173).then(r.bind(r, 6173));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [6173];
              },
            },
            ssr: !1,
          }
        ),
        J = (function (e) {
          !(function (e, s) {
            if ("function" !== typeof s && null !== s)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(s && s.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              s && Z(e, s);
          })(c, e);
          var s,
            r,
            t,
            i = z(c);
          function c() {
            return A(this, c), i.apply(this, arguments);
          }
          return (
            (s = c),
            (r = [
              {
                key: "render",
                value: function () {
                  return (0, n.jsxs)("main", {
                    children: [
                      (0, n.jsx)(M, {}),
                      (0, n.jsx)(l.Z, {}),
                      (0, n.jsx)(G, {}),
                      (0, n.jsx)(x, {}),
                      (0, n.jsx)(R, {}),
                      (0, n.jsx)(y, {}),
                      (0, n.jsx)(T.Z, {}),
                      (0, n.jsx)(E.Z, {}),
                      (0, n.jsx)(B.Z, {}),
                    ],
                  });
                },
              },
            ]) && D(s.prototype, r),
            t && D(s, t),
            c
          );
        })(t.Component),
        U = r(254),
        X = r(1163),
        Q = r(6414),
        V = r(9008),
        q =
          (r(5675),
          function (e) {
            var s = e.setSearchOpen,
              r = e.searchOpen,
              l = (0, X.useRouter)(),
              c = (0, t.useState)(""),
              a = (c[0], c[1]);
            return (
              (0, t.useEffect)(
                function () {
                  a(l.pathname);
                },
                [l]
              ),
              (0, n.jsx)("div", {
                className: r
                  ? "header__search-3 search-opened"
                  : "header__search-3",
                children: (0, n.jsx)("div", {
                  className: "container",
                  children: (0, n.jsx)("div", {
                    className: "row",
                    children: (0, n.jsx)("div", {
                      className: "col-xl-12",
                      children: (0, n.jsx)("div", {
                        className: "header__search-3-inner text-center",
                        children: (0, n.jsxs)("form", {
                          action: "#",
                          children: [
                            (0, n.jsx)("div", {
                              className: "header__search-3-btn",
                              children: (0, n.jsx)("a", {
                                href: "#!",
                                className: "header__search-3-btn-close",
                                onClick: function () {
                                  return s(!1);
                                },
                                children: (0, n.jsx)("i", {
                                  className: "fas fa-times",
                                }),
                              }),
                            }),
                            (0, n.jsx)("div", {
                              className: "header__search-3-header",
                              children: (0, n.jsx)("h3", {
                                children: "Search",
                              }),
                            }),
                            (0, n.jsx)("div", {
                              className: "header__search-3-categories",
                              children: (0, n.jsxs)("ul", {
                                className: "search-category",
                                children: [
                                  (0, n.jsx)("li", {
                                    children: (0, n.jsx)(i.default, {
                                      href: "/course-grid",
                                      children: (0, n.jsx)("a", {
                                        children: "All Courses",
                                      }),
                                    }),
                                  }),
                                  (0, n.jsx)("li", {
                                    children: (0, n.jsx)(i.default, {
                                      href: "/instructor",
                                      children: (0, n.jsx)("a", {
                                        children: "Instructor",
                                      }),
                                    }),
                                  }),
                                  (0, n.jsx)("li", {
                                    children: (0, n.jsx)(i.default, {
                                      href: "/event-details",
                                      children: (0, n.jsx)("a", {
                                        children: "Event",
                                      }),
                                    }),
                                  }),
                                  (0, n.jsx)("li", {
                                    children: (0, n.jsx)(i.default, {
                                      href: "/cart",
                                      children: (0, n.jsx)("a", {
                                        children: "My Cart",
                                      }),
                                    }),
                                  }),
                                  (0, n.jsx)("li", {
                                    children: (0, n.jsx)(i.default, {
                                      href: "/blog",
                                      children: (0, n.jsx)("a", {
                                        children: "Blog",
                                      }),
                                    }),
                                  }),
                                  (0, n.jsx)("li", {
                                    children: (0, n.jsx)(i.default, {
                                      href: "/contact",
                                      children: (0, n.jsx)("a", {
                                        children: "Contact",
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            (0, n.jsxs)("div", {
                              className: "header__search-3-input p-relative",
                              children: [
                                (0, n.jsx)("input", {
                                  type: "text",
                                  placeholder: "Search for products... ",
                                }),
                                (0, n.jsx)("button", {
                                  type: "submit",
                                  children: (0, n.jsx)("i", {
                                    className: "fas fa-search",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                }),
              })
            );
          }),
        K = function () {
          var e = (0, t.useState)(!1),
            s = e[0],
            r = e[1],
            l = (0, t.useState)(!1),
            c = l[0],
            a = l[1],
            o = (0, X.useRouter)(),
            d = (0, t.useState)(""),
            h = (d[0], d[1]);
          (0, t.useEffect)(
            function () {
              h(o.pathname);
            },
            [o]
          ),
            (0, t.useEffect)(function () {
              return (
                window.addEventListener("scroll", u),
                function () {
                  window.removeEventListener("scroll", u);
                }
              );
            });
          var u = function (e) {
            var s = document.querySelector(".header__area");
            window.scrollY >= 1
              ? s.classList.add("sticky")
              : s.classList.remove("sticky");
          };
          return (0, n.jsxs)(t.Fragment, {
            children: [
              (0, n.jsxs)(V.default, {
                children: [
                  (0, n.jsx)("title", {
                    children:
                      "Educal \u2013 Online Course and Education React, Nextjs Template",
                  }),
                  (0, n.jsx)("link", {
                    href: "https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&display=swap",
                    rel: "stylesheet",
                  }),
                ],
              }),
              (0, n.jsxs)("header", {
                children: [
                  (0, n.jsx)("div", {
                    id: "header-sticky",
                    className:
                      "header__area header__transparent header__padding-2",
                    children: (0, n.jsx)("div", {
                      className: "container",
                      children: (0, n.jsxs)("div", {
                        className: "row align-items-center",
                        children: [
                          (0, n.jsx)("div", {
                            className:
                              "col-xxl-2 col-xl-2 col-lg-6 col-md-6 col-sm-6 col-6",
                            children: (0, n.jsx)("div", {
                              className: "header__left d-flex",
                              children: (0, n.jsx)("div", {
                                className: "logo",
                                children: (0, n.jsx)(i.default, {
                                  href: "/",
                                  children: (0, n.jsxs)("a", {
                                    children: [
                                      (0, n.jsx)("img", {
                                        className: "logo-white",
                                        src: "assets/img/logo/logo-2.png",
                                        alt: "logo",
                                      }),
                                      (0, n.jsx)("img", {
                                        className: "logo-black",
                                        src: "assets/img/logo/logo.png",
                                        alt: "logo",
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            }),
                          }),
                          (0, n.jsx)("div", {
                            className: "col-xxl-5 col-xl-5 d-none d-xl-block",
                            children: (0, n.jsx)("div", {
                              className:
                                "main-menu main-menu-3 d-none d-xl-block",
                              children: (0, n.jsx)("nav", {
                                id: "mobile-menu",
                                children: (0, n.jsxs)("ul", {
                                  children: [
                                    (0, n.jsxs)("li", {
                                      className: "has-dropdown",
                                      children: [
                                        (0, n.jsx)(i.default, {
                                          href: "/",
                                          children: (0, n.jsx)("a", {
                                            children: "Home",
                                          }),
                                        }),
                                        (0, n.jsxs)("ul", {
                                          className: "submenu",
                                          children: [
                                            (0, n.jsx)("li", {
                                              children: (0, n.jsx)(i.default, {
                                                href: "/",
                                                children: (0, n.jsx)("a", {
                                                  children: "Home Style 1",
                                                }),
                                              }),
                                            }),
                                            (0, n.jsx)("li", {
                                              children: (0, n.jsx)(i.default, {
                                                href: "/home-2",
                                                children: (0, n.jsx)("a", {
                                                  children: "Home Style 2",
                                                }),
                                              }),
                                            }),
                                            (0, n.jsx)("li", {
                                              children: (0, n.jsx)(i.default, {
                                                href: "/home-3",
                                                children: (0, n.jsx)("a", {
                                                  children: "Home Style 3",
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, n.jsxs)("li", {
                                      className: "has-dropdown",
                                      children: [
                                        (0, n.jsx)(i.default, {
                                          href: "/course-grid",
                                          children: (0, n.jsx)("a", {
                                            children: "Courses",
                                          }),
                                        }),
                                        (0, n.jsxs)("ul", {
                                          className: "submenu",
                                          children: [
                                            (0, n.jsx)("li", {
                                              children: (0, n.jsx)(i.default, {
                                                href: "/course-grid",
                                                children: (0, n.jsx)("a", {
                                                  children: "Courses",
                                                }),
                                              }),
                                            }),
                                            (0, n.jsx)("li", {
                                              children: (0, n.jsx)(i.default, {
                                                href: "/course-list",
                                                children: (0, n.jsx)("a", {
                                                  children: "Courses List",
                                                }),
                                              }),
                                            }),
                                            (0, n.jsx)("li", {
                                              children: (0, n.jsx)(i.default, {
                                                href: "/course-sidebar",
                                                children: (0, n.jsx)("a", {
                                                  children: "Courses Sidebar",
                                                }),
                                              }),
                                            }),
                                            (0, n.jsx)("li", {
                                              children: (0, n.jsx)(i.default, {
                                                href: "/course-details",
                                                children: (0, n.jsx)("a", {
                                                  children: "Courses Details",
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, n.jsxs)("li", {
                                      className: "has-dropdown",
                                      children: [
                                        (0, n.jsx)(i.default, {
                                          href: "/blog",
                                          children: (0, n.jsx)("a", {
                                            children: "Blog",
                                          }),
                                        }),
                                        (0, n.jsxs)("ul", {
                                          className: "submenu",
                                          children: [
                                            (0, n.jsx)("li", {
                                              children: (0, n.jsx)(i.default, {
                                                href: "/blog",
                                                children: (0, n.jsx)("a", {
                                                  children: "Blog",
                                                }),
                                              }),
                                            }),
                                            (0, n.jsx)("li", {
                                              children: (0, n.jsx)(i.default, {
                                                href: "/blog-details",
                                                children: (0, n.jsx)("a", {
                                                  children: "Blog Details",
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, n.jsxs)("li", {
                                      className: "has-dropdown",
                                      children: [
                                        (0, n.jsx)(i.default, {
                                          href: "/course-grid",
                                          children: (0, n.jsx)("a", {
                                            children: "Pages",
                                          }),
                                        }),
                                        (0, n.jsxs)("ul", {
                                          className: "submenu",
                                          children: [
                                            (0, n.jsx)("li", {
                                              children: (0, n.jsx)(i.default, {
                                                href: "/about",
                                                children: (0, n.jsx)("a", {
                                                  children: "About",
                                                }),
                                              }),
                                            }),
                                            (0, n.jsx)("li", {
                                              children: (0, n.jsx)(i.default, {
                                                href: "/instructor",
                                                children: (0, n.jsx)("a", {
                                                  children: "Instructor",
                                                }),
                                              }),
                                            }),
                                            (0, n.jsx)("li", {
                                              children: (0, n.jsx)(i.default, {
                                                href: "/instructor-details",
                                                children: (0, n.jsx)("a", {
                                                  children:
                                                    "Instructor Details",
                                                }),
                                              }),
                                            }),
                                            (0, n.jsx)("li", {
                                              children: (0, n.jsx)(i.default, {
                                                href: "/event-details",
                                                children: (0, n.jsx)("a", {
                                                  children: "Event Details",
                                                }),
                                              }),
                                            }),
                                            (0, n.jsx)("li", {
                                              children: (0, n.jsx)(i.default, {
                                                href: "/cart",
                                                children: (0, n.jsx)("a", {
                                                  children: "My Cart",
                                                }),
                                              }),
                                            }),
                                            (0, n.jsx)("li", {
                                              children: (0, n.jsx)(i.default, {
                                                href: "/wishlist",
                                                children: (0, n.jsx)("a", {
                                                  children: "My Wishlist",
                                                }),
                                              }),
                                            }),
                                            (0, n.jsx)("li", {
                                              children: (0, n.jsx)(i.default, {
                                                href: "/checkout",
                                                children: (0, n.jsx)("a", {
                                                  children: "Checkout",
                                                }),
                                              }),
                                            }),
                                            (0, n.jsx)("li", {
                                              children: (0, n.jsx)(i.default, {
                                                href: "/sign-in",
                                                children: (0, n.jsx)("a", {
                                                  children: "Sign In",
                                                }),
                                              }),
                                            }),
                                            (0, n.jsx)("li", {
                                              children: (0, n.jsx)(i.default, {
                                                href: "/sign-up",
                                                children: (0, n.jsx)("a", {
                                                  children: "Sign Up",
                                                }),
                                              }),
                                            }),
                                            (0, n.jsx)("li", {
                                              children: (0, n.jsx)(i.default, {
                                                href: "/error",
                                                children: (0, n.jsx)("a", {
                                                  children: "Error",
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, n.jsx)("li", {
                                      children: (0, n.jsx)(i.default, {
                                        href: "/contact",
                                        children: (0, n.jsx)("a", {
                                          children: "Contact",
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          }),
                          (0, n.jsx)("div", {
                            className:
                              "col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-6 col-6",
                            children: (0, n.jsxs)("div", {
                              className:
                                "header__right d-flex justify-content-end align-items-center",
                              children: [
                                (0, n.jsx)("div", {
                                  className: "header__search-2",
                                  children: (0, n.jsx)("svg", {
                                    className: "search-toggle",
                                    onClick: function () {
                                      a(!c);
                                    },
                                    viewBox: "0 0 584.4 584.4",
                                    children: (0, n.jsx)("g", {
                                      children: (0, n.jsxs)("g", {
                                        children: [
                                          (0, n.jsx)("path", {
                                            className: "st0",
                                            d: "M565.7,474.9l-61.1-61.1c-3.8-3.8-8.8-5.9-13.9-5.9c-6.3,0-12.1,3-15.9,8.3c-16.3,22.4-36,42.1-58.4,58.4 c-4.8,3.5-7.8,8.8-8.3,14.5c-0.4,5.6,1.7,11.3,5.8,15.4l61.1,61.1c12.1,12.1,28.2,18.8,45.4,18.8c17.1,0,33.3-6.7,45.4-18.8 C590.7,540.6,590.7,499.9,565.7,474.9z",
                                          }),
                                          (0, n.jsx)("path", {
                                            className: "st1",
                                            d: "M254.6,509.1c140.4,0,254.5-114.2,254.5-254.5C509.1,114.2,394.9,0,254.6,0C114.2,0,0,114.2,0,254.5 C0,394.9,114.2,509.1,254.6,509.1z M254.6,76.4c98.2,0,178.1,79.9,178.1,178.1s-79.9,178.1-178.1,178.1S76.4,352.8,76.4,254.5 S156.3,76.4,254.6,76.4z",
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                }),
                                (0, n.jsx)("div", {
                                  className:
                                    "header__btn header__btn-2 ml-30 d-none d-sm-block",
                                  children: (0, n.jsx)(i.default, {
                                    href: "/sign-up",
                                    children: (0, n.jsx)("a", {
                                      className: "e-btn",
                                      children: "Sign Up",
                                    }),
                                  }),
                                }),
                                (0, n.jsx)("div", {
                                  className: "sidebar__menu d-xl-none",
                                  children: (0, n.jsxs)("div", {
                                    className:
                                      "sidebar-toggle-btn sidebar-toggle-btn-white ml-30",
                                    id: "sidebar-toggle",
                                    onClick: function () {
                                      r(!s);
                                    },
                                    children: [
                                      (0, n.jsx)("span", { className: "line" }),
                                      (0, n.jsx)("span", { className: "line" }),
                                      (0, n.jsx)("span", { className: "line" }),
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
                  (0, n.jsx)(Q.Z, { menuOpen: s, setMenuOpen: r }),
                  (0, n.jsx)("div", {
                    onClick: function () {
                      return r(!1);
                    },
                    className: s ? "body-overlay show" : "body-overlay",
                  }),
                  (0, n.jsx)(q, { searchOpen: c, setSearchOpen: a }),
                  (0, n.jsx)("div", {
                    onClick: function () {
                      return a(!1);
                    },
                    className: c ? "body-overlay show" : "body-overlay",
                  }),
                ],
              }),
            ],
          });
        };
      function $(e, s) {
        for (var r = 0; r < s.length; r++) {
          var n = s[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function ee(e) {
        return (ee = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function se(e, s) {
        return !s || ("object" !== ne(s) && "function" !== typeof s)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : s;
      }
      function re(e, s) {
        return (re =
          Object.setPrototypeOf ||
          function (e, s) {
            return (e.__proto__ = s), e;
          })(e, s);
      }
      var ne = function (e) {
        return e && "undefined" !== typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      };
      function te(e) {
        var s = (function () {
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
            n = ee(e);
          if (s) {
            var t = ee(this).constructor;
            r = Reflect.construct(n, arguments, t);
          } else r = n.apply(this, arguments);
          return se(this, r);
        };
      }
      var le = (function (e) {
        !(function (e, s) {
          if ("function" !== typeof s && null !== s)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(s && s.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            s && re(e, s);
        })(c, e);
        var s,
          r,
          l,
          i = te(c);
        function c(e) {
          return (
            (function (e, s) {
              if (!(e instanceof s))
                throw new TypeError("Cannot call a class as a function");
            })(this, c),
            i.call(this, e)
          );
        }
        return (
          (s = c),
          (l = [
            {
              key: "getInitialProps",
              value: function (e) {
                e.store;
              },
            },
          ]),
          (r = [
            {
              key: "render",
              value: function () {
                return (0, n.jsxs)(t.Fragment, {
                  children: [
                    (0, n.jsx)(K, {}),
                    (0, n.jsx)(J, {}),
                    (0, n.jsx)(U.Z, {}),
                  ],
                });
              },
            },
          ]) && $(s.prototype, r),
          l && $(s, l),
          c
        );
      })(t.Component);
    },
    9846: function () {},
    706: function () {},
    5083: function () {},
  },
  function (e) {
    e.O(0, [774, 675, 430, 232, 606, 887, 888, 179], function () {
      return (s = 6101), e((e.s = s));
      var s;
    });
    var s = e.O();
    _N_E = s;
  },
]);
