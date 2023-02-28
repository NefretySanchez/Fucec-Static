(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [317],
  {
    4285: function (e, s, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/course-sidebar",
        function () {
          return r(5420);
        },
      ]);
    },
    290: function (e, s, r) {
      "use strict";
      var c = r(5893),
        t = r(7294);
      function n(e, s) {
        if (!(e instanceof s))
          throw new TypeError("Cannot call a class as a function");
      }
      function i(e, s) {
        for (var r = 0; r < s.length; r++) {
          var c = s[r];
          (c.enumerable = c.enumerable || !1),
            (c.configurable = !0),
            "value" in c && (c.writable = !0),
            Object.defineProperty(e, c.key, c);
        }
      }
      function a(e) {
        return (a = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function l(e, s) {
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
      function o(e, s) {
        return (o =
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
      function d(e) {
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
            c = a(e);
          if (s) {
            var t = a(this).constructor;
            r = Reflect.construct(c, arguments, t);
          } else r = c.apply(this, arguments);
          return l(this, r);
        };
      }
      var h = (function (e) {
        !(function (e, s) {
          if ("function" !== typeof s && null !== s)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(s && s.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            s && o(e, s);
        })(l, e);
        var s,
          r,
          t,
          a = d(l);
        function l() {
          return n(this, l), a.apply(this, arguments);
        }
        return (
          (s = l),
          (r = [
            {
              key: "render",
              value: function () {
                return (0, c.jsx)("div", {
                  className: "row",
                  children: (0, c.jsx)("div", {
                    className: "col-xxl-12",
                    children: (0, c.jsx)("div", {
                      className: "basic-pagination wow fadeInUp mt-30",
                      "data-wow-delay": ".2s",
                      children: (0, c.jsxs)("ul", {
                        className: "d-flex align-items-center",
                        children: [
                          (0, c.jsx)("li", {
                            className: "prev",
                            children: (0, c.jsxs)("a", {
                              href: "#",
                              className: "link-btn link-prev",
                              children: [
                                "Anterior",
                                (0, c.jsx)("i", {
                                  className: "fas fa-arrow-left",
                                }),
                                (0, c.jsx)("i", {
                                  className: "fas fa-arrow-left",
                                }),
                              ],
                            }),
                          }),
                          (0, c.jsx)("li", {
                            className: "active",
                            children: (0, c.jsx)("a", {
                              href: "#",
                              children: (0, c.jsx)("span", { children: "1" }),
                            }),
                          }),
                          (0, c.jsx)("li", {
                            children: (0, c.jsx)("a", {
                              href: "#",
                              children: (0, c.jsx)("span", { children: "2" }),
                            }),
                          }),
                          (0, c.jsx)("li", {
                            children: (0, c.jsx)("a", {
                              href: "#",
                              children: (0, c.jsx)("span", { children: "3" }),
                            }),
                          }),
                          (0, c.jsx)("li", {
                            className: "next",
                            children: (0, c.jsxs)("a", {
                              href: "#",
                              className: "link-btn",
                              children: [
                                "Siguiente",
                                (0, c.jsx)("i", {
                                  className: "fas fa-arrow-right",
                                }),
                                (0, c.jsx)("i", {
                                  className: "fas fa-arrow-right",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                });
              },
            },
          ]) && i(s.prototype, r),
          t && i(s, t),
          l
        );
      })(t.Component);
      s.Z = h;
    },
    5420: function (e, s, r) {
      "use strict";
      r.r(s),
        r.d(s, {
          default: function () {
            return Be;
          },
        });
      var c = r(5893),
        t = r(7294),
        n = r(4339),
        i = r(2035),
        a = r(5152),
        l = r(9723),
        o = (r(2305), r(1664)),
        u = (0, a.default)(
          Promise.resolve()
            .then(r.bind(r, 9723))
            .then(function (e) {
              return e.Tabs;
            }),
          {
            loadableGenerated: {
              webpack: function () {
                return [9723];
              },
            },
            ssr: !1,
          }
        );
      function d() {
        return (0, c.jsxs)(u, {
          children: [
            (0, c.jsx)("div", {
              className: "course__tab-inner grey-bg-2 mb-50",
              children: (0, c.jsxs)("div", {
                className: "row align-items-center",
                children: [
                  (0, c.jsx)("div", {
                    className: "col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6",
                    children: (0, c.jsxs)("div", {
                      className:
                        "course__tab-wrapper d-flex align-items-center",
                      children: [
                        (0, c.jsx)("div", {
                          className: "course__tab-btn",
                          children: (0, c.jsxs)(l.TabList, {
                            children: [
                              (0, c.jsx)(l.Tab, {
                                children: (0, c.jsx)("button", {
                                  className: "nav-link active",
                                  id: "grid-tab",
                                  type: "button",
                                  children: (0, c.jsxs)("svg", {
                                    className: "grid",
                                    viewBox: "0 0 24 24",
                                    children: [
                                      (0, c.jsx)("rect", {
                                        x: "3",
                                        y: "3",
                                        className: "st0",
                                        width: "7",
                                        height: "7",
                                      }),
                                      (0, c.jsx)("rect", {
                                        x: "14",
                                        y: "3",
                                        className: "st0",
                                        width: "7",
                                        height: "7",
                                      }),
                                      (0, c.jsx)("rect", {
                                        x: "14",
                                        y: "14",
                                        className: "st0",
                                        width: "7",
                                        height: "7",
                                      }),
                                      (0, c.jsx)("rect", {
                                        x: "3",
                                        y: "14",
                                        className: "st0",
                                        width: "7",
                                        height: "7",
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                              (0, c.jsx)(l.Tab, {
                                children: (0, c.jsx)("button", {
                                  className: "nav-link list",
                                  id: "list-tab",
                                  type: "button",
                                  children: (0, c.jsx)("svg", {
                                    className: "list",
                                    viewBox: "0 0 512 512",
                                    children: (0, c.jsxs)("g", {
                                      id: "Layer_2_1_",
                                      children: [
                                        (0, c.jsx)("path", {
                                          className: "st0",
                                          d: "M448,69H192c-17.7,0-32,13.9-32,31s14.3,31,32,31h256c17.7,0,32-13.9,32-31S465.7,69,448,69z",
                                        }),
                                        (0, c.jsx)("circle", {
                                          className: "st0",
                                          cx: "64",
                                          cy: "100",
                                          r: "31",
                                        }),
                                        (0, c.jsx)("path", {
                                          className: "st0",
                                          d: "M448,225H192c-17.7,0-32,13.9-32,31s14.3,31,32,31h256c17.7,0,32-13.9,32-31S465.7,225,448,225z",
                                        }),
                                        (0, c.jsx)("circle", {
                                          className: "st0",
                                          cx: "64",
                                          cy: "256",
                                          r: "31",
                                        }),
                                        (0, c.jsx)("path", {
                                          className: "st0",
                                          d: "M448,381H192c-17.7,0-32,13.9-32,31s14.3,31,32,31h256c17.7,0,32-13.9,32-31S465.7,381,448,381z",
                                        }),
                                        (0, c.jsx)("circle", {
                                          className: "st0",
                                          cx: "64",
                                          cy: "412",
                                          r: "31",
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, c.jsx)("div", {
                          className: "course__view",
                          children: (0, c.jsx)("h4", {
                            children: "Showing 1 - 9 of 84",
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, c.jsx)("div", {
                    className: "col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6",
                    children: (0, c.jsx)("div", {
                      className: "course__sort d-flex justify-content-sm-end",
                      children: (0, c.jsx)("div", {
                        className: "course__sort-inner",
                        children: (0, c.jsxs)("select", {
                          children: [
                            (0, c.jsx)("option", { children: "Default" }),
                            (0, c.jsx)("option", { children: "Option 1" }),
                            (0, c.jsx)("option", { children: "Option 2" }),
                            (0, c.jsx)("option", { children: "Option 3" }),
                            (0, c.jsx)("option", { children: "Option 4" }),
                            (0, c.jsx)("option", { children: "Option 5" }),
                            (0, c.jsx)("option", { children: "Option 6" }),
                          ],
                        }),
                      }),
                    }),
                  }),
                ],
              }),
            }),
            (0, c.jsx)("div", {
              className: "row",
              children: (0, c.jsx)("div", {
                className: "col-xxl-12",
                children: (0, c.jsxs)("div", {
                  className: "course__tab-conent",
                  children: [
                    (0, c.jsx)(l.TabPanel, {
                      children: (0, c.jsxs)("div", {
                        className: "row",
                        children: [
                          (0, c.jsx)("div", {
                            className: "col-xxl-6 col-xl-6 col-lg-6 col-md-6",
                            children: (0, c.jsxs)("div", {
                              className: "course__item white-bg mb-30 fix",
                              children: [
                                (0, c.jsxs)("div", {
                                  className:
                                    "course__thumb w-img p-relative fix",
                                  children: [
                                    (0, c.jsx)(o.default, {
                                      href: "/course-details",
                                      children: (0, c.jsx)("a", {
                                        children: (0, c.jsx)("img", {
                                          src: "assets/img/course/course-1.jpg",
                                          alt: "img not found",
                                        }),
                                      }),
                                    }),
                                    (0, c.jsx)("div", {
                                      className: "course__tag",
                                      children: (0, c.jsx)(o.default, {
                                        href: "/course-details",
                                        children: (0, c.jsx)("a", {
                                          children: "Art & Design",
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                                (0, c.jsxs)("div", {
                                  className: "course__content",
                                  children: [
                                    (0, c.jsxs)("div", {
                                      className:
                                        "course__meta d-flex align-items-center justify-content-between",
                                      children: [
                                        (0, c.jsx)("div", {
                                          className: "course__lesson",
                                          children: (0, c.jsxs)("span", {
                                            children: [
                                              (0, c.jsx)("i", {
                                                className: "fas fa-book",
                                              }),
                                              "43 Lesson",
                                            ],
                                          }),
                                        }),
                                        (0, c.jsx)("div", {
                                          className: "course__rating",
                                          children: (0, c.jsxs)("span", {
                                            children: [
                                              (0, c.jsx)("i", {
                                                className: "fas fa-star",
                                              }),
                                              "4.5 (44)",
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, c.jsx)("h3", {
                                      className: "course__title",
                                      children: (0, c.jsx)(o.default, {
                                        href: "/course-details",
                                        children: (0, c.jsx)("a", {
                                          children:
                                            "Become a product Manager learn the skills & job.",
                                        }),
                                      }),
                                    }),
                                    (0, c.jsxs)("div", {
                                      className:
                                        "course__teacher d-flex align-items-center",
                                      children: [
                                        (0, c.jsx)("div", {
                                          className:
                                            "course__teacher-thumb mr-15",
                                          children: (0, c.jsx)("img", {
                                            src: "assets/img/course/teacher/teacher-1.jpg",
                                            alt: "img not found",
                                          }),
                                        }),
                                        (0, c.jsx)("h6", {
                                          children: (0, c.jsx)(o.default, {
                                            href: "/instructor-details",
                                            children: (0, c.jsx)("a", {
                                              children: "Jim S\xe9chen",
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, c.jsxs)("div", {
                                  className:
                                    "course__more d-flex justify-content-between align-items-center",
                                  children: [
                                    (0, c.jsx)("div", {
                                      className: "course__status",
                                      children: (0, c.jsx)("span", {
                                        children: "Free",
                                      }),
                                    }),
                                    (0, c.jsx)("div", {
                                      className: "course__btn",
                                      children: (0, c.jsx)(o.default, {
                                        href: "/course-details",
                                        children: (0, c.jsxs)("a", {
                                          className: "link-btn",
                                          children: [
                                            "Know Details",
                                            (0, c.jsx)("i", {
                                              className: "fas fa-arrow-right",
                                            }),
                                            (0, c.jsx)("i", {
                                              className: "fas fa-arrow-right",
                                            }),
                                          ],
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, c.jsx)("div", {
                            className: "col-xxl-6 col-xl-6 col-lg-6 col-md-6",
                            children: (0, c.jsxs)("div", {
                              className: "course__item white-bg mb-30 fix",
                              children: [
                                (0, c.jsxs)("div", {
                                  className:
                                    "course__thumb w-img p-relative fix",
                                  children: [
                                    (0, c.jsx)(o.default, {
                                      href: "/course-details",
                                      children: (0, c.jsx)("a", {
                                        children: (0, c.jsx)("img", {
                                          src: "assets/img/course/course-2.jpg",
                                          alt: "img not found",
                                        }),
                                      }),
                                    }),
                                    (0, c.jsx)("div", {
                                      className: "course__tag",
                                      children: (0, c.jsx)(o.default, {
                                        href: "/course-details",
                                        children: (0, c.jsx)("a", {
                                          className: "sky-blue",
                                          children: "Mechanical",
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                                (0, c.jsxs)("div", {
                                  className: "course__content",
                                  children: [
                                    (0, c.jsxs)("div", {
                                      className:
                                        "course__meta d-flex align-items-center justify-content-between",
                                      children: [
                                        (0, c.jsx)("div", {
                                          className: "course__lesson",
                                          children: (0, c.jsxs)("span", {
                                            children: [
                                              (0, c.jsx)("i", {
                                                className: "fas fa-book",
                                              }),
                                              "72 Lesson",
                                            ],
                                          }),
                                        }),
                                        (0, c.jsx)("div", {
                                          className: "course__rating",
                                          children: (0, c.jsxs)("span", {
                                            children: [
                                              (0, c.jsx)("i", {
                                                className: "fas fa-star",
                                              }),
                                              "4.5 (44)",
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, c.jsx)("h3", {
                                      className: "course__title",
                                      children: (0, c.jsx)(o.default, {
                                        href: "/course-details",
                                        children: (0, c.jsx)("a", {
                                          children:
                                            "Fundamentals of music theory Learn new",
                                        }),
                                      }),
                                    }),
                                    (0, c.jsxs)("div", {
                                      className:
                                        "course__teacher d-flex align-items-center",
                                      children: [
                                        (0, c.jsx)("div", {
                                          className:
                                            "course__teacher-thumb mr-15",
                                          children: (0, c.jsx)("img", {
                                            src: "assets/img/course/teacher/teacher-2.jpg",
                                            alt: "img not found",
                                          }),
                                        }),
                                        (0, c.jsx)("h6", {
                                          children: (0, c.jsx)(o.default, {
                                            href: "/instructor-details",
                                            children: (0, c.jsx)("a", {
                                              children: "Barry Tone",
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, c.jsxs)("div", {
                                  className:
                                    "course__more d-flex justify-content-between align-items-center",
                                  children: [
                                    (0, c.jsxs)("div", {
                                      className:
                                        "course__status d-flex align-items-center",
                                      children: [
                                        (0, c.jsx)("span", {
                                          className: "sky-blue",
                                          children: "$32.00",
                                        }),
                                        (0, c.jsx)("span", {
                                          className: "old-price",
                                          children: "$68.00",
                                        }),
                                      ],
                                    }),
                                    (0, c.jsx)("div", {
                                      className: "course__btn",
                                      children: (0, c.jsx)(o.default, {
                                        href: "/course-details",
                                        children: (0, c.jsxs)("a", {
                                          className: "link-btn",
                                          children: [
                                            "Know Details",
                                            (0, c.jsx)("i", {
                                              className: "fas fa-arrow-right",
                                            }),
                                            (0, c.jsx)("i", {
                                              className: "fas fa-arrow-right",
                                            }),
                                          ],
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, c.jsx)("div", {
                            className: "col-xxl-6 col-xl-6 col-lg-6 col-md-6",
                            children: (0, c.jsxs)("div", {
                              className: "course__item white-bg mb-30 fix",
                              children: [
                                (0, c.jsxs)("div", {
                                  className:
                                    "course__thumb w-img p-relative fix",
                                  children: [
                                    (0, c.jsx)(o.default, {
                                      href: "/course-details",
                                      children: (0, c.jsx)("a", {
                                        children: (0, c.jsx)("img", {
                                          src: "assets/img/course/course-7.jpg",
                                          alt: "img not found",
                                        }),
                                      }),
                                    }),
                                    (0, c.jsx)("div", {
                                      className: "course__tag",
                                      children: (0, c.jsx)(o.default, {
                                        href: "/course-details",
                                        children: (0, c.jsx)("a", {
                                          className: "blue-2",
                                          children: "Development",
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                                (0, c.jsxs)("div", {
                                  className: "course__content",
                                  children: [
                                    (0, c.jsxs)("div", {
                                      className:
                                        "course__meta d-flex align-items-center justify-content-between",
                                      children: [
                                        (0, c.jsx)("div", {
                                          className: "course__lesson",
                                          children: (0, c.jsxs)("span", {
                                            children: [
                                              (0, c.jsx)("i", {
                                                className: "fas fa-book",
                                              }),
                                              "43 Lesson",
                                            ],
                                          }),
                                        }),
                                        (0, c.jsx)("div", {
                                          className: "course__rating",
                                          children: (0, c.jsxs)("span", {
                                            children: [
                                              (0, c.jsx)("i", {
                                                className: "fas fa-star",
                                              }),
                                              "4.4 (40)",
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, c.jsx)("h3", {
                                      className: "course__title",
                                      children: (0, c.jsx)(o.default, {
                                        href: "/course-details",
                                        children: (0, c.jsx)("a", {
                                          children:
                                            "Bases Matem\xe1ticas dios \xc1lgebra Ecuacion",
                                        }),
                                      }),
                                    }),
                                    (0, c.jsxs)("div", {
                                      className:
                                        "course__teacher d-flex align-items-center",
                                      children: [
                                        (0, c.jsx)("div", {
                                          className:
                                            "course__teacher-thumb mr-15",
                                          children: (0, c.jsx)("img", {
                                            src: "assets/img/course/teacher/teacher-7.jpg",
                                            alt: "img not found",
                                          }),
                                        }),
                                        (0, c.jsx)("h6", {
                                          children: (0, c.jsx)(o.default, {
                                            href: "/instructor-details",
                                            children: (0, c.jsx)("a", {
                                              children: "Sameul Sefif",
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, c.jsxs)("div", {
                                  className:
                                    "course__more d-flex justify-content-between align-items-center",
                                  children: [
                                    (0, c.jsxs)("div", {
                                      className:
                                        "course__status d-flex align-items-center",
                                      children: [
                                        (0, c.jsx)("span", {
                                          className: "blue-2",
                                          children: "$46.00",
                                        }),
                                        (0, c.jsx)("span", {
                                          className: "old-price",
                                          children: "$68.00",
                                        }),
                                      ],
                                    }),
                                    (0, c.jsx)("div", {
                                      className: "course__btn",
                                      children: (0, c.jsx)(o.default, {
                                        href: "/course-details",
                                        children: (0, c.jsxs)("a", {
                                          className: "link-btn",
                                          children: [
                                            "Know Details",
                                            (0, c.jsx)("i", {
                                              className: "fas fa-arrow-right",
                                            }),
                                            (0, c.jsx)("i", {
                                              className: "fas fa-arrow-right",
                                            }),
                                          ],
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, c.jsx)("div", {
                            className: "col-xxl-6 col-xl-6 col-lg-6 col-md-6",
                            children: (0, c.jsxs)("div", {
                              className: "course__item white-bg mb-30 fix",
                              children: [
                                (0, c.jsxs)("div", {
                                  className:
                                    "course__thumb w-img p-relative fix",
                                  children: [
                                    (0, c.jsx)(o.default, {
                                      href: "/course-details",
                                      children: (0, c.jsx)("a", {
                                        children: (0, c.jsx)("img", {
                                          src: "assets/img/course/course-3.jpg",
                                          alt: "img not found",
                                        }),
                                      }),
                                    }),
                                    (0, c.jsx)("div", {
                                      className: "course__tag",
                                      children: (0, c.jsx)(o.default, {
                                        href: "/course-details",
                                        children: (0, c.jsx)("a", {
                                          className: "green",
                                          children: "Development",
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                                (0, c.jsxs)("div", {
                                  className: "course__content",
                                  children: [
                                    (0, c.jsxs)("div", {
                                      className:
                                        "course__meta d-flex align-items-center justify-content-between",
                                      children: [
                                        (0, c.jsx)("div", {
                                          className: "course__lesson",
                                          children: (0, c.jsxs)("span", {
                                            children: [
                                              (0, c.jsx)("i", {
                                                className: "fas fa-book",
                                              }),
                                              "14 Lesson",
                                            ],
                                          }),
                                        }),
                                        (0, c.jsx)("div", {
                                          className: "course__rating",
                                          children: (0, c.jsxs)("span", {
                                            children: [
                                              (0, c.jsx)("i", {
                                                className: "fas fa-star",
                                              }),
                                              "3.5 (55)",
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, c.jsx)("h3", {
                                      className: "course__title",
                                      children: (0, c.jsx)(o.default, {
                                        href: "/course-details",
                                        children: (0, c.jsx)("a", {
                                          children:
                                            "Strategy law and organization Foundation",
                                        }),
                                      }),
                                    }),
                                    (0, c.jsxs)("div", {
                                      className:
                                        "course__teacher d-flex align-items-center",
                                      children: [
                                        (0, c.jsx)("div", {
                                          className:
                                            "course__teacher-thumb mr-15",
                                          children: (0, c.jsx)("img", {
                                            src: "assets/img/course/teacher/teacher-3.jpg",
                                            alt: "img not found",
                                          }),
                                        }),
                                        (0, c.jsx)("h6", {
                                          children: (0, c.jsx)(o.default, {
                                            href: "/instructor-details",
                                            children: (0, c.jsx)("a", {
                                              children: "Elon Gated",
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, c.jsxs)("div", {
                                  className:
                                    "course__more d-flex justify-content-between align-items-center",
                                  children: [
                                    (0, c.jsxs)("div", {
                                      className:
                                        "course__status d-flex align-items-center",
                                      children: [
                                        (0, c.jsx)("span", {
                                          className: "green",
                                          children: "$46.00",
                                        }),
                                        (0, c.jsx)("span", {
                                          className: "old-price",
                                          children: "$68.00",
                                        }),
                                      ],
                                    }),
                                    (0, c.jsx)("div", {
                                      className: "course__btn",
                                      children: (0, c.jsx)(o.default, {
                                        href: "/course-details",
                                        children: (0, c.jsxs)("a", {
                                          className: "link-btn",
                                          children: [
                                            "Know Details",
                                            (0, c.jsx)("i", {
                                              className: "fas fa-arrow-right",
                                            }),
                                            (0, c.jsx)("i", {
                                              className: "fas fa-arrow-right",
                                            }),
                                          ],
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, c.jsx)("div", {
                            className: "col-xxl-6 col-xl-6 col-lg-6 col-md-6",
                            children: (0, c.jsxs)("div", {
                              className: "course__item white-bg mb-30 fix",
                              children: [
                                (0, c.jsxs)("div", {
                                  className:
                                    "course__thumb w-img p-relative fix",
                                  children: [
                                    (0, c.jsx)(o.default, {
                                      href: "/course-details",
                                      children: (0, c.jsx)("a", {
                                        children: (0, c.jsx)("img", {
                                          src: "assets/img/course/course-4.jpg",
                                          alt: "img not found",
                                        }),
                                      }),
                                    }),
                                    (0, c.jsx)("div", {
                                      className: "course__tag",
                                      children: (0, c.jsx)(o.default, {
                                        href: "/course-details",
                                        children: (0, c.jsx)("a", {
                                          className: "blue",
                                          children: "Marketing",
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                                (0, c.jsxs)("div", {
                                  className: "course__content",
                                  children: [
                                    (0, c.jsxs)("div", {
                                      className:
                                        "course__meta d-flex align-items-center justify-content-between",
                                      children: [
                                        (0, c.jsx)("div", {
                                          className: "course__lesson",
                                          children: (0, c.jsxs)("span", {
                                            children: [
                                              (0, c.jsx)("i", {
                                                className: "fas fa-book",
                                              }),
                                              "22 Lesson",
                                            ],
                                          }),
                                        }),
                                        (0, c.jsx)("div", {
                                          className: "course__rating",
                                          children: (0, c.jsxs)("span", {
                                            children: [
                                              (0, c.jsx)("i", {
                                                className: "fas fa-star",
                                              }),
                                              "4.5 (42)",
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, c.jsx)("h3", {
                                      className: "course__title",
                                      children: (0, c.jsx)(o.default, {
                                        href: "/course-details",
                                        children: (0, c.jsx)("a", {
                                          children:
                                            "The business Intelligence analyst Course 2022",
                                        }),
                                      }),
                                    }),
                                    (0, c.jsxs)("div", {
                                      className:
                                        "course__teacher d-flex align-items-center",
                                      children: [
                                        (0, c.jsx)("div", {
                                          className:
                                            "course__teacher-thumb mr-15",
                                          children: (0, c.jsx)("img", {
                                            src: "assets/img/course/teacher/teacher-4.jpg",
                                            alt: "img not found",
                                          }),
                                        }),
                                        (0, c.jsx)("h6", {
                                          children: (0, c.jsx)(o.default, {
                                            href: "/instructor-details",
                                            children: (0, c.jsx)("a", {
                                              children: "Eleanor Fant",
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, c.jsxs)("div", {
                                  className:
                                    "course__more d-flex justify-content-between align-items-center",
                                  children: [
                                    (0, c.jsxs)("div", {
                                      className:
                                        "course__status d-flex align-items-center",
                                      children: [
                                        (0, c.jsx)("span", {
                                          className: "blue",
                                          children: "$62.00",
                                        }),
                                        (0, c.jsx)("span", {
                                          className: "old-price",
                                          children: "$97.00",
                                        }),
                                      ],
                                    }),
                                    (0, c.jsx)("div", {
                                      className: "course__btn",
                                      children: (0, c.jsx)(o.default, {
                                        href: "/course-details",
                                        children: (0, c.jsxs)("a", {
                                          className: "link-btn",
                                          children: [
                                            "Know Details",
                                            (0, c.jsx)("i", {
                                              className: "fas fa-arrow-right",
                                            }),
                                            (0, c.jsx)("i", {
                                              className: "fas fa-arrow-right",
                                            }),
                                          ],
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, c.jsx)("div", {
                            className: "col-xxl-6 col-xl-6 col-lg-6 col-md-6",
                            children: (0, c.jsxs)("div", {
                              className: "course__item white-bg mb-30 fix",
                              children: [
                                (0, c.jsxs)("div", {
                                  className:
                                    "course__thumb w-img p-relative fix",
                                  children: [
                                    (0, c.jsx)(o.default, {
                                      href: "/course-details",
                                      children: (0, c.jsx)("a", {
                                        children: (0, c.jsx)("img", {
                                          src: "assets/img/course/course-8.jpg",
                                          alt: "img not found",
                                        }),
                                      }),
                                    }),
                                    (0, c.jsx)("div", {
                                      className: "course__tag",
                                      children: (0, c.jsx)(o.default, {
                                        href: "/course-details",
                                        children: (0, c.jsx)("a", {
                                          className: "yellow",
                                          children: "Marketing",
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                                (0, c.jsxs)("div", {
                                  className: "course__content",
                                  children: [
                                    (0, c.jsxs)("div", {
                                      className:
                                        "course__meta d-flex align-items-center justify-content-between",
                                      children: [
                                        (0, c.jsx)("div", {
                                          className: "course__lesson",
                                          children: (0, c.jsxs)("span", {
                                            children: [
                                              (0, c.jsx)("i", {
                                                className: "fas fa-book",
                                              }),
                                              "22 Lesson",
                                            ],
                                          }),
                                        }),
                                        (0, c.jsx)("div", {
                                          className: "course__rating",
                                          children: (0, c.jsxs)("span", {
                                            children: [
                                              (0, c.jsx)("i", {
                                                className: "fas fa-star",
                                              }),
                                              "4.5 (42)",
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, c.jsx)("h3", {
                                      className: "course__title",
                                      children: (0, c.jsx)(o.default, {
                                        href: "/course-details",
                                        children: (0, c.jsx)("a", {
                                          children:
                                            "The business Intelligence analyst Course 2022",
                                        }),
                                      }),
                                    }),
                                    (0, c.jsxs)("div", {
                                      className:
                                        "course__teacher d-flex align-items-center",
                                      children: [
                                        (0, c.jsx)("div", {
                                          className:
                                            "course__teacher-thumb mr-15",
                                          children: (0, c.jsx)("img", {
                                            src: "assets/img/course/teacher/teacher-8.jpg",
                                            alt: "img not found",
                                          }),
                                        }),
                                        (0, c.jsx)("h6", {
                                          children: (0, c.jsx)(o.default, {
                                            href: "/instructor-details",
                                            children: (0, c.jsx)("a", {
                                              children: "Brian Cumin",
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, c.jsxs)("div", {
                                  className:
                                    "course__more d-flex justify-content-between align-items-center",
                                  children: [
                                    (0, c.jsxs)("div", {
                                      className:
                                        "course__status d-flex align-items-center",
                                      children: [
                                        (0, c.jsx)("span", {
                                          className: "yellow",
                                          children: "$62.00",
                                        }),
                                        (0, c.jsx)("span", {
                                          className: "old-price",
                                          children: "$97.00",
                                        }),
                                      ],
                                    }),
                                    (0, c.jsx)("div", {
                                      className: "course__btn",
                                      children: (0, c.jsx)(o.default, {
                                        href: "/course-details",
                                        children: (0, c.jsxs)("a", {
                                          className: "link-btn",
                                          children: [
                                            "Know Details",
                                            (0, c.jsx)("i", {
                                              className: "fas fa-arrow-right",
                                            }),
                                            (0, c.jsx)("i", {
                                              className: "fas fa-arrow-right",
                                            }),
                                          ],
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, c.jsx)(l.TabPanel, {
                      children: (0, c.jsxs)("div", {
                        className: "row",
                        children: [
                          (0, c.jsx)("div", {
                            className: "col-xxl-12",
                            children: (0, c.jsx)("div", {
                              className: "course__item white-bg mb-30 fix",
                              children: (0, c.jsxs)("div", {
                                className: "row gx-0",
                                children: [
                                  (0, c.jsx)("div", {
                                    className: "col-xxl-4 col-xl-4 col-lg-4",
                                    children: (0, c.jsxs)("div", {
                                      className:
                                        "course__thumb course__thumb-list w-img p-relative fix",
                                      children: [
                                        (0, c.jsx)(o.default, {
                                          href: "/course-details",
                                          children: (0, c.jsx)("a", {
                                            children: (0, c.jsx)("img", {
                                              src: "assets/img/course/list/course-1.jpg",
                                              alt: "img not found",
                                            }),
                                          }),
                                        }),
                                        (0, c.jsx)("div", {
                                          className: "course__tag",
                                          children: (0, c.jsx)(o.default, {
                                            href: "/course-details",
                                            children: (0, c.jsx)("a", {
                                              children: "Art & Design",
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, c.jsx)("div", {
                                    className: "col-xxl-8 col-xl-8 col-lg-8",
                                    children: (0, c.jsxs)("div", {
                                      className: "course__right",
                                      children: [
                                        (0, c.jsxs)("div", {
                                          className:
                                            "course__content course__content-4",
                                          children: [
                                            (0, c.jsxs)("div", {
                                              className:
                                                "course__meta d-flex align-items-center",
                                              children: [
                                                (0, c.jsx)("div", {
                                                  className:
                                                    "course__lesson mr-20",
                                                  children: (0, c.jsxs)(
                                                    "span",
                                                    {
                                                      children: [
                                                        (0, c.jsx)("i", {
                                                          className:
                                                            "fas fa-book",
                                                        }),
                                                        "43 Lesson",
                                                      ],
                                                    }
                                                  ),
                                                }),
                                                (0, c.jsx)("div", {
                                                  className: "course__rating",
                                                  children: (0, c.jsxs)(
                                                    "span",
                                                    {
                                                      children: [
                                                        (0, c.jsx)("i", {
                                                          className:
                                                            "fas fa-star",
                                                        }),
                                                        "4.5 (44)",
                                                      ],
                                                    }
                                                  ),
                                                }),
                                              ],
                                            }),
                                            (0, c.jsx)("h3", {
                                              className: "course__title",
                                              children: (0, c.jsx)(o.default, {
                                                href: "/course-details",
                                                children: (0, c.jsx)("a", {
                                                  children:
                                                    "Become a product Manager learn the skills & job.",
                                                }),
                                              }),
                                            }),
                                            (0, c.jsxs)("div", {
                                              className:
                                                "course__teacher d-flex align-items-center",
                                              children: [
                                                (0, c.jsx)("div", {
                                                  className:
                                                    "course__teacher-thumb mr-15",
                                                  children: (0, c.jsx)("img", {
                                                    src: "assets/img/course/teacher/teacher-1.jpg",
                                                    alt: "img not found",
                                                  }),
                                                }),
                                                (0, c.jsx)("h6", {
                                                  children: (0, c.jsx)(
                                                    o.default,
                                                    {
                                                      href: "/instructor-details",
                                                      children: (0, c.jsx)(
                                                        "a",
                                                        {
                                                          children: "Jimmy pol",
                                                        }
                                                      ),
                                                    }
                                                  ),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, c.jsxs)("div", {
                                          className:
                                            "course__more course__more-2 course__more-3 d-flex justify-content-between align-items-center",
                                          children: [
                                            (0, c.jsx)("div", {
                                              className: "course__status",
                                              children: (0, c.jsx)("span", {
                                                children: "Free",
                                              }),
                                            }),
                                            (0, c.jsx)("div", {
                                              className: "course__btn",
                                              children: (0, c.jsx)(o.default, {
                                                href: "/course-details",
                                                children: (0, c.jsxs)("a", {
                                                  className: "link-btn",
                                                  children: [
                                                    "Know Details",
                                                    (0, c.jsx)("i", {
                                                      className:
                                                        "fas fa-arrow-right",
                                                    }),
                                                    (0, c.jsx)("i", {
                                                      className:
                                                        "fas fa-arrow-right",
                                                    }),
                                                  ],
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          }),
                          (0, c.jsx)("div", {
                            className: "col-xxl-12",
                            children: (0, c.jsx)("div", {
                              className: "course__item white-bg mb-30 fix",
                              children: (0, c.jsxs)("div", {
                                className: "row gx-0",
                                children: [
                                  (0, c.jsx)("div", {
                                    className: "col-xxl-4 col-xl-4 col-lg-4",
                                    children: (0, c.jsxs)("div", {
                                      className:
                                        "course__thumb course__thumb-list w-img p-relative fix",
                                      children: [
                                        (0, c.jsx)(o.default, {
                                          href: "/course-details",
                                          children: (0, c.jsx)("a", {
                                            children: (0, c.jsx)("img", {
                                              src: "assets/img/course/list/course-2.jpg",
                                              alt: "img not found",
                                            }),
                                          }),
                                        }),
                                        (0, c.jsx)("div", {
                                          className: "course__tag",
                                          children: (0, c.jsx)(o.default, {
                                            href: "/course-details",
                                            children: (0, c.jsx)("a", {
                                              className: "sky-blue",
                                              children: "Art & Design",
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, c.jsx)("div", {
                                    className: "col-xxl-8 col-xl-8 col-lg-8",
                                    children: (0, c.jsxs)("div", {
                                      className: "course__right",
                                      children: [
                                        (0, c.jsxs)("div", {
                                          className:
                                            "course__content course__content-4",
                                          children: [
                                            (0, c.jsxs)("div", {
                                              className:
                                                "course__meta d-flex align-items-center",
                                              children: [
                                                (0, c.jsx)("div", {
                                                  className:
                                                    "course__lesson mr-20",
                                                  children: (0, c.jsxs)(
                                                    "span",
                                                    {
                                                      children: [
                                                        (0, c.jsx)("i", {
                                                          className:
                                                            "fas fa-book",
                                                        }),
                                                        "72 Lesson",
                                                      ],
                                                    }
                                                  ),
                                                }),
                                                (0, c.jsx)("div", {
                                                  className: "course__rating",
                                                  children: (0, c.jsxs)(
                                                    "span",
                                                    {
                                                      children: [
                                                        (0, c.jsx)("i", {
                                                          className:
                                                            "fas fa-star",
                                                        }),
                                                        "4.5 (44)",
                                                      ],
                                                    }
                                                  ),
                                                }),
                                              ],
                                            }),
                                            (0, c.jsx)("h3", {
                                              className: "course__title",
                                              children: (0, c.jsx)(o.default, {
                                                href: "/course-details",
                                                children: (0, c.jsx)("a", {
                                                  children:
                                                    "Fundamentals of music theory Learn new.",
                                                }),
                                              }),
                                            }),
                                            (0, c.jsxs)("div", {
                                              className:
                                                "course__teacher d-flex align-items-center",
                                              children: [
                                                (0, c.jsx)("div", {
                                                  className:
                                                    "course__teacher-thumb mr-15",
                                                  children: (0, c.jsx)("img", {
                                                    src: "assets/img/course/teacher/teacher-2.jpg",
                                                    alt: "img not found",
                                                  }),
                                                }),
                                                (0, c.jsx)("h6", {
                                                  children: (0, c.jsx)(
                                                    o.default,
                                                    {
                                                      href: "/instructor-details",
                                                      children: (0, c.jsx)(
                                                        "a",
                                                        {
                                                          children:
                                                            "Barry Tone",
                                                        }
                                                      ),
                                                    }
                                                  ),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, c.jsxs)("div", {
                                          className:
                                            "course__more course__more-2 course__more-3 d-flex justify-content-between align-items-center",
                                          children: [
                                            (0, c.jsxs)("div", {
                                              className:
                                                "course__status d-flex align-items-center",
                                              children: [
                                                (0, c.jsx)("span", {
                                                  className: "sky-blue",
                                                  children: "$32.00",
                                                }),
                                                (0, c.jsx)("span", {
                                                  className: "old-price",
                                                  children: "$68.00",
                                                }),
                                              ],
                                            }),
                                            (0, c.jsx)("div", {
                                              className: "course__btn",
                                              children: (0, c.jsx)(o.default, {
                                                href: "/course-details",
                                                children: (0, c.jsxs)("a", {
                                                  className: "link-btn",
                                                  children: [
                                                    "Know Details",
                                                    (0, c.jsx)("i", {
                                                      className:
                                                        "fas fa-arrow-right",
                                                    }),
                                                    (0, c.jsx)("i", {
                                                      className:
                                                        "fas fa-arrow-right",
                                                    }),
                                                  ],
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          }),
                          (0, c.jsx)("div", {
                            className: "col-xxl-12",
                            children: (0, c.jsx)("div", {
                              className: "course__item white-bg mb-30 fix",
                              children: (0, c.jsxs)("div", {
                                className: "row gx-0",
                                children: [
                                  (0, c.jsx)("div", {
                                    className: "col-xxl-4 col-xl-4 col-lg-4",
                                    children: (0, c.jsxs)("div", {
                                      className:
                                        "course__thumb course__thumb-list w-img p-relative fix",
                                      children: [
                                        (0, c.jsx)(o.default, {
                                          href: "/course-details",
                                          children: (0, c.jsx)("a", {
                                            children: (0, c.jsx)("img", {
                                              src: "assets/img/course/list/course-3.jpg",
                                              alt: "img not found",
                                            }),
                                          }),
                                        }),
                                        (0, c.jsx)("div", {
                                          className: "course__tag",
                                          children: (0, c.jsx)(o.default, {
                                            href: "/course-details",
                                            children: (0, c.jsx)("a", {
                                              className: "blue-2",
                                              children: "Art & Design",
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, c.jsx)("div", {
                                    className: "col-xxl-8 col-xl-8 col-lg-8",
                                    children: (0, c.jsxs)("div", {
                                      className: "course__right",
                                      children: [
                                        (0, c.jsxs)("div", {
                                          className:
                                            "course__content course__content-4",
                                          children: [
                                            (0, c.jsxs)("div", {
                                              className:
                                                "course__meta d-flex align-items-center",
                                              children: [
                                                (0, c.jsx)("div", {
                                                  className:
                                                    "course__lesson mr-20",
                                                  children: (0, c.jsxs)(
                                                    "span",
                                                    {
                                                      children: [
                                                        (0, c.jsx)("i", {
                                                          className:
                                                            "fas fa-book",
                                                        }),
                                                        "14 Lesson",
                                                      ],
                                                    }
                                                  ),
                                                }),
                                                (0, c.jsx)("div", {
                                                  className: "course__rating",
                                                  children: (0, c.jsxs)(
                                                    "span",
                                                    {
                                                      children: [
                                                        (0, c.jsx)("i", {
                                                          className:
                                                            "fas fa-star",
                                                        }),
                                                        "3.5 (32)",
                                                      ],
                                                    }
                                                  ),
                                                }),
                                              ],
                                            }),
                                            (0, c.jsx)("h3", {
                                              className: "course__title",
                                              children: (0, c.jsx)(o.default, {
                                                href: "/course-details",
                                                children: (0, c.jsx)("a", {
                                                  children:
                                                    "Strategy law and organization Foundation",
                                                }),
                                              }),
                                            }),
                                            (0, c.jsxs)("div", {
                                              className:
                                                "course__teacher d-flex align-items-center",
                                              children: [
                                                (0, c.jsx)("div", {
                                                  className:
                                                    "course__teacher-thumb mr-15",
                                                  children: (0, c.jsx)("img", {
                                                    src: "assets/img/course/teacher/teacher-3.jpg",
                                                    alt: "img not found",
                                                  }),
                                                }),
                                                (0, c.jsx)("h6", {
                                                  children: (0, c.jsx)(
                                                    o.default,
                                                    {
                                                      href: "/instructor-details",
                                                      children: (0, c.jsx)(
                                                        "a",
                                                        {
                                                          children: "Elon Tusk",
                                                        }
                                                      ),
                                                    }
                                                  ),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, c.jsxs)("div", {
                                          className:
                                            "course__more course__more-2 course__more-3 d-flex justify-content-between align-items-center",
                                          children: [
                                            (0, c.jsxs)("div", {
                                              className:
                                                "course__status d-flex align-items-center",
                                              children: [
                                                (0, c.jsx)("span", {
                                                  className: "blue-2",
                                                  children: "$46.00",
                                                }),
                                                (0, c.jsx)("span", {
                                                  className: "old-price",
                                                  children: "$68.00",
                                                }),
                                              ],
                                            }),
                                            (0, c.jsx)("div", {
                                              className: "course__btn",
                                              children: (0, c.jsx)(o.default, {
                                                href: "/course-details",
                                                children: (0, c.jsxs)("a", {
                                                  className: "link-btn",
                                                  children: [
                                                    "Know Details",
                                                    (0, c.jsx)("i", {
                                                      className:
                                                        "fas fa-arrow-right",
                                                    }),
                                                    (0, c.jsx)("i", {
                                                      className:
                                                        "fas fa-arrow-right",
                                                    }),
                                                  ],
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          }),
                          (0, c.jsx)("div", {
                            className: "col-xxl-12",
                            children: (0, c.jsx)("div", {
                              className: "course__item white-bg mb-30 fix",
                              children: (0, c.jsxs)("div", {
                                className: "row gx-0",
                                children: [
                                  (0, c.jsx)("div", {
                                    className: "col-xxl-4 col-xl-4 col-lg-4",
                                    children: (0, c.jsxs)("div", {
                                      className:
                                        "course__thumb course__thumb-list w-img p-relative fix",
                                      children: [
                                        (0, c.jsx)(o.default, {
                                          href: "/course-details",
                                          children: (0, c.jsx)("a", {
                                            children: (0, c.jsx)("img", {
                                              src: "assets/img/course/list/course-4.jpg",
                                              alt: "img not found",
                                            }),
                                          }),
                                        }),
                                        (0, c.jsx)("div", {
                                          className: "course__tag",
                                          children: (0, c.jsx)(o.default, {
                                            href: "/course-details",
                                            children: (0, c.jsx)("a", {
                                              className: "green",
                                              children: "Art & Design",
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, c.jsx)("div", {
                                    className: "col-xxl-8 col-xl-8 col-lg-8",
                                    children: (0, c.jsxs)("div", {
                                      className: "course__right",
                                      children: [
                                        (0, c.jsxs)("div", {
                                          className:
                                            "course__content course__content-4",
                                          children: [
                                            (0, c.jsxs)("div", {
                                              className:
                                                "course__meta d-flex align-items-center",
                                              children: [
                                                (0, c.jsx)("div", {
                                                  className:
                                                    "course__lesson mr-20",
                                                  children: (0, c.jsxs)(
                                                    "span",
                                                    {
                                                      children: [
                                                        (0, c.jsx)("i", {
                                                          className:
                                                            "fas fa-book",
                                                        }),
                                                        "14 Lesson",
                                                      ],
                                                    }
                                                  ),
                                                }),
                                                (0, c.jsx)("div", {
                                                  className: "course__rating",
                                                  children: (0, c.jsxs)(
                                                    "span",
                                                    {
                                                      children: [
                                                        (0, c.jsx)("i", {
                                                          className:
                                                            "fas fa-star",
                                                        }),
                                                        "3.5 (32)",
                                                      ],
                                                    }
                                                  ),
                                                }),
                                              ],
                                            }),
                                            (0, c.jsx)("h3", {
                                              className: "course__title",
                                              children: (0, c.jsx)(o.default, {
                                                href: "/course-details",
                                                children: (0, c.jsx)("a", {
                                                  children:
                                                    "The business Intelligence analyst Course 2022",
                                                }),
                                              }),
                                            }),
                                            (0, c.jsxs)("div", {
                                              className:
                                                "course__teacher d-flex align-items-center",
                                              children: [
                                                (0, c.jsx)("div", {
                                                  className:
                                                    "course__teacher-thumb mr-15",
                                                  children: (0, c.jsx)("img", {
                                                    src: "assets/img/course/teacher/teacher-4.jpg",
                                                    alt: "img not found",
                                                  }),
                                                }),
                                                (0, c.jsx)("h6", {
                                                  children: (0, c.jsx)(
                                                    o.default,
                                                    {
                                                      href: "/instructor-details",
                                                      children: (0, c.jsx)(
                                                        "a",
                                                        {
                                                          children:
                                                            "Eleanor Fant",
                                                        }
                                                      ),
                                                    }
                                                  ),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, c.jsxs)("div", {
                                          className:
                                            "course__more course__more-2 course__more-3 d-flex justify-content-between align-items-center",
                                          children: [
                                            (0, c.jsxs)("div", {
                                              className:
                                                "course__status d-flex align-items-center",
                                              children: [
                                                (0, c.jsx)("span", {
                                                  className: "green",
                                                  children: "$46.00",
                                                }),
                                                (0, c.jsx)("span", {
                                                  className: "old-price",
                                                  children: "$68.00",
                                                }),
                                              ],
                                            }),
                                            (0, c.jsx)("div", {
                                              className: "course__btn",
                                              children: (0, c.jsx)(o.default, {
                                                href: "/course-details",
                                                children: (0, c.jsxs)("a", {
                                                  className: "link-btn",
                                                  children: [
                                                    "Know Details",
                                                    (0, c.jsx)("i", {
                                                      className:
                                                        "fas fa-arrow-right",
                                                    }),
                                                    (0, c.jsx)("i", {
                                                      className:
                                                        "fas fa-arrow-right",
                                                    }),
                                                  ],
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          }),
                          (0, c.jsx)("div", {
                            className: "col-xxl-12",
                            children: (0, c.jsx)("div", {
                              className: "course__item white-bg mb-30 fix",
                              children: (0, c.jsxs)("div", {
                                className: "row gx-0",
                                children: [
                                  (0, c.jsx)("div", {
                                    className: "col-xxl-4 col-xl-4 col-lg-4",
                                    children: (0, c.jsxs)("div", {
                                      className:
                                        "course__thumb course__thumb-list w-img p-relative fix",
                                      children: [
                                        (0, c.jsx)(o.default, {
                                          href: "/course-details",
                                          children: (0, c.jsx)("a", {
                                            children: (0, c.jsx)("img", {
                                              src: "assets/img/course/list/course-5.jpg",
                                              alt: "img not found",
                                            }),
                                          }),
                                        }),
                                        (0, c.jsx)("div", {
                                          className: "course__tag",
                                          children: (0, c.jsx)(o.default, {
                                            href: "/course-details",
                                            children: (0, c.jsx)("a", {
                                              className: "blue",
                                              children: "Art & Design",
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, c.jsx)("div", {
                                    className: "col-xxl-8 col-xl-8 col-lg-8",
                                    children: (0, c.jsxs)("div", {
                                      className: "course__right",
                                      children: [
                                        (0, c.jsxs)("div", {
                                          className:
                                            "course__content course__content-4",
                                          children: [
                                            (0, c.jsxs)("div", {
                                              className:
                                                "course__meta d-flex align-items-center",
                                              children: [
                                                (0, c.jsx)("div", {
                                                  className:
                                                    "course__lesson mr-20",
                                                  children: (0, c.jsxs)(
                                                    "span",
                                                    {
                                                      children: [
                                                        (0, c.jsx)("i", {
                                                          className:
                                                            "fas fa-book",
                                                        }),
                                                        "14 Lesson",
                                                      ],
                                                    }
                                                  ),
                                                }),
                                                (0, c.jsx)("div", {
                                                  className: "course__rating",
                                                  children: (0, c.jsxs)(
                                                    "span",
                                                    {
                                                      children: [
                                                        (0, c.jsx)("i", {
                                                          className:
                                                            "fas fa-star",
                                                        }),
                                                        "3.5 (32)",
                                                      ],
                                                    }
                                                  ),
                                                }),
                                              ],
                                            }),
                                            (0, c.jsx)("h3", {
                                              className: "course__title",
                                              children: (0, c.jsx)(o.default, {
                                                href: "/course-details",
                                                children: (0, c.jsx)("a", {
                                                  children:
                                                    "Build your media and Public presence",
                                                }),
                                              }),
                                            }),
                                            (0, c.jsxs)("div", {
                                              className:
                                                "course__teacher d-flex align-items-center",
                                              children: [
                                                (0, c.jsx)("div", {
                                                  className:
                                                    "course__teacher-thumb mr-15",
                                                  children: (0, c.jsx)("img", {
                                                    src: "assets/img/course/teacher/teacher-5.jpg",
                                                    alt: "img not found",
                                                  }),
                                                }),
                                                (0, c.jsx)("h6", {
                                                  children: (0, c.jsx)(
                                                    o.default,
                                                    {
                                                      href: "/instructor-details",
                                                      children: (0, c.jsx)(
                                                        "a",
                                                        {
                                                          children:
                                                            "Pelican Steve",
                                                        }
                                                      ),
                                                    }
                                                  ),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, c.jsxs)("div", {
                                          className:
                                            "course__more course__more-2 course__more-3 d-flex justify-content-between align-items-center",
                                          children: [
                                            (0, c.jsxs)("div", {
                                              className:
                                                "course__status d-flex align-items-center",
                                              children: [
                                                (0, c.jsx)("span", {
                                                  className: "blue",
                                                  children: "$62.00",
                                                }),
                                                (0, c.jsx)("span", {
                                                  className: "old-price",
                                                  children: "$97.00",
                                                }),
                                              ],
                                            }),
                                            (0, c.jsx)("div", {
                                              className: "course__btn",
                                              children: (0, c.jsx)(o.default, {
                                                href: "/course-details",
                                                children: (0, c.jsxs)("a", {
                                                  className: "link-btn",
                                                  children: [
                                                    "Know Details",
                                                    (0, c.jsx)("i", {
                                                      className:
                                                        "fas fa-arrow-right",
                                                    }),
                                                    (0, c.jsx)("i", {
                                                      className:
                                                        "fas fa-arrow-right",
                                                    }),
                                                  ],
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          }),
                          (0, c.jsx)("div", {
                            className: "col-xxl-12",
                            children: (0, c.jsx)("div", {
                              className: "course__item white-bg mb-30 fix",
                              children: (0, c.jsxs)("div", {
                                className: "row gx-0",
                                children: [
                                  (0, c.jsx)("div", {
                                    className: "col-xxl-4 col-xl-4 col-lg-4",
                                    children: (0, c.jsxs)("div", {
                                      className:
                                        "course__thumb course__thumb-list w-img p-relative fix",
                                      children: [
                                        (0, c.jsx)(o.default, {
                                          href: "/course-details",
                                          children: (0, c.jsx)("a", {
                                            children: (0, c.jsx)("img", {
                                              src: "assets/img/course/list/course-6.jpg",
                                              alt: "img not found",
                                            }),
                                          }),
                                        }),
                                        (0, c.jsx)("div", {
                                          className: "course__tag",
                                          children: (0, c.jsx)(o.default, {
                                            href: "/course-details",
                                            children: (0, c.jsx)("a", {
                                              className: "yellow",
                                              children: "Art & Design",
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, c.jsx)("div", {
                                    className: "col-xxl-8 col-xl-8 col-lg-8",
                                    children: (0, c.jsxs)("div", {
                                      className: "course__right",
                                      children: [
                                        (0, c.jsxs)("div", {
                                          className:
                                            "course__content course__content-4",
                                          children: [
                                            (0, c.jsxs)("div", {
                                              className:
                                                "course__meta d-flex align-items-center",
                                              children: [
                                                (0, c.jsx)("div", {
                                                  className:
                                                    "course__lesson mr-20",
                                                  children: (0, c.jsxs)(
                                                    "span",
                                                    {
                                                      children: [
                                                        (0, c.jsx)("i", {
                                                          className:
                                                            "fas fa-book",
                                                        }),
                                                        "33 Lesson",
                                                      ],
                                                    }
                                                  ),
                                                }),
                                                (0, c.jsx)("div", {
                                                  className: "course__rating",
                                                  children: (0, c.jsxs)(
                                                    "span",
                                                    {
                                                      children: [
                                                        (0, c.jsx)("i", {
                                                          className:
                                                            "fas fa-star",
                                                        }),
                                                        "3.5 (72)",
                                                      ],
                                                    }
                                                  ),
                                                }),
                                              ],
                                            }),
                                            (0, c.jsx)("h3", {
                                              className: "course__title",
                                              children: (0, c.jsx)(o.default, {
                                                href: "/course-details",
                                                children: (0, c.jsx)("a", {
                                                  children:
                                                    "Creative writing through Storytelling",
                                                }),
                                              }),
                                            }),
                                            (0, c.jsxs)("div", {
                                              className:
                                                "course__teacher d-flex align-items-center",
                                              children: [
                                                (0, c.jsx)("div", {
                                                  className:
                                                    "course__teacher-thumb mr-15",
                                                  children: (0, c.jsx)("img", {
                                                    src: "assets/img/course/teacher/teacher-6.jpg",
                                                    alt: "img not found",
                                                  }),
                                                }),
                                                (0, c.jsx)("h6", {
                                                  children: (0, c.jsx)(
                                                    o.default,
                                                    {
                                                      href: "/instructor-details",
                                                      children: (0, c.jsx)(
                                                        "a",
                                                        {
                                                          children:
                                                            "Elon Gated",
                                                        }
                                                      ),
                                                    }
                                                  ),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, c.jsxs)("div", {
                                          className:
                                            "course__more course__more-2 course__more-3 d-flex justify-content-between align-items-center",
                                          children: [
                                            (0, c.jsxs)("div", {
                                              className:
                                                "course__status d-flex align-items-center",
                                              children: [
                                                (0, c.jsx)("span", {
                                                  className: "yellow",
                                                  children: "$62.00",
                                                }),
                                                (0, c.jsx)("span", {
                                                  className: "old-price",
                                                  children: "$97.00",
                                                }),
                                              ],
                                            }),
                                            (0, c.jsx)("div", {
                                              className: "course__btn",
                                              children: (0, c.jsx)(o.default, {
                                                href: "/course-details",
                                                children: (0, c.jsxs)("a", {
                                                  className: "link-btn",
                                                  children: [
                                                    "Know Details",
                                                    (0, c.jsx)("i", {
                                                      className:
                                                        "fas fa-arrow-right",
                                                    }),
                                                    (0, c.jsx)("i", {
                                                      className:
                                                        "fas fa-arrow-right",
                                                    }),
                                                  ],
                                                }),
                                              }),
                                            }),
                                          ],
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
                    }),
                  ],
                }),
              }),
            }),
          ],
        });
      }
      var h = r(290);
      function f(e, s) {
        if (!(e instanceof s))
          throw new TypeError("Cannot call a class as a function");
      }
      function m(e, s) {
        for (var r = 0; r < s.length; r++) {
          var c = s[r];
          (c.enumerable = c.enumerable || !1),
            (c.configurable = !0),
            "value" in c && (c.writable = !0),
            Object.defineProperty(e, c.key, c);
        }
      }
      function x(e) {
        return (x = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function j(e, s) {
        return !s || ("object" !== p(s) && "function" !== typeof s)
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
      var p = function (e) {
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
            c = x(e);
          if (s) {
            var t = x(this).constructor;
            r = Reflect.construct(c, arguments, t);
          } else r = c.apply(this, arguments);
          return j(this, r);
        };
      }
      var N = (function (e) {
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
          n = b(i);
        function i() {
          return f(this, i), n.apply(this, arguments);
        }
        return (
          (s = i),
          (r = [
            {
              key: "render",
              value: function () {
                return (0, c.jsx)("div", {
                  className: "course__sidebar-widget grey-bg",
                  children: (0, c.jsxs)("div", {
                    className: "course__sidebar-info",
                    children: [
                      (0, c.jsx)("h3", {
                        className: "course__sidebar-title",
                        children: "Categories",
                      }),
                      (0, c.jsxs)("ul", {
                        children: [
                          (0, c.jsx)("li", {
                            children: (0, c.jsxs)("div", {
                              className:
                                "course__sidebar-check mb-10 d-flex align-items-center",
                              children: [
                                (0, c.jsx)("input", {
                                  className: "m-check-input",
                                  type: "checkbox",
                                  id: "m-eng",
                                }),
                                (0, c.jsx)("label", {
                                  className: "m-check-label",
                                  htmlFor: "m-eng",
                                  children: "English  (6)",
                                }),
                              ],
                            }),
                          }),
                          (0, c.jsx)("li", {
                            children: (0, c.jsxs)("div", {
                              className:
                                "course__sidebar-check mb-10 d-flex align-items-center",
                              children: [
                                (0, c.jsx)("input", {
                                  className: "m-check-input",
                                  type: "checkbox",
                                  id: "m-edu",
                                }),
                                (0, c.jsx)("label", {
                                  className: "m-check-label",
                                  htmlFor: "m-edu",
                                  children: "Education  (8)",
                                }),
                              ],
                            }),
                          }),
                          (0, c.jsx)("li", {
                            children: (0, c.jsxs)("div", {
                              className:
                                "course__sidebar-check mb-10 d-flex align-items-center",
                              children: [
                                (0, c.jsx)("input", {
                                  className: "m-check-input",
                                  type: "checkbox",
                                  id: "m-bus",
                                }),
                                (0, c.jsx)("label", {
                                  className: "m-check-label",
                                  htmlFor: "m-bus",
                                  children: "Business  (5)",
                                }),
                              ],
                            }),
                          }),
                          (0, c.jsx)("li", {
                            children: (0, c.jsxs)("div", {
                              className:
                                "course__sidebar-check mb-10 d-flex align-items-center",
                              children: [
                                (0, c.jsx)("input", {
                                  className: "m-check-input",
                                  type: "checkbox",
                                  id: "m-design",
                                }),
                                (0, c.jsx)("label", {
                                  className: "m-check-label",
                                  htmlFor: "m-design",
                                  children: "UX Design  (3)",
                                }),
                              ],
                            }),
                          }),
                          (0, c.jsx)("li", {
                            children: (0, c.jsxs)("div", {
                              className:
                                "course__sidebar-check mb-10 d-flex align-items-center",
                              children: [
                                (0, c.jsx)("input", {
                                  className: "m-check-input",
                                  type: "checkbox",
                                  id: "m-math",
                                }),
                                (0, c.jsx)("label", {
                                  className: "m-check-label",
                                  htmlFor: "m-math",
                                  children: "Mathematics  (3)",
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
          ]) && m(s.prototype, r),
          t && m(s, t),
          i
        );
      })(t.Component);
      function v(e, s) {
        if (!(e instanceof s))
          throw new TypeError("Cannot call a class as a function");
      }
      function g(e, s) {
        for (var r = 0; r < s.length; r++) {
          var c = s[r];
          (c.enumerable = c.enumerable || !1),
            (c.configurable = !0),
            "value" in c && (c.writable = !0),
            Object.defineProperty(e, c.key, c);
        }
      }
      function y(e) {
        return (y = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function w(e, s) {
        return !s || ("object" !== O(s) && "function" !== typeof s)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : s;
      }
      function k(e, s) {
        return (k =
          Object.setPrototypeOf ||
          function (e, s) {
            return (e.__proto__ = s), e;
          })(e, s);
      }
      var O = function (e) {
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
            c = y(e);
          if (s) {
            var t = y(this).constructor;
            r = Reflect.construct(c, arguments, t);
          } else r = c.apply(this, arguments);
          return w(this, r);
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
            s && k(e, s);
        })(i, e);
        var s,
          r,
          t,
          n = P(i);
        function i() {
          return v(this, i), n.apply(this, arguments);
        }
        return (
          (s = i),
          (r = [
            {
              key: "render",
              value: function () {
                return (0, c.jsx)("div", {
                  className: "course__sidebar-search mb-50",
                  children: (0, c.jsxs)("form", {
                    action: "#",
                    children: [
                      (0, c.jsx)("input", {
                        type: "text",
                        placeholder: "Search for courses...",
                      }),
                      (0, c.jsx)("button", {
                        type: "submit",
                        children: (0, c.jsx)("i", {
                          className: "fas fa-search",
                        }),
                      }),
                    ],
                  }),
                });
              },
            },
          ]) && g(s.prototype, r),
          t && g(s, t),
          i
        );
      })(t.Component);
      function E(e, s) {
        if (!(e instanceof s))
          throw new TypeError("Cannot call a class as a function");
      }
      function S(e, s) {
        for (var r = 0; r < s.length; r++) {
          var c = s[r];
          (c.enumerable = c.enumerable || !1),
            (c.configurable = !0),
            "value" in c && (c.writable = !0),
            Object.defineProperty(e, c.key, c);
        }
      }
      function T(e) {
        return (T = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function B(e, s) {
        return !s || ("object" !== F(s) && "function" !== typeof s)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : s;
      }
      function C(e, s) {
        return (C =
          Object.setPrototypeOf ||
          function (e, s) {
            return (e.__proto__ = s), e;
          })(e, s);
      }
      var F = function (e) {
        return e && "undefined" !== typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      };
      function D(e) {
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
            c = T(e);
          if (s) {
            var t = T(this).constructor;
            r = Reflect.construct(c, arguments, t);
          } else r = c.apply(this, arguments);
          return B(this, r);
        };
      }
      var $ = (function (e) {
        !(function (e, s) {
          if ("function" !== typeof s && null !== s)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(s && s.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            s && C(e, s);
        })(i, e);
        var s,
          r,
          t,
          n = D(i);
        function i() {
          return E(this, i), n.apply(this, arguments);
        }
        return (
          (s = i),
          (r = [
            {
              key: "render",
              value: function () {
                return (0, c.jsx)("div", {
                  className: "course__sidebar-widget grey-bg",
                  children: (0, c.jsxs)("div", {
                    className: "course__sidebar-info",
                    children: [
                      (0, c.jsx)("h3", {
                        className: "course__sidebar-title",
                        children: "Language",
                      }),
                      (0, c.jsxs)("ul", {
                        children: [
                          (0, c.jsx)("li", {
                            children: (0, c.jsxs)("div", {
                              className:
                                "course__sidebar-check mb-10 d-flex align-items-center",
                              children: [
                                (0, c.jsx)("input", {
                                  className: "m-check-input",
                                  type: "checkbox",
                                  id: "m-all",
                                }),
                                (0, c.jsx)("label", {
                                  className: "m-check-label",
                                  htmlFor: "m-all",
                                  children: "All Language",
                                }),
                              ],
                            }),
                          }),
                          (0, c.jsx)("li", {
                            children: (0, c.jsxs)("div", {
                              className:
                                "course__sidebar-check mb-10 d-flex align-items-center",
                              children: [
                                (0, c.jsx)("input", {
                                  className: "m-check-input",
                                  type: "checkbox",
                                  id: "m-eng-2",
                                }),
                                (0, c.jsx)("label", {
                                  className: "m-check-label",
                                  htmlFor: "m-eng-2",
                                  children: "English",
                                }),
                              ],
                            }),
                          }),
                          (0, c.jsx)("li", {
                            children: (0, c.jsxs)("div", {
                              className:
                                "course__sidebar-check mb-10 d-flex align-items-center",
                              children: [
                                (0, c.jsx)("input", {
                                  className: "m-check-input",
                                  type: "checkbox",
                                  id: "m-russ",
                                }),
                                (0, c.jsx)("label", {
                                  className: "m-check-label",
                                  htmlFor: "m-russ",
                                  children: "Russian",
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
          ]) && S(s.prototype, r),
          t && S(s, t),
          i
        );
      })(t.Component);
      function L(e, s) {
        if (!(e instanceof s))
          throw new TypeError("Cannot call a class as a function");
      }
      function K(e, s) {
        for (var r = 0; r < s.length; r++) {
          var c = s[r];
          (c.enumerable = c.enumerable || !1),
            (c.configurable = !0),
            "value" in c && (c.writable = !0),
            Object.defineProperty(e, c.key, c);
        }
      }
      function A(e) {
        return (A = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function M(e, s) {
        return !s || ("object" !== Z(s) && "function" !== typeof s)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : s;
      }
      function I(e, s) {
        return (I =
          Object.setPrototypeOf ||
          function (e, s) {
            return (e.__proto__ = s), e;
          })(e, s);
      }
      var Z = function (e) {
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
            c = A(e);
          if (s) {
            var t = A(this).constructor;
            r = Reflect.construct(c, arguments, t);
          } else r = c.apply(this, arguments);
          return M(this, r);
        };
      }
      var X = (function (e) {
        !(function (e, s) {
          if ("function" !== typeof s && null !== s)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(s && s.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            s && I(e, s);
        })(i, e);
        var s,
          r,
          t,
          n = z(i);
        function i() {
          return L(this, i), n.apply(this, arguments);
        }
        return (
          (s = i),
          (r = [
            {
              key: "render",
              value: function () {
                return (0, c.jsx)("div", {
                  className: "course__sidebar-widget grey-bg",
                  children: (0, c.jsxs)("div", {
                    className: "course__sidebar-info",
                    children: [
                      (0, c.jsx)("h3", {
                        className: "course__sidebar-title",
                        children: "Price Filter",
                      }),
                      (0, c.jsxs)("ul", {
                        children: [
                          (0, c.jsx)("li", {
                            children: (0, c.jsxs)("div", {
                              className:
                                "course__sidebar-check mb-10 d-flex align-items-center",
                              children: [
                                (0, c.jsx)("input", {
                                  className: "m-check-input",
                                  type: "checkbox",
                                  id: "m-all-course",
                                }),
                                (0, c.jsx)("label", {
                                  className: "m-check-label",
                                  htmlFor: "m-all-course",
                                  children: "All  (204)",
                                }),
                              ],
                            }),
                          }),
                          (0, c.jsx)("li", {
                            children: (0, c.jsxs)("div", {
                              className:
                                "course__sidebar-check mb-10 d-flex align-items-center",
                              children: [
                                (0, c.jsx)("input", {
                                  className: "m-check-input",
                                  type: "checkbox",
                                  id: "m-free",
                                }),
                                (0, c.jsx)("label", {
                                  className: "m-check-label",
                                  htmlFor: "m-free",
                                  children: "Free Courses  (36)",
                                }),
                              ],
                            }),
                          }),
                          (0, c.jsx)("li", {
                            children: (0, c.jsxs)("div", {
                              className:
                                "course__sidebar-check mb-10 d-flex align-items-center",
                              children: [
                                (0, c.jsx)("input", {
                                  className: "m-check-input",
                                  type: "checkbox",
                                  id: "m-premium",
                                }),
                                (0, c.jsx)("label", {
                                  className: "m-check-label",
                                  htmlFor: "m-premium",
                                  children: "Premium Courses  (184)",
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
          ]) && K(s.prototype, r),
          t && K(s, t),
          i
        );
      })(t.Component);
      function G(e, s) {
        if (!(e instanceof s))
          throw new TypeError("Cannot call a class as a function");
      }
      function H(e, s) {
        for (var r = 0; r < s.length; r++) {
          var c = s[r];
          (c.enumerable = c.enumerable || !1),
            (c.configurable = !0),
            "value" in c && (c.writable = !0),
            Object.defineProperty(e, c.key, c);
        }
      }
      function U(e) {
        return (U = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function J(e, s) {
        return !s || ("object" !== Q(s) && "function" !== typeof s)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : s;
      }
      function q(e, s) {
        return (q =
          Object.setPrototypeOf ||
          function (e, s) {
            return (e.__proto__ = s), e;
          })(e, s);
      }
      var Q = function (e) {
        return e && "undefined" !== typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      };
      function V(e) {
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
            c = U(e);
          if (s) {
            var t = U(this).constructor;
            r = Reflect.construct(c, arguments, t);
          } else r = c.apply(this, arguments);
          return J(this, r);
        };
      }
      var W = (function (e) {
        !(function (e, s) {
          if ("function" !== typeof s && null !== s)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(s && s.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            s && q(e, s);
        })(i, e);
        var s,
          r,
          t,
          n = V(i);
        function i() {
          return G(this, i), n.apply(this, arguments);
        }
        return (
          (s = i),
          (r = [
            {
              key: "render",
              value: function () {
                return (0, c.jsx)("div", {
                  className: "course__sidebar-widget grey-bg",
                  children: (0, c.jsxs)("div", {
                    className: "course__sidebar-info",
                    children: [
                      (0, c.jsx)("h3", {
                        className: "course__sidebar-title",
                        children: "Skill level",
                      }),
                      (0, c.jsxs)("ul", {
                        children: [
                          (0, c.jsx)("li", {
                            children: (0, c.jsxs)("div", {
                              className:
                                "course__sidebar-check mb-10 d-flex align-items-center",
                              children: [
                                (0, c.jsx)("input", {
                                  className: "m-check-input",
                                  type: "checkbox",
                                  id: "m-level",
                                }),
                                (0, c.jsx)("label", {
                                  className: "m-check-label",
                                  htmlFor: "m-level",
                                  children: "All Levels  (50)",
                                }),
                              ],
                            }),
                          }),
                          (0, c.jsx)("li", {
                            children: (0, c.jsxs)("div", {
                              className:
                                "course__sidebar-check mb-10 d-flex align-items-center",
                              children: [
                                (0, c.jsx)("input", {
                                  className: "m-check-input",
                                  type: "checkbox",
                                  id: "m-beginner",
                                }),
                                (0, c.jsx)("label", {
                                  className: "m-check-label",
                                  htmlFor: "m-beginner",
                                  children: "Beginner  (32)",
                                }),
                              ],
                            }),
                          }),
                          (0, c.jsx)("li", {
                            children: (0, c.jsxs)("div", {
                              className:
                                "course__sidebar-check mb-10 d-flex align-items-center",
                              children: [
                                (0, c.jsx)("input", {
                                  className: "m-check-input",
                                  type: "checkbox",
                                  id: "m-intermediate",
                                }),
                                (0, c.jsx)("label", {
                                  className: "m-check-label",
                                  htmlFor: "m-intermediate",
                                  children: "Intermediate  (17)",
                                }),
                              ],
                            }),
                          }),
                          (0, c.jsx)("li", {
                            children: (0, c.jsxs)("div", {
                              className:
                                "course__sidebar-check mb-10 d-flex align-items-center",
                              children: [
                                (0, c.jsx)("input", {
                                  className: "m-check-input",
                                  type: "checkbox",
                                  id: "m-expert",
                                }),
                                (0, c.jsx)("label", {
                                  className: "m-check-label",
                                  htmlFor: "m-expert",
                                  children: "Expert  (2)",
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
          ]) && H(s.prototype, r),
          t && H(s, t),
          i
        );
      })(t.Component);
      function Y(e, s) {
        if (!(e instanceof s))
          throw new TypeError("Cannot call a class as a function");
      }
      function ee(e, s) {
        for (var r = 0; r < s.length; r++) {
          var c = s[r];
          (c.enumerable = c.enumerable || !1),
            (c.configurable = !0),
            "value" in c && (c.writable = !0),
            Object.defineProperty(e, c.key, c);
        }
      }
      function se(e) {
        return (se = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function re(e, s) {
        return !s || ("object" !== te(s) && "function" !== typeof s)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : s;
      }
      function ce(e, s) {
        return (ce =
          Object.setPrototypeOf ||
          function (e, s) {
            return (e.__proto__ = s), e;
          })(e, s);
      }
      var te = function (e) {
        return e && "undefined" !== typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      };
      function ne(e) {
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
            c = se(e);
          if (s) {
            var t = se(this).constructor;
            r = Reflect.construct(c, arguments, t);
          } else r = c.apply(this, arguments);
          return re(this, r);
        };
      }
      var ie = (function (e) {
        !(function (e, s) {
          if ("function" !== typeof s && null !== s)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(s && s.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            s && ce(e, s);
        })(i, e);
        var s,
          r,
          t,
          n = ne(i);
        function i() {
          return Y(this, i), n.apply(this, arguments);
        }
        return (
          (s = i),
          (r = [
            {
              key: "render",
              value: function () {
                return (0, c.jsx)("div", {
                  className: "course__sidebar-widget grey-bg",
                  children: (0, c.jsxs)("div", {
                    className: "course__sidebar-course",
                    children: [
                      (0, c.jsx)("h3", {
                        className: "course__sidebar-title",
                        children: "Related courses",
                      }),
                      (0, c.jsxs)("ul", {
                        children: [
                          (0, c.jsx)("li", {
                            children: (0, c.jsxs)("div", {
                              className:
                                "course__sm d-flex align-items-center mb-30",
                              children: [
                                (0, c.jsx)("div", {
                                  className: "course__sm-thumb mr-20",
                                  children: (0, c.jsx)(o.default, {
                                    href: "/course-details",
                                    children: (0, c.jsx)("a", {
                                      children: (0, c.jsx)("img", {
                                        src: "assets/img/course/sm/course-sm-1.jpg",
                                        alt: "img not found",
                                      }),
                                    }),
                                  }),
                                }),
                                (0, c.jsxs)("div", {
                                  className: "course__sm-content",
                                  children: [
                                    (0, c.jsx)("div", {
                                      className: "course__sm-rating",
                                      children: (0, c.jsxs)("ul", {
                                        children: [
                                          (0, c.jsx)("li", {
                                            children: (0, c.jsxs)("a", {
                                              href: "#",
                                              children: [
                                                " ",
                                                (0, c.jsx)("i", {
                                                  className: "fas fa-star",
                                                }),
                                                " ",
                                              ],
                                            }),
                                          }),
                                          (0, c.jsx)("li", {
                                            children: (0, c.jsxs)("a", {
                                              href: "#",
                                              children: [
                                                " ",
                                                (0, c.jsx)("i", {
                                                  className: "fas fa-star",
                                                }),
                                                " ",
                                              ],
                                            }),
                                          }),
                                          (0, c.jsx)("li", {
                                            children: (0, c.jsxs)("a", {
                                              href: "#",
                                              children: [
                                                " ",
                                                (0, c.jsx)("i", {
                                                  className: "fas fa-star",
                                                }),
                                                " ",
                                              ],
                                            }),
                                          }),
                                          (0, c.jsx)("li", {
                                            children: (0, c.jsxs)("a", {
                                              href: "#",
                                              children: [
                                                " ",
                                                (0, c.jsx)("i", {
                                                  className: "fas fa-star",
                                                }),
                                                " ",
                                              ],
                                            }),
                                          }),
                                          (0, c.jsx)("li", {
                                            children: (0, c.jsxs)("a", {
                                              href: "#",
                                              children: [
                                                " ",
                                                (0, c.jsx)("i", {
                                                  className: "fas fa-star",
                                                }),
                                                " ",
                                              ],
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                    (0, c.jsx)("h5", {
                                      children: (0, c.jsx)(o.default, {
                                        href: "/course-details",
                                        children: (0, c.jsx)("a", {
                                          children: "Development",
                                        }),
                                      }),
                                    }),
                                    (0, c.jsx)("div", {
                                      className: "course__sm-price",
                                      children: (0, c.jsx)("span", {
                                        children: "$54.00",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, c.jsx)("li", {
                            children: (0, c.jsxs)("div", {
                              className:
                                "course__sm d-flex align-items-center mb-30",
                              children: [
                                (0, c.jsx)("div", {
                                  className: "course__sm-thumb mr-20",
                                  children: (0, c.jsx)(o.default, {
                                    href: "/course-details",
                                    children: (0, c.jsx)("a", {
                                      children: (0, c.jsx)("img", {
                                        src: "assets/img/course/sm/course-sm-2.jpg",
                                        alt: "img not found",
                                      }),
                                    }),
                                  }),
                                }),
                                (0, c.jsxs)("div", {
                                  className: "course__sm-content",
                                  children: [
                                    (0, c.jsx)("div", {
                                      className: "course__sm-rating",
                                      children: (0, c.jsxs)("ul", {
                                        children: [
                                          (0, c.jsx)("li", {
                                            children: (0, c.jsxs)("a", {
                                              href: "#",
                                              children: [
                                                " ",
                                                (0, c.jsx)("i", {
                                                  className: "fas fa-star",
                                                }),
                                                " ",
                                              ],
                                            }),
                                          }),
                                          (0, c.jsx)("li", {
                                            children: (0, c.jsxs)("a", {
                                              href: "#",
                                              children: [
                                                " ",
                                                (0, c.jsx)("i", {
                                                  className: "fas fa-star",
                                                }),
                                                " ",
                                              ],
                                            }),
                                          }),
                                          (0, c.jsx)("li", {
                                            children: (0, c.jsxs)("a", {
                                              href: "#",
                                              children: [
                                                " ",
                                                (0, c.jsx)("i", {
                                                  className: "fas fa-star",
                                                }),
                                                " ",
                                              ],
                                            }),
                                          }),
                                          (0, c.jsx)("li", {
                                            children: (0, c.jsxs)("a", {
                                              href: "#",
                                              children: [
                                                " ",
                                                (0, c.jsx)("i", {
                                                  className: "fas fa-star",
                                                }),
                                                " ",
                                              ],
                                            }),
                                          }),
                                          (0, c.jsx)("li", {
                                            children: (0, c.jsxs)("a", {
                                              href: "#",
                                              children: [
                                                " ",
                                                (0, c.jsx)("i", {
                                                  className: "fas fa-star",
                                                }),
                                                " ",
                                              ],
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                    (0, c.jsx)("h5", {
                                      children: (0, c.jsx)(o.default, {
                                        href: "/course-details",
                                        children: (0, c.jsx)("a", {
                                          children: "Data Science",
                                        }),
                                      }),
                                    }),
                                    (0, c.jsx)("div", {
                                      className: "course__sm-price",
                                      children: (0, c.jsx)("span", {
                                        children: "$72.00",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, c.jsx)("li", {
                            children: (0, c.jsxs)("div", {
                              className:
                                "course__sm d-flex align-items-center mb-10",
                              children: [
                                (0, c.jsx)("div", {
                                  className: "course__sm-thumb mr-20",
                                  children: (0, c.jsx)(o.default, {
                                    href: "/course-details",
                                    children: (0, c.jsx)("a", {
                                      children: (0, c.jsx)("img", {
                                        src: "assets/img/course/sm/course-sm-3.jpg",
                                        alt: "img not found",
                                      }),
                                    }),
                                  }),
                                }),
                                (0, c.jsxs)("div", {
                                  className: "course__sm-content",
                                  children: [
                                    (0, c.jsx)("div", {
                                      className: "course__sm-rating",
                                      children: (0, c.jsxs)("ul", {
                                        children: [
                                          (0, c.jsx)("li", {
                                            children: (0, c.jsxs)("a", {
                                              href: "#",
                                              children: [
                                                " ",
                                                (0, c.jsx)("i", {
                                                  className: "fas fa-star",
                                                }),
                                                " ",
                                              ],
                                            }),
                                          }),
                                          (0, c.jsx)("li", {
                                            children: (0, c.jsxs)("a", {
                                              href: "#",
                                              children: [
                                                " ",
                                                (0, c.jsx)("i", {
                                                  className: "fas fa-star",
                                                }),
                                                " ",
                                              ],
                                            }),
                                          }),
                                          (0, c.jsx)("li", {
                                            children: (0, c.jsxs)("a", {
                                              href: "#",
                                              children: [
                                                " ",
                                                (0, c.jsx)("i", {
                                                  className: "fas fa-star",
                                                }),
                                                " ",
                                              ],
                                            }),
                                          }),
                                          (0, c.jsx)("li", {
                                            children: (0, c.jsxs)("a", {
                                              href: "#",
                                              children: [
                                                " ",
                                                (0, c.jsx)("i", {
                                                  className: "fas fa-star",
                                                }),
                                                " ",
                                              ],
                                            }),
                                          }),
                                          (0, c.jsx)("li", {
                                            children: (0, c.jsxs)("a", {
                                              href: "#",
                                              children: [
                                                " ",
                                                (0, c.jsx)("i", {
                                                  className: "fas fa-star",
                                                }),
                                                " ",
                                              ],
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                    (0, c.jsx)("h5", {
                                      children: (0, c.jsx)(o.default, {
                                        href: "/course-details",
                                        children: (0, c.jsx)("a", {
                                          children: "UX Design",
                                        }),
                                      }),
                                    }),
                                    (0, c.jsx)("div", {
                                      className: "course__sm-price",
                                      children: (0, c.jsx)("span", {
                                        children: "Free",
                                      }),
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
          ]) && ee(s.prototype, r),
          t && ee(s, t),
          i
        );
      })(t.Component);
      function ae(e, s) {
        if (!(e instanceof s))
          throw new TypeError("Cannot call a class as a function");
      }
      function le(e, s) {
        for (var r = 0; r < s.length; r++) {
          var c = s[r];
          (c.enumerable = c.enumerable || !1),
            (c.configurable = !0),
            "value" in c && (c.writable = !0),
            Object.defineProperty(e, c.key, c);
        }
      }
      function oe(e) {
        return (oe = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function ue(e, s) {
        return !s || ("object" !== he(s) && "function" !== typeof s)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : s;
      }
      function de(e, s) {
        return (de =
          Object.setPrototypeOf ||
          function (e, s) {
            return (e.__proto__ = s), e;
          })(e, s);
      }
      var he = function (e) {
        return e && "undefined" !== typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      };
      function fe(e) {
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
            c = oe(e);
          if (s) {
            var t = oe(this).constructor;
            r = Reflect.construct(c, arguments, t);
          } else r = c.apply(this, arguments);
          return ue(this, r);
        };
      }
      var me = (function (e) {
        !(function (e, s) {
          if ("function" !== typeof s && null !== s)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(s && s.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            s && de(e, s);
        })(i, e);
        var s,
          r,
          t,
          n = fe(i);
        function i() {
          return ae(this, i), n.apply(this, arguments);
        }
        return (
          (s = i),
          (r = [
            {
              key: "render",
              value: function () {
                return (0, c.jsxs)("div", {
                  className: "course__sidebar-course",
                  children: [
                    (0, c.jsx)(R, {}),
                    (0, c.jsx)(N, {}),
                    (0, c.jsx)($, {}),
                    (0, c.jsx)(X, {}),
                    (0, c.jsx)(W, {}),
                    (0, c.jsx)(ie, {}),
                  ],
                });
              },
            },
          ]) && le(s.prototype, r),
          t && le(s, t),
          i
        );
      })(t.Component);
      function xe() {
        return (0, c.jsx)("section", {
          className: "course__area pt-120 pb-120",
          children: (0, c.jsx)("div", {
            className: "container",
            children: (0, c.jsxs)("div", {
              className: "row",
              children: [
                (0, c.jsxs)("div", {
                  className: "col-xxl-8 col-xl-8 col-lg-8",
                  children: [(0, c.jsx)(d, {}), (0, c.jsx)(h.Z, {})],
                }),
                (0, c.jsx)("div", {
                  className: "col-xxl-4 col-xl-4 col-lg-4",
                  children: (0, c.jsx)("div", {
                    className: "course__sidebar pl-70",
                    children: (0, c.jsx)(me, {}),
                  }),
                }),
              ],
            }),
          }),
        });
      }
      function je(e, s) {
        if (!(e instanceof s))
          throw new TypeError("Cannot call a class as a function");
      }
      function _e(e, s) {
        for (var r = 0; r < s.length; r++) {
          var c = s[r];
          (c.enumerable = c.enumerable || !1),
            (c.configurable = !0),
            "value" in c && (c.writable = !0),
            Object.defineProperty(e, c.key, c);
        }
      }
      function pe(e) {
        return (pe = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function be(e, s) {
        return !s || ("object" !== ve(s) && "function" !== typeof s)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : s;
      }
      function Ne(e, s) {
        return (Ne =
          Object.setPrototypeOf ||
          function (e, s) {
            return (e.__proto__ = s), e;
          })(e, s);
      }
      var ve = function (e) {
        return e && "undefined" !== typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      };
      function ge(e) {
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
            c = pe(e);
          if (s) {
            var t = pe(this).constructor;
            r = Reflect.construct(c, arguments, t);
          } else r = c.apply(this, arguments);
          return be(this, r);
        };
      }
      var ye = (function (e) {
          !(function (e, s) {
            if ("function" !== typeof s && null !== s)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(s && s.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              s && Ne(e, s);
          })(l, e);
          var s,
            r,
            t,
            a = ge(l);
          function l() {
            return je(this, l), a.apply(this, arguments);
          }
          return (
            (s = l),
            (r = [
              {
                key: "render",
                value: function () {
                  return (0, c.jsxs)("main", {
                    children: [
                      (0, c.jsx)(n.Z, {}),
                      (0, c.jsx)(xe, {}),
                      (0, c.jsx)(i.Z, {}),
                    ],
                  });
                },
              },
            ]) && _e(s.prototype, r),
            t && _e(s, t),
            l
          );
        })(t.Component),
        we = r(6826),
        ke = r(8462);
      function Oe(e, s) {
        for (var r = 0; r < s.length; r++) {
          var c = s[r];
          (c.enumerable = c.enumerable || !1),
            (c.configurable = !0),
            "value" in c && (c.writable = !0),
            Object.defineProperty(e, c.key, c);
        }
      }
      function Pe(e) {
        return (Pe = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function Re(e, s) {
        return !s || ("object" !== Se(s) && "function" !== typeof s)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : s;
      }
      function Ee(e, s) {
        return (Ee =
          Object.setPrototypeOf ||
          function (e, s) {
            return (e.__proto__ = s), e;
          })(e, s);
      }
      var Se = function (e) {
        return e && "undefined" !== typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      };
      function Te(e) {
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
            c = Pe(e);
          if (s) {
            var t = Pe(this).constructor;
            r = Reflect.construct(c, arguments, t);
          } else r = c.apply(this, arguments);
          return Re(this, r);
        };
      }
      var Be = (function (e) {
        !(function (e, s) {
          if ("function" !== typeof s && null !== s)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(s && s.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            s && Ee(e, s);
        })(a, e);
        var s,
          r,
          n,
          i = Te(a);
        function a(e) {
          return (
            (function (e, s) {
              if (!(e instanceof s))
                throw new TypeError("Cannot call a class as a function");
            })(this, a),
            i.call(this, e)
          );
        }
        return (
          (s = a),
          (n = [
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
                return (0, c.jsxs)(t.Fragment, {
                  children: [
                    (0, c.jsx)(ke.Z, {}),
                    (0, c.jsx)(ye, {}),
                    (0, c.jsx)(we.Z, {}),
                  ],
                });
              },
            },
          ]) && Oe(s.prototype, r),
          n && Oe(s, n),
          a
        );
      })(t.Component);
    },
  },
  function (e) {
    e.O(0, [774, 675, 282, 775, 403, 888, 179], function () {
      return (s = 4285), e((e.s = s));
      var s;
    });
    var s = e.O();
    _N_E = s;
  },
]);
