(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [423],
  {
    7497: function (e, s, c) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/course-list",
        function () {
          return c(6004);
        },
      ]);
    },
    290: function (e, s, c) {
      "use strict";
      var a = c(5893),
        r = c(7294);
      function i(e, s) {
        if (!(e instanceof s))
          throw new TypeError("Cannot call a class as a function");
      }
      function l(e, s) {
        for (var c = 0; c < s.length; c++) {
          var a = s[c];
          (a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            "value" in a && (a.writable = !0),
            Object.defineProperty(e, a.key, a);
        }
      }
      function n(e) {
        return (n = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function t(e, s) {
        return !s || ("object" !== o(s) && "function" !== typeof s)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : s;
      }
      function d(e, s) {
        return (d =
          Object.setPrototypeOf ||
          function (e, s) {
            return (e.__proto__ = s), e;
          })(e, s);
      }
      var o = function (e) {
        return e && "undefined" !== typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      };
      function h(e) {
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
          var c,
            a = n(e);
          if (s) {
            var r = n(this).constructor;
            c = Reflect.construct(a, arguments, r);
          } else c = a.apply(this, arguments);
          return t(this, c);
        };
      }
      var u = (function (e) {
        !(function (e, s) {
          if ("function" !== typeof s && null !== s)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(s && s.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            s && d(e, s);
        })(t, e);
        var s,
          c,
          r,
          n = h(t);
        function t() {
          return i(this, t), n.apply(this, arguments);
        }
        return (
          (s = t),
          (c = [
            {
              key: "render",
              value: function () {
                return (0, a.jsx)("div", {
                  className: "row",
                  children: (0, a.jsx)("div", {
                    className: "col-xxl-12",
                    children: (0, a.jsx)("div", {
                      className: "basic-pagination wow fadeInUp mt-30",
                      "data-wow-delay": ".2s",
                      children: (0, a.jsxs)("ul", {
                        className: "d-flex align-items-center",
                        children: [
                          (0, a.jsx)("li", {
                            className: "prev",
                            children: (0, a.jsxs)("a", {
                              href: "#",
                              className: "link-btn link-prev",
                              children: [
                                "Anterior",
                                (0, a.jsx)("i", {
                                  className: "fas fa-arrow-left",
                                }),
                                (0, a.jsx)("i", {
                                  className: "fas fa-arrow-left",
                                }),
                              ],
                            }),
                          }),
                          (0, a.jsx)("li", {
                            className: "active",
                            children: (0, a.jsx)("a", {
                              href: "#",
                              children: (0, a.jsx)("span", { children: "1" }),
                            }),
                          }),
                          (0, a.jsx)("li", {
                            children: (0, a.jsx)("a", {
                              href: "#",
                              children: (0, a.jsx)("span", { children: "2" }),
                            }),
                          }),
                          (0, a.jsx)("li", {
                            children: (0, a.jsx)("a", {
                              href: "#",
                              children: (0, a.jsx)("span", { children: "3" }),
                            }),
                          }),
                          (0, a.jsx)("li", {
                            className: "next",
                            children: (0, a.jsxs)("a", {
                              href: "#",
                              className: "link-btn",
                              children: [
                                "Siguiente",
                                (0, a.jsx)("i", {
                                  className: "fas fa-arrow-right",
                                }),
                                (0, a.jsx)("i", {
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
          ]) && l(s.prototype, c),
          r && l(s, r),
          t
        );
      })(r.Component);
      s.Z = u;
    },
    6004: function (e, s, c) {
      "use strict";
      c.r(s),
        c.d(s, {
          default: function () {
            return D;
          },
        });
      var a = c(5893),
        r = c(7294),
        i = c(4339),
        l = c(5152),
        n = c(9723),
        t = (c(2305), c(290)),
        d = c(1664),
        o = (0, l.default)(
          Promise.resolve()
            .then(c.bind(c, 9723))
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
      function h() {
        return (0, a.jsx)("section", {
          className: "course__area pt-120 pb-120",
          children: (0, a.jsx)(o, {
            children: (0, a.jsxs)("div", {
              className: "container",
              children: [
                (0, a.jsx)("div", {
                  className: "course__tab-inner grey-bg-2 mb-50",
                  children: (0, a.jsxs)("div", {
                    className: "row align-items-center",
                    children: [
                      (0, a.jsx)("div", {
                        className:
                          "col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6",
                        children: (0, a.jsxs)("div", {
                          className:
                            "course__tab-wrapper d-flex align-items-center",
                          children: [
                            (0, a.jsx)("div", {
                              className: "course__tab-btn",
                              children: (0, a.jsxs)(n.TabList, {
                                children: [
                                  (0, a.jsx)(n.Tab, {
                                    children: (0, a.jsx)("button", {
                                      className: "nav-link list active",
                                      id: "list-tab",
                                      type: "button",
                                      children: (0, a.jsx)("svg", {
                                        className: "list",
                                        viewBox: "0 0 512 512",
                                        children: (0, a.jsxs)("g", {
                                          id: "Layer_2_1_",
                                          children: [
                                            (0, a.jsx)("path", {
                                              className: "st0",
                                              d: "M448,69H192c-17.7,0-32,13.9-32,31s14.3,31,32,31h256c17.7,0,32-13.9,32-31S465.7,69,448,69z",
                                            }),
                                            (0, a.jsx)("circle", {
                                              className: "st0",
                                              cx: "64",
                                              cy: "100",
                                              r: "31",
                                            }),
                                            (0, a.jsx)("path", {
                                              className: "st0",
                                              d: "M448,225H192c-17.7,0-32,13.9-32,31s14.3,31,32,31h256c17.7,0,32-13.9,32-31S465.7,225,448,225z",
                                            }),
                                            (0, a.jsx)("circle", {
                                              className: "st0",
                                              cx: "64",
                                              cy: "256",
                                              r: "31",
                                            }),
                                            (0, a.jsx)("path", {
                                              className: "st0",
                                              d: "M448,381H192c-17.7,0-32,13.9-32,31s14.3,31,32,31h256c17.7,0,32-13.9,32-31S465.7,381,448,381z",
                                            }),
                                            (0, a.jsx)("circle", {
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
                                  (0, a.jsx)(n.Tab, {
                                    children: (0, a.jsx)("button", {
                                      className: "nav-link",
                                      id: "grid-tab",
                                      type: "button",
                                      children: (0, a.jsxs)("svg", {
                                        className: "grid",
                                        viewBox: "0 0 24 24",
                                        children: [
                                          (0, a.jsx)("rect", {
                                            x: "3",
                                            y: "3",
                                            className: "st0",
                                            width: "7",
                                            height: "7",
                                          }),
                                          (0, a.jsx)("rect", {
                                            x: "14",
                                            y: "3",
                                            className: "st0",
                                            width: "7",
                                            height: "7",
                                          }),
                                          (0, a.jsx)("rect", {
                                            x: "14",
                                            y: "14",
                                            className: "st0",
                                            width: "7",
                                            height: "7",
                                          }),
                                          (0, a.jsx)("rect", {
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
                                ],
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "course__view",
                              children: (0, a.jsx)("h4", {
                                children: "Showing 1 - 9 of 84",
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6",
                        children: (0, a.jsx)("div", {
                          className:
                            "course__sort d-flex justify-content-sm-end",
                          children: (0, a.jsx)("div", {
                            className: "course__sort-inner",
                            children: (0, a.jsxs)("select", {
                              children: [
                                (0, a.jsx)("option", { children: "Default" }),
                                (0, a.jsx)("option", { children: "Option 1" }),
                                (0, a.jsx)("option", { children: "Option 2" }),
                                (0, a.jsx)("option", { children: "Option 3" }),
                                (0, a.jsx)("option", { children: "Option 4" }),
                                (0, a.jsx)("option", { children: "Option 5" }),
                                (0, a.jsx)("option", { children: "Option 6" }),
                              ],
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, a.jsx)("div", {
                  className: "row",
                  children: (0, a.jsx)("div", {
                    className: "col-xxl-12",
                    children: (0, a.jsxs)("div", {
                      className: "course__tab-conent",
                      children: [
                        (0, a.jsx)(n.TabPanel, {
                          children: (0, a.jsxs)("div", {
                            className: "row",
                            children: [
                              (0, a.jsx)("div", {
                                className: "col-xxl-12",
                                children: (0, a.jsx)("div", {
                                  className: "course__item white-bg mb-30 fix",
                                  children: (0, a.jsxs)("div", {
                                    className: "row gx-0",
                                    children: [
                                      (0, a.jsx)("div", {
                                        className:
                                          "col-xxl-4 col-xl-4 col-lg-4",
                                        children: (0, a.jsxs)("div", {
                                          className:
                                            "course__thumb course__thumb-list w-img p-relative fix",
                                          children: [
                                            (0, a.jsx)(d.default, {
                                              href: "/course-details",
                                              children: (0, a.jsx)("a", {
                                                children: (0, a.jsx)("img", {
                                                  src: "assets/img/course/list/course-1.jpg",
                                                  alt: "img not found",
                                                }),
                                              }),
                                            }),
                                            (0, a.jsx)("div", {
                                              className: "course__tag",
                                              children: (0, a.jsx)(d.default, {
                                                href: "/course-details",
                                                children: (0, a.jsx)("a", {
                                                  children: "Art & Design",
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                      }),
                                      (0, a.jsx)("div", {
                                        className:
                                          "col-xxl-8 col-xl-8 col-lg-8",
                                        children: (0, a.jsxs)("div", {
                                          className: "course__right",
                                          children: [
                                            (0, a.jsxs)("div", {
                                              className:
                                                "course__content course__content-3",
                                              children: [
                                                (0, a.jsxs)("div", {
                                                  className:
                                                    "course__meta d-flex align-items-center",
                                                  children: [
                                                    (0, a.jsx)("div", {
                                                      className:
                                                        "course__lesson mr-20",
                                                      children: (0, a.jsxs)(
                                                        "span",
                                                        {
                                                          children: [
                                                            (0, a.jsx)("i", {
                                                              className:
                                                                "fas fa-book",
                                                            }),
                                                            "43 Lesson",
                                                          ],
                                                        }
                                                      ),
                                                    }),
                                                    (0, a.jsx)("div", {
                                                      className:
                                                        "course__rating",
                                                      children: (0, a.jsxs)(
                                                        "span",
                                                        {
                                                          children: [
                                                            (0, a.jsx)("i", {
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
                                                (0, a.jsx)("h3", {
                                                  className:
                                                    "course__title course__title-3",
                                                  children: (0, a.jsx)(
                                                    d.default,
                                                    {
                                                      href: "/course-details",
                                                      children: (0, a.jsx)(
                                                        "a",
                                                        {
                                                          children:
                                                            "Creative writing through Storytelling",
                                                        }
                                                      ),
                                                    }
                                                  ),
                                                }),
                                                (0, a.jsx)("div", {
                                                  className: "course__summary",
                                                  children: (0, a.jsx)("p", {
                                                    children:
                                                      "Communia virtutes tutiorem declarat stoicorum sanabat oblivisci nostris tamquam iucunditatem",
                                                  }),
                                                }),
                                                (0, a.jsxs)("div", {
                                                  className:
                                                    "course__teacher d-flex align-items-center",
                                                  children: [
                                                    (0, a.jsx)("div", {
                                                      className:
                                                        "course__teacher-thumb mr-15",
                                                      children: (0, a.jsx)(
                                                        "img",
                                                        {
                                                          src: "assets/img/course/teacher/teacher-1.jpg",
                                                          alt: "img not found",
                                                        }
                                                      ),
                                                    }),
                                                    (0, a.jsx)("h6", {
                                                      children: (0, a.jsx)(
                                                        d.default,
                                                        {
                                                          href: "/instructor-details",
                                                          children: (0, a.jsx)(
                                                            "a",
                                                            {
                                                              children:
                                                                "Jim S\xe9chen",
                                                            }
                                                          ),
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, a.jsxs)("div", {
                                              className:
                                                "course__more course__more-2 d-flex justify-content-between align-items-center",
                                              children: [
                                                (0, a.jsx)("div", {
                                                  className: "course__status",
                                                  children: (0, a.jsx)("span", {
                                                    children: "Free",
                                                  }),
                                                }),
                                                (0, a.jsx)("div", {
                                                  className: "course__btn",
                                                  children: (0, a.jsx)(
                                                    d.default,
                                                    {
                                                      href: "/course-details",
                                                      children: (0, a.jsxs)(
                                                        "a",
                                                        {
                                                          className: "link-btn",
                                                          children: [
                                                            "Know Details",
                                                            (0, a.jsx)("i", {
                                                              className:
                                                                "fas fa-arrow-right",
                                                            }),
                                                            (0, a.jsx)("i", {
                                                              className:
                                                                "fas fa-arrow-right",
                                                            }),
                                                          ],
                                                        }
                                                      ),
                                                    }
                                                  ),
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
                              (0, a.jsx)("div", {
                                className: "col-xxl-12",
                                children: (0, a.jsx)("div", {
                                  className: "course__item white-bg mb-30 fix",
                                  children: (0, a.jsxs)("div", {
                                    className: "row gx-0",
                                    children: [
                                      (0, a.jsx)("div", {
                                        className:
                                          "col-xxl-4 col-xl-4 col-lg-4",
                                        children: (0, a.jsxs)("div", {
                                          className:
                                            "course__thumb course__thumb-list w-img p-relative fix",
                                          children: [
                                            (0, a.jsx)(d.default, {
                                              href: "/course-details",
                                              children: (0, a.jsx)("a", {
                                                children: (0, a.jsx)("img", {
                                                  src: "assets/img/course/list/course-2.jpg",
                                                  alt: "img not found",
                                                }),
                                              }),
                                            }),
                                            (0, a.jsx)("div", {
                                              className: "course__tag",
                                              children: (0, a.jsx)(d.default, {
                                                href: "/course-details",
                                                children: (0, a.jsx)("a", {
                                                  className: "sky-blue",
                                                  children: "Art & Design",
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                      }),
                                      (0, a.jsx)("div", {
                                        className:
                                          "col-xxl-8 col-xl-8 col-lg-8",
                                        children: (0, a.jsxs)("div", {
                                          className: "course__right",
                                          children: [
                                            (0, a.jsxs)("div", {
                                              className:
                                                "course__content course__content-3",
                                              children: [
                                                (0, a.jsxs)("div", {
                                                  className:
                                                    "course__meta d-flex align-items-center",
                                                  children: [
                                                    (0, a.jsx)("div", {
                                                      className:
                                                        "course__lesson mr-20",
                                                      children: (0, a.jsxs)(
                                                        "span",
                                                        {
                                                          children: [
                                                            (0, a.jsx)("i", {
                                                              className:
                                                                "fas fa-book",
                                                            }),
                                                            "72 Lesson",
                                                          ],
                                                        }
                                                      ),
                                                    }),
                                                    (0, a.jsx)("div", {
                                                      className:
                                                        "course__rating",
                                                      children: (0, a.jsxs)(
                                                        "span",
                                                        {
                                                          children: [
                                                            (0, a.jsx)("i", {
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
                                                (0, a.jsx)("h3", {
                                                  className:
                                                    "course__title course__title-3",
                                                  children: (0, a.jsx)(
                                                    d.default,
                                                    {
                                                      href: "/course-details",
                                                      children: (0, a.jsx)(
                                                        "a",
                                                        {
                                                          children:
                                                            "Fundamentals of music theory Learn new.",
                                                        }
                                                      ),
                                                    }
                                                  ),
                                                }),
                                                (0, a.jsx)("div", {
                                                  className: "course__summary",
                                                  children: (0, a.jsx)("p", {
                                                    children:
                                                      "Communia virtutes tutiorem declarat stoicorum sanabat oblivisci nostris tamquam iucunditatem",
                                                  }),
                                                }),
                                                (0, a.jsxs)("div", {
                                                  className:
                                                    "course__teacher d-flex align-items-center",
                                                  children: [
                                                    (0, a.jsx)("div", {
                                                      className:
                                                        "course__teacher-thumb mr-15",
                                                      children: (0, a.jsx)(
                                                        "img",
                                                        {
                                                          src: "assets/img/course/teacher/teacher-2.jpg",
                                                          alt: "img not found",
                                                        }
                                                      ),
                                                    }),
                                                    (0, a.jsx)("h6", {
                                                      children: (0, a.jsx)(
                                                        d.default,
                                                        {
                                                          href: "/instructor-details",
                                                          children: (0, a.jsx)(
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
                                            (0, a.jsxs)("div", {
                                              className:
                                                "course__more course__more-2 d-flex justify-content-between align-items-center",
                                              children: [
                                                (0, a.jsxs)("div", {
                                                  className:
                                                    "course__status d-flex align-items-center",
                                                  children: [
                                                    (0, a.jsx)("span", {
                                                      className: "sky-blue",
                                                      children: "$32.00",
                                                    }),
                                                    (0, a.jsx)("span", {
                                                      className: "old-price",
                                                      children: "$68.00",
                                                    }),
                                                  ],
                                                }),
                                                (0, a.jsx)("div", {
                                                  className: "course__btn",
                                                  children: (0, a.jsx)(
                                                    d.default,
                                                    {
                                                      href: "/course-details",
                                                      children: (0, a.jsxs)(
                                                        "a",
                                                        {
                                                          className: "link-btn",
                                                          children: [
                                                            "Know Details",
                                                            (0, a.jsx)("i", {
                                                              className:
                                                                "fas fa-arrow-right",
                                                            }),
                                                            (0, a.jsx)("i", {
                                                              className:
                                                                "fas fa-arrow-right",
                                                            }),
                                                          ],
                                                        }
                                                      ),
                                                    }
                                                  ),
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
                              (0, a.jsx)("div", {
                                className: "col-xxl-12",
                                children: (0, a.jsx)("div", {
                                  className: "course__item white-bg mb-30 fix",
                                  children: (0, a.jsxs)("div", {
                                    className: "row gx-0",
                                    children: [
                                      (0, a.jsx)("div", {
                                        className:
                                          "col-xxl-4 col-xl-4 col-lg-4",
                                        children: (0, a.jsxs)("div", {
                                          className:
                                            "course__thumb course__thumb-list w-img p-relative fix",
                                          children: [
                                            (0, a.jsx)(d.default, {
                                              href: "/course-details",
                                              children: (0, a.jsx)("a", {
                                                children: (0, a.jsx)("img", {
                                                  src: "assets/img/course/list/course-3.jpg",
                                                  alt: "img not found",
                                                }),
                                              }),
                                            }),
                                            (0, a.jsx)("div", {
                                              className: "course__tag",
                                              children: (0, a.jsx)(d.default, {
                                                href: "/course-details",
                                                children: (0, a.jsx)("a", {
                                                  className: "blue-2",
                                                  children: "Art & Design",
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                      }),
                                      (0, a.jsx)("div", {
                                        className:
                                          "col-xxl-8 col-xl-8 col-lg-8",
                                        children: (0, a.jsxs)("div", {
                                          className: "course__right",
                                          children: [
                                            (0, a.jsxs)("div", {
                                              className:
                                                "course__content course__content-3",
                                              children: [
                                                (0, a.jsxs)("div", {
                                                  className:
                                                    "course__meta d-flex align-items-center",
                                                  children: [
                                                    (0, a.jsx)("div", {
                                                      className:
                                                        "course__lesson mr-20",
                                                      children: (0, a.jsxs)(
                                                        "span",
                                                        {
                                                          children: [
                                                            (0, a.jsx)("i", {
                                                              className:
                                                                "fas fa-book",
                                                            }),
                                                            "14 Lesson",
                                                          ],
                                                        }
                                                      ),
                                                    }),
                                                    (0, a.jsx)("div", {
                                                      className:
                                                        "course__rating",
                                                      children: (0, a.jsxs)(
                                                        "span",
                                                        {
                                                          children: [
                                                            (0, a.jsx)("i", {
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
                                                (0, a.jsx)("h3", {
                                                  className:
                                                    "course__title course__title-3",
                                                  children: (0, a.jsx)(
                                                    d.default,
                                                    {
                                                      href: "/course-details",
                                                      children: (0, a.jsx)(
                                                        "a",
                                                        {
                                                          children:
                                                            "Strategy law and organization Foundation",
                                                        }
                                                      ),
                                                    }
                                                  ),
                                                }),
                                                (0, a.jsx)("div", {
                                                  className: "course__summary",
                                                  children: (0, a.jsx)("p", {
                                                    children:
                                                      "Communia virtutes tutiorem declarat stoicorum sanabat oblivisci nostris tamquam iucunditatem",
                                                  }),
                                                }),
                                                (0, a.jsxs)("div", {
                                                  className:
                                                    "course__teacher d-flex align-items-center",
                                                  children: [
                                                    (0, a.jsx)("div", {
                                                      className:
                                                        "course__teacher-thumb mr-15",
                                                      children: (0, a.jsx)(
                                                        "img",
                                                        {
                                                          src: "assets/img/course/teacher/teacher-3.jpg",
                                                          alt: "img not found",
                                                        }
                                                      ),
                                                    }),
                                                    (0, a.jsx)("h6", {
                                                      children: (0, a.jsx)(
                                                        d.default,
                                                        {
                                                          href: "/instructor-details",
                                                          children: (0, a.jsx)(
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
                                            (0, a.jsxs)("div", {
                                              className:
                                                "course__more course__more-2 d-flex justify-content-between align-items-center",
                                              children: [
                                                (0, a.jsxs)("div", {
                                                  className:
                                                    "course__status d-flex align-items-center",
                                                  children: [
                                                    (0, a.jsx)("span", {
                                                      className: "blue-2",
                                                      children: "$46.00",
                                                    }),
                                                    (0, a.jsx)("span", {
                                                      className: "old-price",
                                                      children: "$68.00",
                                                    }),
                                                  ],
                                                }),
                                                (0, a.jsx)("div", {
                                                  className: "course__btn",
                                                  children: (0, a.jsx)(
                                                    d.default,
                                                    {
                                                      href: "/course-details",
                                                      children: (0, a.jsxs)(
                                                        "a",
                                                        {
                                                          className: "link-btn",
                                                          children: [
                                                            "Know Details",
                                                            (0, a.jsx)("i", {
                                                              className:
                                                                "fas fa-arrow-right",
                                                            }),
                                                            (0, a.jsx)("i", {
                                                              className:
                                                                "fas fa-arrow-right",
                                                            }),
                                                          ],
                                                        }
                                                      ),
                                                    }
                                                  ),
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
                              (0, a.jsx)("div", {
                                className: "col-xxl-12",
                                children: (0, a.jsx)("div", {
                                  className: "course__item white-bg mb-30 fix",
                                  children: (0, a.jsxs)("div", {
                                    className: "row gx-0",
                                    children: [
                                      (0, a.jsx)("div", {
                                        className:
                                          "col-xxl-4 col-xl-4 col-lg-4",
                                        children: (0, a.jsxs)("div", {
                                          className:
                                            "course__thumb course__thumb-list w-img p-relative fix",
                                          children: [
                                            (0, a.jsx)(d.default, {
                                              href: "/course-details",
                                              children: (0, a.jsx)("a", {
                                                children: (0, a.jsx)("img", {
                                                  src: "assets/img/course/list/course-4.jpg",
                                                  alt: "img not found",
                                                }),
                                              }),
                                            }),
                                            (0, a.jsx)("div", {
                                              className: "course__tag",
                                              children: (0, a.jsx)(d.default, {
                                                href: "/course-details",
                                                children: (0, a.jsx)("a", {
                                                  className: "green",
                                                  children: "Art & Design",
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                      }),
                                      (0, a.jsx)("div", {
                                        className:
                                          "col-xxl-8 col-xl-8 col-lg-8",
                                        children: (0, a.jsxs)("div", {
                                          className: "course__right",
                                          children: [
                                            (0, a.jsxs)("div", {
                                              className:
                                                "course__content course__content-3",
                                              children: [
                                                (0, a.jsxs)("div", {
                                                  className:
                                                    "course__meta d-flex align-items-center",
                                                  children: [
                                                    (0, a.jsx)("div", {
                                                      className:
                                                        "course__lesson mr-20",
                                                      children: (0, a.jsxs)(
                                                        "span",
                                                        {
                                                          children: [
                                                            (0, a.jsx)("i", {
                                                              className:
                                                                "fas fa-book",
                                                            }),
                                                            "14 Lesson",
                                                          ],
                                                        }
                                                      ),
                                                    }),
                                                    (0, a.jsx)("div", {
                                                      className:
                                                        "course__rating",
                                                      children: (0, a.jsxs)(
                                                        "span",
                                                        {
                                                          children: [
                                                            (0, a.jsx)("i", {
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
                                                (0, a.jsx)("h3", {
                                                  className:
                                                    "course__title course__title-3",
                                                  children: (0, a.jsx)(
                                                    d.default,
                                                    {
                                                      href: "/course-details",
                                                      children: (0, a.jsx)(
                                                        "a",
                                                        {
                                                          children:
                                                            "The business Intelligence analyst Course 2022",
                                                        }
                                                      ),
                                                    }
                                                  ),
                                                }),
                                                (0, a.jsx)("div", {
                                                  className: "course__summary",
                                                  children: (0, a.jsx)("p", {
                                                    children:
                                                      "Communia virtutes tutiorem declarat stoicorum sanabat oblivisci nostris tamquam iucunditatem",
                                                  }),
                                                }),
                                                (0, a.jsxs)("div", {
                                                  className:
                                                    "course__teacher d-flex align-items-center",
                                                  children: [
                                                    (0, a.jsx)("div", {
                                                      className:
                                                        "course__teacher-thumb mr-15",
                                                      children: (0, a.jsx)(
                                                        "img",
                                                        {
                                                          src: "assets/img/course/teacher/teacher-4.jpg",
                                                          alt: "img not found",
                                                        }
                                                      ),
                                                    }),
                                                    (0, a.jsx)("h6", {
                                                      children: (0, a.jsx)(
                                                        d.default,
                                                        {
                                                          href: "/instructor-details",
                                                          children: (0, a.jsx)(
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
                                            (0, a.jsxs)("div", {
                                              className:
                                                "course__more course__more-2 d-flex justify-content-between align-items-center",
                                              children: [
                                                (0, a.jsxs)("div", {
                                                  className:
                                                    "course__status d-flex align-items-center",
                                                  children: [
                                                    (0, a.jsx)("span", {
                                                      className: "green",
                                                      children: "$46.00",
                                                    }),
                                                    (0, a.jsx)("span", {
                                                      className: "old-price",
                                                      children: "$68.00",
                                                    }),
                                                  ],
                                                }),
                                                (0, a.jsx)("div", {
                                                  className: "course__btn",
                                                  children: (0, a.jsx)(
                                                    d.default,
                                                    {
                                                      href: "/course-details",
                                                      children: (0, a.jsxs)(
                                                        "a",
                                                        {
                                                          className: "link-btn",
                                                          children: [
                                                            "Know Details",
                                                            (0, a.jsx)("i", {
                                                              className:
                                                                "fas fa-arrow-right",
                                                            }),
                                                            (0, a.jsx)("i", {
                                                              className:
                                                                "fas fa-arrow-right",
                                                            }),
                                                          ],
                                                        }
                                                      ),
                                                    }
                                                  ),
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
                              (0, a.jsx)("div", {
                                className: "col-xxl-12",
                                children: (0, a.jsx)("div", {
                                  className: "course__item white-bg mb-30 fix",
                                  children: (0, a.jsxs)("div", {
                                    className: "row gx-0",
                                    children: [
                                      (0, a.jsx)("div", {
                                        className:
                                          "col-xxl-4 col-xl-4 col-lg-4",
                                        children: (0, a.jsxs)("div", {
                                          className:
                                            "course__thumb course__thumb-list w-img p-relative fix",
                                          children: [
                                            (0, a.jsx)(d.default, {
                                              href: "/course-details",
                                              children: (0, a.jsx)("a", {
                                                children: (0, a.jsx)("img", {
                                                  src: "assets/img/course/list/course-5.jpg",
                                                  alt: "img not found",
                                                }),
                                              }),
                                            }),
                                            (0, a.jsx)("div", {
                                              className: "course__tag",
                                              children: (0, a.jsx)(d.default, {
                                                href: "/course-details",
                                                children: (0, a.jsx)("a", {
                                                  className: "blue",
                                                  children: "Art & Design",
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                      }),
                                      (0, a.jsx)("div", {
                                        className:
                                          "col-xxl-8 col-xl-8 col-lg-8",
                                        children: (0, a.jsxs)("div", {
                                          className: "course__right",
                                          children: [
                                            (0, a.jsxs)("div", {
                                              className:
                                                "course__content course__content-3",
                                              children: [
                                                (0, a.jsxs)("div", {
                                                  className:
                                                    "course__meta d-flex align-items-center",
                                                  children: [
                                                    (0, a.jsx)("div", {
                                                      className:
                                                        "course__lesson mr-20",
                                                      children: (0, a.jsxs)(
                                                        "span",
                                                        {
                                                          children: [
                                                            (0, a.jsx)("i", {
                                                              className:
                                                                "fas fa-book",
                                                            }),
                                                            "14 Lesson",
                                                          ],
                                                        }
                                                      ),
                                                    }),
                                                    (0, a.jsx)("div", {
                                                      className:
                                                        "course__rating",
                                                      children: (0, a.jsxs)(
                                                        "span",
                                                        {
                                                          children: [
                                                            (0, a.jsx)("i", {
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
                                                (0, a.jsx)("h3", {
                                                  className:
                                                    "course__title course__title-3",
                                                  children: (0, a.jsx)(
                                                    d.default,
                                                    {
                                                      href: "/course-details",
                                                      children: (0, a.jsx)(
                                                        "a",
                                                        {
                                                          children:
                                                            "Build your media and Public presence",
                                                        }
                                                      ),
                                                    }
                                                  ),
                                                }),
                                                (0, a.jsx)("div", {
                                                  className: "course__summary",
                                                  children: (0, a.jsx)("p", {
                                                    children:
                                                      "Communia virtutes tutiorem declarat stoicorum sanabat oblivisci nostris tamquam iucunditatem",
                                                  }),
                                                }),
                                                (0, a.jsxs)("div", {
                                                  className:
                                                    "course__teacher d-flex align-items-center",
                                                  children: [
                                                    (0, a.jsx)("div", {
                                                      className:
                                                        "course__teacher-thumb mr-15",
                                                      children: (0, a.jsx)(
                                                        "img",
                                                        {
                                                          src: "assets/img/course/teacher/teacher-5.jpg",
                                                          alt: "img not found",
                                                        }
                                                      ),
                                                    }),
                                                    (0, a.jsx)("h6", {
                                                      children: (0, a.jsx)(
                                                        d.default,
                                                        {
                                                          href: "/instructor-details",
                                                          children: (0, a.jsx)(
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
                                            (0, a.jsxs)("div", {
                                              className:
                                                "course__more course__more-2 d-flex justify-content-between align-items-center",
                                              children: [
                                                (0, a.jsxs)("div", {
                                                  className:
                                                    "course__status d-flex align-items-center",
                                                  children: [
                                                    (0, a.jsx)("span", {
                                                      className: "blue",
                                                      children: "$62.00",
                                                    }),
                                                    (0, a.jsx)("span", {
                                                      className: "old-price",
                                                      children: "$97.00",
                                                    }),
                                                  ],
                                                }),
                                                (0, a.jsx)("div", {
                                                  className: "course__btn",
                                                  children: (0, a.jsx)(
                                                    d.default,
                                                    {
                                                      href: "/course-details",
                                                      children: (0, a.jsxs)(
                                                        "a",
                                                        {
                                                          className: "link-btn",
                                                          children: [
                                                            "Know Details",
                                                            (0, a.jsx)("i", {
                                                              className:
                                                                "fas fa-arrow-right",
                                                            }),
                                                            (0, a.jsx)("i", {
                                                              className:
                                                                "fas fa-arrow-right",
                                                            }),
                                                          ],
                                                        }
                                                      ),
                                                    }
                                                  ),
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
                              (0, a.jsx)("div", {
                                className: "col-xxl-12",
                                children: (0, a.jsx)("div", {
                                  className: "course__item white-bg mb-30 fix",
                                  children: (0, a.jsxs)("div", {
                                    className: "row gx-0",
                                    children: [
                                      (0, a.jsx)("div", {
                                        className:
                                          "col-xxl-4 col-xl-4 col-lg-4",
                                        children: (0, a.jsxs)("div", {
                                          className:
                                            "course__thumb course__thumb-list w-img p-relative fix",
                                          children: [
                                            (0, a.jsx)(d.default, {
                                              href: "/course-details",
                                              children: (0, a.jsx)("a", {
                                                children: (0, a.jsx)("img", {
                                                  src: "assets/img/course/list/course-6.jpg",
                                                  alt: "img not found",
                                                }),
                                              }),
                                            }),
                                            (0, a.jsx)("div", {
                                              className: "course__tag",
                                              children: (0, a.jsx)(d.default, {
                                                href: "/course-details",
                                                children: (0, a.jsx)("a", {
                                                  className: "yellow",
                                                  children: "Art & Design",
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                      }),
                                      (0, a.jsx)("div", {
                                        className:
                                          "col-xxl-8 col-xl-8 col-lg-8",
                                        children: (0, a.jsxs)("div", {
                                          className: "course__right",
                                          children: [
                                            (0, a.jsxs)("div", {
                                              className:
                                                "course__content course__content-3",
                                              children: [
                                                (0, a.jsxs)("div", {
                                                  className:
                                                    "course__meta d-flex align-items-center",
                                                  children: [
                                                    (0, a.jsx)("div", {
                                                      className:
                                                        "course__lesson mr-20",
                                                      children: (0, a.jsxs)(
                                                        "span",
                                                        {
                                                          children: [
                                                            (0, a.jsx)("i", {
                                                              className:
                                                                "fas fa-book",
                                                            }),
                                                            "33 Lesson",
                                                          ],
                                                        }
                                                      ),
                                                    }),
                                                    (0, a.jsx)("div", {
                                                      className:
                                                        "course__rating",
                                                      children: (0, a.jsxs)(
                                                        "span",
                                                        {
                                                          children: [
                                                            (0, a.jsx)("i", {
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
                                                (0, a.jsx)("h3", {
                                                  className:
                                                    "course__title course__title-3",
                                                  children: (0, a.jsx)(
                                                    d.default,
                                                    {
                                                      href: "/course-details",
                                                      children: (0, a.jsx)(
                                                        "a",
                                                        {
                                                          children:
                                                            "Creative writing through Storytelling",
                                                        }
                                                      ),
                                                    }
                                                  ),
                                                }),
                                                (0, a.jsx)("div", {
                                                  className: "course__summary",
                                                  children: (0, a.jsx)("p", {
                                                    children:
                                                      "Communia virtutes tutiorem declarat stoicorum sanabat oblivisci nostris tamquam iucunditatem",
                                                  }),
                                                }),
                                                (0, a.jsxs)("div", {
                                                  className:
                                                    "course__teacher d-flex align-items-center",
                                                  children: [
                                                    (0, a.jsx)("div", {
                                                      className:
                                                        "course__teacher-thumb mr-15",
                                                      children: (0, a.jsx)(
                                                        "img",
                                                        {
                                                          src: "assets/img/course/teacher/teacher-6.jpg",
                                                          alt: "img not found",
                                                        }
                                                      ),
                                                    }),
                                                    (0, a.jsx)("h6", {
                                                      children: (0, a.jsx)(
                                                        d.default,
                                                        {
                                                          href: "/instructor-details",
                                                          children: (0, a.jsx)(
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
                                            (0, a.jsxs)("div", {
                                              className:
                                                "course__more course__more-2 d-flex justify-content-between align-items-center",
                                              children: [
                                                (0, a.jsxs)("div", {
                                                  className:
                                                    "course__status d-flex align-items-center",
                                                  children: [
                                                    (0, a.jsx)("span", {
                                                      className: "yellow",
                                                      children: "$62.00",
                                                    }),
                                                    (0, a.jsx)("span", {
                                                      className: "old-price",
                                                      children: "$97.00",
                                                    }),
                                                  ],
                                                }),
                                                (0, a.jsx)("div", {
                                                  className: "course__btn",
                                                  children: (0, a.jsx)(
                                                    d.default,
                                                    {
                                                      href: "/course-details",
                                                      children: (0, a.jsxs)(
                                                        "a",
                                                        {
                                                          className: "link-btn",
                                                          children: [
                                                            "Know Details",
                                                            (0, a.jsx)("i", {
                                                              className:
                                                                "fas fa-arrow-right",
                                                            }),
                                                            (0, a.jsx)("i", {
                                                              className:
                                                                "fas fa-arrow-right",
                                                            }),
                                                          ],
                                                        }
                                                      ),
                                                    }
                                                  ),
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
                        (0, a.jsx)(n.TabPanel, {
                          children: (0, a.jsxs)("div", {
                            className: "row",
                            children: [
                              (0, a.jsx)("div", {
                                className:
                                  "col-xxl-4 col-xl-4 col-lg-4 col-md-6",
                                children: (0, a.jsxs)("div", {
                                  className: "course__item white-bg mb-30 fix",
                                  children: [
                                    (0, a.jsxs)("div", {
                                      className:
                                        "course__thumb w-img p-relative fix",
                                      children: [
                                        (0, a.jsx)(d.default, {
                                          href: "/course-details",
                                          children: (0, a.jsx)("a", {
                                            children: (0, a.jsx)("img", {
                                              src: "assets/img/course/course-1.jpg",
                                              alt: "img not found",
                                            }),
                                          }),
                                        }),
                                        (0, a.jsx)("div", {
                                          className: "course__tag",
                                          children: (0, a.jsx)(d.default, {
                                            href: "/course-details",
                                            children: (0, a.jsx)("a", {
                                              children: "Art & Design",
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: "course__content",
                                      children: [
                                        (0, a.jsxs)("div", {
                                          className:
                                            "course__meta d-flex align-items-center justify-content-between",
                                          children: [
                                            (0, a.jsx)("div", {
                                              className: "course__lesson",
                                              children: (0, a.jsxs)("span", {
                                                children: [
                                                  (0, a.jsx)("i", {
                                                    className: "fas fa-book",
                                                  }),
                                                  "43 Lesson",
                                                ],
                                              }),
                                            }),
                                            (0, a.jsx)("div", {
                                              className: "course__rating",
                                              children: (0, a.jsxs)("span", {
                                                children: [
                                                  (0, a.jsx)("i", {
                                                    className: "fas fa-star",
                                                  }),
                                                  "4.5 (44)",
                                                ],
                                              }),
                                            }),
                                          ],
                                        }),
                                        (0, a.jsx)("h3", {
                                          className: "course__title",
                                          children: (0, a.jsx)(d.default, {
                                            href: "/course-details",
                                            children: (0, a.jsx)("a", {
                                              children:
                                                "Become a product Manager learn the skills & job.",
                                            }),
                                          }),
                                        }),
                                        (0, a.jsxs)("div", {
                                          className:
                                            "course__teacher d-flex align-items-center",
                                          children: [
                                            (0, a.jsx)("div", {
                                              className:
                                                "course__teacher-thumb mr-15",
                                              children: (0, a.jsx)("img", {
                                                src: "assets/img/course/teacher/teacher-1.jpg",
                                                alt: "img not found",
                                              }),
                                            }),
                                            (0, a.jsx)("h6", {
                                              children: (0, a.jsx)(d.default, {
                                                href: "/instructor-details",
                                                children: (0, a.jsx)("a", {
                                                  children: "Jim S\xe9chen",
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      className:
                                        "course__more d-flex justify-content-between align-items-center",
                                      children: [
                                        (0, a.jsx)("div", {
                                          className: "course__status",
                                          children: (0, a.jsx)("span", {
                                            children: "Free",
                                          }),
                                        }),
                                        (0, a.jsx)("div", {
                                          className: "course__btn",
                                          children: (0, a.jsx)(d.default, {
                                            href: "/course-details",
                                            children: (0, a.jsxs)("a", {
                                              className: "link-btn",
                                              children: [
                                                "Know Details",
                                                (0, a.jsx)("i", {
                                                  className:
                                                    "fas fa-arrow-right",
                                                }),
                                                (0, a.jsx)("i", {
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
                              (0, a.jsx)("div", {
                                className:
                                  "col-xxl-4 col-xl-4 col-lg-4 col-md-6",
                                children: (0, a.jsxs)("div", {
                                  className: "course__item white-bg mb-30 fix",
                                  children: [
                                    (0, a.jsxs)("div", {
                                      className:
                                        "course__thumb w-img p-relative fix",
                                      children: [
                                        (0, a.jsx)(d.default, {
                                          href: "/course-details",
                                          children: (0, a.jsx)("a", {
                                            children: (0, a.jsx)("img", {
                                              src: "assets/img/course/course-2.jpg",
                                              alt: "img not found",
                                            }),
                                          }),
                                        }),
                                        (0, a.jsx)("div", {
                                          className: "course__tag",
                                          children: (0, a.jsx)(d.default, {
                                            href: "/course-details",
                                            children: (0, a.jsx)("a", {
                                              className: "sky-blue",
                                              children: "Mechanical",
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: "course__content",
                                      children: [
                                        (0, a.jsxs)("div", {
                                          className:
                                            "course__meta d-flex align-items-center justify-content-between",
                                          children: [
                                            (0, a.jsx)("div", {
                                              className: "course__lesson",
                                              children: (0, a.jsxs)("span", {
                                                children: [
                                                  (0, a.jsx)("i", {
                                                    className: "fas fa-book",
                                                  }),
                                                  "72 Lesson",
                                                ],
                                              }),
                                            }),
                                            (0, a.jsx)("div", {
                                              className: "course__rating",
                                              children: (0, a.jsxs)("span", {
                                                children: [
                                                  (0, a.jsx)("i", {
                                                    className: "fas fa-star",
                                                  }),
                                                  "4.5 (44)",
                                                ],
                                              }),
                                            }),
                                          ],
                                        }),
                                        (0, a.jsx)("h3", {
                                          className: "course__title",
                                          children: (0, a.jsx)(d.default, {
                                            href: "/course-details",
                                            children: (0, a.jsx)("a", {
                                              children:
                                                "Fundamentals of music theory Learn new",
                                            }),
                                          }),
                                        }),
                                        (0, a.jsxs)("div", {
                                          className:
                                            "course__teacher d-flex align-items-center",
                                          children: [
                                            (0, a.jsx)("div", {
                                              className:
                                                "course__teacher-thumb mr-15",
                                              children: (0, a.jsx)("img", {
                                                src: "assets/img/course/teacher/teacher-2.jpg",
                                                alt: "img not found",
                                              }),
                                            }),
                                            (0, a.jsx)("h6", {
                                              children: (0, a.jsx)(d.default, {
                                                href: "/instructor-details",
                                                children: (0, a.jsx)("a", {
                                                  children: "Barry Tone",
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      className:
                                        "course__more d-flex justify-content-between align-items-center",
                                      children: [
                                        (0, a.jsxs)("div", {
                                          className:
                                            "course__status d-flex align-items-center",
                                          children: [
                                            (0, a.jsx)("span", {
                                              className: "sky-blue",
                                              children: "$32.00",
                                            }),
                                            (0, a.jsx)("span", {
                                              className: "old-price",
                                              children: "$68.00",
                                            }),
                                          ],
                                        }),
                                        (0, a.jsx)("div", {
                                          className: "course__btn",
                                          children: (0, a.jsx)(d.default, {
                                            href: "/course-details",
                                            children: (0, a.jsxs)("a", {
                                              className: "link-btn",
                                              children: [
                                                "Know Details",
                                                (0, a.jsx)("i", {
                                                  className:
                                                    "fas fa-arrow-right",
                                                }),
                                                (0, a.jsx)("i", {
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
                              (0, a.jsx)("div", {
                                className:
                                  "col-xxl-4 col-xl-4 col-lg-4 col-md-6",
                                children: (0, a.jsxs)("div", {
                                  className: "course__item white-bg mb-30 fix",
                                  children: [
                                    (0, a.jsxs)("div", {
                                      className:
                                        "course__thumb w-img p-relative fix",
                                      children: [
                                        (0, a.jsx)(d.default, {
                                          href: "/course-details",
                                          children: (0, a.jsx)("a", {
                                            children: (0, a.jsx)("img", {
                                              src: "assets/img/course/course-7.jpg",
                                              alt: "img not found",
                                            }),
                                          }),
                                        }),
                                        (0, a.jsx)("div", {
                                          className: "course__tag",
                                          children: (0, a.jsx)(d.default, {
                                            href: "/course-details",
                                            children: (0, a.jsx)("a", {
                                              className: "blue-2",
                                              children: "Development",
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: "course__content",
                                      children: [
                                        (0, a.jsxs)("div", {
                                          className:
                                            "course__meta d-flex align-items-center justify-content-between",
                                          children: [
                                            (0, a.jsx)("div", {
                                              className: "course__lesson",
                                              children: (0, a.jsxs)("span", {
                                                children: [
                                                  (0, a.jsx)("i", {
                                                    className: "fas fa-book",
                                                  }),
                                                  "43 Lesson",
                                                ],
                                              }),
                                            }),
                                            (0, a.jsx)("div", {
                                              className: "course__rating",
                                              children: (0, a.jsxs)("span", {
                                                children: [
                                                  (0, a.jsx)("i", {
                                                    className: "fas fa-star",
                                                  }),
                                                  "4.4 (40)",
                                                ],
                                              }),
                                            }),
                                          ],
                                        }),
                                        (0, a.jsx)("h3", {
                                          className: "course__title",
                                          children: (0, a.jsx)(d.default, {
                                            href: "/course-details",
                                            children: (0, a.jsx)("a", {
                                              children:
                                                "Bases Matem\xe1ticas dios \xc1lgebra Ecuacion",
                                            }),
                                          }),
                                        }),
                                        (0, a.jsxs)("div", {
                                          className:
                                            "course__teacher d-flex align-items-center",
                                          children: [
                                            (0, a.jsx)("div", {
                                              className:
                                                "course__teacher-thumb mr-15",
                                              children: (0, a.jsx)("img", {
                                                src: "assets/img/course/teacher/teacher-7.jpg",
                                                alt: "img not found",
                                              }),
                                            }),
                                            (0, a.jsx)("h6", {
                                              children: (0, a.jsx)(d.default, {
                                                href: "/instructor-details",
                                                children: (0, a.jsx)("a", {
                                                  children: "Samuel Serif",
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      className:
                                        "course__more d-flex justify-content-between align-items-center",
                                      children: [
                                        (0, a.jsxs)("div", {
                                          className:
                                            "course__status d-flex align-items-center",
                                          children: [
                                            (0, a.jsx)("span", {
                                              className: "blue-2",
                                              children: "$46.00",
                                            }),
                                            (0, a.jsx)("span", {
                                              className: "old-price",
                                              children: "$68.00",
                                            }),
                                          ],
                                        }),
                                        (0, a.jsx)("div", {
                                          className: "course__btn",
                                          children: (0, a.jsx)(d.default, {
                                            href: "/course-details",
                                            children: (0, a.jsxs)("a", {
                                              className: "link-btn",
                                              children: [
                                                "Know Details",
                                                (0, a.jsx)("i", {
                                                  className:
                                                    "fas fa-arrow-right",
                                                }),
                                                (0, a.jsx)("i", {
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
                              (0, a.jsx)("div", {
                                className:
                                  "col-xxl-4 col-xl-4 col-lg-4 col-md-6",
                                children: (0, a.jsxs)("div", {
                                  className: "course__item white-bg mb-30 fix",
                                  children: [
                                    (0, a.jsxs)("div", {
                                      className:
                                        "course__thumb w-img p-relative fix",
                                      children: [
                                        (0, a.jsx)(d.default, {
                                          href: "/course-details",
                                          children: (0, a.jsx)("a", {
                                            children: (0, a.jsx)("img", {
                                              src: "assets/img/course/course-3.jpg",
                                              alt: "img not found",
                                            }),
                                          }),
                                        }),
                                        (0, a.jsx)("div", {
                                          className: "course__tag",
                                          children: (0, a.jsx)(d.default, {
                                            href: "/course-details",
                                            children: (0, a.jsx)("a", {
                                              className: "green",
                                              children: "Development",
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: "course__content",
                                      children: [
                                        (0, a.jsxs)("div", {
                                          className:
                                            "course__meta d-flex align-items-center justify-content-between",
                                          children: [
                                            (0, a.jsx)("div", {
                                              className: "course__lesson",
                                              children: (0, a.jsxs)("span", {
                                                children: [
                                                  (0, a.jsx)("i", {
                                                    className: "fas fa-book",
                                                  }),
                                                  "14 Lesson",
                                                ],
                                              }),
                                            }),
                                            (0, a.jsx)("div", {
                                              className: "course__rating",
                                              children: (0, a.jsxs)("span", {
                                                children: [
                                                  (0, a.jsx)("i", {
                                                    className: "fas fa-star",
                                                  }),
                                                  "3.5 (55)",
                                                ],
                                              }),
                                            }),
                                          ],
                                        }),
                                        (0, a.jsx)("h3", {
                                          className: "course__title",
                                          children: (0, a.jsx)(d.default, {
                                            href: "/course-details",
                                            children: (0, a.jsx)("a", {
                                              children:
                                                "Strategy law and organization Foundation",
                                            }),
                                          }),
                                        }),
                                        (0, a.jsxs)("div", {
                                          className:
                                            "course__teacher d-flex align-items-center",
                                          children: [
                                            (0, a.jsx)("div", {
                                              className:
                                                "course__teacher-thumb mr-15",
                                              children: (0, a.jsx)("img", {
                                                src: "assets/img/course/teacher/teacher-3.jpg",
                                                alt: "img not found",
                                              }),
                                            }),
                                            (0, a.jsx)("h6", {
                                              children: (0, a.jsx)(d.default, {
                                                href: "/instructor-details",
                                                children: (0, a.jsx)("a", {
                                                  children: "Elon Gated",
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      className:
                                        "course__more d-flex justify-content-between align-items-center",
                                      children: [
                                        (0, a.jsxs)("div", {
                                          className:
                                            "course__status d-flex align-items-center",
                                          children: [
                                            (0, a.jsx)("span", {
                                              className: "green",
                                              children: "$46.00",
                                            }),
                                            (0, a.jsx)("span", {
                                              className: "old-price",
                                              children: "$68.00",
                                            }),
                                          ],
                                        }),
                                        (0, a.jsx)("div", {
                                          className: "course__btn",
                                          children: (0, a.jsx)(d.default, {
                                            href: "/course-details",
                                            children: (0, a.jsxs)("a", {
                                              className: "link-btn",
                                              children: [
                                                "Know Details",
                                                (0, a.jsx)("i", {
                                                  className:
                                                    "fas fa-arrow-right",
                                                }),
                                                (0, a.jsx)("i", {
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
                              (0, a.jsx)("div", {
                                className:
                                  "col-xxl-4 col-xl-4 col-lg-4 col-md-6",
                                children: (0, a.jsxs)("div", {
                                  className: "course__item white-bg mb-30 fix",
                                  children: [
                                    (0, a.jsxs)("div", {
                                      className:
                                        "course__thumb w-img p-relative fix",
                                      children: [
                                        (0, a.jsx)(d.default, {
                                          href: "/course-details",
                                          children: (0, a.jsx)("a", {
                                            children: (0, a.jsx)("img", {
                                              src: "assets/img/course/course-4.jpg",
                                              alt: "img not found",
                                            }),
                                          }),
                                        }),
                                        (0, a.jsx)("div", {
                                          className: "course__tag",
                                          children: (0, a.jsx)(d.default, {
                                            href: "/course-details",
                                            children: (0, a.jsx)("a", {
                                              className: "blue",
                                              children: "Marketing",
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: "course__content",
                                      children: [
                                        (0, a.jsxs)("div", {
                                          className:
                                            "course__meta d-flex align-items-center justify-content-between",
                                          children: [
                                            (0, a.jsx)("div", {
                                              className: "course__lesson",
                                              children: (0, a.jsxs)("span", {
                                                children: [
                                                  (0, a.jsx)("i", {
                                                    className: "fas fa-book",
                                                  }),
                                                  "22 Lesson",
                                                ],
                                              }),
                                            }),
                                            (0, a.jsx)("div", {
                                              className: "course__rating",
                                              children: (0, a.jsxs)("span", {
                                                children: [
                                                  (0, a.jsx)("i", {
                                                    className: "fas fa-star",
                                                  }),
                                                  "4.5 (42)",
                                                ],
                                              }),
                                            }),
                                          ],
                                        }),
                                        (0, a.jsx)("h3", {
                                          className: "course__title",
                                          children: (0, a.jsx)(d.default, {
                                            href: "/course-details",
                                            children: (0, a.jsx)("a", {
                                              children:
                                                "The business Intelligence analyst Course 2022",
                                            }),
                                          }),
                                        }),
                                        (0, a.jsxs)("div", {
                                          className:
                                            "course__teacher d-flex align-items-center",
                                          children: [
                                            (0, a.jsx)("div", {
                                              className:
                                                "course__teacher-thumb mr-15",
                                              children: (0, a.jsx)("img", {
                                                src: "assets/img/course/teacher/teacher-4.jpg",
                                                alt: "img not found",
                                              }),
                                            }),
                                            (0, a.jsx)("h6", {
                                              children: (0, a.jsx)(d.default, {
                                                href: "/instructor-details",
                                                children: (0, a.jsx)("a", {
                                                  children: "Eleanor Fant",
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      className:
                                        "course__more d-flex justify-content-between align-items-center",
                                      children: [
                                        (0, a.jsxs)("div", {
                                          className:
                                            "course__status d-flex align-items-center",
                                          children: [
                                            (0, a.jsx)("span", {
                                              className: "blue",
                                              children: "$62.00",
                                            }),
                                            (0, a.jsx)("span", {
                                              className: "old-price",
                                              children: "$97.00",
                                            }),
                                          ],
                                        }),
                                        (0, a.jsx)("div", {
                                          className: "course__btn",
                                          children: (0, a.jsx)(d.default, {
                                            href: "/course-details",
                                            children: (0, a.jsxs)("a", {
                                              className: "link-btn",
                                              children: [
                                                "Know Details",
                                                (0, a.jsx)("i", {
                                                  className:
                                                    "fas fa-arrow-right",
                                                }),
                                                (0, a.jsx)("i", {
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
                              (0, a.jsx)("div", {
                                className:
                                  "col-xxl-4 col-xl-4 col-lg-4 col-md-6",
                                children: (0, a.jsxs)("div", {
                                  className: "course__item white-bg mb-30 fix",
                                  children: [
                                    (0, a.jsxs)("div", {
                                      className:
                                        "course__thumb w-img p-relative fix",
                                      children: [
                                        (0, a.jsx)(d.default, {
                                          href: "/course-details",
                                          children: (0, a.jsx)("a", {
                                            children: (0, a.jsx)("img", {
                                              src: "assets/img/course/course-8.jpg",
                                              alt: "img not found",
                                            }),
                                          }),
                                        }),
                                        (0, a.jsx)("div", {
                                          className: "course__tag",
                                          children: (0, a.jsx)(d.default, {
                                            href: "/course-details",
                                            children: (0, a.jsx)("a", {
                                              className: "blue",
                                              children: "yellow",
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: "course__content",
                                      children: [
                                        (0, a.jsxs)("div", {
                                          className:
                                            "course__meta d-flex align-items-center justify-content-between",
                                          children: [
                                            (0, a.jsx)("div", {
                                              className: "course__lesson",
                                              children: (0, a.jsxs)("span", {
                                                children: [
                                                  (0, a.jsx)("i", {
                                                    className: "fas fa-book",
                                                  }),
                                                  "22 Lesson",
                                                ],
                                              }),
                                            }),
                                            (0, a.jsx)("div", {
                                              className: "course__rating",
                                              children: (0, a.jsxs)("span", {
                                                children: [
                                                  (0, a.jsx)("i", {
                                                    className: "fas fa-star",
                                                  }),
                                                  "4.5 (42)",
                                                ],
                                              }),
                                            }),
                                          ],
                                        }),
                                        (0, a.jsx)("h3", {
                                          className: "course__title",
                                          children: (0, a.jsx)(d.default, {
                                            href: "/course-details",
                                            children: (0, a.jsx)("a", {
                                              children:
                                                "The business Intelligence analyst Course 2022",
                                            }),
                                          }),
                                        }),
                                        (0, a.jsxs)("div", {
                                          className:
                                            "course__teacher d-flex align-items-center",
                                          children: [
                                            (0, a.jsx)("div", {
                                              className:
                                                "course__teacher-thumb mr-15",
                                              children: (0, a.jsx)("img", {
                                                src: "assets/img/course/teacher/teacher-8.jpg",
                                                alt: "img not found",
                                              }),
                                            }),
                                            (0, a.jsx)("h6", {
                                              children: (0, a.jsx)(d.default, {
                                                href: "/instructor-details",
                                                children: (0, a.jsx)("a", {
                                                  children: "Brian Cumin",
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      className:
                                        "course__more d-flex justify-content-between align-items-center",
                                      children: [
                                        (0, a.jsxs)("div", {
                                          className:
                                            "course__status d-flex align-items-center",
                                          children: [
                                            (0, a.jsx)("span", {
                                              className: "yellow",
                                              children: "$62.00",
                                            }),
                                            (0, a.jsx)("span", {
                                              className: "old-price",
                                              children: "$97.00",
                                            }),
                                          ],
                                        }),
                                        (0, a.jsx)("div", {
                                          className: "course__btn",
                                          children: (0, a.jsx)(d.default, {
                                            href: "/course-details",
                                            children: (0, a.jsxs)("a", {
                                              className: "link-btn",
                                              children: [
                                                "Know Details",
                                                (0, a.jsx)("i", {
                                                  className:
                                                    "fas fa-arrow-right",
                                                }),
                                                (0, a.jsx)("i", {
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
                              (0, a.jsx)("div", {
                                className:
                                  "col-xxl-4 col-xl-4 col-lg-4 col-md-6",
                                children: (0, a.jsxs)("div", {
                                  className: "course__item white-bg mb-30 fix",
                                  children: [
                                    (0, a.jsxs)("div", {
                                      className:
                                        "course__thumb w-img p-relative fix",
                                      children: [
                                        (0, a.jsx)(d.default, {
                                          href: "/course-details",
                                          children: (0, a.jsx)("a", {
                                            children: (0, a.jsx)("img", {
                                              src: "assets/img/course/course-5.jpg",
                                              alt: "img not found",
                                            }),
                                          }),
                                        }),
                                        (0, a.jsx)("div", {
                                          className: "course__tag",
                                          children: (0, a.jsx)(d.default, {
                                            href: "/course-details",
                                            children: (0, a.jsx)("a", {
                                              className: "orange",
                                              children: "Audio & Music",
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: "course__content",
                                      children: [
                                        (0, a.jsxs)("div", {
                                          className:
                                            "course__meta d-flex align-items-center justify-content-between",
                                          children: [
                                            (0, a.jsx)("div", {
                                              className: "course__lesson",
                                              children: (0, a.jsxs)("span", {
                                                children: [
                                                  (0, a.jsx)("i", {
                                                    className: "fas fa-book",
                                                  }),
                                                  "18 Lesson",
                                                ],
                                              }),
                                            }),
                                            (0, a.jsx)("div", {
                                              className: "course__rating",
                                              children: (0, a.jsxs)("span", {
                                                children: [
                                                  (0, a.jsx)("i", {
                                                    className: "fas fa-star",
                                                  }),
                                                  "4.5 (37)",
                                                ],
                                              }),
                                            }),
                                          ],
                                        }),
                                        (0, a.jsx)("h3", {
                                          className: "course__title",
                                          children: (0, a.jsx)(d.default, {
                                            href: "/course-details",
                                            children: (0, a.jsx)("a", {
                                              children:
                                                "Build your media and Public presence",
                                            }),
                                          }),
                                        }),
                                        (0, a.jsxs)("div", {
                                          className:
                                            "course__teacher d-flex align-items-center",
                                          children: [
                                            (0, a.jsx)("div", {
                                              className:
                                                "course__teacher-thumb mr-15",
                                              children: (0, a.jsx)("img", {
                                                src: "assets/img/course/teacher/teacher-5.jpg",
                                                alt: "img not found",
                                              }),
                                            }),
                                            (0, a.jsx)("h6", {
                                              children: (0, a.jsx)(d.default, {
                                                href: "/instructor-details",
                                                children: (0, a.jsx)("a", {
                                                  children: "Pelican Steve",
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      className:
                                        "course__more d-flex justify-content-between align-items-center",
                                      children: [
                                        (0, a.jsxs)("div", {
                                          className:
                                            "course__status d-flex align-items-center",
                                          children: [
                                            (0, a.jsx)("span", {
                                              className: "orange",
                                              children: "$62.00",
                                            }),
                                            (0, a.jsx)("span", {
                                              className: "old-price",
                                              children: "$97.00",
                                            }),
                                          ],
                                        }),
                                        (0, a.jsx)("div", {
                                          className: "course__btn",
                                          children: (0, a.jsx)(d.default, {
                                            href: "/course-details",
                                            children: (0, a.jsxs)("a", {
                                              className: "link-btn",
                                              children: [
                                                "Know Details",
                                                (0, a.jsx)("i", {
                                                  className:
                                                    "fas fa-arrow-right",
                                                }),
                                                (0, a.jsx)("i", {
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
                              (0, a.jsx)("div", {
                                className:
                                  "col-xxl-4 col-xl-4 col-lg-4 col-md-6",
                                children: (0, a.jsxs)("div", {
                                  className: "course__item white-bg mb-30 fix",
                                  children: [
                                    (0, a.jsxs)("div", {
                                      className:
                                        "course__thumb w-img p-relative fix",
                                      children: [
                                        (0, a.jsx)(d.default, {
                                          href: "/course-details",
                                          children: (0, a.jsx)("a", {
                                            children: (0, a.jsx)("img", {
                                              src: "assets/img/course/course-6.jpg",
                                              alt: "img not found",
                                            }),
                                          }),
                                        }),
                                        (0, a.jsx)("div", {
                                          className: "course__tag",
                                          children: (0, a.jsx)(d.default, {
                                            href: "/course-details",
                                            children: (0, a.jsx)("a", {
                                              className: "pink",
                                              children: "UX Design",
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: "course__content",
                                      children: [
                                        (0, a.jsxs)("div", {
                                          className:
                                            "course__meta d-flex align-items-center justify-content-between",
                                          children: [
                                            (0, a.jsx)("div", {
                                              className: "course__lesson",
                                              children: (0, a.jsxs)("span", {
                                                children: [
                                                  (0, a.jsx)("i", {
                                                    className: "fas fa-book",
                                                  }),
                                                  "13 Lesson",
                                                ],
                                              }),
                                            }),
                                            (0, a.jsx)("div", {
                                              className: "course__rating",
                                              children: (0, a.jsxs)("span", {
                                                children: [
                                                  (0, a.jsx)("i", {
                                                    className: "fas fa-star",
                                                  }),
                                                  "4.5 (72)",
                                                ],
                                              }),
                                            }),
                                          ],
                                        }),
                                        (0, a.jsx)("h3", {
                                          className: "course__title",
                                          children: (0, a.jsx)(d.default, {
                                            href: "/course-details",
                                            children: (0, a.jsx)("a", {
                                              children:
                                                "Creative writing through Storytelling",
                                            }),
                                          }),
                                        }),
                                        (0, a.jsxs)("div", {
                                          className:
                                            "course__teacher d-flex align-items-center",
                                          children: [
                                            (0, a.jsx)("div", {
                                              className:
                                                "course__teacher-thumb mr-15",
                                              children: (0, a.jsx)("img", {
                                                src: "assets/img/course/teacher/teacher-6.jpg",
                                                alt: "img not found",
                                              }),
                                            }),
                                            (0, a.jsx)("h6", {
                                              children: (0, a.jsx)(d.default, {
                                                href: "/instructor-details",
                                                children: (0, a.jsx)("a", {
                                                  children: "Shahnewaz Sakil",
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      className:
                                        "course__more d-flex justify-content-between align-items-center",
                                      children: [
                                        (0, a.jsxs)("div", {
                                          className:
                                            "course__status d-flex align-items-center",
                                          children: [
                                            (0, a.jsx)("span", {
                                              className: "pink",
                                              children: "$46.00",
                                            }),
                                            (0, a.jsx)("span", {
                                              className: "old-price",
                                              children: "$72.00",
                                            }),
                                          ],
                                        }),
                                        (0, a.jsx)("div", {
                                          className: "course__btn",
                                          children: (0, a.jsx)(d.default, {
                                            href: "/course-details",
                                            children: (0, a.jsxs)("a", {
                                              className: "link-btn",
                                              children: [
                                                "Know Details",
                                                (0, a.jsx)("i", {
                                                  className:
                                                    "fas fa-arrow-right",
                                                }),
                                                (0, a.jsx)("i", {
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
                              (0, a.jsx)("div", {
                                className:
                                  "col-xxl-4 col-xl-4 col-lg-4 col-md-6",
                                children: (0, a.jsxs)("div", {
                                  className: "course__item white-bg mb-30 fix",
                                  children: [
                                    (0, a.jsxs)("div", {
                                      className:
                                        "course__thumb w-img p-relative fix",
                                      children: [
                                        (0, a.jsx)(d.default, {
                                          href: "/course-details",
                                          children: (0, a.jsx)("a", {
                                            children: (0, a.jsx)("img", {
                                              src: "assets/img/course/course-9.jpg",
                                              alt: "img not found",
                                            }),
                                          }),
                                        }),
                                        (0, a.jsx)("div", {
                                          className: "course__tag",
                                          children: (0, a.jsx)(d.default, {
                                            href: "/course-details",
                                            children: (0, a.jsx)("a", {
                                              className: "blue-2",
                                              children: "UX Design",
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: "course__content",
                                      children: [
                                        (0, a.jsxs)("div", {
                                          className:
                                            "course__meta d-flex align-items-center justify-content-between",
                                          children: [
                                            (0, a.jsx)("div", {
                                              className: "course__lesson",
                                              children: (0, a.jsxs)("span", {
                                                children: [
                                                  (0, a.jsx)("i", {
                                                    className: "fas fa-book",
                                                  }),
                                                  "25 Lesson",
                                                ],
                                              }),
                                            }),
                                            (0, a.jsx)("div", {
                                              className: "course__rating",
                                              children: (0, a.jsxs)("span", {
                                                children: [
                                                  (0, a.jsx)("i", {
                                                    className: "fas fa-star",
                                                  }),
                                                  "4.5 (35)",
                                                ],
                                              }),
                                            }),
                                          ],
                                        }),
                                        (0, a.jsx)("h3", {
                                          className: "course__title",
                                          children: (0, a.jsx)(d.default, {
                                            href: "/course-details",
                                            children: (0, a.jsx)("a", {
                                              children:
                                                "Creative writing through Storytelling",
                                            }),
                                          }),
                                        }),
                                        (0, a.jsxs)("div", {
                                          className:
                                            "course__teacher d-flex align-items-center",
                                          children: [
                                            (0, a.jsx)("div", {
                                              className:
                                                "course__teacher-thumb mr-15",
                                              children: (0, a.jsx)("img", {
                                                src: "assets/img/course/teacher/teacher-9.jpg",
                                                alt: "img not found",
                                              }),
                                            }),
                                            (0, a.jsx)("h6", {
                                              children: (0, a.jsx)(d.default, {
                                                href: "/instructor-details",
                                                children: (0, a.jsx)("a", {
                                                  children: "Hilary Ouse",
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      className:
                                        "course__more d-flex justify-content-between align-items-center",
                                      children: [
                                        (0, a.jsxs)("div", {
                                          className:
                                            "course__status d-flex align-items-center",
                                          children: [
                                            (0, a.jsx)("span", {
                                              className: "blue-2",
                                              children: "$46.00",
                                            }),
                                            (0, a.jsx)("span", {
                                              className: "old-price",
                                              children: "$72.00",
                                            }),
                                          ],
                                        }),
                                        (0, a.jsx)("div", {
                                          className: "course__btn",
                                          children: (0, a.jsx)(d.default, {
                                            href: "/course-details",
                                            children: (0, a.jsxs)("a", {
                                              className: "link-btn",
                                              children: [
                                                "Know Details",
                                                (0, a.jsx)("i", {
                                                  className:
                                                    "fas fa-arrow-right",
                                                }),
                                                (0, a.jsx)("i", {
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
                      ],
                    }),
                  }),
                }),
                (0, a.jsx)(t.Z, {}),
              ],
            }),
          }),
        });
      }
      var u = c(2035);
      function x(e, s) {
        if (!(e instanceof s))
          throw new TypeError("Cannot call a class as a function");
      }
      function m(e, s) {
        for (var c = 0; c < s.length; c++) {
          var a = s[c];
          (a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            "value" in a && (a.writable = !0),
            Object.defineProperty(e, a.key, a);
        }
      }
      function j(e) {
        return (j = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function f(e, s) {
        return !s || ("object" !== N(s) && "function" !== typeof s)
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
      var N = function (e) {
        return e && "undefined" !== typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      };
      function g(e) {
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
          var c,
            a = j(e);
          if (s) {
            var r = j(this).constructor;
            c = Reflect.construct(a, arguments, r);
          } else c = a.apply(this, arguments);
          return f(this, c);
        };
      }
      var v = (function (e) {
          !(function (e, s) {
            if ("function" !== typeof s && null !== s)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(s && s.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              s && _(e, s);
          })(n, e);
          var s,
            c,
            r,
            l = g(n);
          function n() {
            return x(this, n), l.apply(this, arguments);
          }
          return (
            (s = n),
            (c = [
              {
                key: "render",
                value: function () {
                  return (0, a.jsxs)("main", {
                    children: [
                      (0, a.jsx)(i.Z, {}),
                      (0, a.jsx)(h, {}),
                      (0, a.jsx)(u.Z, {}),
                    ],
                  });
                },
              },
            ]) && m(s.prototype, c),
            r && m(s, r),
            n
          );
        })(r.Component),
        p = c(6826),
        b = c(8462);
      function w(e, s) {
        for (var c = 0; c < s.length; c++) {
          var a = s[c];
          (a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            "value" in a && (a.writable = !0),
            Object.defineProperty(e, a.key, a);
        }
      }
      function y(e) {
        return (y = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function k(e, s) {
        return !s || ("object" !== P(s) && "function" !== typeof s)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : s;
      }
      function O(e, s) {
        return (O =
          Object.setPrototypeOf ||
          function (e, s) {
            return (e.__proto__ = s), e;
          })(e, s);
      }
      var P = function (e) {
        return e && "undefined" !== typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      };
      function S(e) {
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
          var c,
            a = y(e);
          if (s) {
            var r = y(this).constructor;
            c = Reflect.construct(a, arguments, r);
          } else c = a.apply(this, arguments);
          return k(this, c);
        };
      }
      var D = (function (e) {
        !(function (e, s) {
          if ("function" !== typeof s && null !== s)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(s && s.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            s && O(e, s);
        })(n, e);
        var s,
          c,
          i,
          l = S(n);
        function n(e) {
          return (
            (function (e, s) {
              if (!(e instanceof s))
                throw new TypeError("Cannot call a class as a function");
            })(this, n),
            l.call(this, e)
          );
        }
        return (
          (s = n),
          (i = [
            {
              key: "getInitialProps",
              value: function (e) {
                e.store;
              },
            },
          ]),
          (c = [
            {
              key: "render",
              value: function () {
                return (0, a.jsxs)(r.Fragment, {
                  children: [
                    (0, a.jsx)(b.Z, {}),
                    (0, a.jsx)(v, {}),
                    (0, a.jsx)(p.Z, {}),
                  ],
                });
              },
            },
          ]) && w(s.prototype, c),
          i && w(s, i),
          n
        );
      })(r.Component);
    },
  },
  function (e) {
    e.O(0, [774, 675, 282, 775, 403, 888, 179], function () {
      return (s = 7497), e((e.s = s));
      var s;
    });
    var s = e.O();
    _N_E = s;
  },
]);
