(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [999],
  {
    7769: function (e, s, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/instructor-details",
        function () {
          return a(1395);
        },
      ]);
    },
    1395: function (e, s, a) {
      "use strict";
      a.r(s),
        a.d(s, {
          default: function () {
            return y;
          },
        });
      var r = a(5893),
        c = a(7294),
        t = a(6826),
        i = a(1675),
        l = a(2035),
        n = a(1664);
      function o(e, s) {
        if (!(e instanceof s))
          throw new TypeError("Cannot call a class as a function");
      }
      function d(e, s) {
        for (var a = 0; a < s.length; a++) {
          var r = s[a];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function h(e) {
        return (h = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function u(e, s) {
        return !s || ("object" !== m(s) && "function" !== typeof s)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : s;
      }
      function f(e, s) {
        return (f =
          Object.setPrototypeOf ||
          function (e, s) {
            return (e.__proto__ = s), e;
          })(e, s);
      }
      var m = function (e) {
        return e && "undefined" !== typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      };
      function x(e) {
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
          var a,
            r = h(e);
          if (s) {
            var c = h(this).constructor;
            a = Reflect.construct(r, arguments, c);
          } else a = r.apply(this, arguments);
          return u(this, a);
        };
      }
      var j = (function (e) {
        !(function (e, s) {
          if ("function" !== typeof s && null !== s)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(s && s.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            s && f(e, s);
        })(i, e);
        var s,
          a,
          c,
          t = x(i);
        function i() {
          return o(this, i), t.apply(this, arguments);
        }
        return (
          (s = i),
          (a = [
            {
              key: "render",
              value: function () {
                return (0, r.jsxs)("main", {
                  children: [
                    (0, r.jsxs)("section", {
                      className: "teacher__area pt-100 pb-110",
                      children: [
                        (0, r.jsxs)("div", {
                          className: "page__title-shape",
                          children: [
                            (0, r.jsx)("img", {
                              className: "page-title-shape-5 d-none d-sm-block",
                              src: "assets/img/page-title/page-title-shape-1.png",
                              alt: "img not found",
                            }),
                            (0, r.jsx)("img", {
                              className: "page-title-shape-6",
                              src: "assets/img/page-title/page-title-shape-6.png",
                              alt: "img not found",
                            }),
                            (0, r.jsx)("img", {
                              className: "page-title-shape-3",
                              src: "assets/img/page-title/page-title-shape-3.png",
                              alt: "img not found",
                            }),
                            (0, r.jsx)("img", {
                              className: "page-title-shape-7",
                              src: "assets/img/page-title/page-title-shape-4.png",
                              alt: "img not found",
                            }),
                          ],
                        }),
                        (0, r.jsx)("div", {
                          className: "container",
                          children: (0, r.jsxs)("div", {
                            className: "row",
                            children: [
                              (0, r.jsx)("div", {
                                className:
                                  "col-xxl-4 col-xl-4 col-lg-4 col-md-6",
                                children: (0, r.jsxs)("div", {
                                  className:
                                    "teacher__details-thumb p-relative w-img pr-30",
                                  children: [
                                    (0, r.jsx)("img", {
                                      src: "assets/img/teacher/details/teacer-details-1.jpg",
                                      alt: "img not found",
                                    }),
                                    (0, r.jsxs)("div", {
                                      className: "teacher__details-shape",
                                      children: [
                                        (0, r.jsx)("img", {
                                          className: "teacher-details-shape-1",
                                          src: "assets/img/teacher/details/shape/shape-1.png",
                                          alt: "img not found",
                                        }),
                                        (0, r.jsx)("img", {
                                          className: "teacher-details-shape-2",
                                          src: "assets/img/teacher/details/shape/shape-2.png",
                                          alt: "img not found",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              (0, r.jsx)("div", {
                                className: "col-xxl-8 col-xl-8 col-lg-8",
                                children: (0, r.jsxs)("div", {
                                  className: "teacher__wrapper",
                                  children: [
                                    (0, r.jsxs)("div", {
                                      className:
                                        "teacher__top d-md-flex align-items-end justify-content-between",
                                      children: [
                                        (0, r.jsxs)("div", {
                                          className: "teacher__info",
                                          children: [
                                            (0, r.jsx)("h4", {
                                              children: "Hilary Ouse",
                                            }),
                                            (0, r.jsx)("span", {
                                              children:
                                                "Teaches Interior Markater",
                                            }),
                                          ],
                                        }),
                                        (0, r.jsxs)("div", {
                                          className: "teacher__rating",
                                          children: [
                                            (0, r.jsx)("h5", {
                                              children: "Review:",
                                            }),
                                            (0, r.jsxs)("div", {
                                              className:
                                                "teacher__rating-inner d-flex align-items-center",
                                              children: [
                                                (0, r.jsxs)("ul", {
                                                  children: [
                                                    (0, r.jsx)("li", {
                                                      children: (0, r.jsxs)(
                                                        "a",
                                                        {
                                                          href: "#",
                                                          children: [
                                                            " ",
                                                            (0, r.jsx)("i", {
                                                              className:
                                                                "fas fa-star",
                                                            }),
                                                            " ",
                                                          ],
                                                        }
                                                      ),
                                                    }),
                                                    (0, r.jsx)("li", {
                                                      children: (0, r.jsxs)(
                                                        "a",
                                                        {
                                                          href: "#",
                                                          children: [
                                                            " ",
                                                            (0, r.jsx)("i", {
                                                              className:
                                                                "fas fa-star",
                                                            }),
                                                            " ",
                                                          ],
                                                        }
                                                      ),
                                                    }),
                                                    (0, r.jsx)("li", {
                                                      children: (0, r.jsxs)(
                                                        "a",
                                                        {
                                                          href: "#",
                                                          children: [
                                                            " ",
                                                            (0, r.jsx)("i", {
                                                              className:
                                                                "fas fa-star",
                                                            }),
                                                            " ",
                                                          ],
                                                        }
                                                      ),
                                                    }),
                                                    (0, r.jsx)("li", {
                                                      children: (0, r.jsxs)(
                                                        "a",
                                                        {
                                                          href: "#",
                                                          children: [
                                                            " ",
                                                            (0, r.jsx)("i", {
                                                              className:
                                                                "fas fa-star",
                                                            }),
                                                            " ",
                                                          ],
                                                        }
                                                      ),
                                                    }),
                                                    (0, r.jsx)("li", {
                                                      children: (0, r.jsxs)(
                                                        "a",
                                                        {
                                                          href: "#",
                                                          children: [
                                                            " ",
                                                            (0, r.jsx)("i", {
                                                              className:
                                                                "fas fa-star",
                                                            }),
                                                            " ",
                                                          ],
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                                (0, r.jsx)("p", {
                                                  children: "4.5",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, r.jsxs)("div", {
                                          className: "teacher__social-2",
                                          children: [
                                            (0, r.jsx)("h4", {
                                              children: "Follow Us:",
                                            }),
                                            (0, r.jsxs)("ul", {
                                              children: [
                                                (0, r.jsx)("li", {
                                                  children: (0, r.jsx)("a", {
                                                    href: "#",
                                                    children: (0, r.jsx)("i", {
                                                      className:
                                                        "fab fa-facebook-f",
                                                    }),
                                                  }),
                                                }),
                                                (0, r.jsx)("li", {
                                                  children: (0, r.jsx)("a", {
                                                    href: "#",
                                                    children: (0, r.jsx)("i", {
                                                      className:
                                                        "fab fa-twitter",
                                                    }),
                                                  }),
                                                }),
                                                (0, r.jsx)("li", {
                                                  children: (0, r.jsx)("a", {
                                                    href: "#",
                                                    children: (0, r.jsx)("i", {
                                                      className:
                                                        "fab fa-vimeo-v",
                                                    }),
                                                  }),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, r.jsx)("div", {
                                          className: "teacher__follow mb-5",
                                          children: (0, r.jsxs)("a", {
                                            href: "#",
                                            className: "teacher__follow-btn",
                                            children: [
                                              "follow ",
                                              (0, r.jsx)("i", {
                                                className: "fas fa-plus",
                                              }),
                                              " ",
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, r.jsxs)("div", {
                                      className: "teacher__bio",
                                      children: [
                                        (0, r.jsx)("h3", {
                                          children: "Short Bio",
                                        }),
                                        (0, r.jsx)("p", {
                                          children:
                                            "Only a quid me old mucker squiffy tomfoolery grub cheers ruddy cor blimey guvnor in my flat, up the duff Eaton car boot up the kyver pardon you A bit of how's your father David skive off sloshed, don't get shirty with me chip shop vagabond crikey bugger Queen's English chap. Matie boy nancy boy bite your arm off up the kyver old no biggie fantastic boot, David have it show off show off pick your nose and blow off lost the plot porkies bits and bobs only a quid bugger all mate, absolutely bladdered bamboozled it's your round don't get shirty with me down the pub well.",
                                        }),
                                      ],
                                    }),
                                    (0, r.jsxs)("div", {
                                      className: "teacher__courses pt-55",
                                      children: [
                                        (0, r.jsx)("div", {
                                          className:
                                            "section__title-wrapper mb-30",
                                          children: (0, r.jsxs)("h2", {
                                            className: "section__title",
                                            children: [
                                              "Teacher ",
                                              (0, r.jsxs)("span", {
                                                className:
                                                  "yellow-bg yellow-bg-big",
                                                children: [
                                                  "Course",
                                                  (0, r.jsx)("img", {
                                                    src: "assets/img/shape/yellow-bg.png",
                                                    alt: "img not found",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, r.jsx)("div", {
                                          className: "teacher__course-wrapper",
                                          children: (0, r.jsxs)("div", {
                                            className: "row",
                                            children: [
                                              (0, r.jsx)("div", {
                                                className:
                                                  "col-xxl-6 col-xl-6 col-lg-6 col-md-6",
                                                children: (0, r.jsxs)("div", {
                                                  className:
                                                    "course__item white-bg mb-30 fix",
                                                  children: [
                                                    (0, r.jsxs)("div", {
                                                      className:
                                                        "course__thumb w-img p-relative fix",
                                                      children: [
                                                        (0, r.jsx)(n.default, {
                                                          href: "/course-details",
                                                          children: (0, r.jsx)(
                                                            "a",
                                                            {
                                                              children: (0,
                                                              r.jsx)("img", {
                                                                src: "assets/img/course/course-1.jpg",
                                                                alt: "img not found",
                                                              }),
                                                            }
                                                          ),
                                                        }),
                                                        (0, r.jsx)("div", {
                                                          className:
                                                            "course__tag",
                                                          children: (0, r.jsx)(
                                                            n.default,
                                                            {
                                                              href: "/course-details",
                                                              children: (0,
                                                              r.jsx)("a", {
                                                                children:
                                                                  "Art & Design",
                                                              }),
                                                            }
                                                          ),
                                                        }),
                                                      ],
                                                    }),
                                                    (0, r.jsxs)("div", {
                                                      className:
                                                        "course__content",
                                                      children: [
                                                        (0, r.jsxs)("div", {
                                                          className:
                                                            "course__meta d-flex align-items-center justify-content-between",
                                                          children: [
                                                            (0, r.jsx)("div", {
                                                              className:
                                                                "course__lesson",
                                                              children: (0,
                                                              r.jsxs)("span", {
                                                                children: [
                                                                  (0, r.jsx)(
                                                                    "i",
                                                                    {
                                                                      className:
                                                                        "fas fa-book",
                                                                    }
                                                                  ),
                                                                  "43 Lesson",
                                                                ],
                                                              }),
                                                            }),
                                                            (0, r.jsx)("div", {
                                                              className:
                                                                "course__rating",
                                                              children: (0,
                                                              r.jsxs)("span", {
                                                                children: [
                                                                  (0, r.jsx)(
                                                                    "i",
                                                                    {
                                                                      className:
                                                                        "fas fa-star",
                                                                    }
                                                                  ),
                                                                  "4.5 (44)",
                                                                ],
                                                              }),
                                                            }),
                                                          ],
                                                        }),
                                                        (0, r.jsx)("h3", {
                                                          className:
                                                            "course__title",
                                                          children: (0, r.jsx)(
                                                            n.default,
                                                            {
                                                              href: "/course-details",
                                                              children: (0,
                                                              r.jsx)("a", {
                                                                children:
                                                                  "Become a product Manager learn the skills & job.",
                                                              }),
                                                            }
                                                          ),
                                                        }),
                                                        (0, r.jsxs)("div", {
                                                          className:
                                                            "course__teacher d-flex align-items-center",
                                                          children: [
                                                            (0, r.jsx)("div", {
                                                              className:
                                                                "course__teacher-thumb mr-15",
                                                              children: (0,
                                                              r.jsx)("img", {
                                                                src: "assets/img/course/teacher/teacher-1.jpg",
                                                                alt: "img not found",
                                                              }),
                                                            }),
                                                            (0, r.jsx)("h6", {
                                                              children: (0,
                                                              r.jsx)(
                                                                n.default,
                                                                {
                                                                  href: "/course-details",
                                                                  children: (0,
                                                                  r.jsx)("a", {
                                                                    children:
                                                                      "Jim S\xe9chen",
                                                                  }),
                                                                }
                                                              ),
                                                            }),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                    (0, r.jsxs)("div", {
                                                      className:
                                                        "course__more d-flex justify-content-between align-items-center",
                                                      children: [
                                                        (0, r.jsx)("div", {
                                                          className:
                                                            "course__status",
                                                          children: (0, r.jsx)(
                                                            "span",
                                                            { children: "Free" }
                                                          ),
                                                        }),
                                                        (0, r.jsx)("div", {
                                                          className:
                                                            "course__btn",
                                                          children: (0, r.jsx)(
                                                            n.default,
                                                            {
                                                              href: "/course-details",
                                                              children: (0,
                                                              r.jsxs)("a", {
                                                                className:
                                                                  "link-btn",
                                                                children: [
                                                                  "Know Details",
                                                                  (0, r.jsx)(
                                                                    "i",
                                                                    {
                                                                      className:
                                                                        "fas fa-arrow-right",
                                                                    }
                                                                  ),
                                                                  (0, r.jsx)(
                                                                    "i",
                                                                    {
                                                                      className:
                                                                        "fas fa-arrow-right",
                                                                    }
                                                                  ),
                                                                ],
                                                              }),
                                                            }
                                                          ),
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                              }),
                                              (0, r.jsx)("div", {
                                                className:
                                                  "col-xxl-6 col-xl-6 col-lg-6 col-md-6",
                                                children: (0, r.jsxs)("div", {
                                                  className:
                                                    "course__item white-bg mb-30 fix",
                                                  children: [
                                                    (0, r.jsxs)("div", {
                                                      className:
                                                        "course__thumb w-img p-relative fix",
                                                      children: [
                                                        (0, r.jsx)(n.default, {
                                                          href: "/course-details",
                                                          children: (0, r.jsx)(
                                                            "a",
                                                            {
                                                              children: (0,
                                                              r.jsx)("img", {
                                                                src: "assets/img/course/course-2.jpg",
                                                                alt: "img not found",
                                                              }),
                                                            }
                                                          ),
                                                        }),
                                                        (0, r.jsx)("div", {
                                                          className:
                                                            "course__tag",
                                                          children: (0, r.jsx)(
                                                            n.default,
                                                            {
                                                              href: "/course-details",
                                                              children: (0,
                                                              r.jsx)("a", {
                                                                className:
                                                                  "sky-blue",
                                                                children:
                                                                  "Mechanical",
                                                              }),
                                                            }
                                                          ),
                                                        }),
                                                      ],
                                                    }),
                                                    (0, r.jsxs)("div", {
                                                      className:
                                                        "course__content",
                                                      children: [
                                                        (0, r.jsxs)("div", {
                                                          className:
                                                            "course__meta d-flex align-items-center justify-content-between",
                                                          children: [
                                                            (0, r.jsx)("div", {
                                                              className:
                                                                "course__lesson",
                                                              children: (0,
                                                              r.jsxs)("span", {
                                                                children: [
                                                                  (0, r.jsx)(
                                                                    "i",
                                                                    {
                                                                      className:
                                                                        "fas fa-book",
                                                                    }
                                                                  ),
                                                                  "72 Lesson",
                                                                ],
                                                              }),
                                                            }),
                                                            (0, r.jsx)("div", {
                                                              className:
                                                                "course__rating",
                                                              children: (0,
                                                              r.jsxs)("span", {
                                                                children: [
                                                                  (0, r.jsx)(
                                                                    "i",
                                                                    {
                                                                      className:
                                                                        "fas fa-star",
                                                                    }
                                                                  ),
                                                                  "4.5 (44)",
                                                                ],
                                                              }),
                                                            }),
                                                          ],
                                                        }),
                                                        (0, r.jsx)("h3", {
                                                          className:
                                                            "course__title",
                                                          children: (0, r.jsx)(
                                                            n.default,
                                                            {
                                                              href: "/course-details",
                                                              children: (0,
                                                              r.jsx)("a", {
                                                                children:
                                                                  "Fundamentals of music theory Learn new",
                                                              }),
                                                            }
                                                          ),
                                                        }),
                                                        (0, r.jsxs)("div", {
                                                          className:
                                                            "course__teacher d-flex align-items-center",
                                                          children: [
                                                            (0, r.jsx)("div", {
                                                              className:
                                                                "course__teacher-thumb mr-15",
                                                              children: (0,
                                                              r.jsx)("img", {
                                                                src: "assets/img/course/teacher/teacher-2.jpg",
                                                                alt: "img not found",
                                                              }),
                                                            }),
                                                            (0, r.jsx)("h6", {
                                                              children: (0,
                                                              r.jsx)(
                                                                n.default,
                                                                {
                                                                  href: "/course-details",
                                                                  children: (0,
                                                                  r.jsx)("a", {
                                                                    children:
                                                                      "Barry Tone",
                                                                  }),
                                                                }
                                                              ),
                                                            }),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                    (0, r.jsxs)("div", {
                                                      className:
                                                        "course__more d-flex justify-content-between align-items-center",
                                                      children: [
                                                        (0, r.jsxs)("div", {
                                                          className:
                                                            "course__status d-flex align-items-center",
                                                          children: [
                                                            (0, r.jsx)("span", {
                                                              className:
                                                                "sky-blue",
                                                              children:
                                                                "$32.00",
                                                            }),
                                                            (0, r.jsx)("span", {
                                                              className:
                                                                "old-price",
                                                              children:
                                                                "$68.00",
                                                            }),
                                                          ],
                                                        }),
                                                        (0, r.jsx)("div", {
                                                          className:
                                                            "course__btn",
                                                          children: (0, r.jsx)(
                                                            n.default,
                                                            {
                                                              href: "/course-details",
                                                              children: (0,
                                                              r.jsxs)("a", {
                                                                className:
                                                                  "link-btn",
                                                                children: [
                                                                  "Know Details",
                                                                  (0, r.jsx)(
                                                                    "i",
                                                                    {
                                                                      className:
                                                                        "fas fa-arrow-right",
                                                                    }
                                                                  ),
                                                                  (0, r.jsx)(
                                                                    "i",
                                                                    {
                                                                      className:
                                                                        "fas fa-arrow-right",
                                                                    }
                                                                  ),
                                                                ],
                                                              }),
                                                            }
                                                          ),
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                              }),
                                              (0, r.jsx)("div", {
                                                className:
                                                  "col-xxl-6 col-xl-6 col-lg-6 col-md-6",
                                                children: (0, r.jsxs)("div", {
                                                  className:
                                                    "course__item white-bg mb-30 fix",
                                                  children: [
                                                    (0, r.jsxs)("div", {
                                                      className:
                                                        "course__thumb w-img p-relative fix",
                                                      children: [
                                                        (0, r.jsx)(n.default, {
                                                          href: "/course-details",
                                                          children: (0, r.jsx)(
                                                            "a",
                                                            {
                                                              children: (0,
                                                              r.jsx)("img", {
                                                                src: "assets/img/course/course-3.jpg",
                                                                alt: "img not found",
                                                              }),
                                                            }
                                                          ),
                                                        }),
                                                        (0, r.jsx)("div", {
                                                          className:
                                                            "course__tag",
                                                          children: (0, r.jsx)(
                                                            n.default,
                                                            {
                                                              href: "/course-details",
                                                              children: (0,
                                                              r.jsx)("a", {
                                                                className:
                                                                  "green",
                                                                children:
                                                                  "Development",
                                                              }),
                                                            }
                                                          ),
                                                        }),
                                                      ],
                                                    }),
                                                    (0, r.jsxs)("div", {
                                                      className:
                                                        "course__content",
                                                      children: [
                                                        (0, r.jsxs)("div", {
                                                          className:
                                                            "course__meta d-flex align-items-center justify-content-between",
                                                          children: [
                                                            (0, r.jsx)("div", {
                                                              className:
                                                                "course__lesson",
                                                              children: (0,
                                                              r.jsxs)("span", {
                                                                children: [
                                                                  (0, r.jsx)(
                                                                    "i",
                                                                    {
                                                                      className:
                                                                        "fas fa-book",
                                                                    }
                                                                  ),
                                                                  "14 Lesson",
                                                                ],
                                                              }),
                                                            }),
                                                            (0, r.jsx)("div", {
                                                              className:
                                                                "course__rating",
                                                              children: (0,
                                                              r.jsxs)("span", {
                                                                children: [
                                                                  (0, r.jsx)(
                                                                    "i",
                                                                    {
                                                                      className:
                                                                        "fas fa-star",
                                                                    }
                                                                  ),
                                                                  "3.5 (55)",
                                                                ],
                                                              }),
                                                            }),
                                                          ],
                                                        }),
                                                        (0, r.jsx)("h3", {
                                                          className:
                                                            "course__title",
                                                          children: (0, r.jsx)(
                                                            n.default,
                                                            {
                                                              href: "/course-details",
                                                              children: (0,
                                                              r.jsx)("a", {
                                                                children:
                                                                  "Strategy law and organization Foundation",
                                                              }),
                                                            }
                                                          ),
                                                        }),
                                                        (0, r.jsxs)("div", {
                                                          className:
                                                            "course__teacher d-flex align-items-center",
                                                          children: [
                                                            (0, r.jsx)("div", {
                                                              className:
                                                                "course__teacher-thumb mr-15",
                                                              children: (0,
                                                              r.jsx)("img", {
                                                                src: "assets/img/course/teacher/teacher-3.jpg",
                                                                alt: "img not found",
                                                              }),
                                                            }),
                                                            (0, r.jsx)("h6", {
                                                              children: (0,
                                                              r.jsx)(
                                                                n.default,
                                                                {
                                                                  href: "/course-details",
                                                                  children: (0,
                                                                  r.jsx)("a", {
                                                                    children:
                                                                      "Elon Gated",
                                                                  }),
                                                                }
                                                              ),
                                                            }),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                    (0, r.jsxs)("div", {
                                                      className:
                                                        "course__more d-flex justify-content-between align-items-center",
                                                      children: [
                                                        (0, r.jsxs)("div", {
                                                          className:
                                                            "course__status d-flex align-items-center",
                                                          children: [
                                                            (0, r.jsx)("span", {
                                                              className:
                                                                "green",
                                                              children:
                                                                "$46.00",
                                                            }),
                                                            (0, r.jsx)("span", {
                                                              className:
                                                                "old-price",
                                                              children:
                                                                "$68.00",
                                                            }),
                                                          ],
                                                        }),
                                                        (0, r.jsx)("div", {
                                                          className:
                                                            "course__btn",
                                                          children: (0, r.jsx)(
                                                            n.default,
                                                            {
                                                              href: "/course-details",
                                                              children: (0,
                                                              r.jsxs)("a", {
                                                                className:
                                                                  "link-btn",
                                                                children: [
                                                                  "Know Details",
                                                                  (0, r.jsx)(
                                                                    "i",
                                                                    {
                                                                      className:
                                                                        "fas fa-arrow-right",
                                                                    }
                                                                  ),
                                                                  (0, r.jsx)(
                                                                    "i",
                                                                    {
                                                                      className:
                                                                        "fas fa-arrow-right",
                                                                    }
                                                                  ),
                                                                ],
                                                              }),
                                                            }
                                                          ),
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                              }),
                                              (0, r.jsx)("div", {
                                                className:
                                                  "col-xxl-6 col-xl-6 col-lg-6 col-md-6",
                                                children: (0, r.jsxs)("div", {
                                                  className:
                                                    "course__item white-bg mb-30 fix",
                                                  children: [
                                                    (0, r.jsxs)("div", {
                                                      className:
                                                        "course__thumb w-img p-relative fix",
                                                      children: [
                                                        (0, r.jsx)(n.default, {
                                                          href: "/course-details",
                                                          children: (0, r.jsx)(
                                                            "a",
                                                            {
                                                              children: (0,
                                                              r.jsx)("img", {
                                                                src: "assets/img/course/course-4.jpg",
                                                                alt: "img not found",
                                                              }),
                                                            }
                                                          ),
                                                        }),
                                                        (0, r.jsx)("div", {
                                                          className:
                                                            "course__tag",
                                                          children: (0, r.jsx)(
                                                            n.default,
                                                            {
                                                              href: "/course-details",
                                                              children: (0,
                                                              r.jsx)("a", {
                                                                className:
                                                                  "blue",
                                                                children:
                                                                  "Marketing",
                                                              }),
                                                            }
                                                          ),
                                                        }),
                                                      ],
                                                    }),
                                                    (0, r.jsxs)("div", {
                                                      className:
                                                        "course__content",
                                                      children: [
                                                        (0, r.jsxs)("div", {
                                                          className:
                                                            "course__meta d-flex align-items-center justify-content-between",
                                                          children: [
                                                            (0, r.jsx)("div", {
                                                              className:
                                                                "course__lesson",
                                                              children: (0,
                                                              r.jsxs)("span", {
                                                                children: [
                                                                  (0, r.jsx)(
                                                                    "i",
                                                                    {
                                                                      className:
                                                                        "fas fa-book",
                                                                    }
                                                                  ),
                                                                  "22 Lesson",
                                                                ],
                                                              }),
                                                            }),
                                                            (0, r.jsx)("div", {
                                                              className:
                                                                "course__rating",
                                                              children: (0,
                                                              r.jsxs)("span", {
                                                                children: [
                                                                  (0, r.jsx)(
                                                                    "i",
                                                                    {
                                                                      className:
                                                                        "fas fa-star",
                                                                    }
                                                                  ),
                                                                  "4.5 (42)",
                                                                ],
                                                              }),
                                                            }),
                                                          ],
                                                        }),
                                                        (0, r.jsx)("h3", {
                                                          className:
                                                            "course__title",
                                                          children: (0, r.jsx)(
                                                            n.default,
                                                            {
                                                              href: "/course-details",
                                                              children: (0,
                                                              r.jsx)("a", {
                                                                children:
                                                                  "The business Intelligence analyst Course 2022",
                                                              }),
                                                            }
                                                          ),
                                                        }),
                                                        (0, r.jsxs)("div", {
                                                          className:
                                                            "course__teacher d-flex align-items-center",
                                                          children: [
                                                            (0, r.jsx)("div", {
                                                              className:
                                                                "course__teacher-thumb mr-15",
                                                              children: (0,
                                                              r.jsx)("img", {
                                                                src: "assets/img/course/teacher/teacher-4.jpg",
                                                                alt: "img not found",
                                                              }),
                                                            }),
                                                            (0, r.jsx)("h6", {
                                                              children: (0,
                                                              r.jsx)(
                                                                n.default,
                                                                {
                                                                  href: "/course-details",
                                                                  children: (0,
                                                                  r.jsx)("a", {
                                                                    children:
                                                                      "Eleanor Fant",
                                                                  }),
                                                                }
                                                              ),
                                                            }),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                    (0, r.jsxs)("div", {
                                                      className:
                                                        "course__more d-flex justify-content-between align-items-center",
                                                      children: [
                                                        (0, r.jsxs)("div", {
                                                          className:
                                                            "course__status d-flex align-items-center",
                                                          children: [
                                                            (0, r.jsx)("span", {
                                                              className: "blue",
                                                              children:
                                                                "$62.00",
                                                            }),
                                                            (0, r.jsx)("span", {
                                                              className:
                                                                "old-price",
                                                              children:
                                                                "$97.00",
                                                            }),
                                                          ],
                                                        }),
                                                        (0, r.jsx)("div", {
                                                          className:
                                                            "course__btn",
                                                          children: (0, r.jsx)(
                                                            n.default,
                                                            {
                                                              href: "/course-details",
                                                              children: (0,
                                                              r.jsxs)("a", {
                                                                className:
                                                                  "link-btn",
                                                                children: [
                                                                  "Know Details",
                                                                  (0, r.jsx)(
                                                                    "i",
                                                                    {
                                                                      className:
                                                                        "fas fa-arrow-right",
                                                                    }
                                                                  ),
                                                                  (0, r.jsx)(
                                                                    "i",
                                                                    {
                                                                      className:
                                                                        "fas fa-arrow-right",
                                                                    }
                                                                  ),
                                                                ],
                                                              }),
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
                    (0, r.jsx)(l.Z, {}),
                  ],
                });
              },
            },
          ]) && d(s.prototype, a),
          c && d(s, c),
          i
        );
      })(c.Component);
      function _(e, s) {
        for (var a = 0; a < s.length; a++) {
          var r = s[a];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function g(e) {
        return (g = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function p(e, s) {
        return !s || ("object" !== b(s) && "function" !== typeof s)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : s;
      }
      function N(e, s) {
        return (N =
          Object.setPrototypeOf ||
          function (e, s) {
            return (e.__proto__ = s), e;
          })(e, s);
      }
      var b = function (e) {
        return e && "undefined" !== typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      };
      function v(e) {
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
          var a,
            r = g(e);
          if (s) {
            var c = g(this).constructor;
            a = Reflect.construct(r, arguments, c);
          } else a = r.apply(this, arguments);
          return p(this, a);
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
            s && N(e, s);
        })(o, e);
        var s,
          a,
          l,
          n = v(o);
        function o(e) {
          return (
            (function (e, s) {
              if (!(e instanceof s))
                throw new TypeError("Cannot call a class as a function");
            })(this, o),
            n.call(this, e)
          );
        }
        return (
          (s = o),
          (l = [
            {
              key: "getInitialProps",
              value: function (e) {
                e.store;
              },
            },
          ]),
          (a = [
            {
              key: "render",
              value: function () {
                return (0, r.jsxs)(c.Fragment, {
                  children: [
                    (0, r.jsx)(i.Z, {}),
                    (0, r.jsx)(j, {}),
                    (0, r.jsx)(t.Z, {}),
                  ],
                });
              },
            },
          ]) && _(s.prototype, a),
          l && _(s, l),
          o
        );
      })(c.Component);
    },
  },
  function (e) {
    e.O(0, [675, 920, 403, 774, 888, 179], function () {
      return (s = 7769), e((e.s = s));
      var s;
    });
    var s = e.O();
    _N_E = s;
  },
]);
