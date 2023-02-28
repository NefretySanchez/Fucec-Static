"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [920],
  {
    1675: function (e, s, l) {
      var c = l(5893),
        i = l(7294),
        d = l(1664),
        r = l(1163),
        a = l(6414),
        n = l(9008);
      l(5675);
      s.Z = function () {
        var e = (0, i.useState)(!1),
          s = e[0],
          l = e[1],
          h = (0, r.useRouter)(),
          t = (0, i.useState)(""),
          x = (t[0], t[1]);
        (0, i.useEffect)(
          function () {
            x(h.pathname);
          },
          [h]
        ),
          (0, i.useEffect)(function () {
            return (
              window.addEventListener("scroll", j),
              function () {
                window.removeEventListener("scroll", j);
              }
            );
          });
        var j = function (e) {
          var s = document.querySelector(".header__area");
          window.scrollY >= 1
            ? s.classList.add("sticky")
            : s.classList.remove("sticky");
        };
        return (0, c.jsxs)(i.Fragment, {
          children: [
            (0, c.jsxs)(n.default, {
              children: [
                (0, c.jsx)("title", {
                  children:
                    "Educal \u2013 Online Course and Education React, Nextjs Template",
                }),
                (0, c.jsx)("link", {
                  href: "https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&display=swap",
                  rel: "stylesheet",
                }),
              ],
            }),
            (0, c.jsxs)("header", {
              children: [
                (0, c.jsx)("div", {
                  id: "header-sticky",
                  className: "header__area header__padding-2 header__shadow",
                  children: (0, c.jsx)("div", {
                    className: "container",
                    children: (0, c.jsxs)("div", {
                      className: "row align-items-center",
                      children: [
                        (0, c.jsx)("div", {
                          className:
                            "col-xxl-3 col-xl-3 col-lg-4 col-md-2 col-sm-4 col-6",
                          children: (0, c.jsxs)("div", {
                            className: "header__left d-flex",
                            children: [
                              (0, c.jsx)("div", {
                                className: "logo",
                                children: (0, c.jsx)(d.default, {
                                  href: "/",
                                  children: (0, c.jsx)("a", {
                                    children: (0, c.jsx)("img", {
                                      src: "assets/img/logo/logo.png",
                                      alt: "logo",
                                    }),
                                  }),
                                }),
                              }),
                              (0, c.jsx)("div", {
                                className: "header__category d-none d-lg-block",
                                children: (0, c.jsx)("nav", {
                                  children: (0, c.jsx)("ul", {
                                    children: (0, c.jsxs)("li", {
                                      children: [
                                        (0, c.jsx)(d.default, {
                                          href: "/course-grid",
                                          children: (0, c.jsxs)("a", {
                                            className:
                                              "cat-menu d-flex align-items-center",
                                            children: [
                                              (0, c.jsx)("div", {
                                                className:
                                                  "cat-dot-icon d-inline-block",
                                                children: (0, c.jsx)("svg", {
                                                  viewBox: "0 0 276.2 276.2",
                                                  children: (0, c.jsx)("g", {
                                                    children: (0, c.jsxs)("g", {
                                                      children: [
                                                        (0, c.jsx)("path", {
                                                          className: "cat-dot",
                                                          d: "M33.1,2.5C15.3,2.5,0.9,17,0.9,34.8s14.5,32.3,32.3,32.3s32.3-14.5,32.3-32.3S51,2.5,33.1,2.5z",
                                                        }),
                                                        (0, c.jsx)("path", {
                                                          className: "cat-dot",
                                                          d: "M137.7,2.5c-17.8,0-32.3,14.5-32.3,32.3s14.5,32.3,32.3,32.3c17.8,0,32.3-14.5,32.3-32.3S155.5,2.5,137.7,2.5 z",
                                                        }),
                                                        (0, c.jsx)("path", {
                                                          className: "cat-dot",
                                                          d: "M243.9,67.1c17.8,0,32.3-14.5,32.3-32.3S261.7,2.5,243.9,2.5S211.6,17,211.6,34.8S226.1,67.1,243.9,67.1z",
                                                        }),
                                                        (0, c.jsx)("path", {
                                                          className: "cat-dot",
                                                          d: "M32.3,170.5c17.8,0,32.3-14.5,32.3-32.3c0-17.8-14.5-32.3-32.3-32.3S0,120.4,0,138.2S14.5,170.5,32.3,170.5z",
                                                        }),
                                                        (0, c.jsx)("path", {
                                                          className: "cat-dot",
                                                          d: "M136.8,170.5c17.8,0,32.3-14.5,32.3-32.3c0-17.8-14.5-32.3-32.3-32.3c-17.8,0-32.3,14.5-32.3,32.3 C104.5,156.1,119,170.5,136.8,170.5z",
                                                        }),
                                                        (0, c.jsx)("path", {
                                                          className: "cat-dot",
                                                          d: "M243,170.5c17.8,0,32.3-14.5,32.3-32.3c0-17.8-14.5-32.3-32.3-32.3s-32.3,14.5-32.3,32.3 C210.7,156.1,225.2,170.5,243,170.5z",
                                                        }),
                                                        (0, c.jsx)("path", {
                                                          className: "cat-dot",
                                                          d: "M33,209.1c-17.8,0-32.3,14.5-32.3,32.3c0,17.8,14.5,32.3,32.3,32.3s32.3-14.5,32.3-32.3S50.8,209.1,33,209.1z ",
                                                        }),
                                                        (0, c.jsx)("path", {
                                                          className: "cat-dot",
                                                          d: "M137.6,209.1c-17.8,0-32.3,14.5-32.3,32.3c0,17.8,14.5,32.3,32.3,32.3c17.8,0,32.3-14.5,32.3-32.3 S155.4,209.1,137.6,209.1z",
                                                        }),
                                                        (0, c.jsx)("path", {
                                                          className: "cat-dot",
                                                          d: "M243.8,209.1c-17.8,0-32.3,14.5-32.3,32.3c0,17.8,14.5,32.3,32.3,32.3c17.8,0,32.3-14.5,32.3-32.3 S261.6,209.1,243.8,209.1z",
                                                        }),
                                                      ],
                                                    }),
                                                  }),
                                                }),
                                              }),
                                              (0, c.jsx)("span", {
                                                children: "Category",
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, c.jsxs)("ul", {
                                          className: "cat-submenu",
                                          children: [
                                            (0, c.jsx)("li", {
                                              children: (0, c.jsx)(d.default, {
                                                href: "/course-grid",
                                                children: (0, c.jsx)("a", {
                                                  children: "English Learning",
                                                }),
                                              }),
                                            }),
                                            (0, c.jsx)("li", {
                                              children: (0, c.jsx)(d.default, {
                                                href: "/course-grid",
                                                children: (0, c.jsx)("a", {
                                                  children: "Web Development",
                                                }),
                                              }),
                                            }),
                                            (0, c.jsx)("li", {
                                              children: (0, c.jsx)(d.default, {
                                                href: "/course-grid",
                                                children: (0, c.jsx)("a", {
                                                  children: "Logo Design",
                                                }),
                                              }),
                                            }),
                                            (0, c.jsx)("li", {
                                              children: (0, c.jsx)(d.default, {
                                                href: "/course-grid",
                                                children: (0, c.jsx)("a", {
                                                  children: "Motion Graphics",
                                                }),
                                              }),
                                            }),
                                            (0, c.jsx)("li", {
                                              children: (0, c.jsx)(d.default, {
                                                href: "/course-grid",
                                                children: (0, c.jsx)("a", {
                                                  children: "Video Edition",
                                                }),
                                              }),
                                            }),
                                          ],
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
                          className:
                            "col-xxl-9 col-xl-9 col-lg-8 col-md-10 col-sm-8 col-6",
                          children: (0, c.jsxs)("div", {
                            className:
                              "header__right d-flex justify-content-end align-items-center",
                            children: [
                              (0, c.jsx)("div", {
                                className:
                                  "main-menu main-menu-2 d-none d-xl-block",
                                children: (0, c.jsx)("nav", {
                                  id: "mobile-menu",
                                  children: (0, c.jsxs)("ul", {
                                    children: [
                                      (0, c.jsxs)("li", {
                                        className: "has-dropdown",
                                        children: [
                                          (0, c.jsx)(d.default, {
                                            href: "/",
                                            children: (0, c.jsx)("a", {
                                              children: "Home",
                                            }),
                                          }),
                                          (0, c.jsxs)("ul", {
                                            className: "submenu",
                                            children: [
                                              (0, c.jsx)("li", {
                                                children: (0, c.jsx)(
                                                  d.default,
                                                  {
                                                    href: "/",
                                                    children: (0, c.jsx)("a", {
                                                      children: "Home Style 1",
                                                    }),
                                                  }
                                                ),
                                              }),
                                              (0, c.jsx)("li", {
                                                children: (0, c.jsx)(
                                                  d.default,
                                                  {
                                                    href: "/home-2",
                                                    children: (0, c.jsx)("a", {
                                                      children: "Home Style 2",
                                                    }),
                                                  }
                                                ),
                                              }),
                                              (0, c.jsx)("li", {
                                                children: (0, c.jsx)(
                                                  d.default,
                                                  {
                                                    href: "/home-3",
                                                    children: (0, c.jsx)("a", {
                                                      children: "Home Style 3",
                                                    }),
                                                  }
                                                ),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, c.jsxs)("li", {
                                        className: "has-dropdown",
                                        children: [
                                          (0, c.jsx)(d.default, {
                                            href: "/course-grid",
                                            children: (0, c.jsx)("a", {
                                              children: "Courses",
                                            }),
                                          }),
                                          (0, c.jsxs)("ul", {
                                            className: "submenu",
                                            children: [
                                              (0, c.jsx)("li", {
                                                children: (0, c.jsx)(
                                                  d.default,
                                                  {
                                                    href: "/course-grid",
                                                    children: (0, c.jsx)("a", {
                                                      children: "Courses",
                                                    }),
                                                  }
                                                ),
                                              }),
                                              (0, c.jsx)("li", {
                                                children: (0, c.jsx)(
                                                  d.default,
                                                  {
                                                    href: "/course-list",
                                                    children: (0, c.jsx)("a", {
                                                      children: "Courses List",
                                                    }),
                                                  }
                                                ),
                                              }),
                                              (0, c.jsx)("li", {
                                                children: (0, c.jsx)(
                                                  d.default,
                                                  {
                                                    href: "/course-sidebar",
                                                    children: (0, c.jsx)("a", {
                                                      children:
                                                        "Courses Sidebar",
                                                    }),
                                                  }
                                                ),
                                              }),
                                              (0, c.jsx)("li", {
                                                children: (0, c.jsx)(
                                                  d.default,
                                                  {
                                                    href: "/course-details",
                                                    children: (0, c.jsx)("a", {
                                                      children:
                                                        "Courses Details",
                                                    }),
                                                  }
                                                ),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, c.jsxs)("li", {
                                        className: "has-dropdown",
                                        children: [
                                          (0, c.jsx)(d.default, {
                                            href: "/blog",
                                            children: (0, c.jsx)("a", {
                                              children: "Blog",
                                            }),
                                          }),
                                          (0, c.jsxs)("ul", {
                                            className: "submenu",
                                            children: [
                                              (0, c.jsx)("li", {
                                                children: (0, c.jsx)(
                                                  d.default,
                                                  {
                                                    href: "/blog",
                                                    children: (0, c.jsx)("a", {
                                                      children: "Blog",
                                                    }),
                                                  }
                                                ),
                                              }),
                                              (0, c.jsx)("li", {
                                                children: (0, c.jsx)(
                                                  d.default,
                                                  {
                                                    href: "/blog-details",
                                                    children: (0, c.jsx)("a", {
                                                      children: "Blog Details",
                                                    }),
                                                  }
                                                ),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, c.jsxs)("li", {
                                        className: "has-dropdown",
                                        children: [
                                          (0, c.jsx)(d.default, {
                                            href: "/course-grid",
                                            children: (0, c.jsx)("a", {
                                              children: "Pages",
                                            }),
                                          }),
                                          (0, c.jsxs)("ul", {
                                            className: "submenu",
                                            children: [
                                              (0, c.jsx)("li", {
                                                children: (0, c.jsx)(
                                                  d.default,
                                                  {
                                                    href: "/about",
                                                    children: (0, c.jsx)("a", {
                                                      children: "About",
                                                    }),
                                                  }
                                                ),
                                              }),
                                              (0, c.jsx)("li", {
                                                children: (0, c.jsx)(
                                                  d.default,
                                                  {
                                                    href: "/instructor",
                                                    children: (0, c.jsx)("a", {
                                                      children: "Instructor",
                                                    }),
                                                  }
                                                ),
                                              }),
                                              (0, c.jsx)("li", {
                                                children: (0, c.jsx)(
                                                  d.default,
                                                  {
                                                    href: "/instructor-details",
                                                    children: (0, c.jsx)("a", {
                                                      children:
                                                        "Instructor Details",
                                                    }),
                                                  }
                                                ),
                                              }),
                                              (0, c.jsx)("li", {
                                                children: (0, c.jsx)(
                                                  d.default,
                                                  {
                                                    href: "/event-details",
                                                    children: (0, c.jsx)("a", {
                                                      children: "Event Details",
                                                    }),
                                                  }
                                                ),
                                              }),
                                              (0, c.jsx)("li", {
                                                children: (0, c.jsx)(
                                                  d.default,
                                                  {
                                                    href: "/cart",
                                                    children: (0, c.jsx)("a", {
                                                      children: "My Cart",
                                                    }),
                                                  }
                                                ),
                                              }),
                                              (0, c.jsx)("li", {
                                                children: (0, c.jsx)(
                                                  d.default,
                                                  {
                                                    href: "/wishlist",
                                                    children: (0, c.jsx)("a", {
                                                      children: "My Wishlist",
                                                    }),
                                                  }
                                                ),
                                              }),
                                              (0, c.jsx)("li", {
                                                children: (0, c.jsx)(
                                                  d.default,
                                                  {
                                                    href: "/checkout",
                                                    children: (0, c.jsx)("a", {
                                                      children: "Checkout",
                                                    }),
                                                  }
                                                ),
                                              }),
                                              (0, c.jsx)("li", {
                                                children: (0, c.jsx)(
                                                  d.default,
                                                  {
                                                    href: "/sign-in",
                                                    children: (0, c.jsx)("a", {
                                                      children: "Sign In",
                                                    }),
                                                  }
                                                ),
                                              }),
                                              (0, c.jsx)("li", {
                                                children: (0, c.jsx)(
                                                  d.default,
                                                  {
                                                    href: "/sign-up",
                                                    children: (0, c.jsx)("a", {
                                                      children: "Sign Up",
                                                    }),
                                                  }
                                                ),
                                              }),
                                              (0, c.jsx)("li", {
                                                children: (0, c.jsx)(
                                                  d.default,
                                                  {
                                                    href: "/error",
                                                    children: (0, c.jsx)("a", {
                                                      children: "Error",
                                                    }),
                                                  }
                                                ),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, c.jsx)("li", {
                                        children: (0, c.jsx)(d.default, {
                                          href: "/contact",
                                          children: (0, c.jsx)("a", {
                                            children: "Contact",
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                              (0, c.jsx)("div", {
                                className:
                                  "header__btn header__btn-2 ml-50 d-none d-sm-block",
                                children: (0, c.jsx)(d.default, {
                                  href: "/sign-up",
                                  children: (0, c.jsx)("a", {
                                    className: "e-btn",
                                    children: "Sign Up",
                                  }),
                                }),
                              }),
                              (0, c.jsx)("div", {
                                className: "sidebar__menu d-xl-none",
                                children: (0, c.jsxs)("div", {
                                  className: "sidebar-toggle-btn ml-30",
                                  id: "sidebar-toggle",
                                  onClick: function () {
                                    l(!s);
                                  },
                                  children: [
                                    (0, c.jsx)("span", { className: "line" }),
                                    (0, c.jsx)("span", { className: "line" }),
                                    (0, c.jsx)("span", { className: "line" }),
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
                (0, c.jsx)(a.Z, { menuOpen: s, setMenuOpen: l }),
                (0, c.jsx)("div", {
                  onClick: function () {
                    return l(!1);
                  },
                  className: s ? "body-overlay show" : "body-overlay",
                }),
              ],
            }),
          ],
        });
      };
    },
  },
]);
