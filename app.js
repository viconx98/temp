(self.webpackChunk_torn_crimes = self.webpackChunk_torn_crimes || []).push([
  [143],
  {
    3180: function (e, t) {
      t.Z = {
        silhouette: "silhouette___HPG1g",
        outline: "outline___rkMJc",
        widthTiny: "widthTiny___DPWNG",
        widthNarrow: "widthNarrow___o71kO",
        widthWide: "widthWide___vJnGY",
        widthHalf: "widthHalf___s4xz7",
        "width3/4": "width3/4___NvftM",
        widthFull: "widthFull___cBXd_",
        rowGroup: "rowGroup___xGYs3",
        first: "first___TV_1r",
        row: "row___kfI5c",
        column: "column___d81BI",
        grow: "grow___RJr3K",
        flexDirectionRow: "flexDirectionRow___V0bC3",
        flexDirectionColumn: "flexDirectionColumn___abtuF",
        image: "image___ucsls",
        text: "text___jsI6u",
        commitButton: "commitButton___hq5lq",
        itemCell: "itemCell___ofzLF",
        fullWidth: "fullWidth___M2Qrv",
        dropdown: "dropdown___UZikI",
        progressBar: "progressBar___gzp5T",
        crimeOptionBgColor: "crimeOptionBgColor___J1Y5k",
      };
    },
    9431: function (e, t, r) {
      var n = r(7363),
        i = r.n(n);
      t.Z = function (e) {
        var t = e.flexDirection,
          r = e.justifyContent,
          n = e.alignItems,
          o = e.gap,
          a = e.flex,
          l = e.children;
        return i().createElement(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: t,
              justifyContent: r,
              alignItems: n,
              gap: o,
              flex: a,
            },
          },
          l
        );
      };
    },
    9132: function (e, t, r) {
      var n = r(4184),
        i = r.n(n),
        o = r(7363),
        a = r.n(o),
        l = r(4724),
        c = r(3634),
        s = function () {
          return (
            (s =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            s.apply(this, arguments)
          );
        },
        u = function (e) {
          var t = e.as,
            r = e.className,
            n = e.width,
            o = e.height,
            u = e.borderRadius,
            d = e.color,
            f = e.children,
            m = (0, c.Z)({ color: d }),
            p = m.silhouette,
            v = m.outline,
            h = s({}, e.style);
          void 0 !== n && (h.width = n),
            void 0 !== o && (h.height = o),
            void 0 !== u && (h.borderRadius = u);
          var _ = (0, l.Z)({ outline: v, silhouette: p }, t);
          return a().createElement(
            "div",
            { className: i()(_(), r), style: h },
            f
          );
        };
      (u.defaultProps = { color: "skeleton-element" }), (t.Z = u);
    },
    5710: function (e, t, r) {
      r.d(t, {
        sg: function () {
          return f;
        },
        AZ: function () {
          return v;
        },
        Hi: function () {
          return h;
        },
        Lt: function () {
          return _;
        },
        kC: function () {
          return b.Z;
        },
        ZA: function () {
          return g;
        },
        nb: function () {
          return E;
        },
        X2: function () {
          return w;
        },
        bn: function () {
          return D.Z;
        },
        Oh: function () {
          return F;
        },
        xv: function () {
          return k;
        },
        ZP: function () {
          return B;
        },
      });
      var n = r(7363),
        i = r.n(n),
        o = r(5827),
        a = r(4331),
        l = r(2460),
        c = function (e) {
          var t = e.children;
          return i().createElement(
            i().Fragment,
            null,
            i().createElement(a.Z, { skeletonOnly: !0 }),
            i().createElement(o.Z, { skeletonOnly: !0 }),
            i().createElement(l.Z, { skeletonOnly: !0 }),
            t
          );
        },
        s = r(3634),
        u = function () {
          return (
            (u =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            u.apply(this, arguments)
          );
        },
        d = function (e) {
          var t,
            r = e.grow,
            n = e.vertical,
            o = e.gap,
            a = e.width,
            l = e.children,
            c =
              null !== (t = e.justifyContent) && void 0 !== t
                ? t
                : n
                ? "center"
                : "flex-start",
            d = (0, s.Z)().column,
            f = u(u({}, e.style), { gap: o, justifyContent: c });
          return (
            void 0 !== a && (f.width = a),
            i().createElement(
              "div",
              {
                className: d({
                  direction: n ? "vertical" : "horizontal",
                  grow: r,
                }),
                style: f,
              },
              l
            )
          );
        };
      d.defaultProps = {
        grow: !1,
        vertical: !1,
        gap: ".3125rem",
        width: void 0,
        justifyContent: void 0,
      };
      var f = d,
        m = r(1033),
        p = r(3180),
        v = function (e) {
          var t = e.width,
            r = e.tabletAndMobileWidth;
          "number" != typeof r && (r = t);
          var n = (0, s.Z)().silhouette,
            o = (0, m.Z)();
          return i().createElement("div", {
            className: n(p.Z.commitButton),
            style: { width: "desktop" === o ? t : r },
          });
        },
        h = function (e) {
          var t = e.children;
          return "desktop" !== (0, m.Z)()
            ? null
            : i().createElement(i().Fragment, null, t);
        },
        _ = function (e) {
          var t = e.width,
            r = e.tabletWidth,
            n = e.mobileWidth,
            o = e.tabletAndMobileWidth,
            a = (0, s.Z)().outline,
            l = (0, m.Z)(),
            c = t;
          return (
            (("tablet" === l && r) || o) && (c = null != r ? r : o),
            (("mobile" === l && n) || o) && (c = null != n ? n : o),
            i().createElement("div", {
              className: a(p.Z.dropdown),
              style: { width: c },
            })
          );
        },
        b = r(9431),
        g = function (e) {
          var t = e.first,
            r = e.children,
            n = (0, s.Z)().group;
          return i().createElement("div", { className: n({ first: t }) }, r);
        },
        E = function () {
          var e = (0, s.Z)().outline,
            t = (0, m.Z)();
          return i().createElement("div", {
            className: e(p.Z.itemCell, "desktop" === t ? p.Z.fullWidth : ""),
          });
        },
        y = function () {
          var e = (0, s.Z)().silhouette;
          return i().createElement("div", { className: e(p.Z.image) });
        },
        C = function (e) {
          var t = e.noImage,
            r = e.repeat,
            n = e.children;
          return i().createElement(
            i().Fragment,
            null,
            Array.from(Array(r).keys()).map(function (e) {
              return i().createElement(
                "div",
                { key: e, className: p.Z.row },
                !t && i().createElement(y, null),
                n
              );
            })
          );
        };
      C.defaultProps = { repeat: 1 };
      var w = C,
        D = r(9132),
        F = function (e) {
          var t = e.children,
            r = (0, m.Z)();
          return "tablet" !== r && "mobile" !== r
            ? null
            : i().createElement(i().Fragment, null, t);
        },
        I = r(4184),
        O = r.n(I),
        A = function () {
          return (
            (A =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            A.apply(this, arguments)
          );
        },
        T = function (e) {
          var t,
            r,
            n,
            o = e.width,
            a = e.height,
            l = e.style,
            c = e.color,
            u = e.className,
            d = (0, s.Z)({ color: c }).silhouette,
            f =
              (((t = {})[p.Z.widthTiny] = "tiny" === o),
              (t[p.Z.widthNarrow] = "narrow" === o),
              (t[p.Z.widthWide] = "wide" === o),
              (t[p.Z.widthHalf] = "50%" === o),
              (t[p.Z["width3/4"]] = "75%" === o),
              (t[p.Z.widthFull] = "full" === o),
              t),
            m =
              null !==
                (n =
                  null ===
                    (r = Object.entries(f).find(function (e) {
                      return e[1];
                    })) || void 0 === r
                    ? void 0
                    : r[0]) && void 0 !== n
                ? n
                : null,
            v = A({}, l);
          return (
            m || void 0 === o || (v.width = o),
            "default" !== a && (v.height = a),
            i().createElement("div", {
              className: O()(d(p.Z.text, m), u),
              style: v,
            })
          );
        };
      T.defaultProps = { height: "default", style: void 0 };
      var k = T,
        B = c;
    },
    3634: function (e, t, r) {
      var n = r(4184),
        i = r.n(n),
        o = r(3180);
      t.Z = function (e) {
        var t,
          r,
          n =
            null !== (r = null == e ? void 0 : e.color) && void 0 !== r
              ? r
              : "skeleton-element",
          a =
            (((t = {})[o.Z.crimeOptionBgColor] = "crimeOption-bgColor" === n),
            t);
        return {
          group: function (e) {
            var t,
              r = (void 0 === e ? {} : e).first;
            return i()(a, o.Z.rowGroup, (((t = {})[o.Z.first] = !!r), t));
          },
          silhouette: function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            return i()(a, o.Z.silhouette, e);
          },
          outline: function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            return i()(a, o.Z.outline, e);
          },
          column: function (e) {
            for (var t, r = [], n = 1; n < arguments.length; n++)
              r[n - 1] = arguments[n];
            return i()(
              a,
              o.Z.column,
              (((t = {})[o.Z.grow] = e.grow),
              (t[o.Z.flexDirectionRow] = "horizontal" === e.direction),
              (t[o.Z.flexDirectionColumn] = "vertical" === e.direction),
              t),
              r
            );
          },
        };
      };
    },
    5827: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return E;
        },
      });
      var n = r(4184),
        i = r.n(n),
        o = r(7363),
        a = r.n(o),
        l = r(4785),
        c = "arrowButton___gYTVW",
        s = "right___II8s6",
        u = function (e) {
          var t,
            r = e.pointing,
            n = e.onClick;
          return a().createElement(
            "button",
            {
              type: "button",
              className: i()(c, ((t = {}), (t[s] = "right" === r), t)),
              onClick: n,
            },
            a().createElement(l.oA, {
              iconName: "ArrowCrimes",
              dimensions: {
                width: "100%",
                height: "100%",
                viewbox: "-4 -4 30 52",
              },
            })
          );
        },
        d = r(1850),
        f = "crimeSliderArrowButtons___N_y4N",
        m = "rightOnly___yJbKR",
        p = "statsPanelExpanded___btHRA",
        v = function (e) {
          var t,
            r = e.statsPanelExpanded,
            n = (0, d.t)(),
            o = n.isSliding,
            l = n.hasPrevious,
            c = n.hasNext,
            s = n.trySlideTo;
          return o || (!l && !c)
            ? null
            : a().createElement(
                "div",
                { className: i()(f, ((t = {}), (t[m] = !l), (t[p] = r), t)) },
                l &&
                  a().createElement(u, {
                    pointing: "left",
                    onClick: function (e) {
                      e.stopPropagation(), s("previous");
                    },
                  }),
                c &&
                  a().createElement(u, {
                    pointing: "right",
                    onClick: function (e) {
                      e.stopPropagation(), s("next");
                    },
                  })
              );
        },
        h = "crimeBanner___LiKtj",
        _ = "statsPanelDisabled___vnYwe",
        b = "statsPanelExpanded___RBD2I",
        g = "skeletonBanner___I9lNo",
        E = function (e) {
          var t,
            r = e.banner,
            n = e.skeletonOnly,
            o = e.statsPanelExpanded,
            l = e.onClick;
          return a().createElement(
            "div",
            {
              className: i()(h, ((t = {}), (t[_] = n), (t[b] = o), t)),
              onClick: l,
            },
            n
              ? a().createElement("div", { className: g })
              : a().createElement(
                  a().Fragment,
                  null,
                  r || a().createElement("div", { className: g }),
                  a().createElement(v, { statsPanelExpanded: o })
                )
          );
        };
    },
    4331: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return C;
        },
      });
      var n = r(4184),
        i = r.n(n),
        o = r(7363),
        a = r.n(o),
        l = r(9217),
        c = r(5257),
        s = r(4666),
        u = r(7891),
        d = r(2494),
        f = r(4245),
        m = "crimeHeading___VaeQf",
        p = "title___MqBua",
        v = "stats___TSBPS",
        h = "stat___ngEnJ",
        _ = "count___unlHt",
        b = "successes___cLkd5",
        g = "fails___yBHeS",
        E = "criticalFails___ibduv",
        y = "iconWrapper___VLUXs",
        C = function (e) {
          var t = e.title,
            r = e.skeletonOnly,
            n = (0, c.Z)(),
            o = (0, s.Z)(),
            C = (0, l.Z)();
          if (r) return a().createElement("div", { className: m });
          var w = function (e) {
              if (0 === e) return "0 (0.00%)";
              var t = (
                (e / (o.successes + o.fails + o.criticalFails)) *
                100
              ).toFixed(2);
              return "".concat((0, u.Z)(e), " (").concat(t, "%)");
            },
            D = function (e) {
              return a().createElement(d.Z, {
                sheetPath: "/images/v2/crimes/outcome-result-icons-".concat(
                  C ? "dark" : "light",
                  ".svg"
                ),
                horizontalFramesCount: 3,
                frameSizeX: 34,
                frameSizeY: 34,
                frameX: e,
              });
            };
          return a().createElement(
            "div",
            { className: m },
            a().createElement("div", { className: p }, null != t ? t : ""),
            n &&
              a().createElement(
                "div",
                { className: v },
                a().createElement(
                  f.Z,
                  { content: "Successes: ".concat(w(o.successes)) },
                  function (e) {
                    var t = e.triggerId;
                    return a().createElement(
                      "div",
                      { id: t, className: h },
                      a().createElement("div", { className: y }, D(0)),
                      a().createElement(
                        "span",
                        { className: i()(_, b) },
                        (0, u.Z)(o.successes)
                      )
                    );
                  }
                ),
                a().createElement(
                  f.Z,
                  { content: "Fails: ".concat(w(o.fails)) },
                  function (e) {
                    var t = e.triggerId;
                    return a().createElement(
                      "div",
                      { id: t, className: h },
                      a().createElement("div", { className: y }, D(1)),
                      a().createElement(
                        "span",
                        { className: i()(_, g) },
                        (0, u.Z)(o.fails)
                      )
                    );
                  }
                ),
                a().createElement(
                  f.Z,
                  { content: "Critical fails: ".concat(w(o.criticalFails)) },
                  function (e) {
                    var t = e.triggerId;
                    return a().createElement(
                      "div",
                      { id: t, className: h },
                      a().createElement("div", { className: y }, D(2)),
                      a().createElement(
                        "span",
                        { className: i()(_, E) },
                        (0, u.Z)(o.criticalFails)
                      )
                    );
                  }
                )
              )
          );
        };
    },
    2460: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return Y;
        },
      });
      var n = r(4184),
        i = r.n(n),
        o = r(7363),
        a = r.n(o),
        l = r(8027),
        c = r(5257),
        s = r(4666),
        u = r(103),
        d = "crimeLevel___i7ykS",
        f = "centerSlot___BFbZC",
        m = "leadingFlat___uywcW",
        p = "leadingSlot___pZ_dv",
        v = "mainBar___K_3gv",
        h = "trailingFlat___LnzLu",
        _ = "trailingSlot___lSFje",
        b = "maxLevel___jTooz",
        g = "skeleton___QMmu4",
        E = r(6856),
        y = r(5925),
        C = r(4245),
        w = "crimeLevelBar___W4Gjz",
        D = "zeroWidth___S1LG5",
        F = "progressTrack___JVjRi",
        I = "progressFill___ksrq5",
        O = "recentProgressAnchor___oLxT_",
        A = "recentProgress___l_abb",
        T = "highlight___ohqcL",
        k = "progressTrackDivider___GBlxD",
        B = function () {
          return (
            (B =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            B.apply(this, arguments)
          );
        },
        P = function (e) {
          var t = e.visualLevel,
            r = e.totalProgress,
            n = ((0, E.v9)(y.w2), (0, o.useRef)(r)),
            c = t === l.RM,
            s = (0, o.useState)(0),
            d = s[0],
            f = s[1],
            m = (0, o.useRef)(null);
          (0, o.useEffect)(
            function () {
              var e = r - n.current;
              0 !== e &&
                (f(function (t) {
                  return t + e;
                }),
                clearTimeout(m.current),
                (m.current = setTimeout(function () {
                  f(0);
                }, 3e3))),
                (n.current = r);
            },
            [r]
          ),
            (0, u.Z)(function () {
              clearTimeout(m.current);
            });
          var p = (0, o.useRef)(null),
            v = function () {
              var e, t;
              return null !==
                (t =
                  null === (e = p.current) || void 0 === e
                    ? void 0
                    : e.offsetWidth) && void 0 !== t
                ? t
                : 0;
            },
            h = { transitionDuration: "".concat(l.Nh, "ms") };
          return a().createElement(
            C.Z,
            {
              content: "Crime skill: "
                .concat(t)
                .concat(t < l.RM ? " (".concat(r % 100, "%)") : ""),
            },
            function (e) {
              var n,
                o = e.triggerId;
              return a().createElement(
                "div",
                { id: o, className: i()(w, ((n = {}), (n[D] = c), n)) },
                a().createElement(
                  "div",
                  { className: F, ref: p },
                  a().createElement(
                    "div",
                    {
                      className: I,
                      style: B(B({}, h), {
                        width: "".concat(r, "%"),
                        left: "".concat(-100 * (t - 1), "%"),
                      }),
                    },
                    a().createElement(
                      "div",
                      { className: O, style: { width: v() } },
                      a().createElement(
                        "div",
                        {
                          className: A,
                          style: B(B({}, h), {
                            width: "".concat(Math.max(0, d), "%"),
                          }),
                        },
                        a().createElement("div", { className: T }),
                        false
                      )
                    )
                  )
                ),
                a().createElement("span", { className: k }),
                a().createElement("span", { className: k }),
                a().createElement("span", { className: k })
              );
            }
          );
        },
        S = "starWrap___Hhyqz",
        N = "currentLevel___vCRVm",
        L = "nextLevel___Tmr17",
        R = "invisible___ixW8G",
        x = "maxLevel___KZraH",
        Z = "visible___rWl31",
        j = r(6238),
        M = r(9670),
        H = r(2970),
        V = "starWrapper___zinKC",
        W = "starEnter___Uj9C3",
        G = "starEnterActive___EW9HP",
        U = "starExit___HuLAk",
        z = "starExitActive___z3gFc",
        K = function (e) {
          var t = e.level;
          return a().createElement(
            j.Z,
            { component: null },
            a().createElement(
              M.Z,
              {
                key: t,
                timeout: 350,
                classNames: {
                  enter: W,
                  enterActive: G,
                  exit: U,
                  exitActive: z,
                },
              },
              a().createElement(
                "div",
                { className: V },
                a().createElement(H.Z, { level: t })
              )
            )
          );
        },
        q = function (e) {
          var t,
            r,
            n,
            o = e.visualLevel,
            c = o === l.RM;
          return a().createElement(
            a().Fragment,
            null,
            a().createElement(
              "div",
              { className: i()(S, N, ((t = {}), (t[R] = c), t)) },
              a().createElement(K, { level: Math.min(o, 99) })
            ),
            a().createElement(
              "div",
              { className: i()(S, L, ((r = {}), (r[R] = c), r)) },
              a().createElement(K, { level: Math.min(o + 1, l.RM) })
            ),
            a().createElement(
              "div",
              { className: i()(S, x, ((n = {}), (n[Z] = c), n)) },
              a().createElement(K, { level: o })
            )
          );
        },
        Y = function (e) {
          var t,
            r = e.skeletonOnly,
            n = (0, c.Z)(),
            E = (0, s.Z)(),
            y = E.crimeLevel,
            C = E.progressToNextLevel,
            w = (0, o.useState)(y),
            D = w[0],
            F = w[1],
            I = (0, o.useRef)(null),
            O = 100 * (y - 1) + C,
            A = (0, o.useRef)(O);
          return (
            (0, o.useEffect)(
              function () {
                var e = Math.floor(O / 100) - Math.floor(A.current / 100),
                  t = O - A.current;
                if (0 !== e) {
                  var r =
                    e > 0
                      ? (100 - (A.current % 100)) / t
                      : (A.current % 100) / Math.abs(t);
                  I.current = setTimeout(function () {
                    F(y);
                  }, l.Nh * r);
                }
                A.current = O;
              },
              [y, C, O]
            ),
            (0, u.Z)(function () {
              clearTimeout(I.current);
            }),
            a().createElement(
              "div",
              {
                className: i()(
                  d,
                  ((t = {}), (t[g] = r || !n), (t[b] = y === l.RM), t)
                ),
              },
              a().createElement("div", { className: v }),
              a().createElement("div", { className: m }),
              a().createElement("div", { className: h }),
              a().createElement("div", { className: p }),
              a().createElement("div", { className: _ }),
              a().createElement("div", { className: f }),
              !r &&
                a().createElement(
                  a().Fragment,
                  null,
                  a().createElement(P, { visualLevel: D, totalProgress: O }),
                  a().createElement(q, { visualLevel: D })
                )
            )
          );
        };
    },
    1850: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return C;
        },
        t: function () {
          return y;
        },
      });
      var n = r(4184),
        i = r.n(n),
        o = r(7363),
        a = r.n(o),
        l = r(6856),
        c = r(5276),
        s = r(1832),
        u = r(4709),
        d = r(5925),
        f = "crimeSlider___uha7d",
        m = "slidingLeft___C7wmz",
        p = "slidingRight___k6ZFw",
        v = "nextCrime___uKnJr",
        h = "previousCrime___gxp9r",
        _ = "currentCrime___KNKYQ",
        b = 250,
        g = new Map([
          [
            1,
            function () {
              return a().createElement(s.Z, null);
            },
          ],
          [
            2,
            function () {
              return a().createElement(u.Z, null);
            },
          ],
        ]),
        E = a().createContext(null),
        y = function () {
          var e = a().useContext(E);
          if (!e)
            throw Error("useCrimeSlider must be used within a CrimeSlider");
          return e;
        },
        C = function (e) {
          var t,
            r,
            n,
            s = e.children,
            u = (0, o.useState)(null),
            y = u[0],
            C = u[1],
            w = (0, o.useState)(null),
            D = w[0],
            F = w[1],
            I = (0, l.v9)(d.DR),
            O = (0, l.v9)(d.OI),
            A = (0, l.v9)(d.Gi),
            T = (0, o.useRef)(null),
            k = (0, o.useRef)(null),
            B = (0, o.useRef)(null),
            P = (0, o.useState)(null),
            S = P[0],
            N = P[1],
            L = A.includes(I - 1),
            R = A.includes(I + 1),
            x = (0, o.useCallback)(
              function (e) {
                null === D && C(e);
              },
              [D]
            );
          (0, o.useEffect)(
            function () {
              if (y) {
                var e = ("previous" === y ? T : B).current.offsetHeight - 8;
                (k.current.style.minHeight = "".concat(e, "px")), F(y);
              }
            },
            [y]
          );
          var Z = (0, o.useMemo)(
            function () {
              return {
                isSliding: !!D,
                hasPrevious: L,
                hasNext: R,
                trySlideTo: x,
              };
            },
            [R, L, D, x]
          );
          return (
            (0, o.useEffect)(
              function () {
                var e;
                return (
                  null !== D &&
                    (e = setTimeout(function () {
                      var e = I + ("previous" === D ? -1 : 1),
                        t = O.find(function (t) {
                          return t.ID === e;
                        });
                      t && N("/".concat(t.slug));
                    }, b)),
                  function () {
                    return clearTimeout(e);
                  }
                );
              },
              [O, I, D]
            ),
            S
              ? a().createElement(c.Fg, { to: S })
              : a().createElement(
                  "div",
                  {
                    className: i()(
                      f,
                      ((t = {}),
                      (t[m] = "next" === D),
                      (t[p] = "previous" === D),
                      t)
                    ),
                  },
                  L &&
                    "previous" === y &&
                    a().createElement(
                      "div",
                      {
                        ref: T,
                        className: h,
                        style: {
                          transitionDuration: "".concat(b, "ms"),
                          paddingTop: 8,
                        },
                      },
                      null === (r = g.get(I - 1)) || void 0 === r ? void 0 : r()
                    ),
                  a().createElement(
                    "div",
                    {
                      ref: k,
                      className: _,
                      style: { transitionDuration: "".concat(b, "ms") },
                    },
                    a().createElement(E.Provider, { value: Z }, s)
                  ),
                  R &&
                    "next" === y &&
                    a().createElement(
                      "div",
                      {
                        ref: B,
                        className: v,
                        style: {
                          transitionDuration: "".concat(b, "ms"),
                          paddingTop: 8,
                        },
                      },
                      null === (n = g.get(I + 1)) || void 0 === n ? void 0 : n()
                    )
                )
          );
        };
    },
    2970: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return f;
        },
      });
      var n = r(4184),
        i = r.n(n),
        o = r(7363),
        a = r.n(o),
        l = "levelStar___b63fd",
        c = "star___XSJyb",
        s = "withShadow___f3DkJ",
        u = "level___tAlsk",
        d = "scale80___mhDc5",
        f = function (e) {
          var t,
            r = e.level,
            n = e.starScale,
            o = e.withShadow,
            f =
              100 === r
                ? -175
                : r >= 75
                ? -140
                : r >= 50
                ? -105
                : r >= 25
                ? -70
                : r >= 2
                ? -35
                : 0;
          return a().createElement(
            "div",
            {
              className: i()(l, ((t = {}), (t[s] = o), (t[d] = 0.8 === n), t)),
              style: { "--star-scale": null != n ? n : 1 },
            },
            a().createElement("div", {
              className: c,
              style: { backgroundPositionX: f },
            }),
            a().createElement("div", {
              className: u,
              style: {
                backgroundPositionX: f,
                backgroundPositionY:
                  r >= 25 ? (r % 25) * -35 : r >= 2 ? -35 * (r - 2) : 0,
              },
            })
          );
        };
    },
    2494: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return u;
        },
      });
      var n = r(4184),
        i = r.n(n),
        o = r(7363),
        a = r.n(o),
        l = "scalableSheetIcon___eQPgk",
        c = function () {
          return (
            (c =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            c.apply(this, arguments)
          );
        },
        s = function (e) {
          var t = e.sheetPath,
            r = e.frameX,
            n = e.frameY,
            o = e.horizontalFramesCount,
            s = e.frameSizeX,
            u = e.frameSizeY,
            d = e.className,
            f = e.style,
            m = c(c({}, f), {
              backgroundImage: "url(".concat(t, ")"),
              "--frame-size-x": "".concat(s, "px"),
              "--frame-size-y": "".concat(u, "px"),
              "--icon-index-x": r,
              "--icon-index-y": n,
              "--horizontal-frames-count": o,
            });
          return a().createElement("div", { className: i()(l, d), style: m });
        };
      s.defaultProps = {
        frameX: 0,
        frameY: 0,
        horizontalFramesCount: 1,
        frameSizeX: 30,
        frameSizeY: 30,
      };
      var u = s;
    },
    4245: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return y;
        },
      });
      var n,
        i = r(7363),
        o = r.n(i),
        a = r(3980),
        l = r.n(a),
        c = r(9419),
        s = r.n(c),
        u = "onChangeTornMode",
        d = r(9763),
        f = function (e) {
          return e ? "dark" : "light";
        },
        m = function () {
          return (
            (m =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            m.apply(this, arguments)
          );
        },
        p =
          ((n = function (e, t) {
            return (
              (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                }),
              n(e, t)
            );
          }),
          function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Class extends value " +
                  String(t) +
                  " is not a constructor or null"
              );
            function r() {
              this.constructor = e;
            }
            n(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((r.prototype = t.prototype), new r()));
          }),
        v = function () {
          return (
            (v =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            v.apply(this, arguments)
          );
        },
        h = (function (e) {
          function t(t) {
            var r = e.call(this, t) || this;
            return (
              Object.defineProperty(r, "showTooltip", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function () {
                  r.setState({ isTooltipActive: !0 });
                },
              }),
              Object.defineProperty(r, "hideTooltip", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function () {
                  r.setState({ isTooltipActive: !1 });
                },
              }),
              (r.state = { isTooltipActive: !1 }),
              r
            );
          }
          return (
            p(t, e),
            Object.defineProperty(t.prototype, "componentDidMount", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                (this.parent = document.getElementById(this.props.parent)),
                  this.parent &&
                    (this.parent.addEventListener("blur", this.hideTooltip),
                    this.parent.addEventListener("focus", this.showTooltip),
                    this.parent.addEventListener(
                      "touchstart",
                      this.showTooltip
                    ),
                    this.parent.addEventListener(
                      "mouseleave",
                      this.hideTooltip
                    ),
                    this.parent.addEventListener(
                      "mouseenter",
                      this.showTooltip
                    ));
              },
            }),
            Object.defineProperty(t.prototype, "componentWillUnmount", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                this.parent &&
                  (this.parent.removeEventListener("blur", this.hideTooltip),
                  this.parent.removeEventListener("focus", this.showTooltip),
                  this.parent.removeEventListener(
                    "touchstart",
                    this.showTooltip
                  ),
                  this.parent.removeEventListener(
                    "mouseleave",
                    this.hideTooltip
                  ),
                  this.parent.removeEventListener(
                    "mouseenter",
                    this.showTooltip
                  ));
              },
            }),
            Object.defineProperty(t.prototype, "render", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                var e = this.props,
                  t = e.active,
                  r = e.delay,
                  n = e.children,
                  i = e.position,
                  a = e.arrow,
                  l = e.parent,
                  c = e.style,
                  u = e.theme,
                  d = this.state.isTooltipActive,
                  f = "dark" === u,
                  m = f ? "#444" : "#f2f2f2",
                  p = f ? "rgba(0, 0, 0, 0.2)" : "#dadada",
                  h = {
                    style: v(
                      {
                        background: m,
                        padding: 8,
                        boxShadow: f
                          ? "0px 0px 2px rgba(0, 0, 0, 0.65)"
                          : "0px 0px 8px rgba(0, 0, 0, 0.3)",
                      },
                      c.style
                    ),
                    arrowStyle: v(
                      { color: m, borderColor: p, transition: "none" },
                      c.arrowStyle
                    ),
                  };
                return o().createElement(
                  s(),
                  {
                    active: t && d,
                    tooltipTimeout: r,
                    position: i,
                    arrow: a,
                    parent: "#".concat(l),
                    style: h,
                  },
                  o().createElement("div", null, n)
                );
              },
            }),
            Object.defineProperty(t, "defaultProps", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: {
                active: !0,
                delay: 0,
                arrow: "center",
                position: "top",
                style: { style: {}, arrowStyle: {} },
              },
            }),
            t
          );
        })(i.Component);
      h.propTypes = {
        active: l().bool,
        delay: l().number,
        children: l().node,
        position: l().string,
        arrow: l().string,
        parent: l().string,
        style: l().object,
        theme: l().string,
      };
      var _,
        b =
          ((_ = h),
          function (e) {
            var t = (function () {
              var e = (0, i.useState)(
                  f("true" === (0, d.ej)("darkModeEnabled"))
                ),
                t = e[0],
                r = e[1],
                n = function (e) {
                  return r(f(e.detail.checked));
                };
              return (
                (0, i.useEffect)(function () {
                  return (
                    window.addEventListener(u, n),
                    function () {
                      return window.removeEventListener(u, n);
                    }
                  );
                }, []),
                t
              );
            })();
            return o().createElement(_, m({}, m(m({}, e), { theme: t })));
          }),
        g = function () {
          return (
            (g =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            g.apply(this, arguments)
          );
        },
        E = function (e) {
          var t = e.active,
            r = e.children,
            n = e.content,
            a = e.id,
            l = e.position,
            c = e.offsetX,
            s = e.offsetY,
            u = e.style,
            d = (0, i.useRef)(
              "tooltip-trigger-".concat(
                Math.random().toString().replace("0.", "").substring(0, 8)
              )
            ),
            f = null != a ? a : d.current,
            m = { position: l },
            p =
              c && s
                ? { transform: "translate(".concat(c, "px, ").concat(s, "px)") }
                : c
                ? { transform: "translateX(".concat(c, "px)") }
                : s
                ? { transform: "translateY(".concat(s, "px)") }
                : {};
          return o().createElement(
            o().Fragment,
            null,
            r({ triggerId: t ? f : void 0 }),
            t &&
              o().createElement(
                b,
                g({}, m, {
                  parent: f,
                  style: {
                    style: g(g({}, p), null == u ? void 0 : u.style),
                    arrowStyle: null == u ? void 0 : u.arrowStyle,
                  },
                }),
                n
              )
          );
        };
      E.defaultProps = { active: !0 };
      var y = E;
    },
    8027: function (e, t, r) {
      r.d(t, {
        Ai: function () {
          return E;
        },
        Gw: function () {
          return _;
        },
        Nh: function () {
          return g;
        },
        OR: function () {
          return d;
        },
        Pj: function () {
          return m;
        },
        RM: function () {
          return h;
        },
        T8: function () {
          return o;
        },
        To: function () {
          return u;
        },
        UI: function () {
          return i;
        },
        Zs: function () {
          return p;
        },
        a6: function () {
          return v;
        },
        ds: function () {
          return s;
        },
        hn: function () {
          return c;
        },
        ir: function () {
          return l;
        },
        mY: function () {
          return n;
        },
        q5: function () {
          return f;
        },
        rs: function () {
          return b;
        },
        tH: function () {
          return a;
        },
      });
      var n = "/loader.php?sid=crimesData",
        i = 1,
        o = 2,
        a = 3,
        l = 4,
        c = 5,
        s = 6,
        u = 7,
        d = 8,
        f = 9,
        m = 10,
        p = {
          active: !0,
          titles: { default: { ID: 0, title: "Crimes" }, list: [] },
          links: {
            default: {
              ID: 0,
              items: [
                {
                  href: "/",
                  icon: "CrimesHub",
                  label: "hub-link",
                  title: "Back to Hub",
                  isSPALink: !0,
                },
              ],
            },
            list: [
              {
                ID: 0,
                items: [
                  {
                    title: "City",
                    href: "/city.php",
                    icon: "City",
                    label: "City-link",
                  },
                ],
              },
            ],
          },
        },
        v = {
          NERVE_INSUFFICIENT: "You don't have enough nerve",
          CRIME_LEVEL_INSUFFICIENT: "Your skill level is not high enough",
        },
        h = 100,
        _ = 16,
        b = ["Gold Laptop"],
        g = 400,
        E = "Nerve used";
    },
    7257: function (e, t, r) {
      var n = r(6856),
        i = r(5925);
      t.Z = function () {
        return (0, n.v9)(i.Do);
      };
    },
    8442: function (e, t, r) {
      var n = r(7363),
        i = r(6856),
        o = r(5925);
      t.Z = function () {
        var e = (0, i.v9)(o.Aj),
          t = (0, i.v9)(o.Bl),
          r = (0, n.useState)(Date.now()),
          a = r[0],
          l = r[1];
        return (
          (0, n.useEffect)(function () {
            var e = setInterval(function () {
              l(function (e) {
                return e + 1e3;
              });
            }, 1e3);
            return function () {
              return clearInterval(e);
            };
          }, []),
          e + Math.floor((a - t) / 1e3)
        );
      };
    },
    7111: function (e, t, r) {
      var n = r(9968);
      t.Z = function () {
        return function (e) {
          if ("#ffd43b" === e.toLowerCase())
            return "brightness(0) saturate(100%) invert(88%) sepia(45%) saturate(2217%) hue-rotate(326deg) brightness(108%) contrast(102%)";
          var t = (0, n.hexToCSSFilter)(e).filter;
          return "brightness(0) saturate(100%) ".concat(
            t.substring(0, t.length - 1)
          );
        };
      };
    },
    9217: function (e, t, r) {
      var n = r(6856),
        i = r(5925);
      t.Z = function () {
        return (0, n.v9)(i.sx);
      };
    },
    5257: function (e, t, r) {
      var n = r(6856),
        i = r(6626);
      t.Z = function () {
        return (0, n.v9)((0, i.CU)());
      };
    },
    1033: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return o;
        },
      });
      var n = r(6856),
        i = function (e) {
          return document.body.classList.contains("r")
            ? e.browser.mediaType
            : "desktop";
        },
        o = function () {
          return (0, n.v9)(i);
        };
    },
    4666: function (e, t, r) {
      var n = r(6856),
        i = r(6626);
      t.Z = function () {
        return (0, n.v9)((0, i.fz)());
      };
    },
    103: function (e, t, r) {
      var n = r(7363);
      t.Z = function (e) {
        var t = (0, n.useRef)(e);
        (0, n.useEffect)(function () {
          return function () {
            return t.current();
          };
        }, []);
      };
    },
    9093: function (e, t, r) {
      var n = r(3273),
        i = r(1033);
      t.Z = function (e) {
        var t = (0, i.Z)();
        return "number" == typeof e
          ? e
          : "object" == typeof e && null !== e
          ? (0, n.Z)(e, t)
          : void 0;
      };
    },
    5480: function (e, t, r) {
      var n = r(7363);
      t.Z = function (e, t) {
        (0, n.useEffect)(function () {
          var t = function () {
            e(window.document.visibilityState);
          };
          return (
            window.document.addEventListener("visibilitychange", t),
            function () {
              return window.document.removeEventListener("visibilitychange", t);
            }
          );
        }, t.concat([e]));
      };
    },
    6291: function (e, t, r) {
      var n,
        i = r(7363),
        o = r.n(i),
        a = r(1533),
        l = r.n(a),
        c = r(6856),
        s = r(2779),
        u = r.n(s),
        d = r(9763),
        f = "titleContainer___QrlWP",
        m = "title___rhtB4",
        p =
          ((n = function (e, t) {
            return (
              (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                }),
              n(e, t)
            );
          }),
          function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Class extends value " +
                  String(t) +
                  " is not a constructor or null"
              );
            function r() {
              this.constructor = e;
            }
            n(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((r.prototype = t.prototype), new r()));
          }),
        v = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              Object.defineProperty(t, "_getTitle", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function () {
                  var e = (t.props.titles.default || {}).title;
                  return void 0 === e ? "" : e;
                },
              }),
              t
            );
          }
          return (
            p(t, e),
            Object.defineProperty(t.prototype, "_getSubTitle", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                var e = this.props,
                  t = e.pageID,
                  r = e.titles.list,
                  n = void 0 === r ? [] : r;
                if (!n) return "";
                var i = n.find(function (e) {
                  return e.ID === t;
                });
                return i && i.subTitle ? i.subTitle : "";
              },
            }),
            Object.defineProperty(t.prototype, "render", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                if (!this.props.titles)
                  return (
                    console.error(
                      "NO TITLES PROVIDED! PLEASE, CHECK THE TITLE COMPONENT."
                    ),
                    null
                  );
                var e = this._getTitle(),
                  t = this._getSubTitle();
                return o().createElement(
                  "div",
                  { className: f },
                  o().createElement("h4", { className: m }, t || e)
                );
              },
            }),
            Object.defineProperty(t, "defaultProps", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: { titles: [] },
            }),
            t
          );
        })(i.PureComponent),
        h = v,
        _ = r(6213),
        b = r(4785);
      var g = function (e, t) {
          return {
            iconName: e,
            customClass: t,
            preset: { type: "topPageLinks", subtype: e },
          };
        },
        E = "svgIcon___7qHpw",
        y = "inRow___VfDnd",
        C = "linkContainer___X16y4",
        w = "linkTitle____NPyM",
        D = "inColumn___sL8LW",
        F = "linkIconContainer___Ep0LO",
        I = "appHeaderWrapper___uyPti",
        O = "topSection___U7sVi",
        A = "bottomSection___ROxsQ",
        T = "greyLineV___up8VP",
        k = "iconContainer___D5z6F",
        B = "disableButtonsRightMargin___BEB6c",
        P = "disableLinksRightMargin___gY7V5",
        S = "svgIcon___IwbJV",
        N = "isDropDownLayout___VQFsS",
        L = "isHovering___U0hQk",
        R = "delimiter___zFh2E",
        x = (function () {
          var e = function (t, r) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                }),
              e(t, r)
            );
          };
          return function (t, r) {
            if ("function" != typeof r && null !== r)
              throw new TypeError(
                "Class extends value " +
                  String(r) +
                  " is not a constructor or null"
              );
            function n() {
              this.constructor = t;
            }
            e(t, r),
              (t.prototype =
                null === r
                  ? Object.create(r)
                  : ((n.prototype = r.prototype), new n()));
          };
        })(),
        Z = function () {
          return (
            (Z =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            Z.apply(this, arguments)
          );
        },
        j = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              Object.defineProperty(t, "_onClick", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function (e) {
                  var r = t.props,
                    n = r.id,
                    i = r.onClick,
                    o = r.callback;
                  i && i(n, e), o && o(n, e);
                },
              }),
              Object.defineProperty(t, "_generateClassNames", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function () {
                  var e,
                    r = t.props,
                    n = r.icon,
                    i = r.isDropDownLayout;
                  return u()(
                    C,
                    i ? D : y,
                    (((e = {})[T] = !i), e),
                    "link-container-".concat(n)
                  );
                },
              }),
              t
            );
          }
          return (
            x(t, e),
            Object.defineProperty(t.prototype, "render", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                var e,
                  t = this.props,
                  r = t.title,
                  n = t.label,
                  i = t.href,
                  a = t.icon,
                  l = t.isSPALink,
                  c = t.isDropDownLayout,
                  s = t.blank;
                if (!r && !a) return null;
                var d = l ? _.rU : "a",
                  f = u()((((e = {})[N] = c), e), E);
                return o().createElement(
                  d,
                  {
                    to: i,
                    role: "button",
                    "aria-labelledby": n,
                    href: i,
                    onClick: this._onClick,
                    className: this._generateClassNames(),
                    target: s ? "_blank" : "_self",
                  },
                  o().createElement(
                    "span",
                    { className: u()(k, F) },
                    o().createElement(b.oA, Z({}, g(a, f)))
                  ),
                  o().createElement("span", { className: w }, r)
                );
              },
            }),
            Object.defineProperty(t, "defaultProps", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: { title: "", label: "", href: "", icon: "" },
            }),
            t
          );
        })(o().PureComponent),
        M = j,
        H = "list___n6oie",
        V = (function () {
          var e = function (t, r) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                }),
              e(t, r)
            );
          };
          return function (t, r) {
            if ("function" != typeof r && null !== r)
              throw new TypeError(
                "Class extends value " +
                  String(r) +
                  " is not a constructor or null"
              );
            function n() {
              this.constructor = t;
            }
            e(t, r),
              (t.prototype =
                null === r
                  ? Object.create(r)
                  : ((n.prototype = r.prototype), new n()));
          };
        })(),
        W = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            V(t, e),
            Object.defineProperty(t.prototype, "render", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                var e = this.props.children;
                return o().createElement("div", { className: H }, e);
              },
            }),
            t
          );
        })(i.PureComponent),
        G = W,
        U = "listItem___Q3FFU",
        z = (function () {
          var e = function (t, r) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                }),
              e(t, r)
            );
          };
          return function (t, r) {
            if ("function" != typeof r && null !== r)
              throw new TypeError(
                "Class extends value " +
                  String(r) +
                  " is not a constructor or null"
              );
            function n() {
              this.constructor = t;
            }
            e(t, r),
              (t.prototype =
                null === r
                  ? Object.create(r)
                  : ((n.prototype = r.prototype), new n()));
          };
        })(),
        K = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            z(t, e),
            Object.defineProperty(t.prototype, "render", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                var e = this.props.children;
                return o().createElement("div", { className: U }, e);
              },
            }),
            t
          );
        })(i.PureComponent),
        q = K,
        Y = "dropdown___V26kZ",
        X = "activator___qIkh9",
        J = "activatorIcon___k1Tvu",
        Q = "active___aGGWu",
        $ = (function () {
          var e = function (t, r) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                }),
              e(t, r)
            );
          };
          return function (t, r) {
            if ("function" != typeof r && null !== r)
              throw new TypeError(
                "Class extends value " +
                  String(r) +
                  " is not a constructor or null"
              );
            function n() {
              this.constructor = t;
            }
            e(t, r),
              (t.prototype =
                null === r
                  ? Object.create(r)
                  : ((n.prototype = r.prototype), new n()));
          };
        })(),
        ee = (function (e) {
          function t(t) {
            var r = e.call(this, t) || this;
            return (
              Object.defineProperty(r, "_getActivatorLabel", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function () {
                  var e = r.state.active;
                  return "".concat(e ? "Hide" : "Show", " links");
                },
              }),
              Object.defineProperty(r, "_toggleActivation", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function () {
                  var e = r.state.active;
                  r.setState({ active: !e });
                },
              }),
              (r.state = { active: !1 }),
              r
            );
          }
          return (
            $(t, e),
            Object.defineProperty(t.prototype, "render", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                var e,
                  t = this.props,
                  r = t.children,
                  n = t.className,
                  i = this.state.active;
                return o().createElement(
                  "div",
                  { className: u()(Y, n) },
                  o().createElement(
                    "button",
                    {
                      className: u()(X, ((e = {}), (e[Q] = i), e)),
                      onClick: this._toggleActivation,
                      "aria-label": this._getActivatorLabel(),
                    },
                    o().createElement("div", { className: J })
                  ),
                  i && r
                );
              },
            }),
            t
          );
        })(i.PureComponent),
        te = ee,
        re = function (e, t) {
          if (!e) return null;
          var r = (
              e.list
                ? e.list.filter(function (e) {
                    return Number(e.ID) === Number(t);
                  })
                : []
            )[0],
            n = void 0 === r ? void 0 : r,
            i = null !== t,
            o = n && n.items && 0 === n.items.length;
          return !i || o ? null : n || e.default || null;
        },
        ne = "linksContainer___LiOTN",
        ie = "linksDropdown___OFVsj",
        oe = (function () {
          var e = function (t, r) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                }),
              e(t, r)
            );
          };
          return function (t, r) {
            if ("function" != typeof r && null !== r)
              throw new TypeError(
                "Class extends value " +
                  String(r) +
                  " is not a constructor or null"
              );
            function n() {
              this.constructor = t;
            }
            e(t, r),
              (t.prototype =
                null === r
                  ? Object.create(r)
                  : ((n.prototype = r.prototype), new n()));
          };
        })(),
        ae = function () {
          return (
            (ae =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            ae.apply(this, arguments)
          );
        },
        le = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            oe(t, e),
            Object.defineProperty(t.prototype, "_getPageLinks", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                var e = this.props,
                  t = e.pageID,
                  r = e.links;
                return null === r || 0 === Object.keys(r).length
                  ? null
                  : re(r, t);
              },
            }),
            Object.defineProperty(t.prototype, "_renderLinksRow", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                var e = this.props.callback,
                  t = this._getPageLinks();
                return t && t.items
                  ? t.isDropDownLayout
                    ? t.items.map(function (r, n) {
                        return o().createElement(
                          q,
                          { key: n },
                          o().createElement(
                            M,
                            ae({}, r, {
                              callback: e,
                              isDropDownLayout: t.isDropDownLayout,
                            })
                          )
                        );
                      })
                    : t.items.map(function (t, r) {
                        return o().createElement(
                          M,
                          ae({ key: r }, t, { callback: e })
                        );
                      })
                  : null;
              },
            }),
            Object.defineProperty(t.prototype, "render", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                var e = this._getPageLinks();
                if (!e || !e.items) return null;
                var t = e.isDropDownLayout;
                return void 0 !== t && t
                  ? o().createElement(
                      te,
                      { className: ie },
                      o().createElement(G, null, this._renderLinksRow())
                    )
                  : o().createElement(
                      "div",
                      { className: ne },
                      this._renderLinksRow()
                    );
              },
            }),
            Object.defineProperty(t, "defaultProps", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: { pageID: 0 },
            }),
            t
          );
        })(i.PureComponent),
        ce = le,
        se = "buttonContainer___IKJfB",
        ue = (function () {
          var e = function (t, r) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                }),
              e(t, r)
            );
          };
          return function (t, r) {
            if ("function" != typeof r && null !== r)
              throw new TypeError(
                "Class extends value " +
                  String(r) +
                  " is not a constructor or null"
              );
            function n() {
              this.constructor = t;
            }
            e(t, r),
              (t.prototype =
                null === r
                  ? Object.create(r)
                  : ((n.prototype = r.prototype), new n()));
          };
        })(),
        de = function () {
          return (
            (de =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            de.apply(this, arguments)
          );
        },
        fe = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              Object.defineProperty(t, "_handleClick", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function (e) {
                  var r = e.target,
                    n = t.props,
                    i = n.click,
                    o = n.index,
                    a = n.id,
                    l = n.callback,
                    c = n.callback,
                    s = void 0 === c ? {} : c,
                    u = s.buttonCallback,
                    d = void 0 === u ? function () {} : u,
                    f = s.callbackData,
                    m = void 0 === f ? null : f;
                  r &&
                    r.dataset &&
                    (i && i(o, a, e), void 0 !== (l && d && m) && d(m, a, e));
                },
              }),
              t
            );
          }
          return (
            ue(t, e),
            Object.defineProperty(t.prototype, "render", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                var e,
                  t = this.props,
                  r = t.label,
                  n = t.icon,
                  i = t.index,
                  a = t.isButtonActive;
                if (!n && !r) return null;
                var l = u()(S, (((e = {})[L] = a), e));
                return o().createElement(
                  "button",
                  {
                    "data-button-id": i,
                    type: "button",
                    "aria-labelledby": r,
                    className: "".concat(se, " ").concat(T),
                    onClick: this._handleClick,
                  },
                  o().createElement(
                    "span",
                    { className: k },
                    o().createElement(b.oA, de({}, g(n, l)))
                  )
                );
              },
            }),
            Object.defineProperty(t, "defaultProps", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: {
                id: null,
                label: "",
                icon: "",
                index: 0,
                isButtonActive: !1,
                click: function () {},
                callback: { buttonCallback: function () {}, callbackData: "" },
              },
            }),
            t
          );
        })(o().PureComponent),
        me = fe,
        pe = "buttonsContainer___tKVkf",
        ve = (function () {
          var e = function (t, r) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                }),
              e(t, r)
            );
          };
          return function (t, r) {
            if ("function" != typeof r && null !== r)
              throw new TypeError(
                "Class extends value " +
                  String(r) +
                  " is not a constructor or null"
              );
            function n() {
              this.constructor = t;
            }
            e(t, r),
              (t.prototype =
                null === r
                  ? Object.create(r)
                  : ((n.prototype = r.prototype), new n()));
          };
        })(),
        he = function () {
          return (
            (he =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            he.apply(this, arguments)
          );
        },
        _e = (function (e) {
          function t(t) {
            var r = e.call(this, t) || this;
            return (
              Object.defineProperty(r, "_handleClick", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function (e, t, n) {
                  var i = r.props.callback;
                  i && "function" == typeof i && i(e, t, n),
                    r.setState(function (t) {
                      return he(he({}, t), { activeButtonIndex: e });
                    });
                },
              }),
              Object.defineProperty(r, "_bulidButtonsList", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function () {
                  var e = r.props,
                    t = e.pageID,
                    n = e.buttons,
                    i = r.state.activeButtonIndex,
                    a = re(n, t);
                  return a
                    ? a.items &&
                        a.items.map(function (e, t) {
                          var n = !1;
                          return (
                            i === t && (n = true),
                            o().createElement(
                              me,
                              he({}, e, {
                                key: t,
                                index: t,
                                isButtonActive: n,
                                click: r._handleClick,
                              })
                            )
                          );
                        })
                    : null;
                },
              }),
              (r.state = { activeButtonIndex: 0 }),
              r
            );
          }
          return (
            ve(t, e),
            Object.defineProperty(t.prototype, "render", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                var e = this.props.buttons;
                return e.list && 0 !== e.list.length
                  ? o().createElement(
                      "div",
                      { className: pe },
                      this._bulidButtonsList()
                    )
                  : null;
              },
            }),
            Object.defineProperty(t, "defaultProps", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: { callback: function () {}, buttons: {} },
            }),
            t
          );
        })(i.PureComponent),
        be = _e,
        ge = "labelTitle___ZtfnD",
        Ee = "labelContainer___vshv5",
        ye = "labelIconContainer___TR91G",
        Ce = (function () {
          var e = function (t, r) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                }),
              e(t, r)
            );
          };
          return function (t, r) {
            if ("function" != typeof r && null !== r)
              throw new TypeError(
                "Class extends value " +
                  String(r) +
                  " is not a constructor or null"
              );
            function n() {
              this.constructor = t;
            }
            e(t, r),
              (t.prototype =
                null === r
                  ? Object.create(r)
                  : ((n.prototype = r.prototype), new n()));
          };
        })(),
        we = function () {
          return (
            (we =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            we.apply(this, arguments)
          );
        },
        De = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Ce(t, e),
            Object.defineProperty(t.prototype, "render", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                var e,
                  t = this.props,
                  r = t.title,
                  n = t.icon,
                  i = t.hasDivider,
                  a = void 0 === i || i;
                return r || n
                  ? o().createElement(
                      "div",
                      {
                        className: u()(
                          Ee,
                          ((e = {}), (e[T] = a), e),
                          "label-container-".concat(n)
                        ),
                      },
                      n &&
                        o().createElement(
                          "span",
                          { className: u()(k, ye) },
                          o().createElement(b.oA, we({}, g(n, S)))
                        ),
                      o().createElement("span", { className: ge }, r)
                    )
                  : null;
              },
            }),
            t
          );
        })(o().PureComponent),
        Fe = De,
        Ie = "labelsContainer___Oz6Su",
        Oe = (function () {
          var e = function (t, r) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                }),
              e(t, r)
            );
          };
          return function (t, r) {
            if ("function" != typeof r && null !== r)
              throw new TypeError(
                "Class extends value " +
                  String(r) +
                  " is not a constructor or null"
              );
            function n() {
              this.constructor = t;
            }
            e(t, r),
              (t.prototype =
                null === r
                  ? Object.create(r)
                  : ((n.prototype = r.prototype), new n()));
          };
        })(),
        Ae = function () {
          return (
            (Ae =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            Ae.apply(this, arguments)
          );
        },
        Te = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Oe(t, e),
            Object.defineProperty(t.prototype, "_bulidLabelsList", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                var e = this.props,
                  t = e.pageID,
                  r = e.labels,
                  n = re(r, t);
                return n
                  ? n.items &&
                      n.items.map(function (e, t) {
                        return o().createElement(Fe, Ae({ key: t }, e));
                      })
                  : null;
              },
            }),
            Object.defineProperty(t.prototype, "render", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                var e = this.props.labels;
                return null === e || 0 === Object.keys(e).length
                  ? null
                  : o().createElement(
                      "div",
                      { className: Ie },
                      this._bulidLabelsList()
                    );
              },
            }),
            Object.defineProperty(t, "defaultProps", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: { pageID: 0 },
            }),
            t
          );
        })(i.PureComponent),
        ke = Te,
        Be = "/loader.php?sid=getHeader&pageID=",
        Pe = "svgIconSwitch___sImwd",
        Se = "isHovering___jc1D7",
        Ne = "switchIconContainer___kOz3c",
        Le = "switcherTitle___lPJnZ",
        Re = "switcherContainer___xX5wA",
        xe = "tutorialSwitcher___WoBES",
        Ze = (function () {
          var e = function (t, r) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                }),
              e(t, r)
            );
          };
          return function (t, r) {
            if ("function" != typeof r && null !== r)
              throw new TypeError(
                "Class extends value " +
                  String(r) +
                  " is not a constructor or null"
              );
            function n() {
              this.constructor = t;
            }
            e(t, r),
              (t.prototype =
                null === r
                  ? Object.create(r)
                  : ((n.prototype = r.prototype), new n()));
          };
        })(),
        je = function (e, t, r, n) {
          return new (r || (r = Promise))(function (i, o) {
            function a(e) {
              try {
                c(n.next(e));
              } catch (e) {
                o(e);
              }
            }
            function l(e) {
              try {
                c(n.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof r
                    ? t
                    : new r(function (e) {
                        e(t);
                      })).then(a, l);
            }
            c((n = n.apply(e, t || [])).next());
          });
        },
        Me = function (e, t) {
          var r,
            n,
            i,
            o,
            a = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = { next: l(0), throw: l(1), return: l(2) }),
            "function" == typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );
          function l(o) {
            return function (l) {
              return (function (o) {
                if (r) throw new TypeError("Generator is already executing.");
                for (; a; )
                  try {
                    if (
                      ((r = 1),
                      n &&
                        (i =
                          2 & o[0]
                            ? n.return
                            : o[0]
                            ? n.throw || ((i = n.return) && i.call(n), 0)
                            : n.next) &&
                        !(i = i.call(n, o[1])).done)
                    )
                      return i;
                    switch (((n = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                      case 0:
                      case 1:
                        i = o;
                        break;
                      case 4:
                        return a.label++, { value: o[1], done: !1 };
                      case 5:
                        a.label++, (n = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !((i = a.trys),
                          (i = i.length > 0 && i[i.length - 1]) ||
                            (6 !== o[0] && 2 !== o[0]))
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!i || (o[1] > i[0] && o[1] < i[3]))
                        ) {
                          a.label = o[1];
                          break;
                        }
                        if (6 === o[0] && a.label < i[1]) {
                          (a.label = i[1]), (i = o);
                          break;
                        }
                        if (i && a.label < i[2]) {
                          (a.label = i[2]), a.ops.push(o);
                          break;
                        }
                        i[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    o = t.call(e, a);
                  } catch (e) {
                    (o = [6, e]), (n = 0);
                  } finally {
                    r = i = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, l]);
            };
          }
        },
        He = { width: 11, height: 15, viewbox: ".5 1 11 17" },
        Ve = { width: 19, height: 16, viewbox: "-.5 2 20 18" },
        We = (function (e) {
          function t(t) {
            var r = e.call(this, t) || this;
            return (
              Object.defineProperty(r, "_handleOver", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function () {
                  r.setState({ isHovered: !0 });
                },
              }),
              Object.defineProperty(r, "_handleLeave", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function () {
                  r.setState({ isHovered: !1 });
                },
              }),
              Object.defineProperty(r, "_requestTutorialUpdate", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function () {
                  return je(r, void 0, void 0, function () {
                    var e, t, r, n, i, o, a;
                    return Me(this, function (l) {
                      switch (l.label) {
                        case 0:
                          return (
                            (e = this.props),
                            (t = e.iconSwitch),
                            (r = e.appID),
                            (n = t ? 0 : 1),
                            [
                              4,
                              (0, d.lC)(
                                ""
                                  .concat(Be)
                                  .concat(r)
                                  .concat(
                                    "&step=updateUserTutorials&activateOnLoad="
                                  )
                                  .concat(n)
                              ),
                            ]
                          );
                        case 1:
                          return (
                            (i = l.sent()),
                            (o = (i || {}).tutorials),
                            (a = (void 0 === o ? {} : o).activateOnLoad),
                            [2, void 0 !== a && a]
                          );
                      }
                    });
                  });
                },
              }),
              Object.defineProperty(r, "_handleTutorialSwitch", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function () {
                  var e = r.props,
                    t = e.tutorialSwitchHandler,
                    n = e.iconSwitch;
                  e.isClientPropsThrowed
                    ? t(!n)
                    : r._requestTutorialUpdate().then(function (e) {
                        return t(e);
                      });
                },
              }),
              (r.state = { isHovered: !1 }),
              r
            );
          }
          return (
            Ze(t, e),
            Object.defineProperty(t.prototype, "render", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                var e,
                  t = this.state.isHovered,
                  n = this.props,
                  i = n.iconSwitch,
                  a = n.showSwitcher,
                  l = n.isLinksAvailable;
                return a
                  ? o().createElement(
                      "div",
                      {
                        onMouseOver: this._handleOver,
                        onMouseLeave: this._handleLeave,
                        className: "".concat(Re, " ").concat(l ? T : ""),
                      },
                      o().createElement("button", {
                        type: "button",
                        className: xe,
                        onClick: this._handleTutorialSwitch,
                      }),
                      o().createElement(
                        "span",
                        { className: "".concat(k, " ").concat(Ne) },
                        o().createElement(b.oA, {
                          iconsHolder: r.e(340).then(r.bind(r, 7781)),
                          iconName: "Tutorial",
                          type: i ? "hide" : "show",
                          customClass: u()(Pe, ((e = {}), (e[Se] = t), e)),
                          fill: { strokeWidth: 0 },
                          filter: { active: !0, ID: "top_svg_icon" },
                          dimensions: i ? Ve : He,
                        })
                      ),
                      o().createElement("span", { className: Le }, "Tutorial")
                    )
                  : null;
              },
            }),
            Object.defineProperty(t, "defaultProps", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: {
                tutorialSwitchHandler: function () {},
                appID: "",
                iconSwitch: !1,
                showSwitcher: !1,
              },
            }),
            t
          );
        })(i.PureComponent),
        Ge = We,
        Ue = "tContainer___g4BOx",
        ze = "topSection___Yxizd",
        Ke = "iconContainer___g1zMn",
        qe = "tHeader___Kf036",
        Ye = "bottomSection___izi18",
        Xe = "tText___cbUEe",
        Je = "delimiter___y9PoM",
        Qe = (function () {
          var e = function (t, r) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                }),
              e(t, r)
            );
          };
          return function (t, r) {
            if ("function" != typeof r && null !== r)
              throw new TypeError(
                "Class extends value " +
                  String(r) +
                  " is not a constructor or null"
              );
            function n() {
              this.constructor = t;
            }
            e(t, r),
              (t.prototype =
                null === r
                  ? Object.create(r)
                  : ((n.prototype = r.prototype), new n()));
          };
        })(),
        $e = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              Object.defineProperty(t, "getCurrentTutorial", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function () {
                  var e = t.props,
                    r = e.tutorials,
                    n = e.pageID;
                  return re(r, n);
                },
              }),
              t
            );
          }
          return (
            Qe(t, e),
            Object.defineProperty(t.prototype, "render", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                var e = this.props.showTutorial,
                  t = this.getCurrentTutorial();
                if (!t) return null;
                var r = t.items,
                  n = !r || (!r[0].title && !r[0].text);
                if (!e || n) return null;
                var i = r[0],
                  a = i.title,
                  l = i.text;
                return o().createElement(
                  "div",
                  { className: Ue },
                  o().createElement(
                    "div",
                    { className: ze },
                    o().createElement(
                      "span",
                      { className: Ke },
                      o().createElement(b.oA, {
                        iconName: "Tutorial",
                        type: "show",
                        fill: { color: "rgb(207, 207, 207)", strokeWidth: 0 },
                        dimensions: {
                          width: 11,
                          height: 16,
                          viewbox: "0 1 11 17",
                        },
                        filter: { active: !1 },
                      })
                    ),
                    o().createElement(
                      "span",
                      { className: qe },
                      a || "No Title for this page!"
                    )
                  ),
                  o().createElement(
                    "div",
                    { className: Ye },
                    o().createElement(
                      "p",
                      { className: Xe },
                      l || "No Tutorial for this page!"
                    )
                  ),
                  o().createElement("hr", { className: u()(Je, "m-top10") })
                );
              },
            }),
            Object.defineProperty(t, "defaultProps", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: {
                pageID: 0,
                showTutorial: !1,
                tutorials: {
                  list: [
                    { ID: 0, items: [{ title: "string", text: "string" }] },
                  ],
                  active: !1,
                  default: {
                    ID: 0,
                    items: [{ title: "string", text: "string" }],
                  },
                  activateOnLoad: !1,
                  hideByDefault: !1,
                },
              },
            }),
            t
          );
        })(i.PureComponent),
        et = $e,
        tt = function () {
          return o().createElement(
            "svg",
            { style: { position: "absolute" }, width: 0, height: 0 },
            o().createElement(
              "defs",
              null,
              o().createElement(
                "filter",
                { id: "white-shadow", colorInterpolationFilters: "sRGB" },
                o().createElement("feDropShadow", {
                  dx: "0",
                  dy: "1",
                  stdDeviation: "0",
                  floodOpacity: "1",
                  floodColor: "white",
                })
              ),
              o().createElement(
                "linearGradient",
                {
                  id: "app-header-gradient",
                  x1: "0%",
                  y1: "0%",
                  x2: "0%",
                  y2: "100%",
                },
                o().createElement("stop", { offset: "0%", stopColor: "#666" }),
                o().createElement("stop", { offset: "100%", stopColor: "#999" })
              )
            )
          );
        },
        rt = (function () {
          var e = function (t, r) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                }),
              e(t, r)
            );
          };
          return function (t, r) {
            if ("function" != typeof r && null !== r)
              throw new TypeError(
                "Class extends value " +
                  String(r) +
                  " is not a constructor or null"
              );
            function n() {
              this.constructor = t;
            }
            e(t, r),
              (t.prototype =
                null === r
                  ? Object.create(r)
                  : ((n.prototype = r.prototype), new n()));
          };
        })(),
        nt = function () {
          return (
            (nt =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            nt.apply(this, arguments)
          );
        },
        it = function (e, t, r, n) {
          return new (r || (r = Promise))(function (i, o) {
            function a(e) {
              try {
                c(n.next(e));
              } catch (e) {
                o(e);
              }
            }
            function l(e) {
              try {
                c(n.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof r
                    ? t
                    : new r(function (e) {
                        e(t);
                      })).then(a, l);
            }
            c((n = n.apply(e, t || [])).next());
          });
        },
        ot = function (e, t) {
          var r,
            n,
            i,
            o,
            a = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = { next: l(0), throw: l(1), return: l(2) }),
            "function" == typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );
          function l(o) {
            return function (l) {
              return (function (o) {
                if (r) throw new TypeError("Generator is already executing.");
                for (; a; )
                  try {
                    if (
                      ((r = 1),
                      n &&
                        (i =
                          2 & o[0]
                            ? n.return
                            : o[0]
                            ? n.throw || ((i = n.return) && i.call(n), 0)
                            : n.next) &&
                        !(i = i.call(n, o[1])).done)
                    )
                      return i;
                    switch (((n = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                      case 0:
                      case 1:
                        i = o;
                        break;
                      case 4:
                        return a.label++, { value: o[1], done: !1 };
                      case 5:
                        a.label++, (n = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !((i = a.trys),
                          (i = i.length > 0 && i[i.length - 1]) ||
                            (6 !== o[0] && 2 !== o[0]))
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!i || (o[1] > i[0] && o[1] < i[3]))
                        ) {
                          a.label = o[1];
                          break;
                        }
                        if (6 === o[0] && a.label < i[1]) {
                          (a.label = i[1]), (i = o);
                          break;
                        }
                        if (i && a.label < i[2]) {
                          (a.label = i[2]), a.ops.push(o);
                          break;
                        }
                        i[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    o = t.call(e, a);
                  } catch (e) {
                    (o = [6, e]), (n = 0);
                  } finally {
                    r = i = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, l]);
            };
          }
        },
        at = (function (e) {
          function t(t) {
            var r = e.call(this, t) || this;
            return (
              Object.defineProperty(r, "_classesHolder", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function () {
                  var e,
                    t = r.state,
                    n = t.tutorials,
                    i = t.buttons;
                  return u()(
                    (((e = {})[I] = !0),
                    (e[P] = !n.default && !i.list),
                    (e[B] = !n.default && i.list),
                    e)
                  );
                },
              }),
              Object.defineProperty(r, "_requestPayload", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function () {
                  return it(r, void 0, void 0, function () {
                    var e;
                    return ot(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return null === (e = this.props.appID)
                            ? [2]
                            : [4, (0, d.lC)("".concat(Be).concat(e))];
                        case 1:
                          return [2, t.sent()];
                      }
                    });
                  });
                },
              }),
              Object.defineProperty(r, "_setInitialState", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function (e) {
                  r.setState(function (t) {
                    return nt(nt({}, t), e);
                  });
                },
              }),
              Object.defineProperty(r, "_checkTutorial", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function () {
                  var e = re(r.state.tutorials, r.props.pageID);
                  r.setState({ tutorialFinded: !!e });
                },
              }),
              Object.defineProperty(r, "_handleTutorialSwitch", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function (e) {
                  r.setState(function (t) {
                    return nt(nt({}, t), { showTutorial: e });
                  });
                },
              }),
              (r.state = {
                pageID: null,
                showTutorial: !1,
                tutorials: {},
                buttons: {},
                labels: {},
                links: {},
                titles: {
                  default: { title: "", ID: null },
                  list: [{ subTitle: "", ID: null }],
                },
              }),
              r
            );
          }
          return (
            rt(t, e),
            Object.defineProperty(t, "getDerivedStateFromProps", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                var r = Number(e.pageID),
                  n = re(t.tutorials, r);
                return e.clientProps
                  ? nt(nt(nt({}, t), e.clientProps), {
                      pageID: r,
                      isClientPropsThrowed: !0,
                      tutorialFinded: !!n,
                    })
                  : r !== t.pageID
                  ? nt(nt({}, t), {
                      pageID: r,
                      showTutorial: !1,
                      tutorialFinded: !!n,
                    })
                  : t;
              },
            }),
            Object.defineProperty(t.prototype, "componentDidMount", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                var e = this;
                this.state.isClientPropsThrowed
                  ? this._checkTutorial()
                  : this._requestPayload()
                      .then(function (t) {
                        return e._setInitialState(t);
                      })
                      .catch(function () {
                        return console.log(
                          "Error fetching payload in AppHeader"
                        );
                      });
              },
            }),
            Object.defineProperty(t.prototype, "render", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                var e,
                  t,
                  r = this.state,
                  n = r.tutorialFinded,
                  i = r.showTutorial,
                  a = r.titles,
                  l = r.buttons,
                  c = r.links,
                  s = r.labels,
                  u = r.tutorials,
                  d = r.isClientPropsThrowed,
                  f = this.props,
                  m = f.pageID,
                  p = f.appID,
                  v = f.linkCallback,
                  _ = f.buttonCallback,
                  b = this._classesHolder();
                return p
                  ? o().createElement(
                      "div",
                      { className: b },
                      o().createElement(tt, null),
                      o().createElement(
                        "div",
                        { className: O },
                        o().createElement(h, { pageID: m, titles: a }),
                        o().createElement(ke, { pageID: m, labels: s }),
                        o().createElement(ce, {
                          pageID: m,
                          links: c,
                          callback: v,
                        }),
                        o().createElement(be, {
                          pageID: m,
                          buttons: l,
                          callback: _,
                        }),
                        o().createElement(Ge, {
                          appID: p,
                          iconSwitch: i,
                          showSwitcher: n,
                          tutorialSwitchHandler: this._handleTutorialSwitch,
                          isClientPropsThrowed: d,
                          isLinksAvailable:
                            null ===
                              (t =
                                null === (e = null == c ? void 0 : c.default) ||
                                void 0 === e
                                  ? void 0
                                  : e.items) || void 0 === t
                              ? void 0
                              : t.length,
                        })
                      ),
                      o().createElement("hr", { className: R }),
                      o().createElement(
                        "div",
                        { className: A },
                        o().createElement(et, {
                          pageID: m,
                          tutorials: u,
                          showTutorial: i,
                        })
                      )
                    )
                  : (console.error(
                      "You must provide an appID for AppHeder first!"
                    ),
                    null);
              },
            }),
            Object.defineProperty(t, "defaultProps", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: { appID: "", pageID: 0, buttonCallback: function () {} },
            }),
            t
          );
        })(i.Component),
        lt = at,
        ct = r(5908),
        st = r(5276),
        ut = function () {
          var e = this;
          Object.defineProperty(this, "_observers", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
            Object.defineProperty(this, "subscribe", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: function (t) {
                e._observers.push(t);
              },
            }),
            Object.defineProperty(this, "unsubscribe", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: function (t) {
                e._observers.filter(function (e) {
                  return e !== t;
                });
              },
            }),
            Object.defineProperty(this, "unsubscribeAll", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: function () {
                e._observers.splice(0, e._observers.length);
              },
            }),
            Object.defineProperty(this, "notify", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: function (t) {
                e._observers.forEach(function (e) {
                  return e(t);
                });
              },
            }),
            Object.defineProperty(this, "getUnits", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: function () {
                return e._observers;
              },
            }),
            (this._observers = []);
        },
        dt = ut,
        ft = function (e) {
          return !!e.classList.contains("dark-mode");
        },
        mt = (function () {
          var e = function (t, r) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                }),
              e(t, r)
            );
          };
          return function (t, r) {
            if ("function" != typeof r && null !== r)
              throw new TypeError(
                "Class extends value " +
                  String(r) +
                  " is not a constructor or null"
              );
            function n() {
              this.constructor = t;
            }
            e(t, r),
              (t.prototype =
                null === r
                  ? Object.create(r)
                  : ((n.prototype = r.prototype), new n()));
          };
        })(),
        pt = (function (e) {
          function t() {
            var t = e.call(this) || this;
            return (
              Object.defineProperty(t, "_targetNode", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(t, "_mutationsConfig", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(t, "_classListMutationCheck", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function (e) {
                  e.forEach(function (e) {
                    "attributes" === e.type && t.notify(ft(t._targetNode));
                  });
                },
              }),
              Object.defineProperty(t, "_connectSubscriber", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function (e) {
                  "function" == typeof e && t.subscribe(e);
                },
              }),
              Object.defineProperty(t, "_checkInitRun", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function () {
                  t.notify(ft(t._targetNode));
                },
              }),
              Object.defineProperty(t, "_startSubscription", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function (e) {
                  return function (r) {
                    t._connectSubscriber(r),
                      t._checkInitRun(),
                      e.observe(t._targetNode, t._mutationsConfig);
                  };
                },
              }),
              Object.defineProperty(t, "_finishSubscription", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function (e) {
                  return function () {
                    t.unsubscribeAll(), e.disconnect();
                  };
                },
              }),
              Object.defineProperty(t, "run", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function () {
                  var e = new MutationObserver(t._classListMutationCheck);
                  return {
                    subscribeOnDarkMode: t._startSubscription(e),
                    unsubscribeFromDarkMode: t._finishSubscription(e),
                  };
                },
              }),
              (t._targetNode = document.body),
              (t._mutationsConfig = {
                attributes: !0,
                attributeFilter: ["class"],
                childList: !1,
                subtree: !1,
              }),
              t
            );
          }
          return mt(t, e), t;
        })(dt),
        vt = (0, new pt().run)(),
        ht = vt.subscribeOnDarkMode,
        _t = vt.unsubscribeFromDarkMode,
        bt = r(9217),
        gt = function () {
          var e = (0, c.I0)(),
            t = (0, bt.Z)();
          (0, i.useEffect)(function () {
            return (
              ht(function (r) {
                r !== t && e({ type: "app/setDarkMode", payload: r });
              }),
              function () {
                return _t();
              }
            );
          });
        },
        Et = r(5925),
        yt = r(7257),
        Ct = function () {
          var e = (0, c.I0)(),
            t = (0, yt.Z)();
          (0, i.useEffect)(
            function () {
              var t = setInterval(function () {
                e(Et.Nw.tick());
              }, 1e3);
              return function () {
                return clearInterval(t);
              };
            },
            [t, e]
          );
        },
        wt = r(2902),
        Dt = r(8027),
        Ft = function () {
          var e = (0, c.v9)(Et.Gi),
            t = (0, c.v9)(Et.DR),
            r = (0, c.v9)(Et.zH);
          return function () {
            return (0, wt.ZP)(Dt.Zs, function (n) {
              n.titles.list.forEach(function (t) {
                e.includes(t.ID) || (t.subTitle = "Crimes");
              }),
                r &&
                  (t
                    ? n.links.default.items.unshift({
                        href: "/loader.php?sid=manageCrimes#/".concat(t),
                        icon: "Log",
                        label: "editor",
                        title: "Editor",
                        isSPALink: !1,
                      })
                    : n.links.list[0].items.unshift({
                        href: "/loader.php?sid=manageCrimes",
                        icon: "Log",
                        label: "editor",
                        title: "Editor",
                      })),
                null === t || e.includes(t) || (n.links.default.items = []);
            });
          };
        },
        It = function () {
          return (0, c.oR)();
        },
        Ot = r(5513),
        At = (0, Ot.kz)(function () {
          return Promise.all([r.e(216), r.e(82), r.e(762)]).then(
            r.bind(r, 5762)
          );
        }),
        Tt = (0, Ot.kz)(function () {
          return Promise.all([r.e(216), r.e(82), r.e(103)]).then(
            r.bind(r, 5103)
          );
        }),
        kt = (0, Ot.kz)(function () {
          return Promise.all([r.e(216), r.e(82), r.e(503)]).then(
            r.bind(r, 5503)
          );
        }),
        Bt = (0, Ot.kz)(function () {
          return Promise.all([r.e(216), r.e(82), r.e(71)]).then(
            r.bind(r, 7071)
          );
        }),
        Pt = (0, Ot.kz)(function () {
          return Promise.all([r.e(216), r.e(82), r.e(326)]).then(
            r.bind(r, 326)
          );
        }),
        St = (0, Ot.kz)(function () {
          return Promise.all([r.e(216), r.e(82), r.e(643)]).then(
            r.bind(r, 4643)
          );
        }),
        Nt = (0, Ot.kz)(function () {
          return Promise.all([r.e(216), r.e(82), r.e(271), r.e(109)]).then(
            r.bind(r, 8049)
          );
        }),
        Lt = (0, Ot.kz)(function () {
          return Promise.all([r.e(216), r.e(82), r.e(271), r.e(345)]).then(
            r.bind(r, 5943)
          );
        }),
        Rt = (0, Ot.kz)(function () {
          return Promise.all([r.e(216), r.e(82), r.e(13)]).then(
            r.bind(r, 9013)
          );
        }),
        xt = (0, Ot.kz)(function () {
          return Promise.all([r.e(216), r.e(82), r.e(903)]).then(
            r.bind(r, 3903)
          );
        }),
        Zt = (0, Ot.kz)(function () {
          return Promise.all([r.e(216), r.e(82), r.e(55)]).then(
            r.bind(r, 6055)
          );
        }),
        jt = r(4724),
        Mt = function (e) {
          var t = document.querySelector("[class^=appHeaderWrapper]");
          if (t) {
            var r = t.querySelector("h4");
            r && (r.textContent = e);
          }
        },
        Ht = r(6646),
        Vt = function (e) {
          var t,
            r = e.title,
            n = e.crimeTypeName;
          return "".concat(
            r || (null !== (t = (0, Ht.Z)(n)) && void 0 !== t ? t : ""),
            " | TORN"
          );
        },
        Wt = function (e) {
          var t,
            r,
            n = e.crimeTypeID,
            a = e.reducer,
            l = e.skeleton,
            s = e.children,
            u = It(),
            d = (0, c.v9)((0, Et.PX)(n)),
            f = null !== (t = d.title) && void 0 !== t ? t : "title",
            m = null !== (r = d.slug) && void 0 !== r ? r : "slug",
            p = (0, c.v9)(Et.Gi);
          return (
            (0, i.useEffect)(
              function () {
                (1 === n ? [2] : 10 === n ? [9] : [n - 1, n + 1]).forEach(
                  function (e) {
                    if (p.includes(e)) {
                      var t = (0, jt.Z)(
                        {
                          1: Tt,
                          2: kt,
                          3: Bt,
                          4: Pt,
                          5: St,
                          6: Nt,
                          7: Lt,
                          8: Rt,
                          9: xt,
                          10: Zt,
                        },
                        e
                      );
                      null == t || t.preload();
                    }
                  }
                );
              },
              [p, n]
            ),
            (0, i.useEffect)(
              function () {
                u.injectReducer(m, a),
                  (document.title = Vt({ title: f })),
                  Mt(f);
              },
              [u, m, a, f]
            ),
            (0, c.v9)(function (e) {
              return Object.prototype.hasOwnProperty.call(e, m);
            })
              ? o().createElement(o().Suspense, { fallback: l }, s)
              : o().createElement(o().Fragment, null, l)
          );
        },
        Gt = r(5710),
        Ut = function () {
          return o().createElement(Gt.ZP, null);
        },
        zt = function (e) {
          return (0, c.v9)(Et.Gi).includes(e);
        },
        Kt = r(8573),
        qt = r(4641),
        Yt = r(7043),
        Xt = function () {
          return zt(qt.Vk)
            ? o().createElement(
                Wt,
                {
                  crimeTypeID: qt.Vk,
                  reducer: Yt.ZP,
                  skeleton: o().createElement(Kt.Z, null),
                },
                o().createElement(At, null)
              )
            : o().createElement(Ut, null);
        },
        Jt = r(1832),
        Qt = r(9754),
        $t = r(7299),
        er = function () {
          return zt(Qt.Vk)
            ? o().createElement(
                Wt,
                {
                  crimeTypeID: Qt.Vk,
                  reducer: $t.ZP,
                  skeleton: o().createElement(Jt.Z, null),
                },
                o().createElement(Tt, null)
              )
            : o().createElement(Ut, null);
        },
        tr = r(4709),
        rr = r(1876),
        nr = r(4528),
        ir = function () {
          return zt(rr.Vk)
            ? o().createElement(
                Wt,
                {
                  crimeTypeID: rr.Vk,
                  reducer: nr.Z,
                  skeleton: o().createElement(tr.Z, null),
                },
                o().createElement(kt, null)
              )
            : o().createElement(Ut, null);
        },
        or = r(6194),
        ar = r(5718),
        lr = r(8192),
        cr = function () {
          return zt(ar.Vk)
            ? o().createElement(
                Wt,
                {
                  crimeTypeID: ar.Vk,
                  reducer: lr.ZP,
                  skeleton: o().createElement(or.Z, null),
                },
                o().createElement(Bt, null)
              )
            : o().createElement(Ut, null);
        },
        sr = r(6811),
        ur = r(7655),
        dr = r(4857),
        fr = r(6415),
        mr = r(126),
        pr = function (e, t) {
          var r,
            n,
            i,
            o,
            a = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = { next: l(0), throw: l(1), return: l(2) }),
            "function" == typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );
          function l(o) {
            return function (l) {
              return (function (o) {
                if (r) throw new TypeError("Generator is already executing.");
                for (; a; )
                  try {
                    if (
                      ((r = 1),
                      n &&
                        (i =
                          2 & o[0]
                            ? n.return
                            : o[0]
                            ? n.throw || ((i = n.return) && i.call(n), 0)
                            : n.next) &&
                        !(i = i.call(n, o[1])).done)
                    )
                      return i;
                    switch (((n = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                      case 0:
                      case 1:
                        i = o;
                        break;
                      case 4:
                        return a.label++, { value: o[1], done: !1 };
                      case 5:
                        a.label++, (n = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !((i = a.trys),
                          (i = i.length > 0 && i[i.length - 1]) ||
                            (6 !== o[0] && 2 !== o[0]))
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!i || (o[1] > i[0] && o[1] < i[3]))
                        ) {
                          a.label = o[1];
                          break;
                        }
                        if (6 === o[0] && a.label < i[1]) {
                          (a.label = i[1]), (i = o);
                          break;
                        }
                        if (i && a.label < i[2]) {
                          (a.label = i[2]), a.ops.push(o);
                          break;
                        }
                        i[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    o = t.call(e, a);
                  } catch (e) {
                    (o = [6, e]), (n = 0);
                  } finally {
                    r = i = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, l]);
            };
          }
        };
      function vr() {
        var e;
        return pr(this, function (t) {
          switch (t.label) {
            case 0:
              return [4, (0, fr.Z)("".concat(Dt.mY, "&step=hub"))];
            case 1:
              return (
                (e = t.sent()),
                [
                  4,
                  (0, dr.gz)({
                    type: Et.Nw.legacyHubDataLoaded.type,
                    payload: e,
                  }),
                ]
              );
            case 2:
              return t.sent(), [2];
          }
        });
      }
      function hr() {
        return pr(this, function (e) {
          switch (e.label) {
            case 0:
              return [4, (0, dr.Fm)("LOAD_HUB_DATA", vr)];
            case 1:
              return e.sent(), [2];
          }
        });
      }
      function _r() {
        var e;
        return pr(this, function (t) {
          switch (t.label) {
            case 0:
              return [4, (0, dr.Ys)(Et.sl)];
            case 1:
              return (e = t.sent()), (0, mr.F)(e), [2];
          }
        });
      }
      function br() {
        return pr(this, function (e) {
          switch (e.label) {
            case 0:
              return [4, (0, dr.ib)(Et.Nw.setFixedOutcome.type, _r)];
            case 1:
              return e.sent(), [2];
          }
        });
      }
      function gr() {
        return pr(this, function (e) {
          switch (e.label) {
            case 0:
              return [4, (0, dr.ib)(Et.Nw.unsetFixedOutcome.type, _r)];
            case 1:
              return e.sent(), [2];
          }
        });
      }
      var Er = (0, sr.ZP)(),
        yr = function (e) {
          return Er.run(e);
        },
        Cr = (0, ur.ZP)(Er),
        wr = Cr.injectSaga;
      Cr.cancelTask;
      function Dr() {
        return pr(this, function (e) {
          switch (e.label) {
            case 0:
              return [4, (0, dr.$6)([hr(), br(), gr()])];
            case 1:
              return e.sent(), [2];
          }
        });
      }
      var Fr = Er,
        Ir = r(6879),
        Or = r(5690),
        Ar = r(2888),
        Tr = function (e, t) {
          var r,
            n,
            i,
            o,
            a = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = { next: l(0), throw: l(1), return: l(2) }),
            "function" == typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );
          function l(o) {
            return function (l) {
              return (function (o) {
                if (r) throw new TypeError("Generator is already executing.");
                for (; a; )
                  try {
                    if (
                      ((r = 1),
                      n &&
                        (i =
                          2 & o[0]
                            ? n.return
                            : o[0]
                            ? n.throw || ((i = n.return) && i.call(n), 0)
                            : n.next) &&
                        !(i = i.call(n, o[1])).done)
                    )
                      return i;
                    switch (((n = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                      case 0:
                      case 1:
                        i = o;
                        break;
                      case 4:
                        return a.label++, { value: o[1], done: !1 };
                      case 5:
                        a.label++, (n = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !((i = a.trys),
                          (i = i.length > 0 && i[i.length - 1]) ||
                            (6 !== o[0] && 2 !== o[0]))
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!i || (o[1] > i[0] && o[1] < i[3]))
                        ) {
                          a.label = o[1];
                          break;
                        }
                        if (6 === o[0] && a.label < i[1]) {
                          (a.label = i[1]), (i = o);
                          break;
                        }
                        if (i && a.label < i[2]) {
                          (a.label = i[2]), a.ops.push(o);
                          break;
                        }
                        i[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    o = t.call(e, a);
                  } catch (e) {
                    (o = [6, e]), (n = 0);
                  } finally {
                    r = i = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, l]);
            };
          }
        };
      function kr() {
        var e;
        return Tr(this, function (t) {
          switch (t.label) {
            case 0:
              return [4, (0, dr.Ys)(Et.Do)];
            case 1:
              return t.sent() !== Or.iQ ? [2] : [4, (0, dr.Ys)(Ar.su)];
            case 2:
              return t.sent().some(function (e) {
                return 0 === e.secondsLeft;
              })
                ? [4, (0, dr.gw)(1e3)]
                : [3, 6];
            case 3:
              return (
                t.sent(),
                [
                  4,
                  (0, dr.RE)(
                    fr.Z,
                    "".concat(Dt.mY, "&step=crimesList&typeID=").concat(Or.Vk)
                  ),
                ]
              );
            case 4:
              return (
                (e = t.sent()),
                [4, (0, dr.gz)({ type: Ar.Nw.dataFetched.type, payload: e.DB })]
              );
            case 5:
              t.sent(), (t.label = 6);
            case 6:
              return [2];
          }
        });
      }
      function Br() {
        return Tr(this, function (e) {
          switch (e.label) {
            case 0:
              return [4, (0, dr.$6)([(0, dr.ib)(Et.Nw.tick.type, kr)])];
            case 1:
              return e.sent(), [2];
          }
        });
      }
      var Pr = function () {
          return zt(Or.Vk)
            ? ((0, i.useEffect)(function () {
                wr({ key: Or.iQ, saga: Br });
              }, []),
              o().createElement(
                Wt,
                {
                  crimeTypeID: Or.Vk,
                  reducer: Ar.ZP,
                  skeleton: o().createElement(Ir.Z, null),
                },
                o().createElement(Pt, null)
              ))
            : o().createElement(Ut, null);
        },
        Sr = r(1770),
        Nr = r(9401),
        Lr = r(2489),
        Rr = function () {
          return zt(Nr.Vk)
            ? o().createElement(
                Wt,
                {
                  crimeTypeID: Nr.Vk,
                  reducer: Lr.Z,
                  skeleton: o().createElement(Sr.Z, null),
                },
                o().createElement(St, null)
              )
            : o().createElement(Ut, null);
        },
        xr = r(2216),
        Zr = r(6199),
        jr = r(131),
        Mr = function () {
          return zt(Zr.Vk)
            ? o().createElement(
                Wt,
                {
                  crimeTypeID: Zr.Vk,
                  reducer: jr.Z,
                  skeleton: o().createElement(xr.Z, null),
                },
                o().createElement(Nt, null)
              )
            : o().createElement(Ut, null);
        },
        Hr = r(9692),
        Vr = r(6710),
        Wr = r(5419),
        Gr = function () {
          return zt(Vr.Vk)
            ? o().createElement(
                Wt,
                {
                  crimeTypeID: Vr.Vk,
                  reducer: Wr.Z,
                  skeleton: o().createElement(Hr.Z, null),
                },
                o().createElement(Lt, null)
              )
            : o().createElement(Ut, null);
        },
        Ur = r(9678),
        zr = r(9931),
        Kr = r(3841),
        qr = function () {
          return zt(zr.Vk)
            ? o().createElement(
                Wt,
                {
                  crimeTypeID: zr.Vk,
                  reducer: Kr.Z,
                  skeleton: o().createElement(Ur.Z, null),
                },
                o().createElement(Rt, null)
              )
            : o().createElement(Ut, null);
        },
        Yr = r(4403),
        Xr = r(9253),
        Jr = r(1818),
        Qr = function () {
          return zt(Xr.Vk)
            ? o().createElement(
                Wt,
                {
                  crimeTypeID: Xr.Vk,
                  reducer: Jr.Z,
                  skeleton: o().createElement(Yr.Z, null),
                },
                o().createElement(xt, null)
              )
            : o().createElement(Ut, null);
        },
        $r = r(6361),
        en = r(7234),
        tn = r(9859),
        rn = function () {
          return zt(en.Vk)
            ? o().createElement(
                Wt,
                {
                  crimeTypeID: en.Vk,
                  reducer: tn.Z,
                  skeleton: o().createElement($r.Z, null),
                },
                o().createElement(Zt, null)
              )
            : o().createElement(Ut, null);
        },
        nn = r(103),
        on = r(2377),
        an = r(1813),
        ln = function () {
          return (
            (ln =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            ln.apply(this, arguments)
          );
        },
        cn = function (e, t) {
          return (0, an.Z)("hub", e, t);
        },
        sn = {
          reset: cn("reset", function (e) {
            return ln(
              ln(
                {},
                {
                  crimeTypesLoaded: !1,
                  crimeTypes: [],
                  searchForCashStatus: {
                    loaded: !1,
                    crimes: [],
                    dirtyBomb: !1,
                  },
                  bootleggingStatus: {
                    loaded: !1,
                    queueSize: 0,
                    stock: [],
                    storeProgress: 0,
                    storeIncome: null,
                    secondsLeftForCurrentDVD: 0,
                    secondsPerDVD: 0,
                    time: 0,
                  },
                }
              ),
              { crimeTypesLoaded: e.crimeTypesLoaded, crimeTypes: e.crimeTypes }
            );
          }),
          crimesLoaded: cn(
            "crimesLoaded",
            (0, wt.ZP)(function (e, t) {
              (0, on.Z)(t) ||
                ((e.crimeTypesLoaded = !0),
                (e.crimeTypes = t.DB.crimesTypes.map(function (e) {
                  return {
                    ID: e.typeID,
                    title: e.title,
                    slug: e.crimeRoute,
                    level: e.currentLevel,
                    nextLevelProgress: e.nextLevelProgress,
                  };
                })));
            })
          ),
          searchForCashStatusLoaded: cn(
            "searchForCashStatusLoaded",
            (0, wt.ZP)(function (e, t) {
              var r = t.DB.crimes[1];
              (e.searchForCashStatus.loaded = !0),
                (e.searchForCashStatus.crimes = Object.entries(r).map(function (
                  e
                ) {
                  var t = e[0],
                    r = e[1],
                    n = r.title,
                    i = r.bar,
                    o = r.progressIconState,
                    a = r.scale;
                  return {
                    title: n,
                    crimeID: Number(t),
                    density: i,
                    densityIconIndex: o - 1,
                    barProgress: a,
                  };
                })),
                (e.searchForCashStatus.dirtyBomb = t.DB.dirtyBomb);
            })
          ),
          bootleggingStatusLoaded: cn(
            "bootleggingStatusLoaded",
            (0, wt.ZP)(function (e, t) {
              var r,
                n,
                i,
                o,
                a = t.DB.crimes[2];
              (e.bootleggingStatus.loaded = !0),
                (e.bootleggingStatus.queueSize = a.currentQueue),
                (e.bootleggingStatus.stock = a.cdsLeft),
                (e.bootleggingStatus.storeProgress =
                  null !== (r = a.storeProgress) && void 0 !== r ? r : 0),
                (e.bootleggingStatus.storeIncome =
                  null !== (n = a.moneyToCollect) && void 0 !== n ? n : null),
                (e.bootleggingStatus.secondsLeftForCurrentDVD =
                  null !== (i = a.timeLeftForNextCD) && void 0 !== i ? i : 0),
                (e.bootleggingStatus.secondsPerDVD =
                  null !== (o = a.timeForCD) && void 0 !== o ? o : 0),
                (e.bootleggingStatus.time = t.DB.time);
            })
          ),
        },
        un = function (e, t) {
          var r,
            n =
              null ===
                (r = Object.values(sn).find(function (e) {
                  return e.type === t.type;
                })) || void 0 === r
                ? void 0
                : r.reducer;
          return n
            ? n(e, t.payload)
            : null != e
            ? e
            : {
                crimeTypesLoaded: !1,
                crimeTypes: [],
                searchForCashStatus: { loaded: !1, crimes: [], dirtyBomb: !1 },
                bootleggingStatus: {
                  loaded: !1,
                  queueSize: 0,
                  stock: [],
                  storeProgress: 0,
                  storeIncome: null,
                  secondsLeftForCurrentDVD: 0,
                  secondsPerDVD: 0,
                  time: 0,
                },
              };
        },
        dn = function (e) {
          return e.hub.crimeTypesLoaded;
        },
        fn = function (e) {
          var t = e.app.availableCrimeTypes.map(function (e) {
            return e.ID;
          });
          return e.hub.crimeTypes.filter(function (e) {
            return t.includes(e.ID);
          });
        },
        mn = function (e) {
          return e.hub.searchForCashStatus;
        },
        pn = function (e) {
          return e.hub.bootleggingStatus;
        },
        vn = r(5480),
        hn = function (e, t) {
          var r = (0, i.useRef)(function () {
            (0, fr.Z)(e).then(function (e) {
              t(e);
            });
          });
          return (
            (0, i.useEffect)(function () {
              r.current();
            }, []),
            (0, i.useEffect)(function () {
              var e = setInterval(function () {
                r.current();
              }, 2e4);
              return function () {
                return clearInterval(e);
              };
            }, []),
            (0, vn.Z)(function (e) {
              "visible" === e && r.current();
            }, []),
            { fetchAndUpdate: r }
          );
        },
        _n = r(1994),
        bn = function (e, t) {
          var r = (0, c.I0)();
          return {
            refresh: hn(
              "".concat(Dt.mY, "&step=api&crimeTypeID=").concat(e),
              function (e) {
                r(t(e));
              }
            ).fetchAndUpdate.current,
          };
        },
        gn = r(4184),
        En = r.n(gn),
        yn = r(4886),
        Cn = r(7111),
        wn = r(2494),
        Dn = "overlayedIcon___BNHRv",
        Fn = function () {
          return (
            (Fn =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            Fn.apply(this, arguments)
          );
        },
        In = function (e) {
          var t = (0, Cn.Z)(),
            r = e.topColor,
            n = e.bottomColor,
            i = e.framePaddingTop,
            a = e.framePaddingBottom,
            l = {
              sheetPath: e.sheetPath,
              frameX: e.frameX,
              frameY: e.frameY,
              horizontalFramesCount: e.horizontalFramesCount,
              frameSizeX: e.frameSizeX,
              frameSizeY: e.frameSizeY,
            };
          return o().createElement(
            o().Fragment,
            null,
            o().createElement(wn.Z, Fn({}, l, { style: { filter: t(r) } })),
            o().createElement(
              wn.Z,
              Fn({}, l, {
                className: Dn,
                style: {
                  "--frame-padding-top": "".concat(i, "px"),
                  "--frame-padding-bottom": "".concat(a, "px"),
                  filter: t(n),
                },
              })
            )
          );
        },
        On = r(4245),
        An = r(1033),
        Tn = "statusCirclePosition___l_L_o",
        kn = "statusCircle___TOpst",
        Bn = "gray___iSvA2",
        Pn = "red___MwCzH",
        Sn = "green___Yl2a4",
        Nn = "blue___D9ySt",
        Ln = "iconPosition___mTlqR",
        Rn = "hasText___Rcxzb",
        xn = "text___X11lO",
        Zn = 24,
        jn = {
          gray: {
            top: { light: "#999", dark: "#fff" },
            bottom: { light: "#ccc", dark: "#ccc" },
          },
          red: {
            top: { light: "#C92A2A", dark: "#FFC9C9" },
            bottom: { light: "#FF6B6B", dark: "#FF8787" },
          },
          green: {
            top: { light: "#2B8A3E", dark: "#D8F5A2" },
            bottom: { light: "#82C91E", dark: "#A9E34B" },
          },
          blue: {
            top: { light: "#1971C2", dark: "#A5D8FF" },
            bottom: { light: "#4DABF7", dark: "#4DABF7" },
          },
          orange: {
            top: { light: "#F76707", dark: "#FFE066" },
            bottom: { light: "#F59F00", dark: "#F59F00" },
          },
        },
        Mn = function (e) {
          var t = e.tooltip,
            r = e.color,
            n = e.sheetIcon,
            i = e.text,
            a = e.visualProgress,
            l = e.className,
            c = e.children,
            s = (0, bt.Z)() ? "dark" : "light",
            u = (0, An.Z)();
          return o().createElement(On.Z, { content: t }, function (e) {
            var t,
              d,
              f,
              m,
              p,
              v,
              h,
              _,
              b,
              g,
              E,
              y,
              C,
              w,
              D,
              F = e.triggerId;
            return o().createElement(
              "div",
              { id: F, className: Tn },
              o().createElement(
                "div",
                {
                  className: En()(
                    kn,
                    ((t = {}),
                    (t[Bn] = "gray" === r),
                    (t[Pn] = "red" === r),
                    (t[Sn] = "green" === r),
                    (t[Nn] = "blue" === r),
                    (t[Rn] = "string" == typeof i),
                    t),
                    l
                  ),
                  onClick: function (e) {
                    "desktop" !== u && e.preventDefault();
                  },
                },
                n &&
                  o().createElement(
                    "div",
                    {
                      className: Ln,
                      style: {
                        transform: n.translateY
                          ? "translateY(".concat(n.translateY, "px)")
                          : void 0,
                      },
                    },
                    ((D = o().createElement(In, {
                      topColor:
                        null !==
                          (f =
                            null === (d = jn[r]) || void 0 === d
                              ? void 0
                              : d.top[s]) && void 0 !== f
                          ? f
                          : r,
                      bottomColor:
                        null !==
                          (p =
                            null === (m = jn[r]) || void 0 === m
                              ? void 0
                              : m.bottom[s]) && void 0 !== p
                          ? p
                          : r,
                      framePaddingTop:
                        null !==
                          (h =
                            null !== (v = n.framePaddingY) && void 0 !== v
                              ? v
                              : n.framePaddingTop) && void 0 !== h
                          ? h
                          : 0,
                      framePaddingBottom:
                        null !==
                          (b =
                            null !== (_ = n.framePaddingY) && void 0 !== _
                              ? _
                              : n.framePaddingBottom) && void 0 !== b
                          ? b
                          : 0,
                      sheetPath: n.path,
                      frameX: n.frameX,
                      frameY: n.frameY,
                      horizontalFramesCount: n.horizontalFramesCount,
                      frameSizeX:
                        null !== (g = n.frameSize) && void 0 !== g ? g : Zn,
                      frameSizeY:
                        null !==
                          (y =
                            null !== (E = n.frameSizeY) && void 0 !== E
                              ? E
                              : n.frameSize) && void 0 !== y
                          ? y
                          : Zn,
                    })),
                    n.scale && 1 !== n.scale
                      ? o().createElement(
                          "div",
                          {
                            style: { transform: "scale(".concat(n.scale, ")") },
                          },
                          D
                        )
                      : D)
                  ),
                i && o().createElement("div", { className: xn }, i),
                !!a &&
                  o().createElement(yn.Ip, {
                    value: a,
                    strokeWidth: 5,
                    styles: (0, yn.y3)({
                      pathColor:
                        null !==
                          (w =
                            null === (C = jn[r]) || void 0 === C
                              ? void 0
                              : C.bottom[s]) && void 0 !== w
                          ? w
                          : r,
                      trailColor: "transparent",
                      strokeLinecap: "butt",
                      pathTransition: "none",
                    }),
                  }),
                c
              )
            );
          });
        };
      Mn.defaultProps = { color: "gray" };
      var Hn,
        Vn = Mn,
        Wn = r(9670),
        Gn = r(9093),
        Un = "statusCircles___GINlr",
        zn = "appear___cWaWT",
        Kn = "appearActive___tnxbU",
        qn = function (e) {
          var t = (0, Gn.Z)(e.overlap),
            r = i.Children.toArray(e.children).filter(Boolean).length,
            n = 24 * (r - 1);
          return o().createElement(
            Wn.Z,
            {
              in: !0,
              appear: !0,
              classNames: { appear: zn, appearActive: Kn },
              timeout: 300,
            },
            o().createElement(
              "div",
              {
                className: Un,
                style:
                  "number" == typeof t ? { width: n - (r - 1) * t } : void 0,
              },
              e.children
            )
          );
        },
        Yn = function (e, t, r) {
          if (r || 2 === arguments.length)
            for (var n, i = 0, o = t.length; i < o; i++)
              (!n && i in t) ||
                (n || (n = Array.prototype.slice.call(t, 0, i)), (n[i] = t[i]));
          return e.concat(n || Array.prototype.slice.call(t));
        },
        Xn = function () {
          bn(Dt.UI, sn.searchForCashStatusLoaded);
          var e = (0, c.v9)(mn);
          return e.loaded
            ? o().createElement(
                qn,
                { overlap: { desktop: 5, tablet: -5, mobile: 3 } },
                Yn([], e.crimes, !0)
                  .reverse()
                  .map(function (t) {
                    var r = 2 === t.crimeID && e.dirtyBomb;
                    return o().createElement(Vn, {
                      key: t.crimeID,
                      tooltip: r
                        ? "".concat(
                            t.title.replace("Search the ", ""),
                            ": Closed"
                          )
                        : "".concat(t.title, " (").concat(t.density, "%)"),
                      color: r ? "gray" : (0, _n.Z)(t),
                      sheetIcon: {
                        path: "/images/v2/crimes/00-hub/01-searchforcash-status-icons.svg",
                        frameX:
                          1 === t.crimeID
                            ? t.densityIconIndex
                            : 2 === t.crimeID
                            ? 2 + (r ? 0 : t.densityIconIndex)
                            : 3 === t.crimeID
                            ? 6 + t.densityIconIndex
                            : 4 === t.crimeID
                            ? 8 + t.densityIconIndex
                            : 5 === t.crimeID
                            ? 11 + t.densityIconIndex
                            : 6 === t.crimeID
                            ? 13 + t.densityIconIndex
                            : 0,
                        frameY: 0,
                        frameSize: 24,
                        frameSizeY: 24,
                        horizontalFramesCount: 15,
                      },
                      visualProgress: r ? 0 : t.density,
                    });
                  })
              )
            : null;
        },
        Jn = r(8442),
        Qn = r(7891),
        $n = r(5482),
        ei = "reflection___YXFLx",
        ti = "/images/v2/crimes/00-hub/02-bootlegging-status-icons.svg",
        ri = function () {
          var e = bn(Dt.T8, sn.bootleggingStatusLoaded).refresh,
            t = (0, bt.Z)() ? "dark" : "light",
            r = (0, Cn.Z)(),
            n = (0, c.v9)(pn),
            i = n.time,
            a = (0, Jn.Z)() - i;
          if (!n.loaded) return null;
          var l = n.stock.some(function (e) {
              return 0 === e;
            }),
            s = n.stock.reduce(function (e, t) {
              return e + t;
            }, 0);
          n.queueSize > 0 && n.secondsLeftForCurrentDVD - a <= 0 && e();
          return o().createElement(
            qn,
            { overlap: { desktop: 5, tablet: -5, mobile: -2 } },
            "number" != typeof n.storeIncome
              ? null
              : o().createElement(Vn, {
                  tooltip: "Store funds to collect: ".concat(
                    (0, Qn.Z)(n.storeIncome, { prefixCurrencySymbol: !0 })
                  ),
                  color: n.storeIncome > 0 ? "green" : "gray",
                  sheetIcon: {
                    path: ti,
                    horizontalFramesCount: 6,
                    frameX: 5,
                    frameY: 1,
                    framePaddingY: 6,
                  },
                  text: (0, Qn.Z)(n.storeIncome, { condensed: !0 }),
                }),
            0 === n.storeProgress || 100 === n.storeProgress
              ? null
              : o().createElement(Vn, {
                  tooltip: "Set up online store progress: ".concat(
                    n.storeProgress,
                    "%"
                  ),
                  color: "green",
                  sheetIcon: {
                    path: ti,
                    horizontalFramesCount: 6,
                    frameX: 4,
                    frameY: 1,
                    framePaddingY: 7,
                  },
                  visualProgress: n.storeProgress,
                }),
            0 === s
              ? null
              : o().createElement(Vn, {
                  tooltip: "Total stock: ".concat((0, Qn.Z)(s), " DVDs"),
                  color: s > 0 ? "green" : "gray",
                  sheetIcon: {
                    path: ti,
                    horizontalFramesCount: 6,
                    frameX: 3,
                    frameY: 1,
                    framePaddingY: 7,
                  },
                  text: (0, Qn.Z)(s, { condensed: !0 }),
                }),
            0 !== s && l
              ? o().createElement(Vn, {
                  tooltip: "At least one genre is out of stock",
                  color: "red",
                  sheetIcon: {
                    path: ti,
                    horizontalFramesCount: 6,
                    frameX: 2,
                    frameY: 1,
                    framePaddingY: 4,
                  },
                })
              : null,
            (function () {
              if (0 === n.queueSize) return null;
              var e = (0, $n.Z)(
                (n.queueSize - 1) * n.secondsPerDVD +
                  n.secondsLeftForCurrentDVD -
                  a,
                { asDigitalClockPreset: !0 }
              );
              return o().createElement(Vn, {
                tooltip: o().createElement(
                  o().Fragment,
                  null,
                  "Queued for copying: ",
                  (0, Qn.Z)(n.queueSize),
                  " ",
                  1 === n.queueSize ? "DVD" : "DVDs",
                  " (",
                  e,
                  ")"
                ),
                color: n.queueSize > 0 ? "blue" : "gray",
                sheetIcon: {
                  path: ti,
                  horizontalFramesCount: 6,
                  frameX: 3,
                  frameY: 1,
                  framePaddingY: 7,
                },
                text: (0, Qn.Z)(n.queueSize, { condensed: !0 }),
              });
            })(),
            0 === n.queueSize
              ? null
              : o().createElement(
                  Vn,
                  { tooltip: "Copying in progress", color: "blue" },
                  o().createElement(
                    "div",
                    { className: ei },
                    o().createElement(wn.Z, {
                      sheetPath: ti,
                      frameX: 1,
                      frameY: 1,
                      horizontalFramesCount: 6,
                      frameSizeX: Zn,
                      frameSizeY: Zn,
                      style: { filter: r(jn.blue.top[t]) },
                    })
                  ),
                  o().createElement(In, {
                    topColor: jn.blue.top[t],
                    bottomColor: jn.blue.bottom[t],
                    framePaddingTop: 3,
                    framePaddingBottom: 3,
                    sheetPath: ti,
                    frameX: 0,
                    frameY: 1,
                    horizontalFramesCount: 6,
                    frameSizeX: Zn,
                    frameSizeY: Zn,
                  })
                )
          );
        },
        ni = r(731),
        ii = r(2970),
        oi = {
          crimeType: "crimeType___b1ns6",
          titleBarWrapper: "titleBarWrapper___bw6lN",
          titleBar: "titleBar___z2XfM",
          maxLevel: "maxLevel___wXhhW",
          crimeTitle: "crimeTitle___nR57G",
          levelBar: "levelBar___J_wfZ",
          barTrack: "barTrack___VhpT_",
          barFill: "barFill___Ji_4L",
          barTip: "barTip___ft86_",
          leading: "leading___Hju7r",
          trailing: "trailing___hsfDe",
          barClip: "barClip___x8Ov4",
          barClip1: "barClip1___bNd3d",
          barClip2: "barClip2____MNfT",
          barClip3: "barClip3___laLKn",
          levelStarWrapper: "levelStarWrapper___t_JTJ",
          statusCirclesPosition: "statusCirclesPosition___SM257",
        },
        ai = o().createContext(null),
        li = function (e) {
          var t = e.crimeType,
            r = e.children,
            n = (0, i.useState)(0),
            a = n[0],
            l = n[1],
            c = (0, i.useMemo)(
              function () {
                return { crimeType: t, titleWidth: a, setTitleWidth: l };
              },
              [t, a]
            );
          return o().createElement(ai.Provider, { value: c }, r);
        },
        ci = "image___uywHe",
        si = "gradient___KNm9p",
        ui = "lines___qqcYg",
        di = function (e) {
          var t = e.crimeType,
            r = "desktop" === (0, An.Z)() ? "desktop" : "tablet",
            n = t.ID.toString().padStart(2, "0"),
            i = "-webkit-image-set(\n    url('/images/v2/crimes/00-hub/"
              .concat(n, "-")
              .concat(t.slug, "-")
              .concat(r, "-1x.webp') 1x,\n    url('/images/v2/crimes/00-hub/")
              .concat(n, "-")
              .concat(t.slug, "-")
              .concat(r, "-2x.webp') 2x,\n    url('/images/v2/crimes/00-hub/")
              .concat(n, "-")
              .concat(t.slug, "-")
              .concat(r, "-3x.webp') 3x,\n    url('/images/v2/crimes/00-hub/")
              .concat(n, "-")
              .concat(t.slug, "-")
              .concat(r, "-4x.webp') 4x)");
          return o().createElement(
            "div",
            { className: ci, style: { backgroundImage: i } },
            o().createElement("div", { className: si }),
            o().createElement("div", { className: ui })
          );
        },
        fi = function (e) {
          var t,
            r = e.children,
            n = (function () {
              var e = o().useContext(ai);
              if (!e)
                throw Error(
                  "useCrimeType must be used within a CrimeTypeProvider"
                );
              return e;
            })(),
            a = n.crimeType,
            l = n.titleWidth,
            c = n.setTitleWidth,
            s = (0, ni.Z)(),
            u = s[0],
            d = s[1].width;
          (0, i.useEffect)(
            function () {
              c(d);
            },
            [c, d]
          );
          var f = a.level === Dt.RM;
          return o().createElement(
            ct.rU,
            {
              to: "/".concat(a.slug),
              className: En()(
                "crimes-hub-crime",
                oi.crimeType,
                oi[a.slug],
                ((t = {}), (t[oi.maxLevel] = f), t)
              ),
            },
            o().createElement(di, { crimeType: a }),
            o().createElement(
              "div",
              { className: oi.titleBarWrapper },
              o().createElement(
                "div",
                { className: oi.titleBar },
                o().createElement(
                  "span",
                  { className: oi.crimeTitle, ref: u },
                  a.title
                )
              )
            ),
            o().createElement(
              "div",
              { className: oi.levelBar },
              o().createElement("div", { className: oi.barTrack }),
              o().createElement(
                "div",
                {
                  className: oi.barFill,
                  style: { width: "".concat(a.nextLevelProgress, "%") },
                },
                o().createElement("div", {
                  className: En()(oi.barTip, oi.leading),
                }),
                o().createElement("div", {
                  className: En()(oi.barTip, oi.trailing),
                })
              ),
              o().createElement("div", {
                className: En()(oi.barClip, oi.barClip1),
              }),
              o().createElement("div", {
                className: En()(oi.barClip, oi.barClip2),
              }),
              o().createElement("div", {
                className: En()(oi.barClip, oi.barClip3),
              }),
              o().createElement(
                "div",
                { className: oi.levelStarWrapper },
                o().createElement(ii.Z, {
                  level: a.level,
                  starScale: 0.8,
                  withShadow: !0,
                })
              )
            ),
            o().createElement(
              "div",
              {
                className: oi.statusCirclesPosition,
                style: { "--title-width": "".concat(l, "px") },
              },
              r
            )
          );
        },
        mi = "crimeTypeLocked___B51nX",
        pi = "top___EiqOT",
        vi = "bottom___Rj408",
        hi = function () {
          var e = (0, bt.Z)();
          return o().createElement(
            "div",
            { className: mi },
            o().createElement(
              "div",
              { className: pi },
              o().createElement("img", {
                src: "/images/v2/crimes/00-hub/lock-".concat(
                  e ? "dark" : "light",
                  ".svg"
                ),
                alt: "",
              })
            ),
            o().createElement("div", { className: vi }, "Locked")
          );
        },
        _i = "crimeTypes___s0XwG",
        bi = "crimeTypeSkeleton___cgerf",
        gi = "secretiveDark___F7vaT",
        Ei = "secretiveLight___yFALw",
        yi = "rootShape___YUWqI",
        Ci = "tabletImage___vUgVl",
        wi = "barAndTitle___yNeBc",
        Di = "barShape___UkeIL",
        Fi = "titleText___sz5j4",
        Ii = function (e) {
          var t,
            r = e.crimeTypeID,
            n = (0, bt.Z)(),
            i = (0, c.v9)(Et.Gi).includes(r),
            a = function (e) {
              return (
                void 0 === e && (e = "skeleton-element"),
                n
                  ? (0, jt.Z)(
                      {
                        "crimeOption-bgColor": "skeleton-element",
                        "skeleton-element": "crimeOption-bgColor",
                      },
                      e
                    )
                  : e
              );
            };
          return o().createElement(
            "div",
            {
              className: En()(
                bi,
                ((t = {}), (t[Ei] = !n && !i), (t[gi] = n && !i), t)
              ),
            },
            o().createElement(
              Gt.bn,
              {
                as: "silhouette",
                className: yi,
                color: a("crimeOption-bgColor"),
                borderRadius: ".3125rem",
              },
              o().createElement(Gt.bn, {
                className: Ci,
                height: 42,
                as: "silhouette",
                color: a(),
              }),
              o().createElement(
                "div",
                { className: wi },
                o().createElement(Gt.bn, {
                  className: Di,
                  as: "silhouette",
                  height: 2,
                  color: a(),
                }),
                o().createElement(Gt.xv, {
                  className: Fi,
                  width: (function () {
                    var e, t;
                    return i &&
                      null !==
                        (t = (0, jt.Z)(
                          (((e = {})[Dt.UI] = 107),
                          (e[Dt.T8] = 82),
                          (e[Dt.tH] = 53),
                          (e[Dt.ir] = 77),
                          (e[Dt.hn] = 93),
                          (e[Dt.ds] = 99),
                          (e[Dt.To] = 63),
                          (e[Dt.OR] = 59),
                          (e[Dt.q5] = 57),
                          (e[Dt.Pj] = 60),
                          e),
                          r
                        )) &&
                      void 0 !== t
                      ? t
                      : 45;
                  })(),
                  height: 16,
                  color: a(),
                })
              )
            )
          );
        },
        Oi = "skeleton___Bv12v",
        Ai = function () {
          return o().createElement(
            "div",
            { className: Oi },
            Array.from(Array(12).keys()).map(function (e) {
              return o().createElement(Ii, { key: e, crimeTypeID: e + 1 });
            })
          );
        },
        Ti = function () {
          var e = (0, c.I0)(),
            t = (0, c.v9)(dn),
            r = (0, c.v9)(fn);
          if (
            (hn("".concat(Dt.mY, "&step=hub"), function (t) {
              e(sn.crimesLoaded(t));
            }),
            (0, nn.Z)(function () {
              e(sn.reset());
            }),
            !t)
          )
            return o().createElement(
              "div",
              { className: "crimes-hub-root" },
              o().createElement(Ai, null)
            );
          var n = Array.from(Array(12).keys()).map(function (e) {
            return e + 1;
          });
          return o().createElement(
            "div",
            { className: "crimes-hub-root" },
            o().createElement(
              "div",
              { className: _i },
              n.map(function (e) {
                var t = r.find(function (t) {
                  return t.ID === e;
                });
                return t
                  ? o().createElement(
                      li,
                      { key: e, crimeType: t },
                      o().createElement(
                        fi,
                        null,
                        e === Dt.UI && o().createElement(Xn, null),
                        e === Dt.T8 && o().createElement(ri, null)
                      )
                    )
                  : o().createElement(hi, { key: e });
              })
            )
          );
        },
        ki = function () {
          return (
            (0, i.useEffect)(function () {
              (document.title = Vt({ title: "Crimes" })), Mt("Crimes");
            }, []),
            o().createElement(Ti, null)
          );
        },
        Bi = "criminalRecordChanges___WoFfS",
        Pi = "categoriesColumn___dRlK4",
        Si = "old___rEkig",
        Ni = "new___PfozW",
        Li = "image___nvgcL",
        Ri = function () {
          return o().createElement(
            "div",
            { className: Bi },
            o().createElement(
              "div",
              { className: En()(Pi, Si) },
              "Old Record",
              o().createElement(
                "ol",
                null,
                o().createElement("li", null, "Illegal Products"),
                o().createElement("li", null, "Theft"),
                o().createElement("li", null, "Auto Theft"),
                o().createElement("li", null, "Drug Deals"),
                o().createElement("li", null, "Computer Crimes"),
                o().createElement("li", null, "Murder"),
                o().createElement("li", null, "Fraud Crimes"),
                o().createElement("li", null, "Other")
              )
            ),
            o().createElement("img", {
              className: Li,
              src: "/images/v2/crimes/migration/criminal-record-changes.svg",
              alt: "",
            }),
            o().createElement(
              "div",
              { className: En()(Pi, Ni) },
              "New Record",
              o().createElement(
                "ol",
                null,
                o().createElement("li", null, "Vandalism"),
                o().createElement("li", null, "Theft"),
                o().createElement("li", null, "Counterfeiting"),
                o().createElement("li", null, "Fraud"),
                o().createElement("li", null, "Illicit Services"),
                o().createElement("li", null, "Cybercrime"),
                o().createElement("li", null, "Extortion"),
                o().createElement("li", null, "Illegal Production")
              )
            )
          );
        },
        xi = "migrationWizard___POLSU",
        Zi = "backdrop___fyoS6",
        ji = "darkMode___N9dy6",
        Mi = "step___fDgVw",
        Hi = "stepSideBorder___p49om",
        Vi = "stepCenterArea___hSfLW",
        Wi = "stepHeading___IvbvM",
        Gi = "main___IYmKq",
        Ui = "sub___ZI810",
        zi = "earlyAccess___R7Z4m",
        Ki = "criminalRecordChanges___ctSBz",
        qi = "criminalWord___LJFro",
        Yi = "recordWord___jz0jJ",
        Xi = "awardsLostAndGained___ronk2",
        Ji = "beforeYouContinue___D_tlc",
        Qi = "pleaseRemember___uImWt",
        $i = "separator___WGEHy",
        eo = "stepContent___ZPG0L",
        to = "stepButtons___nFhP6",
        ro = "stepButton___R36dF",
        no = "finalQuestion___pKfDt",
        io = "stepArrow___vCjg9",
        oo = "solid___BSKOx",
        ao = "outline___DiLt2",
        lo = function (e) {
          var t,
            r = e.active,
            n = (0, bt.Z)(),
            i = (0, Cn.Z)();
          return o().createElement("img", {
            className: En()(io, ((t = {}), (t[oo] = r), (t[ao] = !r), t)),
            style: { filter: n ? i("#FFD43B") : "none" },
            src: "/images/v2/crimes/migration/step-".concat(
              r ? "solid" : "outline",
              ".svg"
            ),
            alt: "",
          });
        },
        co = "stepArrows___b5Q9X",
        so = function (e) {
          var t = e.currentStep;
          return o().createElement(
            "div",
            { className: co },
            Array.from(Array(7).keys()).map(function (e) {
              return o().createElement(lo, { key: e, active: t === e + 1 });
            })
          );
        },
        uo = function (e, t, r, n) {
          return new (r || (r = Promise))(function (i, o) {
            function a(e) {
              try {
                c(n.next(e));
              } catch (e) {
                o(e);
              }
            }
            function l(e) {
              try {
                c(n.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof r
                    ? t
                    : new r(function (e) {
                        e(t);
                      })).then(a, l);
            }
            c((n = n.apply(e, t || [])).next());
          });
        },
        fo = function (e, t) {
          var r,
            n,
            i,
            o,
            a = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = { next: l(0), throw: l(1), return: l(2) }),
            "function" == typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );
          function l(o) {
            return function (l) {
              return (function (o) {
                if (r) throw new TypeError("Generator is already executing.");
                for (; a; )
                  try {
                    if (
                      ((r = 1),
                      n &&
                        (i =
                          2 & o[0]
                            ? n.return
                            : o[0]
                            ? n.throw || ((i = n.return) && i.call(n), 0)
                            : n.next) &&
                        !(i = i.call(n, o[1])).done)
                    )
                      return i;
                    switch (((n = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                      case 0:
                      case 1:
                        i = o;
                        break;
                      case 4:
                        return a.label++, { value: o[1], done: !1 };
                      case 5:
                        a.label++, (n = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !((i = a.trys),
                          (i = i.length > 0 && i[i.length - 1]) ||
                            (6 !== o[0] && 2 !== o[0]))
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!i || (o[1] > i[0] && o[1] < i[3]))
                        ) {
                          a.label = o[1];
                          break;
                        }
                        if (6 === o[0] && a.label < i[1]) {
                          (a.label = i[1]), (i = o);
                          break;
                        }
                        if (i && a.label < i[2]) {
                          (a.label = i[2]), a.ops.push(o);
                          break;
                        }
                        i[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    o = t.call(e, a);
                  } catch (e) {
                    (o = [6, e]), (n = 0);
                  } finally {
                    r = i = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, l]);
            };
          }
        },
        mo = function () {
          var e,
            t,
            r = (0, c.I0)(),
            n = (0, An.Z)(),
            a = (0, bt.Z)(),
            l = (0, c.v9)(Et.kB),
            s = (0, i.useState)(1),
            u = s[0],
            d = s[1],
            f = (0, i.useState)(""),
            m = f[0],
            p = f[1];
          (0, i.useEffect)(
            function () {
              (0, fr.Z)("/loader.php?sid=crimesData&step=hub").then(function (
                e
              ) {
                var t,
                  n = (0, on.Z)(e);
                n
                  ? r(Et.Nw.topLevelErrorOccurred(n))
                  : "string" ==
                      typeof (null === (t = e.DB) || void 0 === t
                        ? void 0
                        : t.text) && p(e.DB.text);
              });
            },
            [r]
          );
          var v = (0, i.useState)(5),
            h = v[0],
            _ = v[1],
            b = (0, i.useState)(!1),
            g = b[0],
            E = b[1];
          (0, i.useEffect)(
            function () {
              var e;
              return (
                7 === u
                  ? (e = setInterval(function () {
                      _(function (e) {
                        return e - 1;
                      });
                    }, 1e3))
                  : _(5),
                function () {
                  return clearInterval(e);
                }
              );
            },
            [u]
          ),
            (0, i.useEffect)(function () {
              return (
                document.body.classList.add("hide-custom-bg"),
                function () {
                  return document.body.classList.remove("hide-custom-bg");
                }
              );
            }, []);
          return o().createElement(
            "div",
            { className: En()(xi, ((e = {}), (e[ji] = a), e)) },
            o().createElement("div", { className: Zi }),
            o().createElement(
              "div",
              { className: Mi },
              o().createElement("div", { className: Hi }),
              o().createElement(
                "div",
                { className: Vi },
                o().createElement(
                  "h5",
                  {
                    className: En()(
                      Wi,
                      ((t = {}),
                      (t[zi] = 1 === u || 2 === u),
                      (t[Ki] = 3 === u || 4 === u),
                      (t[Xi] = 5 === u),
                      (t[Ji] = 6 === u),
                      (t[Qi] = 7 === u),
                      t)
                    ),
                  },
                  (1 === u || 2 === u) &&
                    o().createElement(
                      o().Fragment,
                      null,
                      o().createElement(
                        "span",
                        { className: Gi },
                        "Crimes 2.0"
                      ),
                      o().createElement(
                        "span",
                        { className: Ui },
                        "Early Access"
                      )
                    ),
                  (3 === u || 4 === u) &&
                    o().createElement(
                      o().Fragment,
                      null,
                      "desktop" === n
                        ? o().createElement(
                            o().Fragment,
                            null,
                            o().createElement(
                              "span",
                              { className: En()(Ui, qi) },
                              "Criminal"
                            ),
                            o().createElement(
                              "span",
                              { className: En()(Ui, Yi) },
                              "Record"
                            )
                          )
                        : o().createElement(
                            "span",
                            { className: Ui },
                            "Criminal Record"
                          ),
                      o().createElement("span", { className: Gi }, "Changes")
                    ),
                  5 === u &&
                    o().createElement(
                      o().Fragment,
                      null,
                      o().createElement("span", { className: Gi }, "Awards"),
                      o().createElement(
                        "span",
                        { className: Ui },
                        "Lost & Gained"
                      )
                    ),
                  6 === u &&
                    o().createElement(
                      o().Fragment,
                      null,
                      o().createElement("span", { className: Gi }, "Before"),
                      o().createElement(
                        "span",
                        { className: Ui },
                        "You Continue"
                      )
                    ),
                  7 === u &&
                    o().createElement(
                      o().Fragment,
                      null,
                      o().createElement("span", { className: Gi }, "Please"),
                      o().createElement("span", { className: Ui }, "Remember")
                    )
                ),
                o().createElement("hr", { className: $i }),
                o().createElement(
                  "div",
                  { className: eo },
                  1 === u &&
                    o().createElement(
                      o().Fragment,
                      null,
                      "If you would like to participate in this early access release, please be aware that only ",
                      l,
                      " new",
                      " ",
                      1 === l ? "crime is " : "crimes are ",
                      "available currently. We will release each crime one by one, approximately every two weeks. This slow and methodical process allows us to focus on each crime individually before it's released and also gives us time to carefully tune and optimize the most recently released crime. For more detailed information, please see the",
                      " ",
                      o().createElement(
                        "a",
                        {
                          href: "https://www.torn.com/forums.php#/p=threads&f=1&t=16337792&b=0&a=0",
                        },
                        "announcement here"
                      ),
                      "."
                    ),
                  2 === u &&
                    o().createElement(
                      o().Fragment,
                      null,
                      "If you wish to remain on the existing crimes system for the time being, you may do so for the foreseeable future. Please do not feel pressured to migrate over to the new system while it's in a limited state - once you do,",
                      " ",
                      o().createElement(
                        "strong",
                        null,
                        "you will not be able to return."
                      )
                    ),
                  3 === u &&
                    o().createElement(
                      o().Fragment,
                      null,
                      "Before you continue, it's important that you're aware that your existing criminal record will be merged into a new criminal record. After the merger, you will lose many of your existing medals and honors, but you'll also receive many new ones and be able to start working towards unlocking brand new honors immediately. 97% of players will immediately receive the same or more merits than they had before."
                    ),
                  4 === u &&
                    o().createElement(
                      o().Fragment,
                      null,
                      "Here's how your criminal offenses will be merged into the new criminal record...",
                      o().createElement(Ri, null)
                    ),
                  5 === u &&
                    o().createElement("span", {
                      dangerouslySetInnerHTML: {
                        __html: m || "Getting results...",
                      },
                    }),
                  6 === u &&
                    o().createElement(
                      o().Fragment,
                      null,
                      o().createElement("p", null, "Please understand..."),
                      o().createElement(
                        "ul",
                        null,
                        o().createElement(
                          "li",
                          null,
                          "We reserve the right to change anything as we see fit at any point in time."
                        ),
                        o().createElement(
                          "li",
                          null,
                          "There will be balancing issues, changes will be made, and rewards will be continuously tuned."
                        ),
                        o().createElement(
                          "li",
                          null,
                          "There will be issues, there will be errors, however, any problems are trivial to resolve over time."
                        )
                      )
                    ),
                  7 === u &&
                    o().createElement(
                      o().Fragment,
                      null,
                      o().createElement(
                        "p",
                        null,
                        "This is a limited early access release, things may feel sparse, and the rewards will be minimal, especially initially, as we release low-level crimes one by one. As better crimes are released, the mechanics will evolve, as will the rewards, so you may prefer to wait."
                      ),
                      o().createElement(
                        "p",
                        null,
                        "You cannot return to the old crimes system once you've migrated."
                      ),
                      o().createElement(
                        "p",
                        { className: no },
                        "Are you sure you wish to proceed?"
                      )
                    )
                ),
                o().createElement("hr", { className: $i }),
                o().createElement(so, { currentStep: u }),
                o().createElement(
                  "div",
                  { className: to },
                  u > 1 &&
                    o().createElement(
                      "button",
                      {
                        className: En()("torn-btn btn-big", ro),
                        type: "button",
                        disabled: g,
                        onClick: function () {
                          return d(u - 1);
                        },
                      },
                      "Back"
                    ),
                  o().createElement(
                    "button",
                    {
                      className: En()("torn-btn btn-big", ro),
                      type: "button",
                      disabled: 7 === u && (h > 0 || g),
                      onClick: function () {
                        return uo(void 0, void 0, void 0, function () {
                          var e;
                          return fo(this, function (t) {
                            switch (t.label) {
                              case 0:
                                return 7 !== u
                                  ? [3, 2]
                                  : (E(!0),
                                    (e = window.addRFC(
                                      "/loader.php?sid=crimesData&step=migrate"
                                    )),
                                    [4, (0, fr.Z)(e)]);
                              case 1:
                                return (
                                  t.sent(), window.location.reload(), [3, 3]
                                );
                              case 2:
                                d(u + 1), (t.label = 3);
                              case 3:
                                return [2];
                            }
                          });
                        });
                      },
                    },
                    7 === u
                      ? g
                        ? "Migrating"
                        : "Migrate "
                            .concat(h > 0 ? "(".concat(h, ")") : "")
                            .trim()
                      : "Continue"
                  )
                )
              ),
              o().createElement("div", { className: Hi })
            )
          );
        },
        po = function (e) {
          var t = e.children,
            r = (0, c.I0)(),
            n = (0, c.v9)(Et.OI),
            a = (0, st.TH)().pathname;
          (0, i.useEffect)(
            function () {
              var e = n.find(function (e) {
                var t = e.slug;
                return "/".concat(t) === a;
              });
              if (e) {
                var t = e.ID,
                  i = e.slug;
                r({
                  type: "app/navigateToCrimeType",
                  payload: { crimeTypeName: i, crimeTypeID: t },
                });
              } else r({ type: "app/navigateToHub" });
            },
            [n, r, a]
          );
          var l = (0, c.v9)(Et.DR),
            s = Ft();
          return o().createElement(
            "div",
            { className: "crimes-app" },
            o().createElement(lt, {
              appID: "Crimes",
              pageID: null != l ? l : 0,
              clientProps: s(),
            }),
            t
          );
        },
        vo = function () {
          var e = (0, c.I0)(),
            t = (0, c.v9)(Et.nK),
            r = (0, c.v9)(Et.Yu);
          gt(),
            Ct(),
            (0, i.useEffect)(
              function () {
                window.WebsocketHandler.addEventListener(
                  "sidebar",
                  "updateMoney",
                  function (t) {
                    var r = t.money;
                    e(Et.Nw.userMoneyUpdated(r));
                  }
                ),
                  window.WebsocketHandler.addEventListener(
                    "sidebar",
                    "updateNerve",
                    function (t) {
                      var r = t.amount;
                      e(Et.Nw.userNerveUpdated(r));
                    }
                  ),
                  window.WebsocketHandler.addEventListener(
                    "sidebar",
                    "onJail",
                    function () {
                      e(Et.Nw.userJailStatusUpdated(!0));
                    }
                  ),
                  window.WebsocketHandler.addEventListener(
                    "sidebar",
                    "onLeaveFromJail",
                    function () {
                      e(Et.Nw.userJailStatusUpdated(!1));
                    }
                  ),
                  window.WebsocketHandler.addEventListener(
                    "sidebar",
                    "onHospital",
                    function () {
                      e(Et.Nw.userHospStatusUpdated(!0));
                    }
                  ),
                  window.WebsocketHandler.addEventListener(
                    "sidebar",
                    "onRevive",
                    function () {
                      e(Et.Nw.userHospStatusUpdated(!1));
                    }
                  );
                var t = function (t) {
                  var r = t.detail.nerve;
                  e(Et.Nw.userNerveUpdated(r));
                };
                return (
                  window.addEventListener("syncRecoveringNerveWithSidebar", t),
                  function () {
                    window.removeEventListener(
                      "syncRecoveringNerveWithSidebar",
                      t
                    );
                  }
                );
              },
              [e]
            );
          var n = Ft();
          return r
            ? o().createElement(
                "div",
                { className: "crimes-app" },
                o().createElement(lt, {
                  appID: "Crimes",
                  pageID: 0,
                  clientProps: n(),
                }),
                o().createElement(
                  "div",
                  { className: "info-msg-cont red border-round m-top10 r2990" },
                  o().createElement(
                    "div",
                    { className: "info-msg border-round" },
                    o().createElement("i", { className: "info-icon" }),
                    o().createElement(
                      "div",
                      { className: "delimiter" },
                      o().createElement(
                        "div",
                        {
                          className: "msg right-round",
                          role: "alert",
                          "area-live": "assertive",
                        },
                        r
                      )
                    )
                  )
                )
              )
            : t
            ? o().createElement(
                "div",
                { className: "crimes-app" },
                o().createElement(lt, {
                  appID: "Crimes",
                  pageID: 0,
                  clientProps: n(),
                }),
                o().createElement(mo, null)
              )
            : o().createElement(
                _.UT,
                null,
                o().createElement(
                  ct.tn,
                  null,
                  o().createElement(
                    po,
                    null,
                    o().createElement(
                      st.Z5,
                      null,
                      o().createElement(st.AW, {
                        path: "/template",
                        element: o().createElement(Xt, null),
                      }),
                      o().createElement(st.AW, {
                        path: "/searchforcash",
                        element: o().createElement(er, null),
                      }),
                      o().createElement(st.AW, {
                        path: "/bootlegging",
                        element: o().createElement(ir, null),
                      }),
                      o().createElement(st.AW, {
                        path: "/graffiti",
                        element: o().createElement(cr, null),
                      }),
                      o().createElement(st.AW, {
                        path: "/shoplifting",
                        element: o().createElement(Pr, null),
                      }),
                      o().createElement(st.AW, {
                        path: "/pickpocketing",
                        element: o().createElement(Rr, null),
                      }),
                      o().createElement(st.AW, {
                        path: "/cardskimming",
                        element: o().createElement(Mr, null),
                      }),
                      o().createElement(st.AW, {
                        path: "/burglary",
                        element: o().createElement(Gr, null),
                      }),
                      o().createElement(st.AW, {
                        path: "/hustling",
                        element: o().createElement(qr, null),
                      }),
                      o().createElement(st.AW, {
                        path: "/disposal",
                        element: o().createElement(Qr, null),
                      }),
                      o().createElement(st.AW, {
                        path: "/cracking",
                        element: o().createElement(rn, null),
                      }),
                      o().createElement(st.AW, {
                        path: "/",
                        element: o().createElement(ki, null),
                      }),
                      o().createElement(st.AW, {
                        path: "*",
                        element: o().createElement(Ut, null),
                      })
                    )
                  )
                )
              );
        },
        ho = r(3828),
        _o = r(2314),
        bo = r(7908),
        go = function () {
          var e,
            t,
            r = (0, bo.$j)(
              { mobile: 386, tablet: 784 },
              { infinity: "desktop" }
            ),
            n = { app: Et.ZP, hub: un, browser: r };
          for (var i in null !== (e = null == Hn ? void 0 : Hn.asyncReducers) &&
          void 0 !== e
            ? e
            : {})
            Object.prototype.hasOwnProperty.call(Hn.asyncReducers, i) &&
              (n[i] =
                null === (t = Hn.asyncReducers) || void 0 === t
                  ? void 0
                  : t[i]);
          return (0, ho.UY)(n);
        },
        Eo = (function () {
          var e = [bo.Kv, (0, ho.md)(Fr)],
            t = { actionsBlacklist: "app/tick" },
            r = (0, _o.Uo)(t).apply(void 0, e),
            n = go();
          return (
            ((Hn = (0, ho.MT)(n, void 0, r)).runSaga = yr),
            yr(Dr),
            (Hn.asyncReducers = {}),
            (Hn.injectReducer = function (e, t) {
              (Hn.asyncReducers[e] = t), Hn.replaceReducer(go());
            }),
            Hn
          );
        })();
      l().render(
        o().createElement(c.zt, { store: Eo }, o().createElement(vo, null)),
        document.getElementById("react-root")
      );
    },
    8573: function (e, t, r) {
      var n = r(7363),
        i = r.n(n),
        o = r(5710);
      t.Z = function () {
        return i().createElement(o.ZP, null, "...");
      };
    },
    4641: function (e, t, r) {
      r.d(t, {
        Vk: function () {
          return n;
        },
        iQ: function () {
          return i;
        },
      });
      var n = 999,
        i = "template";
    },
    7043: function (e, t, r) {
      r.d(t, {
        Nw: function () {
          return f;
        },
        ZP: function () {
          return m;
        },
      });
      var n = r(2902),
        i = r(6974),
        o = r(7520),
        a = r(4641),
        l = r(1813),
        c = function (e, t) {
          return (0, l.Z)(a.iQ, e, t);
        },
        s = r(9043),
        u = function () {
          return (
            (u =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            u.apply(this, arguments)
          );
        },
        d = function () {
          return u({}, (0, s.X)());
        },
        f = {
          dataFetched: c(
            "dataFetched",
            (0, n.ZP)(function (e, t) {
              (0, i.lJ)(e, t.DB);
            })
          ),
        },
        m = (0, o.Z)({ crimeTypeName: a.iQ, actions: f, getInitialState: d });
    },
    1832: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return s;
        },
      });
      var n = r(7363),
        i = r.n(n),
        o = r(5710),
        a = r(9431),
        l = r(9132),
        c = function (e) {
          var t = e.width;
          return i().createElement(l.Z, {
            as: "outline",
            width: t,
            height: 8,
            borderRadius: "4px / 4.5px",
          });
        },
        s = function () {
          return i().createElement(
            o.ZP,
            null,
            i().createElement(
              o.ZA,
              { first: !0 },
              i().createElement(
                o.X2,
                { repeat: 6 },
                i().createElement(
                  o.Hi,
                  null,
                  i().createElement(
                    o.sg,
                    { grow: !0 },
                    i().createElement(o.xv, { width: "50%" })
                  ),
                  i().createElement(
                    o.sg,
                    null,
                    i().createElement(o.bn, {
                      as: "outline",
                      width: 200,
                      height: 10,
                      borderRadius: 5,
                    })
                  )
                ),
                i().createElement(
                  o.Oh,
                  null,
                  i().createElement(
                    o.sg,
                    {
                      grow: !0,
                      vertical: !0,
                      gap: 1,
                      justifyContent: "flex-start",
                      style: { paddingTop: 8 },
                    },
                    i().createElement(
                      a.Z,
                      { justifyContent: "space-between", alignItems: "center" },
                      i().createElement(o.xv, { width: "50%" }),
                      i().createElement(o.bn, {
                        as: "silhouette",
                        width: 18,
                        height: 18,
                        borderRadius: ".3125rem",
                        style: { transform: "translateY(-2px)" },
                      })
                    ),
                    i().createElement(c, null)
                  )
                ),
                i().createElement(o.sg, null, i().createElement(o.nb, null)),
                i().createElement(
                  o.sg,
                  null,
                  i().createElement(o.AZ, {
                    width: 90,
                    tabletAndMobileWidth: 60,
                  })
                )
              )
            )
          );
        };
    },
    9754: function (e, t, r) {
      r.d(t, {
        L6: function () {
          return d;
        },
        P7: function () {
          return a;
        },
        S$: function () {
          return c;
        },
        Vk: function () {
          return n;
        },
        YK: function () {
          return s;
        },
        d0: function () {
          return o;
        },
        eg: function () {
          return u;
        },
        hN: function () {
          return f;
        },
        iQ: function () {
          return i;
        },
        zv: function () {
          return l;
        },
      });
      var n = 1,
        i = "searchforcash",
        o = "Search for Cash",
        a = 1,
        l = 2,
        c = 3,
        s = 4,
        u = 5,
        d = 6,
        f = [a, l, c, s, u, d];
    },
    7299: function (e, t, r) {
      r.d(t, {
        Nw: function () {
          return p;
        },
        ZP: function () {
          return v;
        },
        Yu: function () {
          return h;
        },
      });
      var n = r(2902),
        i = r(6974),
        o = r(7520),
        a = r(9259),
        l = r(9754),
        c = r(1813),
        s = function (e, t) {
          return (0, c.Z)(l.iQ, e, t);
        },
        u = r(9043),
        d = function () {
          return (
            (d =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            d.apply(this, arguments)
          );
        },
        f = function () {
          return d(d({}, (0, u.X)()), {
            locations: [],
            lastLocationCrimeID: null,
          });
        },
        m = function (e) {
          return Number(e) - 1;
        },
        p = {
          dataFetched: s(
            "dataFetched",
            (0, n.ZP)(function (e, t) {
              if (
                ((0, i.lJ)(e, t.DB),
                (e.lastLocationCrimeID = Number(t.DB.lastSubCrimeIDByType)),
                t.DB.crimesByType &&
                  (e.locations = t.DB.crimesByType.map(function (e) {
                    var t,
                      r,
                      n,
                      o,
                      l,
                      c,
                      s,
                      u,
                      d =
                        null !==
                          (n =
                            null ===
                              (r =
                                null === (t = e.requirements) || void 0 === t
                                  ? void 0
                                  : t.items) || void 0 === r
                              ? void 0
                              : r[0]) && void 0 !== n
                          ? n
                          : null;
                    return {
                      title: e.title.toString(),
                      nerve: e.nerve,
                      crimeID: e.crimeID,
                      density: e.additionalInfo.barValue,
                      barProgress: e.additionalInfo.scale,
                      densityIconIndex: m(e.additionalInfo.progressIconState),
                      status: ((u = e.additionalInfo.title), u.split(" (")[0]),
                      requiredItem: d
                        ? {
                            id: Number(d.value),
                            name: d.label,
                            owned: !!d.available,
                          }
                        : null,
                      requiredLevel:
                        null !==
                          (c =
                            null ===
                              (l =
                                null === (o = e.requirements) || void 0 === o
                                  ? void 0
                                  : o.minCrimeLevel) || void 0 === l
                              ? void 0
                              : l.value) && void 0 !== c
                          ? c
                          : 1,
                      successChance: (0, a.Z)(e.successChance),
                      uniqueOutcomesAvailable: (0, i.Ai)(e),
                      lockedBecauseOfDirtyBomb:
                        null !== (s = e.additionalInfo.dirtyBomb) &&
                        void 0 !== s &&
                        s,
                    };
                  })),
                t.DB.additionalInfo)
              ) {
                var r = e.locations.find(function (e) {
                  return e.crimeID === t.DB.lastSubCrimeIDByType;
                });
                r &&
                  ((r.density = t.DB.additionalInfo.barValue),
                  (r.barProgress = t.DB.additionalInfo.scale),
                  (r.densityIconIndex = m(
                    t.DB.additionalInfo.progressIconState
                  )),
                  (r.status = t.DB.additionalInfo.title));
              }
            })
          ),
        },
        v = (0, o.Z)({ crimeTypeName: l.iQ, actions: p, getInitialState: f }),
        h = function (e) {
          return e.searchforcash.locations;
        };
    },
    1994: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return s;
        },
      });
      var n = [
          "#42BA34",
          "#3CB935",
          "#3CB935",
          "#35B837",
          "#2DB839",
          "#2DB839",
          "#23B73B",
          "#58BD2C",
          "#81C218",
          "#A1C600",
          "#C0C900",
          "#E1CB00",
          "#FFCC01",
          "#FFB600",
          "#FF9D00",
          "#FF8600",
          "#FD6E0D",
          "#F94F1C",
          "#F42B26",
          "#F53125",
          "#F53125",
          "#F63624",
          "#F63A22",
          "#F63A22",
          "#F73F21",
          "#F73F21",
          "#F84320",
          "#F8471E",
          "#F8471E",
          "#F94B1D",
          "#F94F1C",
          "#F94F1C",
          "#FA531A",
          "#FA5619",
          "#FA5619",
          "#FB5A17",
          "#FB5D16",
          "#FB5D16",
          "#FC6114",
          "#FC6114",
          "#FC6412",
          "#FD6711",
          "#FD6711",
          "#FD6A0F",
          "#FD6E0D",
          "#FD6E0D",
          "#FE710B",
          "#FE7409",
          "#FE7409",
          "#FE7707",
          "#FE7A06",
          "#FE7A06",
          "#FF7D04",
          "#FF7D04",
          "#FF8003",
          "#FF8301",
          "#FF8301",
          "#FF8600",
          "#FF8900",
          "#FF8900",
          "#FF8C00",
          "#FF8F00",
          "#FF8F00",
          "#FF9200",
          "#FF9200",
          "#FF9400",
          "#FF9700",
          "#FF9700",
          "#FF9A00",
          "#FF9D00",
          "#FF9D00",
          "#FFA000",
          "#FFA300",
          "#FFA300",
          "#FFA500",
          "#FFA800",
          "#FFA800",
          "#FFAB00",
          "#FFAB00",
          "#FFAE00",
          "#FFB100",
          "#FFB100",
          "#FFB300",
          "#FFB600",
          "#FFB600",
          "#FFB900",
          "#FFBC00",
          "#FFBC00",
          "#FFBE00",
          "#FFC100",
          "#FFC100",
          "#FFC400",
          "#FFC400",
          "#FFC700",
          "#FFC900",
          "#FFC900",
          "#FFCC01",
          "#FBCC00",
          "#FBCC00",
          "#F8CC00",
          "#F4CC00",
          "#F4CC00",
          "#F0CC00",
          "#F0CC00",
          "#EDCC00",
          "#E9CB00",
          "#E9CB00",
          "#E5CB00",
          "#E1CB00",
          "#E1CB00",
          "#DECB00",
          "#DACB00",
          "#DACB00",
          "#D6CB00",
          "#D2CA00",
          "#D2CA00",
          "#CFCA00",
          "#CFCA00",
          "#CBCA00",
          "#C7CA00",
          "#C7CA00",
          "#C3C900",
          "#C0C900",
          "#C0C900",
          "#BCC900",
          "#B8C800",
          "#B8C800",
          "#B4C800",
          "#B0C800",
          "#B0C800",
          "#ADC700",
          "#ADC700",
          "#A9C700",
          "#A5C600",
          "#A5C600",
          "#A1C600",
          "#9DC603",
          "#9DC603",
          "#99C506",
          "#95C50A",
          "#95C50A",
          "#91C40D",
          "#91C40D",
          "#8DC410",
          "#89C313",
          "#89C313",
          "#85C316",
          "#81C218",
          "#81C218",
          "#7DC21B",
          "#79C11D",
          "#79C11D",
          "#74C01F",
          "#70C022",
          "#70C022",
          "#6BBF24",
          "#6BBF24",
          "#67BF26",
          "#62BE28",
          "#62BE28",
          "#5DBD2A",
          "#58BD2C",
          "#58BD2C",
          "#53BC2E",
          "#4EBB30",
          "#4EBB30",
          "#48BB32",
          "#42BA34",
        ],
        i = [
          "#F42B26",
          "#F53125",
          "#F63624",
          "#F63A22",
          "#F73F21",
          "#F84320",
          "#F8471E",
          "#F94B1D",
          "#F94F1C",
          "#FA531A",
          "#FA5619",
          "#FB5A17",
          "#FB5D16",
          "#FC6114",
          "#FC6412",
          "#FD6711",
          "#FD6A0F",
          "#FD6E0D",
          "#FE710B",
          "#FE7409",
          "#FE7707",
          "#FE7A06",
          "#FF7D04",
          "#FF8003",
          "#FF8301",
          "#FF8600",
          "#FF8900",
          "#FF8C00",
          "#FF8F00",
          "#FF9200",
          "#FF9400",
          "#FF9700",
          "#FF9A00",
          "#FF9D00",
          "#FFA000",
          "#FFA300",
          "#FFA500",
          "#FFA800",
          "#FFAB00",
          "#FFAE00",
          "#FFB100",
          "#FFB300",
          "#FFB600",
          "#FFB900",
          "#FFBC00",
          "#FFBE00",
          "#FFC100",
          "#FFC400",
          "#FFC700",
          "#FFC900",
          "#FFCC01",
          "#FBCC00",
          "#F8CC00",
          "#F4CC00",
          "#F0CC00",
          "#EDCC00",
          "#E9CB00",
          "#E5CB00",
          "#E1CB00",
          "#DECB00",
          "#DACB00",
          "#D6CB00",
          "#D2CA00",
          "#CFCA00",
          "#CBCA00",
          "#C7CA00",
          "#C3C900",
          "#C0C900",
          "#BCC900",
          "#B8C800",
          "#B4C800",
          "#B0C800",
          "#ADC700",
          "#A9C700",
          "#A5C600",
          "#A1C600",
          "#9DC603",
          "#99C506",
          "#95C50A",
          "#91C40D",
          "#8DC410",
          "#89C313",
          "#85C316",
          "#81C218",
          "#7DC21B",
          "#79C11D",
          "#74C01F",
          "#70C022",
          "#6BBF24",
          "#67BF26",
          "#62BE28",
          "#5DBD2A",
          "#58BD2C",
          "#53BC2E",
          "#4EBB30",
          "#48BB32",
          "#42BA34",
          "#3CB935",
          "#35B837",
          "#2DB839",
        ],
        o = [
          "#62BE28",
          "#5DBD2A",
          "#53BC2E",
          "#48BB32",
          "#42BA34",
          "#35B837",
          "#2DB839",
          "#23B73B",
          "#35B837",
          "#53BC2E",
          "#6BBF24",
          "#81C218",
          "#91C40D",
          "#A5C600",
          "#BCC900",
          "#C3C900",
          "#C0C900",
          "#BCC900",
          "#B8C800",
          "#B4C800",
          "#ADC700",
          "#A9C700",
          "#A5C600",
          "#9DC603",
          "#99C506",
          "#95C50A",
          "#8DC410",
          "#89C313",
          "#85C316",
          "#81C218",
          "#81C218",
          "#81C218",
          "#8DC410",
          "#9DC603",
          "#B0C800",
          "#C3C900",
          "#D2CA00",
          "#E5CB00",
          "#FBCC00",
          "#FFC900",
          "#FFCC01",
          "#FBCC00",
          "#F8CC00",
          "#F4CC00",
          "#EDCC00",
          "#E9CB00",
          "#E5CB00",
          "#DECB00",
          "#DACB00",
          "#D6CB00",
          "#D2CA00",
          "#CBCA00",
          "#C7CA00",
          "#C3C900",
          "#C3C900",
          "#C3C900",
          "#CFCA00",
          "#DECB00",
          "#F0CC00",
          "#FFC900",
          "#FFBE00",
          "#FFB100",
          "#FFA000",
          "#FF9A00",
          "#FF9D00",
          "#FFA000",
          "#FFA300",
          "#FFA500",
          "#FFAB00",
          "#FFAE00",
          "#FFB100",
          "#FFB600",
          "#FFB900",
          "#FFBC00",
          "#FFBE00",
          "#FFC400",
          "#FFC700",
          "#FFC700",
          "#FFC900",
          "#FFC900",
          "#FFC100",
          "#FFB600",
          "#FFA800",
          "#FF9A00",
          "#FF8F00",
          "#FF8003",
          "#FD6E0D",
          "#FD6711",
          "#FD6711",
          "#FD6E0D",
          "#FE710B",
          "#FE7409",
          "#FE7A06",
          "#FF7D04",
          "#FF8003",
          "#FF8301",
          "#FF8900",
          "#FF8C00",
          "#FF8F00",
          "#FF9400",
          "#FF9700",
          "#FF9700",
          "#FF9A00",
          "#FF9A00",
          "#FF9200",
          "#FF8600",
          "#FE7707",
          "#FD6711",
          "#FA5619",
          "#F8471E",
          "#F63624",
          "#F42B26",
          "#F53125",
          "#F63A22",
          "#F73F21",
          "#F8471E",
          "#F94B1D",
          "#FA531A",
          "#FB5A17",
          "#FB5D16",
          "#FC6412",
          "#FD6711",
          "#FD6E0D",
          "#FE7409",
          "#FE7707",
          "#FF7D04",
          "#FF8003",
          "#FF8600",
          "#FF8900",
          "#FF8F00",
          "#FF9400",
          "#FF9700",
          "#FF9D00",
          "#FFA000",
          "#FFA500",
          "#FFAB00",
          "#FFAE00",
          "#FFB300",
          "#FFB600",
          "#FFBC00",
          "#FFBE00",
          "#FFC400",
          "#FFC900",
          "#FFCC01",
          "#F8CC00",
          "#F4CC00",
          "#EDCC00",
          "#E5CB00",
          "#E1CB00",
          "#DACB00",
          "#D6CB00",
          "#CFCA00",
          "#CBCA00",
          "#C3C900",
          "#BCC900",
          "#B8C800",
          "#B0C800",
          "#ADC700",
          "#A5C600",
          "#9DC603",
          "#99C506",
          "#91C40D",
          "#8DC410",
          "#85C316",
          "#81C218",
          "#79C11D",
          "#70C022",
          "#6BBF24",
        ],
        a = [
          "#F42B26",
          "#F53125",
          "#F63624",
          "#F63A22",
          "#F73F21",
          "#F84320",
          "#F8471E",
          "#F94B1D",
          "#F94F1C",
          "#FA531A",
          "#FA5619",
          "#FB5A17",
          "#FB5D16",
          "#FC6114",
          "#FC6412",
          "#FD6711",
          "#FD6A0F",
          "#FD6E0D",
          "#FE710B",
          "#FE7409",
          "#FE7707",
          "#FE7A06",
          "#FF7D04",
          "#FF8003",
          "#FF8301",
          "#FF8600",
          "#FF8900",
          "#FF8C00",
          "#FF8F00",
          "#FF9200",
          "#FF9400",
          "#FF9700",
          "#FF9A00",
          "#FF9D00",
          "#FFA000",
          "#FFA300",
          "#FFA500",
          "#FFA800",
          "#FFAB00",
          "#FFAE00",
          "#FFB100",
          "#FFB300",
          "#FFB600",
          "#FFB900",
          "#FFBC00",
          "#FFBE00",
          "#FFC100",
          "#FFC400",
          "#FFC700",
          "#FFC900",
          "#FFCC01",
          "#FBCC00",
          "#F8CC00",
          "#F4CC00",
          "#F0CC00",
          "#EDCC00",
          "#E9CB00",
          "#E5CB00",
          "#E1CB00",
          "#DECB00",
          "#DACB00",
          "#D6CB00",
          "#D2CA00",
          "#CFCA00",
          "#CBCA00",
          "#C7CA00",
          "#C3C900",
          "#C0C900",
          "#BCC900",
          "#B8C800",
          "#B4C800",
          "#B0C800",
          "#ADC700",
          "#A9C700",
          "#A5C600",
          "#A1C600",
          "#9DC603",
          "#99C506",
          "#95C50A",
          "#91C40D",
          "#8DC410",
          "#89C313",
          "#85C316",
          "#81C218",
          "#7DC21B",
          "#79C11D",
          "#74C01F",
          "#70C022",
          "#6BBF24",
          "#67BF26",
          "#62BE28",
          "#5DBD2A",
          "#58BD2C",
          "#53BC2E",
          "#4EBB30",
          "#48BB32",
          "#42BA34",
          "#3CB935",
          "#35B837",
          "#2DB839",
        ],
        l = [
          "#35B837",
          "#2DB839",
          "#23B73B",
          "#F42B26",
          "#F53125",
          "#F63624",
          "#F63A22",
          "#F73F21",
          "#F73F21",
          "#F84320",
          "#F8471E",
          "#F94B1D",
          "#F94F1C",
          "#F94F1C",
          "#FA531A",
          "#FA5619",
          "#FB5A17",
          "#FB5D16",
          "#FB5D16",
          "#FC6114",
          "#FC6412",
          "#FD6711",
          "#FD6A0F",
          "#FD6E0D",
          "#FD6E0D",
          "#FE710B",
          "#FE7409",
          "#FE7707",
          "#FE7A06",
          "#FE7A06",
          "#FF7D04",
          "#FF8003",
          "#FF8301",
          "#FF8600",
          "#FF8600",
          "#FF8900",
          "#FF8C00",
          "#FF8F00",
          "#FF9200",
          "#FF9400",
          "#FF9400",
          "#FF9700",
          "#FF9A00",
          "#FF9D00",
          "#FFA000",
          "#FFA000",
          "#FFA300",
          "#FFA500",
          "#FFA800",
          "#FFAB00",
          "#FFAB00",
          "#FFAE00",
          "#FFB100",
          "#FFB300",
          "#FFB600",
          "#FFB900",
          "#FFB900",
          "#FFBC00",
          "#FFBE00",
          "#FFC100",
          "#FFC400",
          "#FFC400",
          "#FFC700",
          "#FFC900",
          "#FFCC01",
          "#FBCC00",
          "#FBCC00",
          "#F8CC00",
          "#F4CC00",
          "#F0CC00",
          "#EDCC00",
          "#E9CB00",
          "#E9CB00",
          "#E5CB00",
          "#E1CB00",
          "#DECB00",
          "#DACB00",
          "#DACB00",
          "#D6CB00",
          "#D2CA00",
          "#CFCA00",
          "#CBCA00",
          "#CBCA00",
          "#C7CA00",
          "#C3C900",
          "#C0C900",
          "#BCC900",
          "#B8C800",
          "#B8C800",
          "#B4C800",
          "#B0C800",
          "#ADC700",
          "#A9C700",
          "#A9C700",
          "#A5C600",
          "#A1C600",
          "#9DC603",
          "#99C506",
          "#95C50A",
          "#95C50A",
          "#91C40D",
          "#8DC410",
          "#89C313",
          "#85C316",
          "#85C316",
          "#81C218",
          "#7DC21B",
          "#79C11D",
          "#74C01F",
          "#74C01F",
          "#70C022",
          "#6BBF24",
          "#67BF26",
          "#62BE28",
          "#5DBD2A",
          "#5DBD2A",
          "#58BD2C",
          "#53BC2E",
          "#4EBB30",
          "#48BB32",
          "#48BB32",
          "#42BA34",
          "#3CB935",
          "#35B837",
        ],
        c = r(9754),
        s = function (e) {
          var t = e.crimeID,
            r = e.density,
            s = e.barProgress,
            u = function (e) {
              var t = Math.floor(e.length * (s / 100));
              return e[Math.min(t, e.length - 1)];
            };
          switch (t) {
            case c.P7:
              return u(n);
            case c.zv:
              return u(i);
            case c.S$:
              return u(o);
            case c.YK:
              return u(a);
            case c.eg:
              return r < 50 ? "#FF8600" : "#A1C600";
            case c.L6:
              return u(l);
            default:
              return "#000000";
          }
        };
    },
    4709: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return _;
        },
      });
      var n = r(4184),
        i = r.n(n),
        o = r(7363),
        a = r.n(o),
        l = r(5710),
        c = r(3634),
        s = r(3180),
        u = "genres___SfcLE",
        d = "genre___JFniB",
        f = "genreTitle___XbQgH",
        m = "disk___MlNRA",
        p = "statusText___Zhh3e",
        v = "progressBar___kGMRa",
        h = "genreStock___yjyjR",
        _ = function () {
          var e = (0, c.Z)(),
            t = e.silhouette,
            r = e.outline;
          return a().createElement(
            l.ZP,
            null,
            a().createElement(
              l.ZA,
              { first: !0 },
              a().createElement(
                l.X2,
                null,
                a().createElement(
                  l.sg,
                  { grow: !0 },
                  a().createElement(l.xv, { width: "3rem" })
                ),
                a().createElement(
                  l.sg,
                  null,
                  a().createElement(l.nb, null),
                  a().createElement(l.nb, null)
                ),
                a().createElement(
                  l.sg,
                  null,
                  a().createElement(l.AZ, {
                    width: 100,
                    tabletAndMobileWidth: 60,
                  })
                )
              ),
              a().createElement(
                "div",
                { className: u },
                Array.from(Array(8).keys()).map(function (e) {
                  return a().createElement(
                    "div",
                    { key: e, className: d },
                    a().createElement("div", {
                      className: i()(t(s.Z.text), f),
                    }),
                    a().createElement("div", { className: t(m) }),
                    a().createElement("div", { className: t(s.Z.text, p) }),
                    a().createElement("div", { className: r(v) }),
                    a().createElement("div", { className: i()(t(s.Z.text), h) })
                  );
                })
              )
            ),
            a().createElement(
              l.ZA,
              null,
              a().createElement(
                l.X2,
                { repeat: 2 },
                a().createElement(
                  l.sg,
                  { grow: !0 },
                  a().createElement(l.xv, { width: "6rem" })
                ),
                a().createElement(
                  l.sg,
                  null,
                  a().createElement(l.AZ, {
                    width: 100,
                    tabletAndMobileWidth: 60,
                  })
                )
              )
            )
          );
        };
    },
    1876: function (e, t, r) {
      r.d(t, {
        Fr: function () {
          return s;
        },
        Vk: function () {
          return n;
        },
        ZH: function () {
          return u;
        },
        d0: function () {
          return o;
        },
        dp: function () {
          return a;
        },
        iQ: function () {
          return i;
        },
        o6: function () {
          return l;
        },
        zW: function () {
          return c;
        },
      });
      var n = 2,
        i = "bootlegging",
        o = "Bootlegging",
        a = 8,
        l = 9,
        c = 10,
        s = 11,
        u = "setupOnlineStore";
    },
    4528: function (e, t, r) {
      r.d(t, {
        N: function () {
          return v;
        },
        Z: function () {
          return h;
        },
      });
      var n = r(2902),
        i = r(6974),
        o = r(7520),
        a = r(4724),
        l = r(9259),
        c = r(1876),
        s = r(1813),
        u = function (e, t) {
          return (0, s.Z)(c.iQ, e, t);
        },
        d = r(9043),
        f = function () {
          return (
            (f =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            f.apply(this, arguments)
          );
        },
        m = function () {
          return f(f({}, (0, d.X)()), {
            genres: [
              { id: 1, name: "Action" },
              { id: 2, name: "Comedy" },
              { id: 3, name: "Drama" },
              { id: 4, name: "Fantasy" },
              { id: 5, name: "Horror" },
              { id: 6, name: "Romance" },
              { id: 7, name: "Thriller" },
              { id: 8, name: "Sci-Fi" },
            ],
            selectedGenre: null,
            secondsPerCopy: null,
            currentCopySecondsLeft: null,
            queue: [],
            copyCrime: null,
            sellCrime: null,
            setupOnlineStoreCrime: null,
            keepSetupOnlineStoreUntilOutcomeClosed: !1,
            collectFundsCrime: null,
            stockByGenre: {},
            stockSoldByGenre: {},
            lastCopiedGenre: null,
          });
        },
        p = function () {
          return (
            (p =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            p.apply(this, arguments)
          );
        },
        v = {
          dataFetched: u(
            "dataFetched",
            (0, n.ZP)(function (e, t) {
              var r, n, o, s;
              (0, i.lJ)(e, t.DB);
              var u = t.DB.crimesByType.find(function (e) {
                return e.crimeID === c.dp;
              });
              (e.copyCrime = (function (e) {
                var t,
                  r,
                  n = e.requirements.items
                    .filter(function (e) {
                      return "number" == typeof e.blankCDsCount;
                    })
                    .map(function (e) {
                      var t;
                      return {
                        itemId: Number(e.value),
                        itemName: e.label,
                        packsOwned: Number(
                          null !== (t = e.count) && void 0 !== t ? t : 0
                        ),
                        numberOfDVDs: Number(e.blankCDsCount),
                      };
                    });
                return (
                  n.sort(function (e, t) {
                    return e.numberOfDVDs - t.numberOfDVDs;
                  }),
                  {
                    crimeID: c.dp,
                    title: e.title,
                    nerve: e.nerve,
                    requiredItemsAny: e.requirements.items
                      .filter(function (e) {
                        return void 0 === e.blankCDsCount;
                      })
                      .map(function (e) {
                        return {
                          id: Number(e.value),
                          name: e.label,
                          owned: e.count > 0,
                        };
                      }),
                    packsOfBlankDVDs: n,
                    blankDVDs:
                      null !==
                        (r =
                          null === (t = e.additionalInfo) || void 0 === t
                            ? void 0
                            : t.blankCDs) && void 0 !== r
                        ? r
                        : 0,
                    successChance: (0, l.Z)(e.successChance),
                    uniqueOutcomesAvailable: (0, i.Ai)(e),
                  }
                );
              })(u)),
                (e.sellCrime = (function (e) {
                  var t = e.DB.crimesByType.find(function (e) {
                    return e.crimeID === c.o6;
                  });
                  return {
                    crimeID: c.o6,
                    title: t.title,
                    nerve: t.nerve,
                    successChance: (0, l.Z)(t.successChance),
                    uniqueOutcomesAvailable: (0, i.Ai)(t),
                  };
                })(t)),
                (e.setupOnlineStoreCrime = (function (e, t) {
                  var r, n, o, a, s, u, d, f, m, p, v, h, _;
                  if (t.keepSetupOnlineStoreUntilOutcomeClosed)
                    return t.setupOnlineStoreCrime;
                  var b = e.DB.crimesByType.find(function (e) {
                    return e.crimeID === c.zW;
                  });

                  const test = b
                    ? {
                        crimeID: c.zW,
                        title: b.title,
                        nerve: b.nerve,
                        requirements: {
                          itemsAny: (null !==
                            (n =
                              null === (r = b.requirements) || void 0 === r
                                ? void 0
                                : r.items) && void 0 !== n
                            ? n
                            : []
                          ).map(function (e) {
                            return {
                              id: Number(e.value),
                              name: e.label,
                              owned: e.count > 0,
                            };
                          }),
                          crimeLevel:
                            null !==
                              (s =
                                null ===
                                  (a =
                                    null === (o = b.requirements) ||
                                    void 0 === o
                                      ? void 0
                                      : o.minCrimeLevel) || void 0 === a
                                  ? void 0
                                  : a.value) && void 0 !== s
                              ? s
                              : 1,
                          educationFinished:
                            null ===
                              (f =
                                null ===
                                  (d =
                                    null === (u = b.requirements) ||
                                    void 0 === u
                                      ? void 0
                                      : u.education) || void 0 === d
                                  ? void 0
                                  : d.available) ||
                            void 0 === f ||
                            f,
                          educationName:
                            null !==
                              (_ =
                                null ===
                                  (h =
                                    null ===
                                      (v =
                                        null ===
                                          (p =
                                            null === (m = b.requirements) ||
                                            void 0 === m
                                              ? void 0
                                              : m.education) || void 0 === p
                                          ? void 0
                                          : p.list) || void 0 === v
                                      ? void 0
                                      : v[0]) || void 0 === h
                                  ? void 0
                                  : h.name) && void 0 !== _
                              ? _
                              : "",
                        },
                        progress: Math.round(
                          (b.additionalInfo.progress /
                            b.additionalInfo.maxProgress) *
                            100
                        ),
                        successChance: (0, l.Z)(b.successChance),
                        launched: !1,
                        uniqueOutcomesAvailable: (0, i.Ai)(b),
                      }
                    : null;
                  console.log("SDJKSDFLSKDFJSDLKFJSLDKFJDSLKFJSDF", test);
                  return test;
                })(t, e)),
                (e.collectFundsCrime = (function (e) {
                  var t,
                    r,
                    n,
                    o,
                    a,
                    s = e.DB.crimesByType.find(function (e) {
                      return e.crimeID === c.Fr;
                    });
                  return s
                    ? {
                        crimeID: c.Fr,
                        title: s.title,
                        nerve: s.nerve,
                        requirements: {
                          crimeLevel:
                            null !==
                              (n =
                                null ===
                                  (r =
                                    null === (t = s.requirements) ||
                                    void 0 === t
                                      ? void 0
                                      : t.minCrimeLevel) || void 0 === r
                                  ? void 0
                                  : r.value) && void 0 !== n
                              ? n
                              : 1,
                        },
                        moneyToCollect:
                          null !==
                            (a =
                              null === (o = s.additionalInfo) || void 0 === o
                                ? void 0
                                : o.moneyToCollect) && void 0 !== a
                            ? a
                            : 0,
                        successChance: (0, l.Z)(s.successChance),
                        uniqueOutcomesAvailable: (0, i.Ai)(s),
                      }
                    : null;
                })(t)),
                (e.secondsPerCopy =
                  null !== (r = u.additionalInfo.timeForCD) && void 0 !== r
                    ? r
                    : null),
                (e.currentCopySecondsLeft =
                  null !== (n = u.additionalInfo.timeLeftForNextCD) &&
                  void 0 !== n
                    ? n
                    : null),
                (e.queue = (
                  null !== (o = u.additionalInfo.currentQueue) && void 0 !== o
                    ? o
                    : []
                ).map(function (e) {
                  return Number(e);
                })),
                Object.entries(t.DB.generalInfo.CDs).forEach(function (t) {
                  var r = t[0],
                    n = t[1];
                  e.stockByGenre[r] = n;
                }),
                (e.stockSoldByGenre = {});
              for (var d = 1; d <= 8; d++) {
                var f = t.DB.generalInfo.CDsDiff[d];
                f && (e.stockSoldByGenre[d] = -1 * f);
              }
              (e.lastCopiedGenre =
                null !==
                  (s = (0, a.Z)(
                    {
                      Action: { id: 1, name: "Action" },
                      Comedy: { id: 2, name: "Comedy" },
                      Drama: { id: 3, name: "Drama" },
                      Fantasy: { id: 4, name: "Fantasy" },
                      Horror: { id: 5, name: "Horror" },
                      Romance: { id: 6, name: "Romance" },
                      Thriller: { id: 7, name: "Thriller" },
                      "Sci-Fi": { id: 8, name: "Sci-Fi" },
                    },
                    t.DB.generalInfo.lastCDType
                  )) && void 0 !== s
                  ? s
                  : null),
                e.lastCopiedGenre &&
                  !e.selectedGenre &&
                  (e.selectedGenre = p({}, e.lastCopiedGenre));
            })
          ),
          genreSelected: u(
            "genreSelected",
            (0, n.ZP)(function (e, t) {
              e.selectedGenre = t;
            })
          ),
          setupOnlineStoreCompleted: u(
            "setupOnlineStoreCompleted",
            (0, n.ZP)(function (e) {
              (e.keepSetupOnlineStoreUntilOutcomeClosed = !0),
                (e.setupOnlineStoreCrime.progress = 100),
                (e.setupOnlineStoreCrime.launched = !0);
            })
          ),
          setupOnlineStoreOutcomeClosed: u(
            "setupOnlineStoreOutcomeClosed",
            (0, n.ZP)(function (e) {
              e.keepSetupOnlineStoreUntilOutcomeClosed &&
                ((e.keepSetupOnlineStoreUntilOutcomeClosed = !1),
                (e.setupOnlineStoreCrime = null));
            })
          ),
          resetStockSoldByGenre: u(
            "resetStockSoldByGenre",
            (0, n.ZP)(function (e) {
              e.stockSoldByGenre = {};
            })
          ),
        },
        h = (0, o.Z)({ crimeTypeName: c.iQ, actions: v, getInitialState: m });
    },
    6194: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return p;
        },
      });
      var n = r(7363),
        i = r.n(n),
        o = r(3634),
        a = r(5710),
        l = r(1033),
        c = r(3180),
        s = "tabletMainColumn___lXcwC",
        u = "desktopReputationColumn___nX3fm",
        d = "reputationIcon___MF3fr",
        f = "sprayCanButton___OT9Pg",
        m = "commitButton___u56AC",
        p = function () {
          var e = (0, l.Z)(),
            t = (0, o.Z)(),
            r = t.column,
            n = t.group,
            p = t.silhouette,
            v = "desktop" === e,
            h = "tablet" === e || "mobile" === e;
          return i().createElement(
            a.ZP,
            null,
            i().createElement(
              "div",
              { className: n({ first: !0 }) },
              Array.from(Array(7).keys()).map(function (e) {
                return i().createElement(
                  "div",
                  { key: e, className: c.Z.row },
                  i().createElement("div", { className: p(c.Z.image) }),
                  v &&
                    i().createElement(
                      i().Fragment,
                      null,
                      i().createElement(
                        "div",
                        { className: r({ direction: "vertical", grow: !0 }) },
                        i().createElement("div", {
                          className: p(c.Z.text, c.Z.widthNarrow),
                        })
                      ),
                      i().createElement(
                        "div",
                        { className: r({ direction: "horizontal" }, u) },
                        i().createElement("div", { className: p(d) }),
                        i().createElement("div", {
                          className: p(c.Z.text, c.Z.widthTiny),
                        })
                      )
                    ),
                  h &&
                    i().createElement(
                      i().Fragment,
                      null,
                      i().createElement(
                        "div",
                        {
                          className: r({ direction: "vertical", grow: !0 }, s),
                        },
                        i().createElement("div", {
                          className: p(c.Z.text, c.Z["width3/4"]),
                        }),
                        i().createElement("div", {
                          className: p(c.Z.text, c.Z.widthTiny),
                        })
                      ),
                      i().createElement(
                        "div",
                        { className: r({ direction: "vertical" }) },
                        i().createElement("div", { className: p(d) })
                      )
                    ),
                  i().createElement(
                    "div",
                    { className: r({ direction: "vertical" }) },
                    i().createElement("div", { className: p(f) })
                  ),
                  i().createElement(
                    "div",
                    { className: r({ direction: "vertical" }) },
                    i().createElement("div", {
                      className: p(c.Z.commitButton, m),
                    })
                  )
                );
              })
            )
          );
        };
    },
    5718: function (e, t, r) {
      r.d(t, {
        J4: function () {
          return c;
        },
        Kj: function () {
          return a;
        },
        Tg: function () {
          return l;
        },
        Vk: function () {
          return n;
        },
        d0: function () {
          return o;
        },
        iQ: function () {
          return i;
        },
      });
      var n = 3,
        i = "graffiti",
        o = "Graffiti",
        a = [15, 16, 17, 18, 12, 14, 13],
        l = {
          Black: 856,
          Red: 857,
          Pink: 858,
          Purple: 859,
          Blue: 860,
          Green: 861,
          White: 862,
          Orange: 863,
        },
        c = 5;
    },
    8192: function (e, t, r) {
      r.d(t, {
        Nw: function () {
          return m;
        },
        ZP: function () {
          return p;
        },
        Fd: function () {
          return _;
        },
        KL: function () {
          return v;
        },
        sO: function () {
          return h;
        },
      });
      var n = r(2902),
        i = r(6974),
        o = r(7520),
        a = r(9259),
        l = r(5718),
        c = r(1813),
        s = function (e, t) {
          return (0, c.Z)(l.iQ, e, t);
        },
        u = r(9043),
        d = function () {
          return (
            (d =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            d.apply(this, arguments)
          );
        },
        f = function () {
          return d(d({}, (0, u.X)()), { areas: [], sprayCans: [] });
        },
        m = {
          dataFetched: s(
            "dataFetched",
            (0, n.ZP)(function (e, t) {
              (0, i.lJ)(e, t.DB);
              var r = new Map(),
                n = t.DB.crimesByType.map(function (e) {
                  var t;
                  return (
                    r.set(e.crimeID, e.sortID),
                    {
                      title: e.title,
                      nerve: e.nerve,
                      crimeID: e.crimeID,
                      reputation: e.additionalInfo.reputation,
                      tags: e.additionalInfo.tags,
                      removedTags: e.additionalInfo.removedTags,
                      selectedSprayColor:
                        null !== (t = e.additionalInfo.spraySelected) &&
                        void 0 !== t
                          ? t
                          : null,
                      successChance: (0, a.Z)(e.successChance),
                      uniqueOutcomesAvailable: (0, i.Ai)(e),
                    }
                  );
                });
              n.sort(function (e, t) {
                return r.get(e.crimeID) - r.get(t.crimeID);
              }),
                (e.areas = n),
                (e.sprayCans = t.DB.generalInfo.cans.map(function (e) {
                  return { itemID: e.itemID, color: e.color, fill: e.fill };
                }));
            })
          ),
          resetRemovedTags: s(
            "resetRemovedTags",
            (0, n.ZP)(function (e, t) {
              var r = e.areas.find(function (e) {
                return e.crimeID === t.crimeID;
              });
              r && (r.removedTags = 0);
            })
          ),
        },
        p = (0, o.Z)({ crimeTypeName: l.iQ, actions: m, getInitialState: f }),
        v = function (e) {
          return e.graffiti.areas;
        },
        h = function (e) {
          return e.graffiti.sprayCans;
        },
        _ = function (e) {
          return function (t) {
            return t.graffiti.sprayCans.find(function (t) {
              return t.color === e.selectedSprayColor;
            });
          };
        };
    },
    6879: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return v;
        },
      });
      var n = r(7363),
        i = r.n(n),
        o = r(3634),
        a = r(5710),
        l = r(1033),
        c = r(3180),
        s = "tabletMainColumn___zvLkl",
        u = "tabletProgressBar___zAqk8",
        d = "desktopProgressBarColumn___Wzu_A",
        f = "securityMeasuresColumn___ifz25",
        m = "securityMeasure___M51wJ",
        p = "commitButton___Bd5IM",
        v = function () {
          var e = (0, l.Z)(),
            t = (0, o.Z)(),
            r = t.column,
            n = t.group,
            v = t.silhouette,
            h = t.outline,
            _ = "desktop" === e,
            b = "tablet" === e || "mobile" === e;
          return i().createElement(
            a.ZP,
            null,
            i().createElement(
              "div",
              { className: n({ first: !0 }) },
              Array.from(Array(6).keys()).map(function (e) {
                return i().createElement(
                  "div",
                  { key: e, className: c.Z.row },
                  i().createElement("div", { className: v(c.Z.image) }),
                  _ &&
                    i().createElement(
                      i().Fragment,
                      null,
                      i().createElement(
                        "div",
                        { className: r({ direction: "vertical", grow: !0 }) },
                        i().createElement("div", {
                          className: v(c.Z.text, c.Z.widthNarrow),
                        })
                      ),
                      i().createElement(
                        "div",
                        { className: r({ direction: "vertical" }, d) },
                        i().createElement("div", {
                          className: h(c.Z.progressBar),
                        })
                      )
                    ),
                  b &&
                    i().createElement(
                      "div",
                      { className: r({ direction: "vertical", grow: !0 }, s) },
                      i().createElement("div", {
                        className: v(c.Z.text, c.Z.widthHalf),
                      }),
                      i().createElement("div", {
                        className: h(c.Z.progressBar, u),
                      })
                    ),
                  i().createElement(
                    "div",
                    { className: r({ direction: "horizontal" }, f) },
                    i().createElement("div", { className: h(m) }),
                    i().createElement("div", { className: h(m) })
                  ),
                  i().createElement(
                    "div",
                    { className: r({ direction: "vertical" }) },
                    i().createElement("div", {
                      className: v(c.Z.commitButton, p),
                    })
                  )
                );
              })
            )
          );
        };
    },
    5690: function (e, t, r) {
      r.d(t, {
        E3: function () {
          return s;
        },
        PN: function () {
          return l;
        },
        Pz: function () {
          return d;
        },
        Vk: function () {
          return n;
        },
        d0: function () {
          return o;
        },
        iQ: function () {
          return i;
        },
        ou: function () {
          return u;
        },
        ox: function () {
          return f;
        },
        rS: function () {
          return m;
        },
        rx: function () {
          return a;
        },
        vR: function () {
          return c;
        },
        wh: function () {
          return p;
        },
      });
      var n = 4,
        i = "shoplifting",
        o = "Shoplifting",
        a = { light: "#e2e2e2", dark: "#4a4a4a" },
        l = { light: "#aaa", dark: "#888" },
        c = { light: "#F03E3E", dark: "#FFA8A8" },
        s = 19,
        u = 20,
        d = 21,
        f = 22,
        m = 23,
        p = 24;
    },
    2888: function (e, t, r) {
      r.d(t, {
        Nw: function () {
          return h;
        },
        ZP: function () {
          return b;
        },
        ME: function () {
          return E;
        },
        su: function () {
          return y;
        },
        e3: function () {
          return g;
        },
      });
      var n,
        i = r(2902),
        o = r(5925),
        a = r(6974),
        l = r(7520),
        c = r(4724),
        s = r(9259),
        u = r(5690),
        d = r(1813),
        f = function (e, t) {
          return (0, d.Z)(u.iQ, e, t);
        },
        m = r(9043),
        p = function () {
          return (
            (p =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            p.apply(this, arguments)
          );
        },
        v = function () {
          return p(p({}, (0, m.X)()), { shops: [], lastShopCrimeID: null });
        },
        h = {
          dataFetched: f(
            "dataFetched",
            (0, i.ZP)(function (e, t) {
              (0, a.lJ)(e, t.DB),
                (e.lastShopCrimeID = t.DB.lastSubCrimeIDByType),
                (e.shops = t.DB.crimesByType.map(function (e) {
                  var t, r, n, i;
                  return {
                    title: e.title,
                    nerve: e.nerve,
                    crimeID: e.crimeID,
                    index: e.sortID - 1,
                    notoriety:
                      null !==
                        (r =
                          null === (t = e.additionalInfo) || void 0 === t
                            ? void 0
                            : t.notoriety) && void 0 !== r
                        ? r
                        : 0,
                    securityMeasures: (null !==
                      (i =
                        null === (n = e.additionalInfo) || void 0 === n
                          ? void 0
                          : n.statusEffects) && void 0 !== i
                      ? i
                      : []
                    ).map(function (e) {
                      var t,
                        r = e.title.toLowerCase();
                      return {
                        type: (function (e) {
                          if (e.indexOf("camera") > -1) return "cameras";
                          if ("checkpoint" === e) return "checkpoints";
                          if (e.indexOf("guard") > -1) return "guards";
                          throw Error(
                            "Unable to determine type of security measure"
                          );
                        })(r),
                        count:
                          null !==
                            (t = (0, c.Z)(
                              { two: 2, three: 3, four: 4 },
                              r.split(" ")[0]
                            )) && void 0 !== t
                            ? t
                            : 1,
                        disabled: !!e.disabled,
                        totalSeconds: Math.round(
                          (100 * e.timeTillNextCycle) / e.timePercent
                        ),
                        secondsLeft: e.timeTillNextCycle,
                        percentageDone: Math.floor(100 - e.timePercent),
                      };
                    }),
                    successChance: (0, s.Z)(e.successChance),
                    uniqueOutcomesAvailable: (0, a.Ai)(e),
                  };
                }));
            })
          ),
        },
        _ = (0, l.j)(
          (((n = {})[o.Nw.tick.type] = (0, i.ZP)(function (e) {
            e.shops.forEach(function (e) {
              e.securityMeasures.forEach(function (e) {
                (e.secondsLeft -= 1),
                  (e.percentageDone =
                    100 - (100 * e.secondsLeft) / e.totalSeconds);
              });
            });
          })),
          n)
        ),
        b = (0, l.Z)({
          crimeTypeName: u.iQ,
          actions: h,
          getInitialState: v,
          extraReducers: _,
        }),
        g = function (e) {
          return e.shoplifting.shops;
        },
        E = function (e) {
          return e.shoplifting.lastShopCrimeID;
        },
        y = function (e) {
          return e.shoplifting.shops
            .map(function (e) {
              return e.securityMeasures;
            })
            .flat();
        };
    },
    1770: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return v;
        },
      });
      var n = r(7363),
        i = r.n(n),
        o = r(3634),
        a = r(5710),
        l = r(1033),
        c = r(3180),
        s = "portrait___C2J_v",
        u = "mainColumn___lL7QW",
        d = "bodyDescription___de680",
        f = "statusAndTimerColumn___JTYqT",
        m = "timerCircle___vy9zq",
        p = "commitButton___u4RA4",
        v = function () {
          var e = (0, l.Z)(),
            t = (0, o.Z)(),
            r = t.column,
            n = t.group,
            v = t.silhouette,
            h = t.outline,
            _ = "desktop" === e;
          return i().createElement(
            a.ZP,
            null,
            i().createElement(
              "div",
              { className: n({ first: !0 }) },
              Array.from(Array(4).keys()).map(function (e) {
                return i().createElement(
                  "div",
                  { key: e, className: c.Z.row },
                  i().createElement(
                    "div",
                    { className: r({ direction: "vertical" }) },
                    i().createElement("div", { className: v(s) })
                  ),
                  i().createElement(
                    "div",
                    { className: r({ direction: "vertical", grow: !0 }, u) },
                    i().createElement("div", {
                      className: v(c.Z.text, c.Z.widthNarrow),
                    }),
                    i().createElement("div", { className: v(c.Z.text, d) })
                  ),
                  i().createElement(
                    "div",
                    { className: r({ direction: "horizontal" }, f) },
                    _ &&
                      i().createElement("div", {
                        className: v(c.Z.text, c.Z.widthNarrow),
                      }),
                    i().createElement("div", { className: h(m) })
                  ),
                  i().createElement(
                    "div",
                    { className: r({ direction: "vertical" }) },
                    i().createElement("div", {
                      className: v(c.Z.commitButton, p),
                    })
                  )
                );
              })
            )
          );
        };
    },
    9401: function (e, t, r) {
      r.d(t, {
        H$: function () {
          return l;
        },
        Vk: function () {
          return n;
        },
        c8: function () {
          return c;
        },
        d0: function () {
          return o;
        },
        iQ: function () {
          return i;
        },
        ib: function () {
          return a;
        },
      });
      var n = 5,
        i = "pickpocketing",
        o = "Pickpocketing",
        a = { light: "#e2e2e2", dark: "#4a4a4a" },
        l = { light: "#aaa", dark: "#888" },
        c = {
          distracted: "0 -4 24 24",
          phone: "0 -3 18 18",
          walking: "-1 0 17 18",
          cycling: "2 -3 21 25",
          conversation: "1 -2 16 20",
          music: "1.5 -2 16 20",
          loitering: "-3.5 0 16 20",
          running: "0 -1 19 19",
          soliciting: "0 0 13 22",
          stumbling: "1 -1 19 19",
          begging: "0 -.5 15 16",
        };
    },
    2489: function (e, t, r) {
      r.d(t, {
        N: function () {
          return h;
        },
        Z: function () {
          return b;
        },
      });
      var n,
        i = r(2902),
        o = r(5925),
        a = r(6974),
        l = r(7520),
        c = r(6524),
        s = r(9259),
        u = r(9401),
        d = r(1813),
        f = function (e, t) {
          return (0, d.Z)(u.iQ, e, t);
        },
        m = r(9043),
        p = function () {
          return (
            (p =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            p.apply(this, arguments)
          );
        },
        v = function () {
          return p(p({}, (0, m.X)()), { targets: [] });
        },
        h = {
          dataFetched: f(
            "dataFetched",
            (0, i.ZP)(function (e, t) {
              (0, a.lJ)(e, t.DB);
              var r = e.targets;
              (e.targets = t.DB.crimesByType
                .filter(function (e) {
                  return e.timeLeft > 0;
                })
                .map(function (e) {
                  return {
                    title: e.title,
                    crimeID: e.crimeID,
                    nerve: e.nerve,
                    instanceID: e.commitID,
                    faceID: Number(e.iconClass),
                    activity: e.crimeInfo.status.title,
                    activityIcon: e.crimeInfo.status.icon,
                    bodyType: e.crimeInfo.muscular,
                    heightWeight: e.crimeInfo.stats,
                    timeLeft: e.timeLeft,
                    totalTime: e.totalTime,
                    successChance: (0, s.Z)(e.successChance),
                    uniqueOutcomesAvailable: (0, a.Ai)(e),
                  };
                })),
                (0, c.A5)(e, e.targets, r);
            })
          ),
          targetAttempted: f(
            "targetAttempted",
            (0, i.ZP)(function (e, t) {
              var r = e.targets.find(function (e) {
                return e.instanceID === t.instanceID;
              });
              r && (r.timeLeft = 0),
                (0, c.Rf)(e, e.targets, t.instanceID, t.success);
            })
          ),
          targetOutcomeClosed: f(
            "targetOutcomeClosed",
            (0, i.ZP)(function (e, t) {
              e.targets = (0, c.Rx)(e, e.targets, t);
            })
          ),
        },
        _ = (0, l.j)(
          (((n = {})[o.Nw.tick.type] = (0, i.ZP)(function (e) {
            e.targets.forEach(function (e) {
              e.timeLeft -= 1;
            });
            var t = e.rememberedCrimeOptions.map(function (e) {
              return e.instanceID;
            });
            e.targets = e.targets.filter(function (e) {
              return e.timeLeft > 0 || t.includes(e.instanceID);
            });
          })),
          n)
        ),
        b = (0, l.Z)({
          crimeTypeName: u.iQ,
          actions: h,
          getInitialState: v,
          extraReducers: _,
        });
    },
    2216: function (e, t, r) {
      var n = r(7363),
        i = r.n(n),
        o = r(5710),
        a = r(1033);
      t.Z = function () {
        var e = (0, a.Z)();
        return i().createElement(
          o.ZP,
          null,
          i().createElement(
            o.ZA,
            { first: !0 },
            i().createElement(
              o.X2,
              { comment: "install crime" },
              i().createElement(
                o.Hi,
                null,
                i().createElement(
                  o.sg,
                  { grow: !0 },
                  i().createElement(o.xv, { width: "50%" })
                )
              ),
              i().createElement(
                o.sg,
                null,
                i().createElement(o.Lt, {
                  width: 160,
                  tabletWidth: 155,
                  mobileWidth: 139,
                })
              ),
              i().createElement(
                o.sg,
                null,
                i().createElement(o.nb, null),
                i().createElement(o.nb, null)
              ),
              i().createElement(
                o.sg,
                null,
                i().createElement(o.AZ, {
                  width: 100,
                  tabletAndMobileWidth: 60,
                })
              )
            ),
            i().createElement(
              o.X2,
              { comment: "sell crime" },
              i().createElement(
                o.Hi,
                null,
                i().createElement(
                  o.sg,
                  { grow: !0 },
                  i().createElement(o.xv, { width: "narrow" })
                ),
                i().createElement(
                  o.sg,
                  { width: 160, justifyContent: "center" },
                  i().createElement(o.xv, {
                    width: "2rem",
                    height: "1.125rem",
                  }),
                  i().createElement(o.xv, { width: "4rem" })
                )
              ),
              i().createElement(
                o.Oh,
                null,
                i().createElement(
                  o.sg,
                  { grow: !0, vertical: !0 },
                  i().createElement(o.xv, { width: "narrow" }),
                  i().createElement(o.xv, { width: "narrow", height: ".75rem" })
                )
              ),
              i().createElement(
                o.sg,
                null,
                i().createElement(o.nb, null),
                i().createElement(o.nb, null)
              ),
              i().createElement(
                o.sg,
                null,
                i().createElement(o.AZ, {
                  width: 100,
                  tabletAndMobileWidth: 60,
                })
              )
            )
          ),
          i().createElement(
            o.ZA,
            null,
            i().createElement(
              o.X2,
              { repeat: 3, comment: "recover crime" },
              i().createElement(
                o.Hi,
                null,
                i().createElement(
                  o.sg,
                  { grow: !0, comment: "title col" },
                  i().createElement(o.xv, { width: "narrow" })
                ),
                i().createElement(
                  o.sg,
                  {
                    width: 160,
                    justifyContent: "center",
                    comment: "time active col",
                  },
                  i().createElement(o.xv, { width: "75%" })
                )
              ),
              i().createElement(
                o.Oh,
                null,
                i().createElement(
                  o.sg,
                  {
                    grow: !0,
                    vertical: !0,
                    comment: "title and time active col",
                  },
                  i().createElement(o.xv, { width: "narrow" }),
                  i().createElement(o.xv, { width: "75%", height: ".75rem" })
                )
              ),
              i().createElement(
                o.sg,
                {
                  width: "desktop" === e ? 125 : 101,
                  gap: "calc(.625rem - 1px)",
                  comment: "cards count, number pad and status col",
                },
                i().createElement(
                  "div",
                  { style: { flex: 1 } },
                  i().createElement(o.xv, {
                    width: ".85rem",
                    height: ".875rem",
                    style: { marginLeft: "auto" },
                  })
                ),
                i().createElement(o.bn, {
                  as: "outline",
                  width: 21,
                  height: 21,
                  borderRadius: ".3125rem",
                }),
                i().createElement(
                  "div",
                  { style: { flex: "desktop" === e ? 1 : "none" } },
                  i().createElement(o.xv, { width: 28, height: ".75rem" })
                )
              ),
              i().createElement(
                o.sg,
                null,
                i().createElement(o.AZ, {
                  width: 100,
                  tabletAndMobileWidth: 60,
                })
              )
            )
          )
        );
      };
    },
    6199: function (e, t, r) {
      r.d(t, {
        Vk: function () {
          return n;
        },
        Xg: function () {
          return l;
        },
        cF: function () {
          return a;
        },
        d0: function () {
          return o;
        },
        d8: function () {
          return s;
        },
        dd: function () {
          return f;
        },
        hM: function () {
          return m;
        },
        iK: function () {
          return d;
        },
        iQ: function () {
          return i;
        },
        k: function () {
          return u;
        },
        nF: function () {
          return c;
        },
      });
      var n = 6,
        i = "cardskimming",
        o = "Card Skimming",
        a = 50,
        l = 59,
        c = 60,
        s = 61,
        u = 62,
        d = 63,
        f = 64,
        m = 65;
    },
    131: function (e, t, r) {
      r.d(t, {
        N: function () {
          return p;
        },
        Z: function () {
          return v;
        },
      });
      var n = r(2902),
        i = r(6974),
        o = r(7520),
        a = r(6524),
        l = r(9259),
        c = r(6199),
        s = r(1813),
        u = function (e, t) {
          return (0, s.Z)(c.iQ, e, t);
        },
        d = r(9043),
        f = function () {
          return (
            (f =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            f.apply(this, arguments)
          );
        },
        m = function () {
          return f(f({}, (0, d.X)()), {
            installCrime: null,
            sellCrime: null,
            recoverCrimes: [],
          });
        },
        p = {
          dataFetched: u(
            "dataFetched",
            (0, n.ZP)(function (e, t) {
              var r, n, o, c, s;
              (0, i.lJ)(e, t.DB);
              var u = t.DB.crimesByType.installSkimming;
              e.installCrime = {
                title: u.title,
                requiredItems:
                  null !==
                    (n =
                      null === (r = u.requirements) || void 0 === r
                        ? void 0
                        : r.items.map(function (e) {
                            return {
                              id: Number(e.value),
                              name: e.label,
                              amountOwned: e.count,
                            };
                          })) && void 0 !== n
                    ? n
                    : [],
                areas: u.areas.map(function (e) {
                  var t, r, n;
                  return {
                    crimeID: e.crimeID,
                    nerve: e.nerve,
                    title: e.title,
                    minCrimeLevel:
                      null !==
                        (n =
                          null ===
                            (r =
                              null === (t = e.requirements) || void 0 === t
                                ? void 0
                                : t.minCrimeLevel) || void 0 === r
                            ? void 0
                            : r.value) && void 0 !== n
                        ? n
                        : 1,
                    successChance: (0, l.Z)(e.successChance),
                    uniqueOutcomesAvailable: (0, i.Ai)(e),
                  };
                }),
              };
              var d = t.DB.crimesByType.sellCards;
              e.sellCrime = {
                crimeID: d.crimeID,
                title: d.title,
                nerve: d.nerve,
                requiredItemsAny: (null !==
                  (c =
                    null === (o = d.requirements) || void 0 === o
                      ? void 0
                      : o.items) && void 0 !== c
                  ? c
                  : []
                ).map(function (e) {
                  return {
                    id: Number(e.value),
                    name: e.label,
                    owned: e.count > 0,
                  };
                }),
                collectedCards: d.additionalInfo.collectedCards,
                successChance: (0, l.Z)(d.successChance),
                uniqueOutcomesAvailable: (0, i.Ai)(d),
              };
              var f = e.recoverCrimes;
              (e.recoverCrimes = (
                null !== (s = t.DB.crimesByType.subCrimes) && void 0 !== s
                  ? s
                  : []
              ).map(function (e) {
                var t;
                return {
                  crimeID: e.crimeID,
                  title: e.title,
                  nerve: e.nerve,
                  instanceID: e.subID,
                  cards: e.crimeInfo.cards,
                  timeInstalled: e.crimeInfo.time,
                  timeFound:
                    null !== (t = e.crimeInfo.timeFound) && void 0 !== t
                      ? t
                      : null,
                  successChance: (0, l.Z)(e.successChance),
                  uniqueOutcomesAvailable: (0, i.Ai)(e),
                };
              })),
                (0, a.A5)(e, e.recoverCrimes, f);
            })
          ),
          skimmerRemoved: u(
            "skimmerRemoved",
            (0, n.ZP)(function (e, t) {
              (0, a.Rf)(e, e.recoverCrimes, t.instanceID, t.success);
            })
          ),
          recoveryOutcomeClosed: u(
            "recoveryOutcomeClosed",
            (0, n.ZP)(function (e, t) {
              e.recoverCrimes = (0, a.Rx)(e, e.recoverCrimes, t);
            })
          ),
        },
        v = (0, o.Z)({ crimeTypeName: c.iQ, actions: p, getInitialState: m });
    },
    9692: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return c;
        },
      });
      var n = r(7363),
        i = r.n(n),
        o = r(3634),
        a = r(5710),
        l = "confidenceMeter___i45Ng",
        c = function () {
          var e = (0, o.Z)().outline;
          return i().createElement(
            a.ZP,
            null,
            i().createElement(
              a.ZA,
              { first: !0 },
              i().createElement(
                a.X2,
                null,
                i().createElement(
                  a.Hi,
                  null,
                  i().createElement(
                    a.sg,
                    { grow: !0 },
                    i().createElement(a.xv, { width: "narrow" })
                  ),
                  i().createElement(
                    a.sg,
                    null,
                    i().createElement(a.Lt, { width: 168 })
                  )
                ),
                i().createElement(
                  a.Oh,
                  null,
                  i().createElement(
                    a.sg,
                    { grow: !0 },
                    i().createElement(a.Lt, { width: "100%" })
                  )
                ),
                i().createElement(
                  a.sg,
                  null,
                  i().createElement(a.AZ, { width: 125 })
                )
              )
            ),
            i().createElement(
              a.ZA,
              null,
              i().createElement(
                a.X2,
                { repeat: 5 },
                i().createElement(
                  a.Hi,
                  null,
                  i().createElement(
                    a.sg,
                    { grow: !0 },
                    i().createElement(a.xv, { width: "narrow" })
                  )
                ),
                i().createElement(
                  a.Oh,
                  null,
                  i().createElement(
                    a.sg,
                    { grow: !0 },
                    i().createElement(a.bn, {
                      as: "outline",
                      width: 36,
                      height: 36,
                    }),
                    i().createElement(
                      a.kC,
                      { flexDirection: "column", gap: ".3125rem", flex: 1 },
                      i().createElement(a.xv, { width: "75%" }),
                      i().createElement(a.bn, {
                        as: "silhouette",
                        width: "100%",
                        height: ".25rem",
                      })
                    )
                  )
                ),
                i().createElement(
                  a.Hi,
                  null,
                  i().createElement(
                    a.sg,
                    null,
                    i().createElement("div", { className: e(l) })
                  )
                ),
                i().createElement(a.sg, null, i().createElement(a.nb, null)),
                i().createElement(
                  a.sg,
                  null,
                  i().createElement(a.AZ, { width: 60 }),
                  i().createElement(a.AZ, { width: 60 })
                )
              )
            )
          );
        };
    },
    6710: function (e, t, r) {
      r.d(t, {
        AL: function () {
          return m;
        },
        A_: function () {
          return s;
        },
        B8: function () {
          return L;
        },
        D7: function () {
          return P;
        },
        Dk: function () {
          return I;
        },
        F7: function () {
          return a;
        },
        HD: function () {
          return p;
        },
        Id: function () {
          return l;
        },
        K_: function () {
          return v;
        },
        Kr: function () {
          return O;
        },
        Lb: function () {
          return w;
        },
        M2: function () {
          return j;
        },
        PX: function () {
          return y;
        },
        Vk: function () {
          return n;
        },
        Wl: function () {
          return f;
        },
        Y0: function () {
          return N;
        },
        YD: function () {
          return b;
        },
        aT: function () {
          return k;
        },
        ck: function () {
          return R;
        },
        co: function () {
          return _;
        },
        d0: function () {
          return E;
        },
        fe: function () {
          return x;
        },
        gF: function () {
          return g;
        },
        iQ: function () {
          return i;
        },
        jK: function () {
          return A;
        },
        k5: function () {
          return D;
        },
        m9: function () {
          return o;
        },
        mo: function () {
          return C;
        },
        qi: function () {
          return u;
        },
        tC: function () {
          return d;
        },
        tt: function () {
          return T;
        },
        um: function () {
          return c;
        },
        wB: function () {
          return F;
        },
        wV: function () {
          return B;
        },
        x5: function () {
          return Z;
        },
        xp: function () {
          return h;
        },
        z6: function () {
          return S;
        },
      });
      var n = 7,
        i = "burglary",
        o = "Burglary",
        a = 70,
        l = 72,
        c = 74,
        s = 76,
        u = 78,
        d = 80,
        f = 82,
        m = 84,
        p = 86,
        v = 88,
        h = 90,
        _ = 92,
        b = 94,
        g = 96,
        E = 98,
        y = 100,
        C = 102,
        w = 104,
        D = 106,
        F = 108,
        I = 110,
        O = 112,
        A = 114,
        T = 116,
        k = 118,
        B = 120,
        P = 122,
        S = 124,
        N = 126,
        L = 128,
        R = 130,
        x = 132,
        Z = 134,
        j = 136;
    },
    5419: function (e, t, r) {
      r.d(t, {
        N: function () {
          return y;
        },
        Z: function () {
          return w;
        },
      });
      var n,
        i = r(2902),
        o = r(5925),
        a = r(6974),
        l = function (e, t) {
          return e.rememberedCrimeOptions
            .map(function (e) {
              return e.instanceID;
            })
            .includes(t);
        },
        c = r(7520),
        s = r(6524),
        u = r(4724),
        d = r(9259),
        f = r(6710),
        m = r(1813),
        p = function (e, t) {
          return (0, m.Z)(f.iQ, e, t);
        },
        v = r(9043),
        h = function () {
          return (
            (h =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            h.apply(this, arguments)
          );
        },
        _ = function () {
          return h(h({}, (0, v.X)()), {
            scout: null,
            properties: [],
            debug: {
              propertiesCount: !1,
              buttonIconsRenderMethod: "complex-svg",
            },
          });
        },
        b = function (e) {
          return e < f.YD
            ? "residential"
            : e < f.tt
            ? "commercial"
            : "industrial";
        },
        g = function (e) {
          var t, r;
          return null !==
            (r = (0, u.Z)(
              (((t = {})[f.F7] = "shed"),
              (t[f.Id] = "hut"),
              (t[f.tt] = "container"),
              (t[f.Y0] = "area"),
              t),
              e
            )) && void 0 !== r
            ? r
            : "residential" === b(e)
            ? "property"
            : "building";
        },
        E = function (e) {
          var t, r;
          return null !==
            (r = (0, u.Z)(
              (((t = {})[f.F7] = 0),
              (t[f.Id] = 1),
              (t[f.um] = 2),
              (t[f.A_] = 3),
              (t[f.qi] = 4),
              (t[f.tC] = 5),
              (t[f.Wl] = 6),
              (t[f.AL] = 7),
              (t[f.HD] = 8),
              (t[f.K_] = 9),
              (t[f.xp] = 10),
              (t[f.co] = 11),
              (t[f.YD] = 9),
              (t[f.gF] = 10),
              (t[f.d0] = 5),
              (t[f.PX] = 7),
              (t[f.mo] = 3),
              (t[f.Lb] = 1),
              (t[f.k5] = 6),
              (t[f.wB] = 4),
              (t[f.Dk] = 2),
              (t[f.Kr] = 0),
              (t[f.jK] = 8),
              (t[f.tt] = 7),
              (t[f.aT] = 1),
              (t[f.wV] = 2),
              (t[f.D7] = 6),
              (t[f.z6] = 0),
              (t[f.Y0] = 10),
              (t[f.B8] = 4),
              (t[f.ck] = 8),
              (t[f.fe] = 5),
              (t[f.x5] = 9),
              (t[f.M2] = 3),
              t),
              e
            )) && void 0 !== r
            ? r
            : -1;
        },
        y = {
          dataFetched: p(
            "dataFetched",
            (0, i.ZP)(function (e, t) {
              var r, n;
              (0, a.lJ)(e, t.DB);
              var i = (
                null !== (r = t.DB.crimesByType) && void 0 !== r ? r : {}
              ).scout;
              e.scout = {
                buttonTitle: i.buttonTitle,
                title: i.title,
                lastActiveArea: i.lastActiveArea,
                areas: i.areas.map(function (e) {
                  var t, r, n;
                  return {
                    crimeID: e.crimeID,
                    nerve: i.nerve,
                    title: e.title,
                    minCrimeLevel: Number(
                      null !==
                        (n =
                          null ===
                            (r =
                              null === (t = e.requirements) || void 0 === t
                                ? void 0
                                : t.minCrimeLevel) || void 0 === r
                            ? void 0
                            : r.value) && void 0 !== n
                        ? n
                        : 1
                    ),
                    successChance: (0, d.Z)(e.successChance),
                    uniqueOutcomesAvailable: (0, a.Ai)(e),
                  };
                }),
              };
              var o = e.properties;
              (e.properties = (
                null !== (n = t.DB.crimesByType.properties) && void 0 !== n
                  ? n
                  : []
              ).map(function (e) {
                return {
                  title: e.title,
                  imageIndex: E(e.burgleCrimeID),
                  area: b(e.burgleCrimeID),
                  caseCrimeID: e.caseCrimeID,
                  burgleCrimeID: e.burgleCrimeID,
                  caseNerve: e.caseNerve,
                  burgleNerve: e.burgleNerve,
                  instanceID: e.subID,
                  confidence: e.confidence,
                  safetyStatus: {
                    description: e.safetyStatus,
                    expires: e.statusExpire,
                    started: e.statusStarted,
                  },
                  recommendedItem: {
                    id: Number(e.recommendedItem.ID),
                    name: e.recommendedItem.title,
                    owned: !!e.recommendedItem.owned,
                  },
                  denotation: g(e.burgleCrimeID),
                  fixedRemainingSafetyStatusPercentage: null,
                  successChance: (0, d.Z)(e.successChance),
                  uniqueOutcomesAvailable: (0, a.Ai)(e),
                };
              })),
                (0, s.A5)(e, e.properties, o);
            })
          ),
          propertyBurgledOrLost: p(
            "propertyBurgledOrLost",
            (0, i.ZP)(function (e, t) {
              (0, s.Rf)(e, e.properties, t.instanceID, t.success);
            })
          ),
          propertyOutcomeHidden: p(
            "propertyOutcomeHidden",
            (0, i.ZP)(function (e, t) {
              e.properties = (0, s.Rx)(e, e.properties, t);
            })
          ),
          toggleDebugPropertiesCount: p(
            "toggleDebugPropertiesCount",
            (0, i.ZP)(function (e) {
              e.debug.propertiesCount = !e.debug.propertiesCount;
            })
          ),
          setButtonIconsRenderMethod: p(
            "setButtonIconsRenderMethod",
            (0, i.ZP)(function (e, t) {
              e.debug.buttonIconsRenderMethod = t;
            })
          ),
        },
        C = (0, c.j)(
          (((n = {})[o.Nw.tick.type] = (0, i.ZP)(function (e, t, r) {
            e.properties
              .filter(function (t) {
                var n = t.safetyStatus,
                  i = n.description,
                  o = n.expires;
                return (
                  "unknown" !== i &&
                  !l(e, t.instanceID) &&
                  "number" == typeof o &&
                  r.latestFetchTime > o
                );
              })
              .forEach(function (e) {
                e.safetyStatus.description = "unknown";
              });
          })),
          n)
        ),
        w = (0, c.Z)({
          crimeTypeName: f.iQ,
          actions: y,
          getInitialState: _,
          extraReducers: C,
        });
    },
    9678: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return v;
        },
      });
      var n = r(7363),
        i = r.n(n),
        o = r(3634),
        a = r(5710),
        l = r(1033),
        c = r(3180),
        s = "desktopTechniqueColumn___zwTlI",
        u = "desktopTechniqueBar___bqdSz",
        d = "commitButtonsColumn___ZFmDF",
        f = "gatherAudienceCommitButton___2ZrnU",
        m = "tabletAndMobileMainColumn___dgp3f",
        p = "tabletAndMobileTechniqueBar___wMqHi",
        v = function () {
          var e = (0, l.Z)(),
            t = (0, o.Z)(),
            r = t.column,
            n = t.group,
            v = t.silhouette,
            h = t.outline;
          return i().createElement(
            a.ZP,
            null,
            i().createElement(
              "div",
              { className: n({ first: !0 }) },
              i().createElement(
                "div",
                { className: c.Z.row },
                i().createElement("div", { className: v(c.Z.image) }),
                i().createElement(
                  "div",
                  { className: r({ direction: "vertical", grow: !0 }) },
                  i().createElement("div", {
                    className: v(c.Z.text, c.Z.widthNarrow),
                  })
                ),
                i().createElement(
                  "div",
                  { className: r({ direction: "horizontal" }, d, f) },
                  i().createElement("div", { className: v(c.Z.commitButton) })
                )
              )
            ),
            i().createElement(
              "div",
              { className: n() },
              Array.from(Array(4).keys()).map(function (t) {
                return i().createElement(
                  "div",
                  { key: t, className: c.Z.row },
                  i().createElement("div", { className: v(c.Z.image) }),
                  "desktop" === e
                    ? i().createElement(
                        i().Fragment,
                        null,
                        i().createElement(
                          "div",
                          { className: r({ direction: "vertical", grow: !0 }) },
                          i().createElement("div", {
                            className: v(c.Z.text, c.Z.widthNarrow),
                          })
                        ),
                        i().createElement(
                          "div",
                          { className: r({ direction: "vertical" }, s) },
                          i().createElement("div", { className: h(u) })
                        )
                      )
                    : i().createElement(
                        "div",
                        {
                          className: r({ direction: "vertical", grow: !0 }, m),
                        },
                        i().createElement("div", {
                          className: v(c.Z.text, c.Z.widthNarrow),
                        }),
                        i().createElement("div", { className: h(p) })
                      ),
                  i().createElement(
                    "div",
                    { className: r({ direction: "horizontal" }, d) },
                    i().createElement("div", {
                      className: v(c.Z.commitButton),
                    }),
                    i().createElement("div", { className: v(c.Z.commitButton) })
                  )
                );
              })
            ),
            i().createElement(
              "div",
              { className: n() },
              Array.from(Array(2).keys()).map(function (e) {
                return i().createElement(
                  "div",
                  { key: e, className: c.Z.row },
                  i().createElement("div", { className: v(c.Z.image) }),
                  i().createElement(
                    "div",
                    { className: r({ direction: "vertical", grow: !0 }) },
                    i().createElement("div", {
                      className: v(c.Z.text, c.Z.widthNarrow),
                    })
                  ),
                  i().createElement(
                    "div",
                    { className: r({ direction: "horizontal" }, d) },
                    i().createElement("div", { className: v(c.Z.commitButton) })
                  )
                );
              })
            )
          );
        };
    },
    9931: function (e, t, r) {
      r.d(t, {
        B7: function () {
          return v;
        },
        Hp: function () {
          return d;
        },
        ID: function () {
          return a;
        },
        JZ: function () {
          return c;
        },
        NO: function () {
          return s;
        },
        Nc: function () {
          return m;
        },
        Oi: function () {
          return p;
        },
        Ph: function () {
          return b;
        },
        Vk: function () {
          return n;
        },
        ZS: function () {
          return l;
        },
        d0: function () {
          return o;
        },
        hl: function () {
          return u;
        },
        iQ: function () {
          return i;
        },
        j9: function () {
          return f;
        },
        mk: function () {
          return h;
        },
        vP: function () {
          return _;
        },
      });
      var n = 8,
        i = "hustling",
        o = "Hustling",
        a = 137,
        l = 142,
        c = [l, 148, 152],
        s = 143,
        u = [s, 149, 153],
        d = 141,
        f = [d, 147, 151],
        m = 140,
        p = [m, 146, 150],
        v = 138,
        h = 144,
        _ = 139,
        b = 145;
    },
    3841: function (e, t, r) {
      r.d(t, {
        N: function () {
          return E;
        },
        Z: function () {
          return C;
        },
      });
      var n,
        i = r(2902),
        o = r(5925),
        a = r(6974),
        l = r(7520),
        c = r(4724),
        s = r(9259),
        u = r(9931),
        d = r(1813),
        f = function (e, t) {
          return (0, d.Z)(u.iQ, e, t);
        },
        m = r(2323),
        p = r(9043),
        v = function () {
          return (
            (v =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            v.apply(this, arguments)
          );
        },
        h = function () {
          return v(v({}, (0, p.X)()), {
            audience: [],
            activeGame: null,
            crimes: {
              gatherAudience: null,
              games: [],
              shill: null,
              pickpocket: null,
            },
            debug: { audience: (0, m.Z)() },
          });
        },
        _ = function () {
          return (
            (_ =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            _.apply(this, arguments)
          );
        },
        b = function (e, t, r) {
          var n;
          return (
            void 0 === r && (r = "real"),
            {
              uid: e.uid,
              type: r,
              attention: Number(e.attention),
              suspicion: Number(e.suspicion),
              wealth: Number(e.wealth),
              favoriteGameActive: !!e.favoriteGameActive,
              currentBet: Number(
                null !== (n = e.currentBet) && void 0 !== n ? n : 0
              ),
              secondsLeft: e.timeleft,
            }
          );
        },
        g = function (e) {
          var t, r, n, i, o;
          return {
            nerve: Number(e.nerve),
            minCrimeLevel:
              null !==
                (n =
                  null ===
                    (r =
                      null === (t = e.requirements) || void 0 === t
                        ? void 0
                        : t.minCrimeLevel) || void 0 === r
                    ? void 0
                    : r.value) && void 0 !== n
                ? n
                : 1,
            moneyToCollect:
              null !==
                (o =
                  null === (i = e.additionalInfo) || void 0 === i
                    ? void 0
                    : i.moneyToCollect) && void 0 !== o
                ? o
                : 0,
            successChance: (0, s.Z)(e.successChance),
            uniqueOutcomesAvailable: (0, a.Ai)(e),
          };
        },
        E = {
          dataFetched: f(
            "dataFetched",
            (0, i.ZP)(function (e, t) {
              t.DB.crimesByType &&
                ((0, a.lJ)(e, t.DB),
                (e.activeGame = (function (e) {
                  var t,
                    r = new Map();
                  return (
                    u.JZ.forEach(function (e) {
                      return r.set(e, "corn");
                    }),
                    u.hl.forEach(function (e) {
                      return r.set(e, "snail");
                    }),
                    u.j9.forEach(function (e) {
                      return r.set(e, "lady");
                    }),
                    u.Oi.forEach(function (e) {
                      return r.set(e, "shell");
                    }),
                    null !== (t = r.get(e.DB.crimesByType.lastGameID)) &&
                    void 0 !== t
                      ? t
                      : null
                  );
                })(t)),
                (e.audience = (function (e) {
                  var t,
                    r,
                    n,
                    i,
                    o,
                    a,
                    l,
                    c,
                    s,
                    u = (
                      null !==
                        (n =
                          null ===
                            (r =
                              null === (t = e.DB.crimesByType.audience) ||
                              void 0 === t
                                ? void 0
                                : t.additionalInfo) || void 0 === r
                            ? void 0
                            : r.currentAudience) && void 0 !== n
                        ? n
                        : []
                    ).map(function (t) {
                      return b(t, e.DB.time);
                    }),
                    d =
                      null ===
                        (a =
                          null ===
                            (o =
                              null === (i = e.DB.crimesByType.audience) ||
                              void 0 === i
                                ? void 0
                                : i.additionalInfo) || void 0 === o
                            ? void 0
                            : o.shillAudience) || void 0 === a
                        ? void 0
                        : a[0],
                    f = d ? b(d, e.DB.time, "shill") : null,
                    m =
                      null ===
                        (s =
                          null ===
                            (c =
                              null === (l = e.DB.crimesByType.audience) ||
                              void 0 === l
                                ? void 0
                                : l.additionalInfo) || void 0 === c
                            ? void 0
                            : c.pickpocketAudience) || void 0 === s
                        ? void 0
                        : s[0],
                    p = m ? b(m, e.DB.time, "pickpocket") : null;
                  return u.concat([f, p]).filter(function (e) {
                    return !!e;
                  });
                })(t)),
                (e.crimes.gatherAudience = (function (e) {
                  var t = e.DB.crimesByType.audience;
                  return {
                    crimeID: u.ID,
                    title: t.title,
                    nerve: t.nerve,
                    successChance: (0, s.Z)(t.successChance),
                    uniqueOutcomesAvailable: (0, a.Ai)(t),
                  };
                })(t)),
                (e.crimes.games = []),
                Object.entries(t.DB.crimesByType.game).forEach(function (t) {
                  var r = t[0],
                    n = t[1];
                  e.crimes.games.push(
                    (function (e, t) {
                      var r = (function () {
                        var e,
                          r = (0, c.Z)(
                            (((e = {})[u.ZS] = "corn"),
                            (e[u.NO] = "snail"),
                            (e[u.Hp] = "lady"),
                            (e[u.Nc] = "shell"),
                            e),
                            t.introCrimeID
                          );
                        if (!r) throw Error("Short game name not found");
                        return r;
                      })();
                      return {
                        title: e,
                        shortGameName: r,
                        nerve: t.nerve,
                        order: t.order,
                        introCrimeId: t.introCrimeID,
                        loseCrimeId: t.loseCrimeID,
                        winCrimeId: t.winCrimeID,
                        techniqueProgress: t.technique,
                        techniqueLevel: t.techniqueLevel,
                        maxTechniqueLevel: t.maxTechniqueLevel,
                        successChance: (0, s.Z)(t.successChance),
                        uniqueOutcomesAvailable: (0, a.Ai)(t),
                      };
                    })(r, n)
                  );
                }),
                e.crimes.games.sort(function (e, t) {
                  return e.order - t.order;
                }),
                (e.crimes.shill = _(
                  { crimeID: Number(t.DB.crimesByType.shill.crimeID) },
                  g(t.DB.crimesByType.shill)
                )),
                (e.crimes.pickpocket = _(
                  { crimeID: Number(t.DB.crimesByType.pickpocket.crimeID) },
                  g(t.DB.crimesByType.pickpocket)
                )));
            })
          ),
          audienceMemberLeft: f(
            "audienceMemberLeft",
            (0, i.ZP)(function (e, t) {
              var r = e.audience.findIndex(function (e) {
                return e.uid === t.uid;
              });
              r > -1 && e.audience.splice(r, 1),
                0 ===
                  e.audience.filter(function (e) {
                    return "real" === e.type;
                  }).length && (e.activeGame = null);
            })
          ),
          toggleDebugAudienceTimers: f(
            "toggleDebugAudienceTimers",
            (0, i.ZP)(function (e) {
              e.debug.audience = !e.debug.audience;
            })
          ),
        },
        y = (0, l.j)(
          (((n = {})[o.Nw.tick.type] = (0, i.ZP)(function (e) {
            e.audience.forEach(function (e) {
              e.secondsLeft -= 1;
            });
          })),
          n)
        ),
        C = (0, l.Z)({
          crimeTypeName: u.iQ,
          actions: E,
          getInitialState: h,
          extraReducers: y,
        });
    },
    4403: function (e, t, r) {
      var n = r(7363),
        i = r.n(n),
        o = r(5710);
      t.Z = function () {
        return i().createElement(o.ZP, null, "...");
      };
    },
    9253: function (e, t, r) {
      r.d(t, {
        RV: function () {
          return l;
        },
        VS: function () {
          return a;
        },
        Vk: function () {
          return n;
        },
        d0: function () {
          return o;
        },
        iQ: function () {
          return i;
        },
      });
      var n = 9,
        i = "disposal",
        o = "Disposal",
        a = 172,
        l = 1249;
    },
    1818: function (e, t, r) {
      r.d(t, {
        N: function () {
          return v;
        },
        Z: function () {
          return h;
        },
      });
      var n = r(2902),
        i = r(6974),
        o = r(7520),
        a = r(6524),
        l = r(9259),
        c = r(9253),
        s = r(1813),
        u = function (e, t) {
          return (0, s.Z)(c.iQ, e, t);
        },
        d = r(9043),
        f = function () {
          return (
            (f =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            f.apply(this, arguments)
          );
        },
        m = function () {
          return f(f({}, (0, d.X)()), {
            disposableObjects: [],
            methodNames: ["Abandon", "Burn", "Bury", "Sink", "Dissolve"],
            debug: { bannerStage: null },
          });
        },
        p = function (e) {
          var t,
            r,
            n =
              null ===
                (r =
                  null === (t = e.requirements) || void 0 === t
                    ? void 0
                    : t.items) || void 0 === r
                ? void 0
                : r[0];
          return n
            ? { id: Number(n.value), name: n.label, amountOwned: n.count }
            : null;
        },
        v = {
          dataFetched: u(
            "dataFetched",
            (0, n.ZP)(function (e, t) {
              var r;
              (0, i.lJ)(e, t.DB);
              var n = e.disposableObjects;
              (e.disposableObjects = (
                null !== (r = t.DB.crimesByType.objects) && void 0 !== r
                  ? r
                  : []
              ).map(function (e) {
                return {
                  title: e.title,
                  instanceID: e.uniqueID,
                  methods: e.methods.map(function (e) {
                    return {
                      name: e.title,
                      nerve: e.nerve,
                      crimeID: e.crimeID,
                      requiredItem: p(e),
                      successChance: (0, l.Z)(e.successChance),
                      uniqueOutcomesAvailable: (0, i.Ai)(e),
                    };
                  }),
                };
              })),
                (0, a.A5)(e, e.disposableObjects, n);
            })
          ),
          objectRemoved: u(
            "objectRemoved",
            (0, n.ZP)(function (e, t) {
              (0, a.Rf)(e, e.disposableObjects, t.instanceID, t.success);
            })
          ),
          objectOutcomeClosed: u(
            "objectOutcomeClosed",
            (0, n.ZP)(function (e, t) {
              e.disposableObjects = (0, a.Rx)(e, e.disposableObjects, t);
            })
          ),
          setDebugBannerStage: u(
            "setDebugBannerStage",
            (0, n.ZP)(function (e, t) {
              e.debug.bannerStage = t > 0 ? t : null;
            })
          ),
        },
        h = (0, o.Z)({ crimeTypeName: c.iQ, actions: v, getInitialState: m });
    },
    6361: function (e, t, r) {
      var n = r(7363),
        i = r.n(n),
        o = r(5710);
      t.Z = function () {
        return i().createElement(o.ZP, null, "...");
      };
    },
    7234: function (e, t, r) {
      r.d(t, {
        J2: function () {
          return c;
        },
        Vk: function () {
          return n;
        },
        d0: function () {
          return o;
        },
        iQ: function () {
          return i;
        },
        t3: function () {
          return a;
        },
        tn: function () {
          return l;
        },
      });
      var n = 10,
        i = "cracking",
        o = "Cracking",
        a = 204,
        l = 205,
        c = 206;
    },
    9859: function (e, t, r) {
      r.d(t, {
        N: function () {
          return v;
        },
        Z: function () {
          return h;
        },
      });
      var n = r(2902),
        i = r(6974),
        o = r(7520),
        a = r(6524),
        l = r(9259),
        c = r(7234),
        s = r(1813),
        u = function (e, t) {
          return (0, s.Z)(c.iQ, e, t);
        },
        d = r(9043),
        f = function () {
          return (
            (f =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            f.apply(this, arguments)
          );
        },
        m = function () {
          return f(f({}, (0, d.X)()), { targets: [], rig: null });
        },
        p = function (e) {
          var t;
          return e
            ? {
                chassisCollection: (null !== (t = e.chassis) && void 0 !== t
                  ? t
                  : []
                ).map(function (e) {
                  var t;
                  return {
                    heatMap: e.heatMap,
                    components: (null !== (t = e.components) && void 0 !== t
                      ? t
                      : []
                    )
                      .filter(function (e) {
                        return e.ID > 0;
                      })
                      .map(function (e) {
                        return {
                          type: e.ID,
                          coords:
                            ((t = e.coords),
                            t.map(function (e) {
                              return [e.x, e.y];
                            })),
                        };
                        var t;
                      }),
                  };
                }),
              }
            : null;
        },
        v = {
          dataFetched: u(
            "dataFetched",
            (0, n.ZP)(function (e, t) {
              (0, i.lJ)(e, t.DB);
              var r = e.targets;
              (e.targets = t.DB.crimesByType.targets.map(function (e) {
                return {
                  crimeID: e.crimeID,
                  instanceID: e.ID,
                  targetType: e.title,
                  targetService: e.service,
                  nerve: e.nerve,
                  cracked: e.isCracked,
                  expires: e.expire,
                  guessesLeft: e.guessesLeft,
                  charSlots: e.password.map(function (e) {
                    var t = e.char,
                      r = e.status;
                    return {
                      discoveredChar: "*" === t ? null : t,
                      encryptionLayers: Math.max(0, r - 1),
                      guessed: -1 === r,
                    };
                  }),
                  realPassword: e.realPassword,
                  successChance: (0, l.Z)(e.successChance),
                  uniqueOutcomesAvailable: (0, i.Ai)(e),
                };
              })),
                (0, a.A5)(e, e.targets, r),
                (e.rig = p(t.DB.crimesByType.rig));
            })
          ),
          targetCracked: u(
            "targetCracked",
            (0, n.ZP)(function (e, t) {
              (0, a.Rf)(e, e.targets, t, !0);
            })
          ),
          crackOutcomeClosed: u(
            "crackOutcomeClosed",
            (0, n.ZP)(function (e, t) {
              e.targets = (0, a.Rx)(e, e.targets, t);
            })
          ),
          rigUpdated: u(
            "rigUpdated",
            (0, n.ZP)(function (e, t) {
              (0, i.lJ)(e, t.DB),
                (e.rig = p(t.DB.additionalInfo.prepareInfo.rig));
            })
          ),
        },
        h = (0, o.Z)({ crimeTypeName: c.iQ, actions: v, getInitialState: m });
    },
    5925: function (e, t, r) {
      r.d(t, {
        Nw: function () {
          return m;
        },
        ZP: function () {
          return p;
        },
        PX: function () {
          return P;
        },
        kn: function () {
          return I;
        },
        Gi: function () {
          return B;
        },
        OI: function () {
          return k;
        },
        DR: function () {
          return _;
        },
        Do: function () {
          return b;
        },
        LF: function () {
          return O;
        },
        w2: function () {
          return S;
        },
        sl: function () {
          return F;
        },
        sx: function () {
          return g;
        },
        Bl: function () {
          return y;
        },
        Aj: function () {
          return E;
        },
        $w: function () {
          return T;
        },
        nK: function () {
          return v;
        },
        kB: function () {
          return h;
        },
        U3: function () {
          return A;
        },
        Yu: function () {
          return N;
        },
        dy: function () {
          return C;
        },
        zH: function () {
          return D;
        },
        mF: function () {
          return w;
        },
      });
      var n = r(2902),
        i = r(2377),
        o = r(7562),
        a = r(9857),
        l = function (e) {
          if ("object" != typeof e || null === e) return !1;
          if (!Object.prototype.hasOwnProperty.call(e, "user")) return !1;
          var t = e.user;
          return (
            "object" == typeof t &&
            null !== t &&
            Object.prototype.hasOwnProperty.call(t, "money") &&
            Object.prototype.hasOwnProperty.call(t, "nerve") &&
            Object.prototype.hasOwnProperty.call(t, "playername")
          );
        },
        c = r(6974),
        s = r(1813),
        u = r(126),
        d = function () {
          return (
            (d =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            d.apply(this, arguments)
          );
        },
        f = function (e, t) {
          return (0, s.Z)("app", e, t);
        },
        m = {
          legacyHubDataLoaded: f("legacyHubDataLoaded", function (e, t) {
            var r = t.DB.debugInfo;
            return d(d(d({}, e), t.DB), {
              debugInfo:
                "object" != typeof r || null === r || Array.isArray(r) ? {} : r,
            });
          }),
          setFixedOutcome: f(
            "setFixedOutcome",
            (0, n.ZP)(function (e, t) {
              e.fixedOutcomeIDMapping[t.commitPayloadJson] = t.fixedOutcomeID;
            })
          ),
          unsetFixedOutcome: f(
            "unsetFixedOutcome",
            (0, n.ZP)(function (e, t) {
              delete e.fixedOutcomeIDMapping[t.commitPayloadJson];
            })
          ),
          userMoneyUpdated: f(
            "userMoneyUpdated",
            (0, n.ZP)(function (e, t) {
              e.user.money = t;
            })
          ),
          userNerveUpdated: f(
            "userNerveUpdated",
            (0, n.ZP)(function (e, t) {
              e.user.nerve = t;
            })
          ),
          userJailStatusUpdated: f(
            "userJailStatusUpdated",
            (0, n.ZP)(function (e, t) {
              e.user.jailed = t;
            })
          ),
          userHospStatusUpdated: f(
            "userHospStatusUpdated",
            (0, n.ZP)(function (e, t) {
              e.user.hosped = t;
            })
          ),
          navigateToCrimeType: f(
            "navigateToCrimeType",
            (0, n.ZP)(function (e, t) {
              (e.crimeTypeName = t.crimeTypeName),
                (e.crimeTypeID = t.crimeTypeID);
            })
          ),
          navigateToHub: f(
            "navigateToHub",
            (0, n.ZP)(function (e) {
              (e.crimeTypeName = null), (e.crimeTypeID = null);
            })
          ),
          setDarkMode: f(
            "setDarkMode",
            (0, n.ZP)(function (e, t) {
              e.isDarkMode = t;
            })
          ),
          tick: f("tick", function (e) {
            return e;
          }),
          toggleShowDebugInfo: f(
            "toggleShowDebugInfo",
            (0, n.ZP)(function (e) {
              e.showDebugInfo = !e.showDebugInfo;
            })
          ),
          manuallyFetchData: f(
            "manuallyFetchData",
            (0, n.ZP)(function (e) {
              e.manualDataFetchInProgress = !0;
            })
          ),
          topLevelErrorOccurred: f(
            "topLevelErrorOccurred",
            (0, n.ZP)(function (e, t) {
              e.topLevelError = t;
            })
          ),
        },
        p = function (e, t) {
          var r,
            s =
              null ===
                (r = Object.values(m).find(function (e) {
                  return e.type === t.type;
                })) || void 0 === r
                ? void 0
                : r.reducer;
          if (s) return s(e, t.payload);
          var d = (function (e, t) {
            var r = [],
              s = (0, i.Z)(t.payload);
            if (
              (s &&
                r.push(
                  (0, n.ZP)(function (e) {
                    e.topLevelError = s;
                  })
                ),
              (0, a.Z)(t.payload))
            ) {
              if (l(t.payload.DB)) {
                var u = t.payload.DB.user,
                  d = u.money,
                  f = u.nerve,
                  m = u.ifAdmin,
                  p = u.isAdmin;
                r.push(
                  (0, n.ZP)(function (e) {
                    var t;
                    (e.user.nerve = f),
                      (e.user.money = d),
                      (e.user.isAdmin =
                        null !== (t = null != p ? p : m) && void 0 !== t && t),
                      (e.manualDataFetchInProgress = !1);
                  })
                );
              }
              if ((0, o.Z)(t.payload.DB)) {
                var v = t.payload.DB.time;
                r.push(
                  (0, n.ZP)(function (e) {
                    (e.latestFetchTime = v),
                      (e.latestFetchJsNow = Date.now()),
                      (e.manualDataFetchInProgress = !1);
                  })
                );
              }
              if ((0, c.kB)(t.payload.DB)) {
                var h = t.payload.DB.demMod;
                r.push(
                  (0, n.ZP)(function (e) {
                    e.demoralization = h;
                  })
                );
              }
              if ((0, c.OU)(t.payload.DB)) {
                var _ = t.payload.DB.debugInfo;
                r.push(
                  (0, n.ZP)(function (e) {
                    e.debugInfo = Array.isArray(_) ? null : _;
                  })
                );
              }
            }
            return 0 === r.length
              ? null
              : function () {
                  return r.reduce(function (e, t) {
                    return t(e);
                  }, e);
                };
          })(e, t);
          return d
            ? d()
            : null != e
            ? e
            : (function () {
                var e;
                return {
                  migrationPending:
                    "true" ===
                    document.getElementById("react-root").dataset
                      .migrationPending,
                  releasedCrimesCount: Number(
                    document.getElementById("react-root").dataset
                      .releasedCrimesCount || 1
                  ),
                  crimeTypeID: null,
                  crimeTypeName: null,
                  isDarkMode: !1,
                  crimesTypes: [],
                  fixedOutcomeIDMapping:
                    null !== (e = (0, u.R)()) && void 0 !== e ? e : {},
                  user: {
                    nerve: 0,
                    money: 0,
                    jailed: "jail" === document.body.dataset.layout,
                    hosped: "hospital" === document.body.dataset.layout,
                    isAdmin: !1,
                  },
                  crimesFavorites: [],
                  latestFetchTime: 0,
                  latestFetchJsNow: 0,
                  debugInfo: null,
                  showDebugInfo: !1,
                  manualDataFetchInProgress: !1,
                  tutorial: { text: "" },
                  availableCrimeTypes: JSON.parse(
                    document.getElementById("react-root").dataset
                      .availableCrimes || "[]"
                  ).map(function (e) {
                    return { ID: e.ID, title: e.name, slug: e.slug };
                  }),
                  topLevelError: null,
                  demoralization: 0,
                };
              })();
        },
        v = function (e) {
          return e.app.migrationPending;
        },
        h = function (e) {
          return e.app.releasedCrimesCount;
        },
        _ = function (e) {
          return e.app.crimeTypeID;
        },
        b = function (e) {
          return e.app.crimeTypeName;
        },
        g = function (e) {
          return e.app.isDarkMode;
        },
        E = function (e) {
          return e.app.latestFetchTime;
        },
        y = function (e) {
          return e.app.latestFetchJsNow;
        },
        C = function (e) {
          return e.app.user;
        },
        w = function (e) {
          return e.app.user.money;
        },
        D = function (e) {
          return e.app.user.isAdmin;
        },
        F = function (e) {
          return e.app.fixedOutcomeIDMapping;
        },
        I = function (e) {
          return function (t) {
            return t.app.fixedOutcomeIDMapping[JSON.stringify(e)];
          };
        },
        O = function (e) {
          return e.app.debugInfo;
        },
        A = function (e) {
          return e.app.showDebugInfo;
        },
        T = function (e) {
          return e.app.manualDataFetchInProgress;
        },
        k = function (e) {
          return e.app.availableCrimeTypes;
        },
        B = function (e) {
          return e.app.availableCrimeTypes.map(function (e) {
            return e.ID;
          });
        },
        P = function (e) {
          return function (t) {
            return t.app.availableCrimeTypes.find(function (t) {
              return t.ID === e;
            });
          };
        },
        S = function (e) {
          return e.app.demoralization;
        },
        N = function (e) {
          return e.app.topLevelError;
        };
    },
    6626: function (e, t, r) {
      r.d(t, {
        CU: function () {
          return a;
        },
        EC: function () {
          return c;
        },
        T4: function () {
          return u;
        },
        fE: function () {
          return o;
        },
        fz: function () {
          return l;
        },
        oT: function () {
          return s;
        },
      });
      var n = r(7257),
        i = r(9043),
        o = function (e) {
          var t = (0, n.Z)();
          return function (r) {
            var n, i;
            return null !==
              (i =
                null === (n = r[t]) || void 0 === n
                  ? void 0
                  : n.rememberedCrimeOptions.find(function (t) {
                      return t.instanceID === e;
                    })) && void 0 !== i
              ? i
              : null;
          };
        },
        a = function () {
          var e = (0, n.Z)();
          return function (t) {
            var r, n;
            return (
              null !==
                (n = null === (r = t[e]) || void 0 === r ? void 0 : r.loaded) &&
              void 0 !== n &&
              n
            );
          };
        },
        l = function () {
          var e = (0, n.Z)();
          return function (t) {
            var r, n;
            return null !==
              (n = null === (r = t[e]) || void 0 === r ? void 0 : r.stats) &&
              void 0 !== n
              ? n
              : (0, i.X)().stats;
          };
        },
        c = function () {
          var e = (0, n.Z)();
          return function (t) {
            var r, n, i;
            return null !==
              (i =
                null ===
                  (n =
                    null === (r = t[e]) || void 0 === r ? void 0 : r.stats) ||
                void 0 === n
                  ? void 0
                  : n.crimeLevel) && void 0 !== i
              ? i
              : 1;
          };
        },
        s = function () {
          var e = (0, n.Z)();
          return function (t) {
            var r, n;
            return null !==
              (n = null === (r = t[e]) || void 0 === r ? void 0 : r.exp) &&
              void 0 !== n
              ? n
              : 0;
          };
        },
        u = function () {
          var e = (0, n.Z)();
          return function (t) {
            var r, n;
            return null !==
              (n =
                null === (r = t[e]) || void 0 === r ? void 0 : r.nerveUsed) &&
              void 0 !== n
              ? n
              : 0;
          };
        };
    },
    6974: function (e, t, r) {
      r.d(t, {
        Ai: function () {
          return u;
        },
        OU: function () {
          return c;
        },
        kB: function () {
          return l;
        },
        lJ: function () {
          return s;
        },
        wH: function () {
          return d;
        },
      });
      var n = r(2902),
        i = r(8027),
        o = r(7562),
        a = r(9857),
        l = function (e) {
          return (
            "object" == typeof e &&
            null !== e &&
            Object.prototype.hasOwnProperty.call(e, "demMod") &&
            "number" == typeof e.demMod
          );
        },
        c = function (e) {
          return (
            !!e &&
            Object.prototype.hasOwnProperty.call(e, "debugInfo") &&
            "object" == typeof e.debugInfo
          );
        },
        s = function (e, t) {
          var r, n, o;
          (e.loaded = !0),
            (e.stats = (function () {
              var e,
                r,
                n,
                i,
                o = t.currentUserStats;
              return {
                crimeLevel: Number(o.skill),
                progressToNextLevel: Number(o.skillLevel),
                successes: Number(
                  null !== (e = o.successesTotal) && void 0 !== e ? e : 0
                ),
                fails: Number(
                  null !== (r = o.failedTotal) && void 0 !== r ? r : 0
                ),
                criticalFails: Number(
                  null !==
                    (i =
                      null !== (n = o.critFailedTotal) && void 0 !== n
                        ? n
                        : o.jailedTotal) && void 0 !== i
                    ? i
                    : 0
                ),
              };
            })()),
            (e.currentUserStatistics = (function () {
              var e;
              return (
                null !== (e = t.currentUserStatistics) && void 0 !== e ? e : []
              ).filter(function (e) {
                return e.label !== i.Ai;
              });
            })()),
            (e.exp = null !== (r = t.exp) && void 0 !== r ? r : 0),
            (e.nerveUsed =
              Array.isArray(t.currentUserStatistics) &&
              null !==
                (o = Number(
                  null ===
                    (n = t.currentUserStatistics.find(function (e) {
                      return e.label === i.Ai;
                    })) || void 0 === n
                    ? void 0
                    : n.value.toString().replace(/,/g, "")
                )) &&
              void 0 !== o
                ? o
                : 0);
        },
        u = function (e) {
          return "number" == typeof e.secretsAvailable ? e.secretsAvailable : 0;
        },
        d = function (e, t) {
          var r;
          return (
            ((r = {})["".concat(e, "/reset")] = t),
            (r["".concat(e, "/updateCommonData")] = function (e, t) {
              return (0, n.ZP)(e, function (e) {
                (0, a.Z)(t) && (0, o.Z)(t.DB) && s(e, t.DB);
              });
            }),
            (r["".concat(e, "/toggleLoadingState")] = function (e, t) {
              return (0, n.ZP)(e, function (e) {
                e.loaded = t;
              });
            }),
            r
          );
        };
    },
    1813: function (e, t) {
      t.Z = function (e, t, r) {
        var n = "".concat(e, "/").concat(t),
          i = function (e) {
            return { payload: e, type: n };
          };
        return (
          (i.reducer = r),
          (i.type = n),
          (i.toString = function () {
            return n;
          }),
          i
        );
      };
    },
    126: function (e, t, r) {
      r.d(t, {
        F: function () {
          return i;
        },
        R: function () {
          return o;
        },
      });
      var n = "torn:crimes:fixedOutcomeIDMapping",
        i = function (e) {
          window.localStorage.setItem(n, JSON.stringify(e));
        },
        o = function () {
          var e = window.localStorage.getItem(n);
          if (e) return JSON.parse(e);
        };
    },
    9043: function (e, t, r) {
      r.d(t, {
        X: function () {
          return n;
        },
      });
      var n = function () {
        return {
          loaded: !1,
          stats: {
            crimeLevel: 1,
            progressToNextLevel: 0,
            successes: 0,
            fails: 0,
            criticalFails: 0,
          },
          currentUserStatistics: [],
          exp: 0,
          nerveUsed: 0,
          rememberedCrimeOptions: [],
        };
      };
    },
    7520: function (e, t, r) {
      r.d(t, {
        j: function () {
          return i;
        },
      });
      var n = r(6974),
        i = function (e) {
          return e;
        };
      t.Z = function (e) {
        var t = e.crimeTypeName,
          r = e.actions,
          i = e.getInitialState,
          o = e.extraReducers,
          a = (0, n.wH)(t, i);
        return function (e, t, n) {
          var l,
            c =
              null ===
                (l = Object.values(r).find(function (e) {
                  return e.type === t.type;
                })) || void 0 === l
                ? void 0
                : l.reducer;
          if (c) return c(e, t.payload, n);
          var s = null == o ? void 0 : o[t.type];
          if (s) return s(e, t.payload, n);
          var u = a[t.type];
          return u ? u(e, t.payload) : null != e ? e : i();
        };
      };
    },
    6524: function (e, t, r) {
      r.d(t, {
        A5: function () {
          return l;
        },
        Jw: function () {
          return u;
        },
        Rf: function () {
          return a;
        },
        Rx: function () {
          return c;
        },
        Ug: function () {
          return s;
        },
      });
      var n = r(6856),
        i = r(6626),
        o = function () {
          return (
            (o =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            o.apply(this, arguments)
          );
        },
        a = function (e, t, r, n) {
          var i = t.findIndex(function (e) {
            return e.instanceID === r;
          });
          if (-1 !== i) {
            var o = t.slice(i + 1).map(function (e) {
              return e.instanceID;
            });
            e.rememberedCrimeOptions.push({
              instanceID: r,
              atIndexOf: o,
              success: n,
            });
          }
        },
        l = function (e, t, r) {
          e.rememberedCrimeOptions.forEach(function (e) {
            var n = e.instanceID,
              i = e.atIndexOf,
              o = r.find(function (e) {
                return e.instanceID === n;
              });
            if (o) {
              var a = t.findIndex(function (e) {
                return i.includes(e.instanceID);
              });
              -1 === a && (a = t.length), t.splice(a, 0, o);
            }
          });
        },
        c = function (e, t, r) {
          return e.rememberedCrimeOptions
            .map(function (e) {
              return e.instanceID;
            })
            .includes(r)
            ? ((e.rememberedCrimeOptions = e.rememberedCrimeOptions.filter(
                function (e) {
                  return e.instanceID !== r;
                }
              )),
              t.filter(function (e) {
                return e.instanceID !== r;
              }))
            : t;
        },
        s = function (e) {
          var t = (0, n.v9)((0, i.fE)(e)),
            r = function (e) {
              return o(o({}, e), {
                either: e.success || e.failure,
                neither: !e.success && !e.failure,
              });
            };
          return r(
            t
              ? { success: t.success, failure: !t.success }
              : { success: !1, failure: !1 }
          );
        },
        u = function (e) {
          return s(e).either;
        };
    },
    6646: function (e, t) {
      t.Z = function (e) {
        return e.substring(0, 1).toUpperCase() + e.substring(1);
      };
    },
    6415: function (e, t, r) {
      var n = r(9763),
        i = function (e, t, r) {
          if (r || 2 === arguments.length)
            for (var n, i = 0, o = t.length; i < o; i++)
              (!n && i in t) ||
                (n || (n = Array.prototype.slice.call(t, 0, i)), (n[i] = t[i]));
          return e.concat(n || Array.prototype.slice.call(t));
        };
      t.Z = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var r = window.addRFC(e[0]);
        return n.lC.apply(null, i([r], e.slice(1), !0));
      };
    },
    7891: function (e, t, r) {
      var n = r(9763);
      t.Z = function (e, t) {
        var r = function (e) {
          return (null == t ? void 0 : t.prefixCurrencySymbol)
            ? "$".concat(e)
            : e;
        };
        if (null == t ? void 0 : t.condensed) return r((0, n.LH)(e));
        var i = e.toLocaleString("en-US");
        return (
          (null == t ? void 0 : t.leadingPlus) && e >= 0 && (i = "+".concat(i)),
          r(i)
        );
      };
    },
    5482: function (e, t, r) {
      var n = r(1735),
        i = function () {
          return (
            (i =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            i.apply(this, arguments)
          );
        },
        o = {
          twoUnitsMax: !1,
          delimiters: ", ",
          finalDelimiter: " and ",
          padZero: !1,
          omitLabels: !1,
          omitSpaceBeforeLabels: !1,
          singleLetterLabels: !1,
          showMinutesEvenIfZero: !1,
          asDigitalClockPreset: !1,
          asSingleLetterPreset: !1,
        };
      t.Z = function (e, t) {
        var r = (null == t ? void 0 : t.asDigitalClockPreset)
            ? {
                padZero: !0,
                omitLabels: !0,
                delimiters: ":",
                finalDelimiter: ":",
                showMinutesEvenIfZero: !0,
              }
            : (null == t ? void 0 : t.asSingleLetterPreset)
            ? {
                singleLetterLabels: !0,
                omitSpaceBeforeLabels: !0,
                delimiters: " ",
                finalDelimiter: " ",
              }
            : i(i({}, o), t),
          a = r.twoUnitsMax,
          l = r.delimiters,
          c = r.finalDelimiter,
          s = r.padZero,
          u = r.omitLabels,
          d = r.omitSpaceBeforeLabels,
          f = r.singleLetterLabels,
          m = r.showMinutesEvenIfZero,
          p = (0, n.Z)(Math.max(0, e)),
          v = p.days,
          h = p.hours,
          _ = p.minutes,
          b = function (e, t) {
            return (
              (s ? e.toString().padStart(2, "0") : e) +
              (function () {
                if (u) return "";
                var r = f
                  ? t.substring(0, 1)
                  : 1 === e
                  ? t.substring(0, t.length - 1)
                  : t;
                return d ? r : " ".concat(r);
              })()
            );
          },
          g = [b(p.seconds, "seconds")];
        return (
          (_ > 0 || m) && g.unshift(b(_, "minutes")),
          h > 0 && g.unshift(b(h, "hours")),
          v > 0 && g.unshift(b(v, "days")),
          a || g.length <= 2
            ? g.slice(0, 2).join(c)
            : [g.slice(0, -1).join(l), g[g.length - 1]].join(c)
        );
      };
    },
    4724: function (e, t) {
      t.Z = function (e, t) {
        return e[t];
      };
    },
    3273: function (e, t, r) {
      var n = r(4724);
      t.Z = function (e, t) {
        var r = (0, n.Z)(
          {
            desktop: ["desktop"],
            tablet: ["tablet", "desktop"],
            mobile: ["mobile", "tablet", "desktop"],
          },
          t
        ).find(function (t) {
          return void 0 !== e[t];
        });
        return e[r];
      };
    },
    2377: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return o;
        },
      });
      var n = r(9857),
        i = function (e) {
          return (
            "object" == typeof e &&
            null !== e &&
            Object.prototype.hasOwnProperty.call(e, "error") &&
            "string" == typeof e.error
          );
        },
        o = function (e) {
          return i(e) ? e.error : (0, n.Z)(e) && i(e.DB) ? e.DB.error : null;
        };
    },
    1735: function (e, t) {
      t.Z = function (e) {
        var t = 3600,
          r = e,
          n = Math.floor(r / 86400);
        r -= 86400 * n;
        var i = Math.floor(r / t);
        r -= i * t;
        var o = Math.floor(r / 60);
        return { days: n, hours: i, minutes: o, seconds: (r -= 60 * o) };
      };
    },
    7562: function (e, t) {
      t.Z = function (e) {
        return (
          "object" == typeof e &&
          null !== e &&
          Object.prototype.hasOwnProperty.call(e, "currentUserStats") &&
          Object.prototype.hasOwnProperty.call(e, "currentUserStatistics") &&
          Object.prototype.hasOwnProperty.call(e, "time") &&
          Object.prototype.hasOwnProperty.call(e, "user")
        );
      };
    },
    9857: function (e, t) {
      t.Z = function (e) {
        return (
          "object" == typeof e &&
          null !== e &&
          Object.prototype.hasOwnProperty.call(e, "DB") &&
          "object" == typeof e.DB &&
          null !== e.DB
        );
      };
    },
    9259: function (e, t) {
      t.Z = function (e) {
        return "string" == typeof e
          ? e.trim().length > 0
            ? parseFloat(e)
            : void 0
          : "number" == typeof e
          ? e
          : void 0;
      };
    },
    4785: function (e, t, r) {
      r.d(t, {
        oA: function () {
          return Ko;
        },
      });
      var n,
        i = r(7363),
        o = r.n(i),
        a = ReactDOMServer,
        l = r(1344),
        c = r.n(l),
        s = function (e) {
          return void 0 !== e && !("string" == typeof e && e.length <= 0);
        },
        u = function () {
          var e = this;
          Object.defineProperty(this, "defsID", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
            Object.defineProperty(this, "addDef", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: function (t) {
                var r = t.type,
                  n = t.ID;
                return e.defsID[r].push(n);
              },
            }),
            Object.defineProperty(this, "destroyDefs", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: function () {
                e.defsID = { filters: [], gradients: [] };
              },
            }),
            Object.defineProperty(this, "getDefs", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: function () {
                return e.defsID;
              },
            }),
            (this.defsID = { filters: [], gradients: [] });
        },
        d = new u(),
        f = function (e) {
          return e.replace(/(<svg.*?>)([\s\S]*)(<\/svg>)/im, "$2");
        },
        m = function () {
          return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        },
        p = function (e) {
          return ![void 0, null].includes(e);
        },
        v = { color: "#666659", stroke: "transparent", strokeWidth: "0" },
        h = {
          color: "url(#calendar)",
          stroke: "transparent",
          strokeWidth: "0",
        },
        _ = {
          ID: "calendar",
          active: !0,
          transform: "rotate(90)",
          scheme: [
            {
              step: "0",
              color: "var(--calendar-default-arrow-gradient-stop-1)",
            },
            {
              step: "1",
              color: "var(--calendar-default-arrow-gradient-stop-2)",
            },
          ],
        },
        b = { ID: null, shadow: { active: !1 } },
        g = {
          fill: v,
          dimensions: { width: 20, height: 20, viewbox: "-1 1 18 18" },
          filter: b,
        },
        E = {
          fill: v,
          dimensions: { width: 15, height: 15, viewbox: "0 0 15.19 15.19" },
          filter: b,
        },
        y = {
          fill: v,
          dimensions: { width: 18, height: 18, viewbox: "0 0 18 18" },
          filter: b,
        },
        C = {
          fill: v,
          dimensions: { width: 13, height: 17, viewbox: "0 0 13 17" },
          filter: b,
        },
        w = {
          fill: v,
          dimensions: { width: 17, height: 17, viewbox: "0 0 17 17" },
          filter: b,
        },
        D = {
          fill: h,
          dimensions: { width: 22, height: 19, viewbox: "0 0 18 15" },
          filter: b,
          gradient: _,
        },
        F = {
          fill: h,
          dimensions: { width: 10, height: 17, viewbox: "0 0 10 17" },
          filter: b,
          gradient: _,
        },
        I = {
          fill: h,
          dimensions: { width: 10, height: 17, viewbox: "0 0 10 17" },
          filter: b,
          gradient: _,
        },
        O = {
          CHRISTMAS_TOWN: g,
          DOG_TAGS: E,
          ELIMINATION: y,
          EASTER: C,
          MR_MISS_TORN: w,
          BACK: D,
          RIGHT_ARROW_THIN: F,
          LEFT_ARROW_THIN: I,
        },
        A = function () {
          return (
            (A =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            A.apply(this, arguments)
          );
        },
        T = {
          fill: { color: "#777", strokeWidth: 0, stroke: "transparent" },
          filter: {
            active: !0,
            ID: "top_svg_icon",
            shadow: {
              active: !0,
              x: 0,
              y: 1,
              blur: 0.1,
              color: "rgba(255, 255, 255, 0.45)",
            },
          },
          dimensions: { width: 16, height: 15, viewbox: "0 1 16 13" },
        },
        k = {
          DEFAULTS: T,
          LastRolls: A(A({}, T), {
            dimensions: { width: 16, height: 16, viewbox: "0 0 16 16" },
          }),
          ActivityLog: A(A({}, T), {
            dimensions: { width: 16, height: 16, viewbox: "0 0 18 18" },
          }),
          ViewToggleList: A(A({}, T), {
            dimensions: A(A({}, T.dimensions), { viewbox: "-1 1 16 15" }),
          }),
          ViewToggleThumbnails: A(A({}, T), {
            dimensions: A(A({}, T.dimensions), { viewbox: "-1 1 16 15" }),
          }),
          Back: A(A({}, T), {
            dimensions: A(A({}, T.dimensions), { viewbox: "0 0 16 13" }),
          }),
          AttackTurn: A(A({}, T), {
            dimensions: A(A({}, T.dimensions), { viewbox: "0 0 16.9 19" }),
          }),
          Timeout: A(A({}, T), {
            dimensions: { width: 10, height: 16, viewbox: "0 0 10.67 17" },
          }),
          ChainIcon: A(A({}, T), {
            dimensions: { width: 14, height: 14, viewbox: "0 0 16 17" },
          }),
          Escape: A(A({}, T), {
            dimensions: { width: 16, height: 15.667, viewbox: "0 0 16 15.667" },
          }),
          TokenShop: A(A({}, T), {
            dimensions: A(A({}, T.dimensions), { viewbox: "0 0 17 17" }),
          }),
          ManageItems: A(A({}, T), {
            dimensions: A(A({}, T.dimensions), {
              width: 18,
              height: 16,
              viewbox: "0 0 16 17",
            }),
          }),
          ItemsAdd: A(A({}, T), {
            dimensions: A(A({}, T.dimensions), {
              width: 17,
              height: 16,
              viewbox: "0 0 16.67 17",
            }),
          }),
          BazaarOpen: A(A({}, T), {
            dimensions: A(A({}, T.dimensions), {
              width: 15,
              height: 15,
              viewbox: "0 0 18 19",
            }),
          }),
          BazaarClosed: A(A({}, T), {
            dimensions: A(A({}, T.dimensions), {
              width: 15,
              height: 15,
              viewbox: "0 0 18 19",
            }),
          }),
          Trades: A(A({}, T), {
            dimensions: A(A({}, T.dimensions), {
              width: 16,
              height: 15,
              viewbox: "0 1 15.23 19",
            }),
          }),
          AllMaps: A(A({}, T), {
            dimensions: { width: 17, height: 17, viewbox: "0 0 16 16" },
          }),
          MapEditor: A(A({}, T), {
            dimensions: { width: 19, height: 19, viewbox: "0 0 19 19" },
          }),
          MyMaps: A(A({}, T), {
            dimensions: { width: 17, height: 17, viewbox: "0 0 17 17" },
          }),
          ChristmasTown: A(A({}, T), {
            dimensions: { width: 17, height: 17, viewbox: "0 0 17 17" },
          }),
          Parameditor: A(A({}, T), {
            dimensions: { width: 17, height: 17, viewbox: "0 0 17 17" },
          }),
          Items: A(A({}, T), {
            dimensions: A(A({}, T.dimensions), { viewbox: "-1.5 1 17 16" }),
          }),
          CTNpc: A(A({}, T), {
            dimensions: { width: 17, height: 19, viewbox: "0 0 17 19" },
          }),
          Calendar: A(A({}, T), {
            dimensions: { width: 17, height: 17, viewbox: "0 0 17 17" },
          }),
          CrimesHub: A(A({}, T), {
            dimensions: { width: 16, height: 17, viewbox: "0 -1 16 17" },
          }),
          ItemMarket: A(A({}, T), {
            dimensions: { width: 15, height: 16, viewbox: "0 0 18 16" },
          }),
          NewsTicker: A(A({}, T), {
            dimensions: { width: 18, height: 16, viewbox: "2 -1 18 16" },
          }),
          City: A(A({}, T), {
            dimensions: { width: 18, height: 16, viewbox: "-4 1 18 16" },
          }),
          Log: A(A({}, T), {
            dimensions: { width: 16, height: 17, viewbox: "-2 1 17 19" },
          }),
          ViewShow: A(A({}, T), {
            dimensions: { width: 16, height: 15, viewbox: "0 -1 16 14" },
          }),
          Events: A(A({}, T), {
            dimensions: { width: 16, height: 15, viewbox: "0 1 16 16" },
          }),
          Home: A(A({}, T), {
            dimensions: { width: 16, height: 15, viewbox: "0 2 16 14" },
          }),
          Elimination: A(A({}, T), {
            dimensions: { width: 16, height: 16, viewbox: "0 0 18 18" },
          }),
          Easter: A(A({}, T), {
            dimensions: { width: 13, height: 17, viewbox: "0 0 13 17" },
          }),
          Pistol: A(A({}, T), {
            dimensions: { width: 20, height: 12, viewbox: "480 206 20 12" },
          }),
        },
        B = function () {
          return (
            (B =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            B.apply(this, arguments)
          );
        },
        P = { color: "#3e3e3e", stroke: "transparent", strokeWidth: "0" },
        S =
          (B(B({}, P), { color: "#161616" }),
          B(B({}, P), { color: "#00a3d8" })),
        N = B(B({}, P), { color: "#bbb" }),
        L = {
          ID: "toolHover",
          active: !0,
          transform: "rotate(90)",
          scheme: [
            { step: "0", color: "var(--ics-tool-btn-hover-gradient-stop-1)" },
            { step: "1", color: "var(--ics-tool-btn-hover-gradient-stop-2)" },
          ],
        },
        R = B(B({}, P), { color: "url(#tool)" }),
        x = B(B({}, P), { color: "url(#toolHover)" }),
        Z = { ID: null, shadow: { active: !1 } },
        j = {
          fill: R,
          dimensions: { viewbox: "0 0 16 16", width: 16, height: 16 },
          filter: Z,
          gradient: {
            ID: "tool",
            active: !0,
            transform: "rotate(90)",
            scheme: [
              { step: "0", color: "var(--ics-tool-btn-gradient-stop-1)" },
              { step: "1", color: "var(--ics-tool-btn-gradient-stop-2)" },
            ],
          },
        },
        M = {
          fill: P,
          dimensions: { viewbox: "0 0 18 16", width: 18, height: 16 },
          filter: Z,
          gradient: {
            ID: "crossGradient",
            active: !0,
            transform: "rotate(90)",
            scheme: [
              { step: "0", color: "#ccc" },
              { step: "1", color: "#888" },
            ],
          },
        },
        H = B(B({}, j), {
          dimensions: { viewbox: "0 0 21 12", width: 21, height: 12 },
        }),
        V = B({}, j),
        W = B({}, j),
        G = B({}, j),
        U = B(B({}, j), {
          dimensions: B(B({}, j.dimensions), { viewbox: "2 2 20 20" }),
        }),
        z = B(B({}, j), {
          dimensions: B(B({}, j.dimensions), { viewbox: "0 4 18 18" }),
        }),
        K = B(B({}, j), { fill: x, gradient: L }),
        q = B(B({}, K), {
          dimensions: { viewbox: "0 0 21 12", width: 21, height: 12 },
        }),
        Y = B(B({}, U), { fill: x, gradient: L }),
        X = B(B({}, z), { fill: x, gradient: L }),
        J = B(B({}, j), { fill: S }),
        Q = B(B({}, j), { fill: N }),
        $ = {
          CROSS: M,
          POINTER: W,
          ROTATE: G,
          PLUS: U,
          MINUS: z,
          CROP: V,
          SCALE: H,
          DEFAULT_HOVER: K,
          PLUS_HOVER: Y,
          MINUS_HOVER: X,
          ACTIVE: J,
          DISABLE: Q,
          SCALE_HOVER: q,
        },
        ee = function () {
          return (
            (ee =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            ee.apply(this, arguments)
          );
        },
        te = { color: "#3e3e3e", stroke: "transparent", strokeWidth: "0" },
        re = { viewbox: "0 0 18 18", width: 18, height: 17 },
        ne = {
          ID: "svg_sidebar_mobile",
          active: !0,
          shadow: { active: !0, x: 0, y: 1, blur: 1, color: "#000000" },
        },
        ie = {
          fill: ee(ee({}, te), {
            color: "url(#sidebar_svg_gradient_regular_desktop_gold)",
          }),
          dimensions: re,
          filter: ee(ee({}, ne), {
            ID: "svg_sidebar_green_regular_desktop_gold_filter",
            shadow: { active: !0, x: 0, y: 0, blur: 1.2, color: "#f4b701" },
          }),
          gradient: {
            ID: "sidebar_svg_gradient_regular_desktop_gold",
            active: !0,
            transform: "rotate(90)",
            scheme: [
              { step: "0", color: "#f4b701" },
              { step: "1", color: "#b08505" },
            ],
          },
        },
        oe = {
          fill: ee(ee({}, te), {
            color: "url(#sidebar_svg_gradient_regular_desktop)",
          }),
          dimensions: re,
          gradient: {
            ID: "sidebar_svg_gradient_regular_desktop",
            active: !0,
            transform: "rotate(90)",
            scheme: [
              { step: "0", color: "#999999" },
              { step: "1", color: "#CCCCCC" },
            ],
          },
        },
        ae = {
          fill: ee(ee({}, te), {
            color: "url(#sidebar_svg_gradient_regular_desktop_hover)",
          }),
          filter: {
            ID: "svg_sidebar_desktop_regular_hover_filter",
            active: !0,
            shadow: { active: !0, x: 0, y: 1, blur: 0.1, color: "#ffffff" },
          },
          dimensions: re,
          gradient: {
            ID: "sidebar_svg_gradient_regular_desktop_hover",
            active: !0,
            transform: "rotate(90)",
            scheme: [
              { step: "0", color: "#AAAAAA" },
              { step: "1", color: "#555555" },
            ],
          },
        },
        le = {
          fill: ee(ee({}, te), {
            color: "url(#sidebar_svg_gradient_regular_desktop_active)",
          }),
          filter: ee(ee({}, ae.filter), {
            ID: "svg_sidebar_desktop_regular_active_filter",
          }),
          dimensions: re,
          gradient: {
            ID: "sidebar_svg_gradient_regular_desktop_active",
            active: !0,
            transform: "rotate(90)",
            scheme: [
              { step: "0", color: "#555555" },
              { step: "1", color: "#AAAAAA" },
            ],
          },
        },
        ce = {
          fill: ee(ee({}, te), {
            color: "url(#sidebar_svg_gradient_regular_desktop_green)",
          }),
          dimensions: re,
          gradient: {
            ID: "sidebar_svg_gradient_regular_desktop_green",
            active: !0,
            transform: "rotate(90)",
            scheme: [
              { step: "0", color: "#799427" },
              { step: "1", color: "#a3c248" },
            ],
          },
        },
        se = {
          fill: ee(ee({}, te), {
            color: "url(#sidebar_svg_gradient_regular_desktop_green_hover)",
          }),
          dimensions: re,
          gradient: {
            ID: "sidebar_svg_gradient_regular_desktop_green_hover",
            active: !0,
            transform: "rotate(90)",
            scheme: [
              { step: "0", color: "#799427" },
              { step: "1", color: "#a3c248" },
            ],
          },
          filter: {
            ID: "svg_sidebar_desktop_regular_green_hover_filter",
            active: !0,
            shadow: { active: !0, x: 0, y: 1, blur: 1.2, color: "#a3d90091" },
          },
        },
        ue = ee(ee({}, se), {
          fill: ee(ee({}, se.fill), {
            color: "url(#sidebar_svg_gradient_regular_green_desktop_active)",
          }),
          filter: ee(ee({}, se.filter), {
            ID: "svg_sidebar_green_regular_desktop_green_active_filter",
          }),
          gradient: ee(ee({}, se.gradient), {
            ID: "sidebar_svg_gradient_regular_green_desktop_active",
          }),
        }),
        de = {
          fill: ee(ee({}, te), {
            color: "url(#sidebar_svg_gradient_regular_desktop_red)",
          }),
          dimensions: re,
          gradient: {
            ID: "sidebar_svg_gradient_regular_desktop_red",
            active: !0,
            transform: "rotate(90)",
            scheme: [
              { step: "0", color: "#EF6B3E" },
              { step: "1", color: "#CD491D" },
            ],
          },
        },
        fe = {
          fill: ee(ee({}, te), {
            color: "url(#sidebar_svg_gradient_regular_desktop_green_hover)",
          }),
          dimensions: re,
          gradient: {
            ID: "sidebar_svg_gradient_regular_desktop_green_hover",
            active: !0,
            transform: "rotate(90)",
            scheme: [
              { step: "0", color: "#EF6B3E" },
              { step: "1", color: "#CD491D" },
            ],
          },
          filter: {
            ID: "svg_sidebar_desktop_regular_green_hover_filter",
            active: !0,
            shadow: { active: !0, x: 0, y: 1, blur: 1.2, color: "#ef6b3e70" },
          },
        },
        me = ee(ee({}, fe), {
          fill: ee(ee({}, fe.fill), {
            color: "url(#sidebar_svg_gradient_regular_red_desktop_active)",
          }),
          filter: ee(ee({}, fe.filter), {
            ID: "svg_sidebar_green_regular_desktop_red_active_filter",
          }),
          gradient: ee(ee({}, fe.gradient), {
            ID: "sidebar_svg_gradient_regular_red_desktop_active",
          }),
        }),
        pe = ee({}, ie),
        ve = ee({}, ie),
        he = ee({}, ie),
        _e = {
          fill: ee(ee({}, te), {
            color: "url(#sidebar_svg_gradient_regular_mobile)",
          }),
          filter: ee(ee({}, ne), {
            shadow: { active: !0, x: 0, y: 0, blur: 1.3, color: "#000000" },
          }),
          dimensions: re,
          gradient: {
            ID: "sidebar_svg_gradient_regular_mobile",
            active: !0,
            transform: "rotate(90)",
            scheme: [
              { step: "0", color: "#888888" },
              { step: "1", color: "#666666" },
            ],
          },
        },
        be = {
          fill: ee(ee({}, te), {
            color: "url(#sidebar_svg_gradient_regular_mobile_hover)",
          }),
          dimensions: re,
          filter: {
            ID: "svg_sidebar_mobile_regular_hover_filter",
            active: !0,
            shadow: { active: !0, x: 0, y: 0, blur: 1, color: "#FFFFFF" },
          },
          gradient: {
            ID: "sidebar_svg_gradient_regular_mobile_hover",
            active: !0,
            transform: "rotate(90)",
            scheme: [
              { step: "0", color: "#DDDDDD" },
              { step: "1", color: "#AAAAAA" },
            ],
          },
        },
        ge = {
          fill: ee(ee({}, te), {
            color: "url(#sidebar_svg_gradient_regular_mobile_active)",
          }),
          dimensions: re,
          filter: {
            ID: "svg_sidebar_mobile_regular_active_filter",
            active: !0,
            shadow: { active: !0, x: 0, y: 0, blur: 1, color: "#FFFFFF80" },
          },
          gradient: {
            ID: "sidebar_svg_gradient_regular_mobile_active",
            active: !0,
            transform: "rotate(90)",
            scheme: [
              { step: "0", color: "#DDDDDD" },
              { step: "1", color: "#AAAAAA" },
            ],
          },
        },
        Ee = {
          fill: ee(ee({}, te), {
            color: "url(#sidebar_svg_gradient_regular_red_mobile)",
          }),
          filter: { active: !1, ID: null },
          dimensions: re,
          gradient: {
            ID: "sidebar_svg_gradient_regular_red_mobile",
            active: !0,
            transform: "rotate(90)",
            scheme: [
              { step: "0", color: "#EF6B3E" },
              { step: "1", color: "#CD491D" },
            ],
          },
        },
        ye = {
          fill: ee(ee({}, te), {
            color: "url(#sidebar_svg_gradient_regular_red_mobile_hover)",
          }),
          filter: ee(ee({}, ne), {
            ID: "svg_sidebar_green_regular_mobile_red_hover_filter",
            shadow: { active: !0, x: 0, y: 0, blur: 1.2, color: "#EF6B3E" },
          }),
          dimensions: re,
          gradient: {
            ID: "sidebar_svg_gradient_regular_red_mobile_hover",
            active: !0,
            transform: "rotate(90)",
            scheme: [
              { step: "0", color: "#EF6B3E" },
              { step: "1", color: "#CD491D" },
            ],
          },
        },
        Ce = ee(ee({}, ye), {
          fill: ee(ee({}, ye.fill), {
            color: "url(#sidebar_svg_gradient_regular_red_mobile_active)",
          }),
          filter: ee(ee({}, ye.filter), {
            ID: "svg_sidebar_green_regular_mobile_red_active_filter",
          }),
          gradient: ee(ee({}, ye.gradient), {
            ID: "sidebar_svg_gradient_regular_red_mobile_active",
          }),
        }),
        we = {
          fill: ee(ee({}, te), {
            color: "url(#sidebar_svg_gradient_regular_green_mobile)",
          }),
          filter: ee(ee({}, ne), {
            ID: "svg_sidebar_green_regular_mobile_green_filter",
            shadow: { active: !0, x: 0, y: 0, blur: 1.2, color: "#85b20070" },
          }),
          dimensions: re,
          gradient: {
            ID: "sidebar_svg_gradient_regular_green_mobile",
            active: !0,
            transform: "rotate(90)",
            scheme: [
              { step: "0", color: "#AFC372" },
              { step: "1", color: "#798D3C" },
            ],
          },
        },
        De = {
          fill: ee(ee({}, te), {
            color: "url(#sidebar_svg_gradient_regular_green_mobile_hover)",
          }),
          filter: ee(ee({}, ne), {
            ID: "svg_sidebar_green_regular_mobile_green_hover_filter",
            shadow: { active: !0, x: 0, y: 0, blur: 1.2, color: "#85B200" },
          }),
          dimensions: re,
          gradient: {
            ID: "sidebar_svg_gradient_regular_green_mobile_hover",
            active: !0,
            transform: "rotate(90)",
            scheme: [
              { step: "0", color: "#BBDC59" },
              { step: "1", color: "#85A623" },
            ],
          },
        },
        Fe = ee(ee({}, De), {
          fill: ee(ee({}, De.fill), {
            color: "url(#sidebar_svg_gradient_regular_green_mobile_active)",
          }),
          filter: ee(ee({}, De.filter), {
            ID: "svg_sidebar_green_regular_mobile_green_active_filter",
          }),
          gradient: ee(ee({}, De.gradient), {
            ID: "sidebar_svg_gradient_regular_green_mobile_active",
          }),
        }),
        Ie = ee({}, oe),
        Oe = ee({}, ae),
        Ae = ee({}, le),
        Te = ee({}, ce),
        ke = ee({}, se),
        Be = ee({}, ue),
        Pe = ee({}, de),
        Se = ee({}, fe),
        Ne = ee({}, me),
        Le = {
          fill: ee(ee({}, te), {
            color: "url(#sidebar_svg_gradient_jail_mobile)",
          }),
          filter: ee(ee({}, ne), {
            ID: "svg_sidebar_green_jail_mobile_filter",
            shadow: { active: !0, x: 0, y: 1, blur: 1.3, color: "#000000" },
          }),
          dimensions: re,
          gradient: {
            ID: "sidebar_svg_gradient_jail_mobile",
            active: !0,
            transform: "rotate(90)",
            scheme: [
              { step: "0", color: "#BDBCAF" },
              { step: "1", color: "#8A8973" },
            ],
          },
        },
        Re = {
          fill: ee(ee({}, te), {
            color: "url(#sidebar_svg_gradient_jail_mobile_hover)",
          }),
          filter: ee(ee({}, ne), {
            ID: "svg_sidebar_green_jail_mobile_filter_hover",
            shadow: { active: !0, x: 0, y: 1, blur: 1.3, color: "#FFFFFF" },
          }),
          dimensions: re,
          gradient: {
            ID: "sidebar_svg_gradient_jail_mobile_hover",
            active: !0,
            transform: "rotate(90)",
            scheme: [
              { step: "0", color: "#FFFFFF" },
              { step: "1", color: "#FFFFFF" },
            ],
          },
        },
        xe = ee(ee({}, Re), {
          fill: ee(ee({}, Re.fill), {
            color: "url(#sidebar_svg_gradient_jail_green_mobile_active)",
          }),
          filter: ee(ee({}, Re.filter), {
            ID: "svg_sidebar_green_jail_green_active_filter",
          }),
          gradient: ee(ee({}, Re.gradient), {
            ID: "sidebar_svg_gradient_jail_green_mobile_active",
          }),
        }),
        Ze = {
          fill: ee(ee({}, te), {
            color: "url(#sidebar_svg_gradient_jail_green_mobile)",
          }),
          filter: ee(ee({}, ne), {
            ID: "svg_sidebar_green_jail_mobile_green_filter",
            shadow: { active: !0, x: 0, y: 0, blur: 1.2, color: "#85b20070" },
          }),
          dimensions: re,
          gradient: {
            ID: "sidebar_svg_gradient_jail_green_mobile",
            active: !0,
            transform: "rotate(90)",
            scheme: [
              { step: "0", color: "#AFC372" },
              { step: "1", color: "#798D3C" },
            ],
          },
        },
        je = ee({}, Ze),
        Me = ee({}, Ze),
        He = ee({}, Ee),
        Ve = ee({}, ye),
        We = ee({}, Ce),
        Ge = ee({}, oe),
        Ue = ee({}, ae),
        ze = ee({}, le),
        Ke = ee({}, ce),
        qe = ee({}, se),
        Ye = ee({}, ue),
        Xe = ee({}, de),
        Je = ee({}, fe),
        Qe = ee({}, me),
        $e = {
          fill: ee(ee({}, te), {
            color: "url(#sidebar_svg_gradient_hospital_mobile)",
          }),
          filter: ee(ee({}, ne), {
            ID: "svg_sidebar_green_hospital_mobile_filter",
            shadow: { active: !0, x: 0, y: 1, blur: 1.3, color: "#000000" },
          }),
          dimensions: re,
          gradient: {
            ID: "sidebar_svg_gradient_hospital_mobile",
            active: !0,
            transform: "rotate(90)",
            scheme: [
              { step: "0", color: "#DDDDDD" },
              { step: "1", color: "#AAAAAA" },
            ],
          },
        },
        et = {
          fill: ee(ee({}, te), {
            color: "url(#sidebar_svg_gradient_hospital_mobile_hover)",
          }),
          filter: ee(ee({}, ne), {
            ID: "svg_sidebar_green_hospital_mobile_filter_hover",
            shadow: { active: !1 },
          }),
          dimensions: re,
          gradient: {
            ID: "sidebar_svg_gradient_hospital_mobile_hover",
            active: !0,
            transform: "rotate(90)",
            scheme: [
              { step: "0", color: "#FFFFFF" },
              { step: "1", color: "#FFFFFF" },
            ],
          },
        },
        tt = ee(ee({}, et), {
          fill: ee(ee({}, et.fill), {
            color: "url(#sidebar_svg_gradient_hospital_green_mobile_active)",
          }),
          filter: ee(ee({}, et.filter), {
            ID: "svg_sidebar_green_hospital_green_active_filter",
          }),
          gradient: ee(ee({}, et.gradient), {
            ID: "sidebar_svg_gradient_hospital_green_mobile_active",
          }),
        }),
        rt = {
          fill: ee(ee({}, te), {
            color: "url(#sidebar_svg_gradient_hospital_green_mobile)",
          }),
          filter: ee(ee({}, ne), {
            ID: "svg_sidebar_green_regular_mobile_green_filter",
            shadow: { active: !1 },
          }),
          dimensions: re,
          gradient: {
            ID: "sidebar_svg_gradient_hospital_green_mobile",
            active: !0,
            transform: "rotate(90)",
            scheme: [
              { step: "0", color: "#C9DD8C" },
              { step: "1", color: "#9BBD36" },
            ],
          },
        },
        nt = ee({}, rt),
        it = ee({}, rt),
        ot = ee({}, pe),
        at = ee({}, ve),
        lt = ee({}, he),
        ct = ee({}, Ee),
        st = ee({}, ye),
        ut = ee({}, Ce),
        dt = {
          fill: ee(ee({}, te), {
            color: "url(#sidebar_svg_gradient_travel_mobile)",
          }),
          filter: ee(ee({}, ne), {
            ID: "svg_sidebar_travel_mobile_filter",
            shadow: { active: !0, x: 0, y: 1, blur: 1.3, color: "#000000" },
          }),
          dimensions: re,
          gradient: {
            ID: "sidebar_svg_gradient_travel_mobile",
            active: !0,
            transform: "rotate(90)",
            scheme: [
              { step: "0", color: "#8FA6BC" },
              { step: "1", color: "#5F7F9F" },
            ],
          },
        },
        ft = {
          fill: ee(ee({}, te), {
            color: "url(#sidebar_svg_gradient_travel_mobile_hover)",
          }),
          filter: { ID: null, shadow: { active: !1 } },
          dimensions: re,
          gradient: {
            ID: "sidebar_svg_gradient_travel_mobile_hover",
            active: !0,
            transform: "rotate(90)",
            scheme: [
              { step: "0", color: "#FFFFFF" },
              { step: "1", color: "#FFFFFF" },
            ],
          },
        },
        mt = ee({}, ft),
        pt = ee({}, rt),
        vt = ee({}, nt),
        ht = ee({}, it),
        _t = ee({}, pe),
        bt = ee({}, ve),
        gt = ee({}, he),
        Et = ee({}, Ee),
        yt = ee({}, ye),
        Ct = ee({}, Ce),
        wt = {
          REGULAR_DESKTOP_GOLD: ie,
          REGULAR_DESKTOP: oe,
          REGULAR_DESKTOP_HOVER: ae,
          REGULAR_DESKTOP_ACTIVE: le,
          REGULAR_DESKTOP_GREEN: ce,
          REGULAR_DESKTOP_GREEN_HOVER: se,
          REGULAR_DESKTOP_GREEN_ACTIVE: ue,
          REGULAR_DESKTOP_RED: de,
          REGULAR_DESKTOP_RED_HOVER: fe,
          REGULAR_DESKTOP_RED_ACTIVE: me,
          REGULAR_MOBILE_GOLD: pe,
          REGULAR_MOBILE_GOLD_HOVER: ve,
          REGULAR_MOBILE_GOLD_ACTIVE: he,
          REGULAR_MOBILE: _e,
          REGULAR_MOBILE_HOVER: be,
          REGULAR_MOBILE_ACTIVE: ge,
          REGULAR_MOBILE_GREEN: we,
          REGULAR_MOBILE_GREEN_HOVER: De,
          REGULAR_MOBILE_GREEN_ACTIVE: Fe,
          REGULAR_MOBILE_RED: Ee,
          REGULAR_MOBILE_RED_HOVER: ye,
          REGULAR_MOBILE_RED_ACTIVE: Ce,
        },
        Dt = {
          JAIL_DESKTOP: Ie,
          JAIL_DESKTOP_HOVER: Oe,
          JAIL_DESKTOP_ACTIVE: Ae,
          JAIL_DESKTOP_GREEN: Te,
          JAIL_DESKTOP_GREEN_HOVER: ke,
          JAIL_DESKTOP_GREEN_ACTIVE: Be,
          JAIL_DESKTOP_RED: Pe,
          JAIL_DESKTOP_RED_HOVER: Se,
          JAIL_DESKTOP_RED_ACTIVE: Ne,
          JAIL_MOBILE: Le,
          JAIL_MOBILE_HOVER: Re,
          JAIL_MOBILE_ACTIVE: xe,
          JAIL_MOBILE_GREEN: Ze,
          JAIL_MOBILE_GREEN_HOVER: je,
          JAIL_MOBILE_GREEN_ACTIVE: Me,
          JAIL_MOBILE_RED: He,
          JAIL_MOBILE_RED_HOVER: Ve,
          JAIL_MOBILE_RED_ACTIVE: We,
        },
        Ft = {
          HOSPITAL_DESKTOP: Ge,
          HOSPITAL_DESKTOP_HOVER: Ue,
          HOSPITAL_DESKTOP_ACTIVE: ze,
          HOSPITAL_DESKTOP_GREEN: Ke,
          HOSPITAL_DESKTOP_GREEN_HOVER: qe,
          HOSPITAL_DESKTOP_GREEN_ACTIVE: Ye,
          HOSPITAL_DESKTOP_RED: Xe,
          HOSPITAL_DESKTOP_RED_HOVER: Je,
          HOSPITAL_DESKTOP_RED_ACTIVE: Qe,
          HOSPITAL_MOBILE: $e,
          HOSPITAL_MOBILE_HOVER: et,
          HOSPITAL_MOBILE_ACTIVE: tt,
          HOSPITAL_MOBILE_GREEN: rt,
          HOSPITAL_MOBILE_GREEN_HOVER: nt,
          HOSPITAL_MOBILE_GREEN_ACTIVE: it,
          HOSPITAL_MOBILE_RED: ct,
          HOSPITAL_MOBILE_RED_HOVER: st,
          HOSPITAL_MOBILE_RED_ACTIVE: ut,
          HOSPITAL_MOBILE_GOLD: ot,
          HOSPITAL_MOBILE_GOLD_HOVER: at,
          HOSPITAL_MOBILE_GOLD_ACTIVE: lt,
        },
        It = {
          TRAVEL_MOBILE: dt,
          TRAVEL_MOBILE_HOVER: ft,
          TRAVEL_MOBILE_ACTIVE: mt,
          TRAVEL_MOBILE_GREEN: pt,
          TRAVEL_MOBILE_GREEN_HOVER: vt,
          TRAVEL_MOBILE_GREEN_ACTIVE: ht,
          TRAVEL_MOBILE_RED: Et,
          TRAVEL_MOBILE_RED_HOVER: yt,
          TRAVEL_MOBILE_RED_ACTIVE: Ct,
          TRAVEL_MOBILE_GOLD: _t,
          TRAVEL_MOBILE_GOLD_HOVER: bt,
          TRAVEL_MOBILE_GOLD_ACTIVE: gt,
        },
        Ot = ee(ee(ee(ee({}, wt), Dt), Ft), It),
        At = function () {
          return (
            (At =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            At.apply(this, arguments)
          );
        },
        Tt = { color: "#3e3e3e", stroke: "#d4d4d4", strokeWidth: "0" },
        kt = { viewbox: "0 0 44 44", width: 44, height: 44 },
        Bt = {
          ID: "linear-gradient",
          active: !0,
          transform: "rotate(90)",
          scheme: [
            { step: "0", color: "#999" },
            { step: "1", color: "#ccc" },
          ],
        },
        Pt = {
          ID: "linear-gradient-dark-mode",
          active: !0,
          transform: "rotate(90)",
          scheme: [
            { step: "0", color: "#666" },
            { step: "1", color: "#888" },
          ],
        },
        St = At(At({}, Bt), {
          ID: "linear-gradient-green",
          scheme: [
            { step: "0", color: "#7f9e5f" },
            { step: "1", color: "#c3d2b5" },
          ],
        }),
        Nt = At(At({}, Pt), {
          ID: "linear-gradient-green-dark-mode",
          scheme: [
            { step: "0", color: "#C3D2B5" },
            { step: "1", color: "#7F9E5F" },
          ],
        }),
        Lt = At(At({}, Bt), {
          ID: "linear-gradient-red",
          scheme: [
            { step: "0", color: "#9e745f" },
            { step: "1", color: "#d2bfb5" },
          ],
        }),
        Rt = At(At({}, Pt), {
          ID: "linear-gradient-red-dark-mode",
          scheme: [
            { step: "0", color: "#E1B9A4" },
            { step: "1", color: "#945231" },
          ],
        }),
        xt = At(At({}, Pt), {
          ID: "linear-gradient-disable-dark-mode",
          scheme: [
            { step: "0", color: "#000000" },
            { step: "1", color: "#111111" },
          ],
        }),
        Zt = At(At({}, Tt), { color: "url(#linear-gradient)" }),
        jt = At(At({}, Tt), { color: "url(#linear-gradient-dark-mode)" }),
        Mt = At(At({}, Tt), { color: "url(#linear-gradient-green)" }),
        Ht = At(At({}, Tt), { color: "url(#linear-gradient-green-dark-mode)" }),
        Vt = At(At({}, Tt), { color: "url(#linear-gradient-red)" }),
        Wt = At(At({}, Tt), { color: "url(#linear-gradient-red-dark-mode)" }),
        Gt = At(At({}, Tt), {
          color: "url(#linear-gradient-disable-dark-mode)",
          opacity: 0.5,
        }),
        Ut = {
          fill: Zt,
          dimensions: kt,
          filter: { ID: null, shadow: { active: !1 } },
          gradient: Bt,
        },
        zt = { fill: jt, dimensions: kt, gradient: Pt },
        Kt = At(At({}, Bt), {
          ID: "linear-gradient-2",
          scheme: [
            { step: "0", color: "#65aacc" },
            { step: "1", color: "#afd2e4" },
          ],
        }),
        qt = At(At({}, Bt), {
          ID: "linear-gradient-2-dark-mode",
          scheme: [
            { step: "0", color: "#AFD2E4" },
            { step: "1", color: "#65AACC" },
          ],
        }),
        Yt = At(At({}, Bt), {
          ID: "linear-gradient-red-hover",
          scheme: [
            { step: "0", color: "#945231" },
            { step: "1", color: "#e1b9a4" },
          ],
        }),
        Xt = At(At({}, Bt), {
          ID: "linear-gradient-red-hover-dark-mode",
          scheme: [
            { step: "0", color: "#E1B9A4" },
            { step: "1", color: "#945231" },
          ],
        }),
        Jt = At(At({}, Bt), {
          ID: "linear-gradient-green-hover",
          scheme: [
            { step: "0", color: "#638a3b" },
            { step: "1", color: "#c3daab" },
          ],
        }),
        Qt = At(At({}, Bt), {
          ID: "linear-gradient-green-hover-dark-mode",
          scheme: [
            { step: "0", color: "#C3D2B5" },
            { step: "1", color: "#7F9E5F" },
          ],
        }),
        $t = At(At({}, Ut), {
          fill: At(At({}, Ut.fill), { color: "rgba(217, 54, 0, 0.5)" }),
        }),
        er = At(At({}, zt), {
          fill: At(At({}, zt.fill), { color: "rgba(217, 54, 0, 0.5)" }),
        }),
        tr = At(At({}, Ut), {
          fill: At(At({}, Ut.fill), { color: "rgba(153, 153, 153, 0.4)" }),
        }),
        rr = At(At({}, zt), { fill: Gt, gradient: xt }),
        nr = At({}, Ut),
        ir = At({}, zt),
        or = At({}, Ut),
        ar = At({}, zt),
        lr = At(At({}, Ut), { fill: Mt, gradient: St }),
        cr = At(At({}, zt), { fill: Ht, gradient: Nt }),
        sr = At(At({}, Ut), { fill: Vt, gradient: Lt }),
        ur = At(At({}, zt), { fill: Wt, gradient: Rt }),
        dr = At(At({}, Ut), {
          fill: At(At({}, Ut.fill), { color: "rgba(153, 153, 153, 0.4)" }),
        }),
        fr = At(At({}, zt), { fill: Gt, gradient: xt }),
        mr = At(At({}, Ut), {
          fill: At(At({}, Ut.fill), { color: "rgb(175,190,159)" }),
        }),
        pr = At(At({}, zt), {
          fill: At(At({}, zt.fill), { color: "rgb(175,190,159)" }),
        }),
        vr = At(At({}, Ut), {
          fill: At(At({}, Ut.fill), { color: "rgb(190,169,159)" }),
        }),
        hr = At(At({}, zt), {
          fill: At(At({}, zt.fill), { color: "rgb(190,169,159)" }),
        }),
        _r = At(At({}, Ut), {
          fill: At(At({}, Ut.fill), { color: "url(#linear-gradient-2)" }),
          gradient: Kt,
        }),
        br = At(At({}, zt), {
          fill: At(At({}, zt.fill), {
            color: "url(#linear-gradient-2-dark-mode)",
          }),
          gradient: qt,
        }),
        gr = At(At({}, Ut), {
          fill: At(At({}, Ut.fill), {
            color: "url(#linear-gradient-red-hover)",
          }),
          gradient: Yt,
        }),
        Er = At(At({}, zt), {
          fill: At(At({}, zt.fill), {
            color: "url(#linear-gradient-red-hover-dark-mode)",
          }),
          gradient: Xt,
        }),
        yr = At(At({}, Ut), {
          fill: At(At({}, Ut.fill), {
            color: "url(#linear-gradient-green-hover)",
          }),
          gradient: Jt,
        }),
        Cr = At(At({}, zt), {
          fill: At(At({}, zt.fill), {
            color: "url(#linear-gradient-green-hover-dark-mode)",
          }),
          gradient: Qt,
        }),
        wr = {
          fill: {
            color: "rgba(195,64,21,0.75)",
            stroke: "transparent",
            strokeWidth: "0",
            opacity: "0",
          },
          dimensions: { viewbox: "0 0 40 40", width: 40, height: 40 },
        },
        Dr = At(At({}, wr), {
          dimensions: At(At({}, wr.dimensions), { viewbox: "294 1260 40 40" }),
        }),
        Fr = At(At({}, wr), {
          dimensions: At(At({}, wr.dimensions), { viewbox: "229 1260 40 40" }),
        }),
        Ir = At(At({}, wr), {
          fill: At(At({}, wr.fill), { color: "rgba(195,64,21,0.85)" }),
          dimensions: At(At({}, wr.dimensions), { viewbox: "346 1260 40 40" }),
        }),
        Or = At(At({}, wr), {
          fill: At(At({}, wr.fill), { color: "rgba(43,141,173,0.7)" }),
          dimensions: At(At({}, wr.dimensions), { viewbox: "408 1259 40 40" }),
        }),
        Ar = At(At({}, wr), {
          fill: At(At({}, wr.fill), { color: "rgba(217,163,0,0.8)" }),
          dimensions: At(At({}, wr.dimensions), { viewbox: "0 1 40 40" }),
        }),
        Tr = {
          CLICKABLE_DISABLED: tr,
          CLICKABLE_DISABLED_DARK_MODE: rr,
          CROSS_DISABLED: $t,
          CROSS_DISABLED_DARK_MODE: er,
          RED_DISABLED: vr,
          RED_DISABLED_DARK_MODE: hr,
          GREEN_DISABLED: mr,
          GREEN_DISABLED_DARK_MODE: pr,
          RED_ACTIVE: sr,
          RED_ACTIVE_DARK_MODE: ur,
          GREEN_ACTIVE: lr,
          GREEN_ACTIVE_DARK_MODE: cr,
          DISABLED: dr,
          DISABLED_DARK_MODE: fr,
          GREEN_HOVER: yr,
          GREEN_HOVER_DARK_MODE: Cr,
          RED_HOVER: gr,
          RED_HOVER_DARK_MODE: Er,
          HOVER: _r,
          HOVER_DARK_MODE: br,
          ACTIVE: nr,
          ACTIVE_DARK_MODE: ir,
          HIDDEN: or,
          HIDDEN_DARK_MODE: ar,
          JAIL_STATUS: Dr,
          HOSPITAL_STATUS: Fr,
          FEDERAL_STATUS: Ir,
          TRAVELLING_STATUS: Or,
          LOOT_STATUS: Ar,
        },
        kr = {
          Search: {
            fill: {
              color: "url(#search_bar_search_gradient)",
              strokeWidth: "0",
            },
            gradient: {
              ID: "search_bar_search_gradient",
              active: !0,
              transform: "rotate(90)",
              scheme: [
                { step: "0", color: "#999" },
                { step: "1", color: "#ccc" },
              ],
            },
            dimensions: { width: 17, height: 17, viewbox: "0 0 14 14" },
            filter: {
              active: !0,
              ID: "search_bar_search_filter",
              shadow: {
                active: !0,
                x: 0,
                y: 1,
                blur: 0.1,
                color: "rgba(255, 255, 255, 0.25)",
              },
            },
          },
        },
        Br = function () {
          return (
            (Br =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            Br.apply(this, arguments)
          );
        },
        Pr = {
          gradient: {
            active: !0,
            transform: "rotate(90)",
            scheme: [
              { step: "0", color: "#999" },
              { step: "1", color: "#ccc" },
            ],
            ID: "bazaar_view_gradient",
          },
          fill: { color: "url(#bazaar_view_gradient)", strokeWidth: "0" },
          filter: {
            active: !0,
            ID: "bazaar_view_shadow",
            shadow: { active: !0, x: 0, y: 1, blur: 0.1, color: "#fff" },
          },
          onHover: {
            active: !0,
            gradient: {
              transform: "rotate(90)",
              scheme: [
                { step: "0", color: "#666" },
                { step: "1", color: "#999" },
              ],
              ID: "bazaar_view_hover_gradient",
            },
            fill: {
              color: "url(#bazaar_view_hover_gradient)",
              strokeWidth: "0",
            },
          },
        },
        Sr = Br(Br({}, Pr), {
          iconName: "BazaarView",
          dimensions: { width: 16, height: 10, viewbox: "0 0 18 11" },
        }),
        Nr = Br(Br({}, Pr), {
          iconName: "BazaarBuy",
          dimensions: { width: 16, height: 15, viewbox: "0 0 16 15.97" },
        }),
        Lr = Br(Br({}, Pr), {
          iconName: "BazaarCross",
          dimensions: { width: 12, height: 11, viewbox: "0 0 14 13" },
        }),
        Rr = {
          BAZAAR_VIEW_ICON_PRESET: Sr,
          BAZAAR_BUY_ICON_PRESET: Nr,
          BAZAAR_CROSS_ICON_PRESET: Lr,
          LOCK_ICON_PRESET: {
            iconName: "Lock",
            dimensions: { width: 24, height: 30, viewbox: "0 0 24 30" },
            gradient: {
              active: !0,
              transform: "rotate(90)",
              scheme: [
                { step: "0", color: "#fff" },
                { step: "1", color: "#eee" },
              ],
              ID: "lock_gradient",
            },
            fill: { color: "url(#lock_gradient)", strokeWidth: "0" },
            filter: {
              active: !0,
              ID: "lock_shadow",
              shadow: { active: !0, x: 0, y: 0, blur: 1, color: "#c92a2a" },
            },
          },
        },
        xr = function () {
          return (
            (xr =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            xr.apply(this, arguments)
          );
        },
        Zr = {
          fill: { color: "#888888", stroke: "transparent", strokeWidth: "0" },
          dimensions: { width: 16, height: 16, viewbox: "0 0 16 16" },
          filter: { ID: null, active: !1, shadow: { active: !1 } },
        },
        jr = xr(xr({}, Zr.fill), { color: "#7fa1b2" }),
        Mr = xr(xr({}, Zr), { fill: jr }),
        Hr =
          (xr(xr({}, Zr.fill), { color: "#d4dfe5" }),
          {
            fill: jr,
            dimensions: { width: 30, height: 30, viewbox: "-6 -6 30 30" },
          }),
        Vr = {
          fill: jr,
          dimensions: { width: 16, height: 12, viewbox: "0 0 16 12" },
        },
        Wr = {
          fill: jr,
          dimensions: { width: 14, height: 14, viewbox: "0 0 14 14" },
        },
        Gr = xr(xr({}, Zr), {
          fill: xr(xr({}, Zr.fill), {
            color: "var(--ct-hud-secondary-button-color)",
          }),
        }),
        Ur = xr(xr({}, Zr), {
          fill: xr(xr({}, Zr.fill), { color: "#00bfff" }),
        }),
        zr = xr(xr({}, Zr), {
          fill: xr(xr({}, Zr.fill), { color: "#eb8766" }),
        }),
        Kr = xr(xr({}, Mr), {
          dimensions: { width: 16, height: 15, viewbox: "0 0 16 15" },
        }),
        qr = xr({}, Kr),
        Yr = xr({}, Kr),
        Xr = {
          filter: Zr.filter,
          fill: jr,
          dimensions: { width: 17, height: 20, viewbox: "0 0 17 20" },
        },
        Jr = xr(xr({}, Mr), {
          dimensions: { width: 15, height: 15, viewbox: "0 0 15 15" },
        }),
        Qr = xr(xr({}, Mr), {
          dimensions: { width: 16, height: 14.67, viewbox: "0 0 16 14.67" },
        }),
        $r = xr(xr({}, Mr), {
          dimensions: { width: 16, height: 16, viewbox: "0 0 24 22" },
        }),
        en = {
          fill: {
            color: "url(#active_star)",
            stroke: "transparent",
            strokeWidth: 0,
          },
          dimensions: { width: 35, height: 34, viewbox: "827.5 353 35 34" },
          gradient: {
            ID: "active_star",
            active: !0,
            transform: "rotate(90)",
            scheme: [
              { step: "0", color: "#35a5d5" },
              { step: "1", color: "#97d1e9" },
            ],
          },
        },
        tn = {
          fill: {
            color: "url(#inactive_star)",
            stroke: "#97d1e9",
            strokeWidth: 1,
          },
          dimensions: { width: 35, height: 34, viewbox: "827.5 353 35 34" },
          gradient: {
            ID: "inactive_star",
            active: !0,
            transform: "rotate(90)",
            scheme: [
              { step: "0", color: "rgba(53, 165, 213, 0.2)" },
              { step: "1", color: "rgba(151, 209, 233, 0.2)" },
            ],
          },
        },
        rn = {
          dimensions: { width: 12, height: 12, viewbox: "0 0 24 24" },
          fill: { color: "#18A2CF", stroke: "transparent", strokeWidth: "0" },
        },
        nn = xr(xr({}, rn), {
          fill: xr(xr({}, Zr.fill), { color: "#107fcf" }),
        }),
        on = xr(xr({}, rn), { fill: xr(xr({}, Zr.fill), { color: "#ccc" }) }),
        an = {
          dimensions: { width: 21, height: 16, viewbox: "0 0 21 16" },
          fill: { color: "#18A2CF", stroke: "transparent", strokeWidth: "0" },
        },
        ln = xr(xr({}, an), {
          fill: xr(xr({}, an.fill), { color: "#107fcf" }),
        }),
        cn = xr(xr({}, an), { fill: xr(xr({}, an.fill), { color: "#ccc" }) }),
        sn = xr(xr({}, an), {
          dimensions: { width: 22.69, height: 17, viewbox: "0 0 22.69 17" },
        }),
        un = xr(xr({}, sn), {
          fill: xr(xr({}, sn.fill), { color: "#107fcf" }),
        }),
        dn = xr(xr({}, sn), { fill: xr(xr({}, sn.fill), { color: "#ccc" }) }),
        fn = {
          dimensions: { width: 12, height: 12, viewbox: "-3 -5 24 24" },
          fill: { color: "#aaa", stroke: "transparent", strokeWidth: "0" },
        },
        mn = xr(xr({}, fn), {
          fill: xr(xr({}, fn.fill), { color: "#eb8766" }),
        }),
        pn = {
          dimensions: { width: 16, height: 17, viewbox: "0 0 16 17" },
          fill: xr(xr({}, Zr.fill), { color: "#7fa1b2" }),
        },
        vn = {
          DEFAULTS: Zr,
          DEFAULTS_BLUE: Mr,
          DEFAULTS_FULLSCREEN: Hr,
          SEARCH: Wr,
          DANGER: zr,
          GESTURE: Gr,
          PLAYER: Ur,
          OBJECTS: Kr,
          PARAMETERS: qr,
          AREAS: Yr,
          BLOCKS: Jr,
          REDO: Qr,
          UNDO: $r,
          FULLSCREEN_MODE: Vr,
          ACTIVE_STAR: en,
          INACTIVE_STAR: tn,
          ADD_REMOVE_TRIGGER: rn,
          ADD_REMOVE_TRIGGER_HOVERED: nn,
          ADD_REMOVE_TRIGGER_DISABLED: on,
          UPLOAD_IMAGE_DEFAULT: an,
          UPLOAD_IMAGE_DISABLED: cn,
          UPLOAD_IMAGE_HOVERED: ln,
          REMOVE_EDIT_IMAGE_DEFAULT: sn,
          REMOVE_EDIT_IMAGE_HOVERED: un,
          REMOVE_EDIT_IMAGE_DISABLED: dn,
          LIBRARY_ICONS: {
            dimensions: { width: 14, height: 14, viewbox: "0 0 24 24" },
            fill: { color: "#bbb", stroke: "transparent", strokeWidth: "0" },
          },
          NPC: Xr,
          DELETE_COORD: fn,
          DELETE_COORD_HOVER: mn,
          ACTIVE_VIEW_TOGGLE: {
            dimensions: { width: 15, height: 15, viewbox: "0 0 20 19" },
            fill: { color: "#7fa1b2", stroke: "transparent", strokeWidth: "0" },
          },
          INACTIVE_VIEW_TOGGLE: {
            dimensions: { width: 15, height: 15, viewbox: "0 0 20 19" },
            fill: {
              color: "rgba(127, 161, 178, 0.4)",
              stroke: "transparent",
              strokeWidth: "0",
            },
          },
          VIEW_TOGGLE: pn,
          ACTIVE_VIEW_TOGGLE_SHOW: {
            dimensions: { width: 16, height: 9, viewbox: "0 0 16 16" },
            fill: { color: "#82C91E", stroke: "transparent", strokeWidth: "0" },
          },
          INACTIVE_VIEW_TOGGLE_SHOW: {
            dimensions: { width: 16, height: 9, viewbox: "0 0 16 16" },
            fill: {
              color: "rgba(127, 161, 178, 0.4)",
              stroke: "transparent",
              strokeWidth: "0",
            },
          },
          NO_EDIT: {
            dimensions: { width: 14, height: 14, viewbox: "0 0 16 16" },
            fill: { color: "#bbb", stroke: "transparent", strokeWidth: "0" },
          },
          CT_PLAYERS: {
            dimensions: { width: 14, height: 14, viewbox: "0 0 14 14" },
            fill: { color: "#668fa3", stroke: "transparent", strokeWidth: "0" },
          },
        },
        hn = vn,
        _n = function () {
          return (
            (_n =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            _n.apply(this, arguments)
          );
        },
        bn = {
          gradient: {
            active: !0,
            transform: "rotate(90)",
            scheme: [
              { step: "0", color: "rgba(255, 255, 255, 0.75)" },
              { step: "1", color: "#fff" },
            ],
            ID: "christmasTownMiniGamesGradient",
          },
          fill: {
            color: "url(#christmasTownMiniGamesGradient)",
            strokeWidth: "0",
          },
          filter: {
            active: !0,
            ID: "christmasTownMiniGamesShadow",
            customFilter: {
              active: !0,
              filter: o().createElement(
                o().Fragment,
                null,
                o().createElement("feoffset", { input: "SourceAlpha" }),
                o().createElement("fegaussianblur", {
                  stdDeviation: "5",
                  result: "c",
                }),
                o().createElement("feflood", {
                  floodColor: "#fff",
                  floodOpacity: "0.6",
                }),
                o().createElement("fecomposite", { operator: "in", in2: "c" }),
                o().createElement("fecomposite", { in: "SourceGraphic" })
              ),
            },
          },
        },
        gn = _n(_n({}, bn), {
          dimensions: { width: 33, height: 40, viewbox: "0 0 33 40" },
        }),
        En = _n(_n({}, gn), {
          dimensions: _n(_n({}, gn.dimensions), { width: 29, height: 36 }),
        }),
        yn = _n(_n({}, gn), {
          dimensions: _n(_n({}, gn.dimensions), { width: 24, height: 29 }),
        }),
        Cn = _n(_n({}, bn), {
          dimensions: { width: 23, height: 36, viewbox: "0 0 23 36" },
        }),
        wn = _n(_n({}, Cn), {
          dimensions: _n(_n({}, Cn.dimensions), { width: 21, height: 32 }),
        }),
        Dn = _n(_n({}, Cn), {
          dimensions: _n(_n({}, Cn.dimensions), { width: 15, height: 24 }),
        }),
        Fn = _n(_n({}, bn), {
          dimensions: { width: 44, height: 29, viewbox: "0 0 50 29" },
        }),
        In = _n(_n({}, Fn), {
          dimensions: _n(_n({}, Fn.dimensions), { width: 50, height: 26 }),
        }),
        On = _n(_n({}, Fn), {
          dimensions: _n(_n({}, Fn.dimensions), { width: 34, height: 20 }),
        }),
        An = _n(_n({}, bn), {
          dimensions: { width: 21, height: 40, viewbox: "0 0 21 40" },
        }),
        Tn = _n(_n({}, An), {
          dimensions: _n(_n({}, An.dimensions), { width: 19, height: 36 }),
        }),
        kn = _n(_n({}, An), {
          dimensions: _n(_n({}, An.dimensions), { width: 16, height: 30 }),
        }),
        Bn = _n(_n({}, bn), {
          dimensions: { width: 31, height: 41, viewbox: "0 0 31 41" },
        }),
        Pn = _n(_n({}, Bn), {
          dimensions: _n(_n({}, Bn.dimensions), { width: 28, height: 37 }),
        }),
        Sn = _n(_n({}, Bn), {
          dimensions: _n(_n({}, Bn.dimensions), { width: 22, height: 28 }),
        }),
        Nn = _n(_n({}, bn), {
          dimensions: { width: 27, height: 40, viewbox: "0 0 27 40" },
        }),
        Ln = _n(_n({}, Nn), {
          dimensions: _n(_n({}, Nn.dimensions), { width: 24, height: 36 }),
        }),
        Rn = _n(_n({}, Nn), {
          dimensions: _n(_n({}, Nn.dimensions), { width: 18, height: 27 }),
        }),
        xn = _n(_n({}, bn), {
          dimensions: { width: 40, height: 28, viewbox: "0 0 40 28" },
        }),
        Zn = _n(_n({}, xn), {
          dimensions: _n(_n({}, xn.dimensions), { width: 34, height: 23 }),
        }),
        jn = _n(_n({}, xn), {
          dimensions: _n(_n({}, xn.dimensions), { width: 29, height: 20 }),
        }),
        Mn = _n(_n({}, bn), {
          dimensions: { width: 40, height: 40, viewbox: "0 0 40 40" },
        }),
        Hn = {
          CTBrokenOrnament: gn,
          CTEnergyDrink: Cn,
          CTMoney: Fn,
          CTAlcohol: An,
          CTTangerine: Bn,
          CTBucks: Nn,
          CTTightlyWhities: xn,
          CTCandy: Mn,
          CTBrokenOrnamentTablet: En,
          CTEnergyDrinkTablet: wn,
          CTMoneyTablet: In,
          CTAlcoholTablet: Tn,
          CTTangerineTablet: Pn,
          CTBucksTablet: Ln,
          CTTightlyWhitiesTablet: Zn,
          CTCandyTablet: _n(_n({}, Mn), {
            dimensions: _n(_n({}, Mn.dimensions), { width: 36, height: 36 }),
          }),
          CTBrokenOrnamentMobile: yn,
          CTEnergyDrinkMobile: Dn,
          CTMoneyMobile: On,
          CTAlcoholMobile: kn,
          CTTangerineMobile: Sn,
          CTBucksMobile: Rn,
          CTTightlyWhitiesMobile: jn,
          CTCandyMobile: _n(_n({}, Mn), {
            dimensions: _n(_n({}, Mn.dimensions), { width: 28, height: 28 }),
          }),
        },
        Vn = {
          DEFAULT_PROPERTIES: {
            fill: {
              color: "rgba(63, 49, 36, 0.6)",
              stroke: "transparent",
              strokeWidth: "0",
            },
            dimensions: {
              viewbox: "0 0 57.47 25.45",
              width: 57.47,
              height: 25.45,
            },
            filter: { ID: null, active: !1, shadow: { active: !1 } },
          },
        },
        Wn = function () {
          return (
            (Wn =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            Wn.apply(this, arguments)
          );
        },
        Gn = function (e) {
          return {
            active: !0,
            ID: "loadouts_".concat(e, "_shadow"),
            shadow: { active: !0, x: 0, y: 1, blur: 0.1, color: "#fff" },
          };
        },
        Un = function (e) {
          return {
            active: !0,
            ID: "loadouts_".concat(e, "_shadow"),
            shadow: { active: !0, x: 0, y: 0, blur: 0.5, color: "#999" },
          };
        },
        zn = function (e) {
          var t = e.toLowerCase();
          return {
            iconName: e,
            gradient: {
              active: !0,
              transform: "rotate(90)",
              scheme: [
                { step: "0", color: "#888" },
                { step: "1", color: "#ccc" },
              ],
              ID: "loadouts_".concat(t, "_gradient"),
            },
            fill: {
              color: "url(#loadouts_".concat(t, "_gradient)"),
              strokeWidth: "0",
            },
            filter: Gn("iconId"),
            onHover: {
              active: !0,
              gradient: {
                transform: "rotate(90)",
                scheme: [
                  { step: "0", color: "#444" },
                  { step: "1", color: "#888" },
                ],
                ID: "loadouts_".concat(t, "_hover_gradient"),
              },
              fill: { color: "url(#loadouts_".concat(t, "_hover_gradient)") },
            },
          };
        },
        Kn = function (e) {
          var t = e.toLowerCase();
          return {
            iconName: e,
            fill: { color: "#ccc", strokeWidth: "0" },
            filter: Gn(t),
          };
        },
        qn = function (e) {
          var t = e.toLowerCase();
          return {
            iconName: e,
            fill: { color: "#999", strokeWidth: "0" },
            filter: Un(t),
            onHover: { active: !0, fill: { color: "#ddd" } },
          };
        },
        Yn =
          (Wn(Wn({}, qn("Back")), {
            dimensions: { width: 15, height: 13, viewbox: "0 0 15 13" },
          }),
          Wn(Wn({}, qn("DropdownArrowPassive")), {
            dimensions: { width: 16, height: 11, viewbox: "0 0 16 11" },
          }),
          Wn(Wn({}, qn("DropdownArrowActive")), {
            dimensions: { width: 11, height: 16, viewbox: "0 0 11 16" },
          }),
          Wn(Wn({}, zn("Equip")), {
            dimensions: { width: 15, height: 16, viewbox: "0 0 15 16" },
          })),
        Xn =
          (Wn(Wn({}, Kn("Equip")), { dimensions: Yn.dimensions }),
          Wn(Wn({}, zn("Reset")), {
            dimensions: {
              width: 20.267,
              height: 15.5,
              viewbox: "0 0 20.267 15.5",
            },
          })),
        Jn =
          (Wn(Wn({}, Kn("Reset")), { dimensions: Xn.dimensions }),
          Wn(Wn({}, zn("Edit")), {
            dimensions: {
              width: 17.346,
              height: 18.346,
              viewbox: "0 0 17.346 18.346",
            },
          })),
        Qn =
          (Wn(Wn({}, Kn("Edit")), { dimensions: Jn.dimensions }),
          Wn(Wn({}, zn("Save")), {
            dimensions: {
              width: 17.416,
              height: 15.083,
              viewbox: "0 0 17.416 15.083",
            },
          })),
        $n =
          (Wn(Wn({}, Kn("Save")), { dimensions: Qn.dimensions }),
          Wn(
            Wn(
              {},
              {
                iconName: "Close",
                fill: { color: "#888", strokeWidth: "0" },
                onHover: { active: !0, fill: { color: "#333" } },
              }
            ),
            { dimensions: { width: 12, height: 12, viewbox: "0 0 25 25" } }
          ),
          {
            ArrowSuperThin: {
              fill: { color: "#ccc", strokeWidth: 0, stroke: "transparent" },
              dimensions: { width: 11, height: 30, viewbox: "0 0 11 30" },
            },
            EQUIP: Yn,
            RESET: Xn,
          }),
        ei = function () {
          return (
            (ei =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            ei.apply(this, arguments)
          );
        },
        ti = {
          fill: {
            color: "var(--faction-default-application-icon-fill)",
            stroke: "transparent",
            strokeWidth: "0",
          },
          dimensions: { width: 13, height: 16, viewbox: "0 0 13 16" },
          filter: { ID: null, active: !1, shadow: { active: !1 } },
        },
        ri = {
          APPLICATION_STATE_NONE: ti,
          APPLICATION_STATE_PENDING: ei(ei({}, ti), {
            fill: ei(ei({}, ti.fill), { color: "#a1b664" }),
          }),
          APPLICATION_STATE_DECLINED: ei(ei({}, ti), {
            fill: ei(ei({}, ti.fill), { color: "#ee8966" }),
          }),
        },
        ni = function () {
          return (
            (ni =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            ni.apply(this, arguments)
          );
        },
        ii = {
          fill: {
            color: "url(#faction)",
            stroke: "transparent",
            strokeWidth: "0",
          },
          dimensions: { width: 15, height: 15, viewbox: "0 0 24 24" },
          gradient: {
            ID: "faction",
            active: !0,
            transform: "rotate(90)",
            scheme: [
              { step: "0", color: "var(--faction-default-icon-bg-stop-1)" },
              { step: "1", color: "var(--faction-default-icon-bg-stop-2)" },
            ],
          },
        },
        oi = ni(ni({}, ii), {
          fill: ni(ni({}, ii.fill), { color: "url(#factionHover)" }),
          gradient: ni(ni({}, ii.gradient), {
            ID: "factionHover",
            scheme: [
              { step: "0", color: "var(--faction-hover-icon-bg-stop-1)" },
              { step: "1", color: "var(--faction-hover-icon-bg-stop-2)" },
            ],
          }),
        }),
        ai = { width: 16, height: 16, viewbox: "0 0 24 24" },
        li = ni(ni({}, ii), {
          dimensions: { width: 14, height: 14, viewbox: "0 0 14 14" },
        }),
        ci = ni(ni({}, oi), {
          dimensions: { width: 14, height: 14, viewbox: "0 0 14 14" },
        }),
        si = ni(ni({}, ii), {
          dimensions: { width: 22, height: 14, viewbox: "0 0 20 12" },
        }),
        ui = ni(ni({}, si), {
          fill: ni(ni({}, si.fill), { color: "url(#factionHover)" }),
          gradient: ni(ni({}, si.gradient), {
            ID: "factionHover",
            scheme: [
              { step: "0", color: "var(--faction-hover-icon-bg-stop-1)" },
              { step: "1", color: "var(--faction-hover-icon-bg-stop-2)" },
            ],
          }),
        }),
        di = ni(ni({}, ii), {
          dimensions: ai,
          fill: ni(ni({}, ii.fill), {
            color: "var(--faction-position-permission-low-icon-color)",
          }),
        }),
        fi = ni(ni({}, ii), {
          dimensions: ai,
          fill: ni(ni({}, ii.fill), {
            color: "var(--faction-position-permission-mid-icon-color)",
          }),
        }),
        mi = ni(ni({}, ii), {
          dimensions: ai,
          fill: ni(ni({}, ii.fill), {
            color: "var(--faction-position-permission-high-icon-color)",
          }),
        }),
        pi = ni(ni({}, ii), {
          dimensions: ai,
          fill: ni(ni({}, ii.fill), {
            color: "var(--faction-position-permission-default-icon-color)",
          }),
        }),
        vi = ni(ni({}, ii), {
          dimensions: { width: 12, height: 12, viewbox: "0 0 24 24" },
          fill: ni(ni({}, ii.fill), {
            color: "var(--faction-position-default-icon-color)",
          }),
        }),
        hi = ni(ni({}, ii), {
          dimensions: ai,
          fill: ni(ni({}, ii.fill), {
            color: "var(--faction-position-permission-low-icon-color-hover)",
          }),
        }),
        _i = ni(ni({}, ii), {
          dimensions: ai,
          fill: ni(ni({}, ii.fill), {
            color: "var(--faction-position-permission-mid-icon-color-hover)",
          }),
        }),
        bi = ni(ni({}, ii), {
          dimensions: ai,
          fill: ni(ni({}, ii.fill), {
            color: "var(--faction-position-permission-high-icon-color-hover)",
          }),
        }),
        gi = ni(ni({}, ii), {
          dimensions: ai,
          fill: ni(ni({}, ii.fill), {
            color:
              "var(--faction-position-permission-default-icon-color-hover)",
          }),
        }),
        Ei = ni(ni({}, vi), {
          fill: ni(ni({}, vi.fill), {
            color: "var(--faction-position-default-icon-color-hover)",
          }),
        }),
        yi = ni(ni({}, ii), {
          dimensions: ni(ni({}, ii.dimensions), { width: 12, height: 12 }),
        }),
        Ci = {
          DEFAULT: ii,
          SEARCH: li,
          SEARCH_HOVER: ci,
          VIEW_APPLICATION: si,
          VIEW_APPLICATION_HOVER: ui,
          FACTION_POSITIONS_LIST_ADD: ni(ni({}, ii), {
            dimensions: { viewbox: "-6 -6 24 24", width: 24, height: 24 },
          }),
          REMOVE: yi,
          REMOVE_ACTIVE: ni(ni({}, yi), {
            fill: ni(ni({}, yi.fill), { color: "#ff5c26" }),
          }),
          REMOVE_DISABLED: ni(ni({}, yi), {
            fill: ni(ni({}, yi.fill), {
              color: "var(--faction-position-permissions-icon-fill-disabled)",
            }),
          }),
          REMOVE_BOLD: ni(ni({}, yi), {
            fill: ni(ni({}, yi.fill), { color: "#444" }),
          }),
          PERMISSION_CHECKBOX_LEVEL_LOW: di,
          PERMISSION_CHECKBOX_LEVEL_MID: fi,
          PERMISSION_CHECKBOX_LEVEL_HIGH: mi,
          PERMISSION_CHECKBOX_INACTIVE: vi,
          PERMISSION_CHECKBOX_LEVEL_DEFAULT: pi,
          PERMISSION_CHECKBOX_LEVEL_LOW_HOVER: hi,
          PERMISSION_CHECKBOX_LEVEL_MID_HOVER: _i,
          PERMISSION_CHECKBOX_LEVEL_HIGH_HOVER: bi,
          PERMISSION_CHECKBOX_LEVEL_DEFAULT_HOVER: gi,
          PERMISSION_CHECKBOX_INACTIVE_HOVER: Ei,
        },
        wi = function () {
          return (
            (wi =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            wi.apply(this, arguments)
          );
        },
        Di = { ID: null, shadow: { active: !1 } },
        Fi = {
          fill: { color: "#fff", stroke: "transparent", strokeWidth: "0" },
          filter: Di,
        },
        Ii = wi(wi({}, Fi), {
          fill: wi(wi({}, Fi.fill), { color: "#d8f5a2" }),
        }),
        Oi = wi(wi({}, Fi), { fill: wi(wi({}, Fi.fill), { color: "#888" }) }),
        Ai = wi(wi({}, Fi), { fill: wi(wi({}, Fi.fill), { color: "#bbb" }) }),
        Ti = wi(wi({}, Fi), {
          fill: wi(wi({}, Fi.fill), { color: "#74c0fc" }),
        }),
        ki = wi(wi({}, Fi), { fill: wi(wi({}, Fi.fill), { color: "#069" }) }),
        Bi = {
          DEFAULT: Fi,
          POSITIVE_LOG: Ii,
          NEGATIVE_LOG: wi(wi({}, Fi), {
            fill: wi(wi({}, Fi.fill), { color: "#ffa8a8" }),
          }),
          GREY: Oi,
          GREY_LIGHT: Ai,
          BLUE: Ti,
          BLUE_LIGHT: ki,
          DEFAULT_LIGHT: {
            fill: { color: "#999", stroke: "transparent", strokeWidth: "0" },
            filter: Di,
          },
          POSITIVE_LOG_LIGHT: wi(wi({}, Fi), {
            fill: wi(wi({}, Fi.fill), { color: "#8eab38" }),
          }),
          NEGATIVE_LOG_LIGHT: wi(wi({}, Fi), {
            fill: wi(wi({}, Fi.fill), { color: "#d55858" }),
          }),
        },
        Pi = function () {
          return (
            (Pi =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            Pi.apply(this, arguments)
          );
        },
        Si = {
          fill: { color: "#888888", stroke: "transparent", strokeWidth: "0" },
          dimensions: { width: 9, height: 11, viewbox: "0 0 9 11" },
          filter: {
            active: !0,
            ID: "default_filter",
            shadow: { active: !0, x: 0, y: 0, blur: 0.5, color: "#00000073" },
          },
        },
        Ni = {
          fill: { color: "#BDBDAE", stroke: "transparent", strokeWidth: "0" },
        },
        Li = {
          fill: { color: "#DDDDDD", stroke: "transparent", strokeWidth: "0" },
        },
        Ri = {
          fill: { color: "#8FA6BC", stroke: "transparent", strokeWidth: "0" },
        },
        xi = Pi(Pi({}, Si), {
          dimensions: { width: 9, height: 11, viewbox: "976 334 9 11" },
        }),
        Zi = Pi(Pi({}, Si), {
          dimensions: { width: 12, height: 13, viewbox: "332 238 10 11" },
        }),
        ji = Pi(Pi({}, Si), {
          dimensions: { width: 10, height: 12, viewbox: "-1740.5 -134.5 9 11" },
        }),
        Mi = Pi(Pi({}, xi), Li),
        Hi = Pi(Pi({}, Zi), Li),
        Vi = Pi(Pi({}, ji), Li),
        Wi = Pi(Pi({}, xi), Ni),
        Gi = Pi(Pi({}, Zi), Ni),
        Ui = Pi(Pi({}, ji), Ni),
        zi = Pi(Pi({}, xi), Ri),
        Ki = Pi(Pi({}, Zi), Ri),
        qi = Pi(Pi({}, ji), Ri),
        Yi = Pi(Pi({}, Si), {
          dimensions: { width: 9, height: 11, viewbox: "976 334 9 11" },
          fill: { color: "#FF9673", stroke: "transparent", strokeWidth: "0" },
        }),
        Xi = Pi(Pi({}, Si), {
          dimensions: { width: 9, height: 11, viewbox: "976 430 9 11" },
          fill: { color: "#D3B351", stroke: "transparent", strokeWidth: "0" },
        }),
        Ji = Pi(Pi({}, Yi), {
          fill: { color: "#FFE6DD", stroke: "transparent", strokeWidth: "0" },
          filter: {
            active: !0,
            ID: "urgent_faction_filter",
            shadow: { active: !0, x: 0, y: 0, blur: 3, color: "#FF4000" },
          },
        }),
        Qi = Pi(Pi({}, Xi), {
          fill: { color: "#FFF4D2", stroke: "transparent", strokeWidth: "0" },
          filter: {
            active: !0,
            ID: "urgent_announcement_filter",
            shadow: { active: !0, x: 0, y: 0, blur: 3, color: "#FFBF00" },
          },
        }),
        $i = {
          FACTION: xi,
          FACTION_HOSPITAL: Mi,
          FACTION_JAIL: Wi,
          STAR: Zi,
          STAR_HOSPITAL: Hi,
          STAR_JAIL: Gi,
          NEWS: ji,
          NEWS_HOSPITAL: Vi,
          NEWS_JAIL: Ui,
          TUTORIALS: Pi(Pi({}, Si), {
            fill: { color: "#FFFFFF", stroke: "transparent", strokeWidth: "0" },
            dimensions: { width: 9, height: 11, viewbox: "173 62 9 11" },
            filter: { active: !1, ID: null, shadow: { active: !1 } },
          }),
          URGENT_ANNOUNCEMENT: Xi,
          URGENT_ANNOUNCEMENT_HOSPITAL_JAIL: Qi,
          URGENT_FACTION: Yi,
          URGENT_FACTION_HOSPITAL_JAIL: Ji,
          FACTION_TRAVELING: zi,
          NEWS_TRAVELING: qi,
          STAR_TRAVELING: Ki,
          GAME_CLOSED: Pi(Pi({}, Si), {
            fill: { color: "#FFFFFF", stroke: "transparent", strokeWidth: "0" },
            dimensions: { width: 12, height: 11, viewbox: "0 1 12 11" },
            filter: {
              active: !0,
              ID: "game_closed_filter",
              shadow: { active: !0, x: 0, y: 0, blur: 3, color: "#FFFFFF80" },
            },
          }),
        },
        eo = function () {
          return (
            (eo =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            eo.apply(this, arguments)
          );
        },
        to = { ID: null, shadow: { active: !1 } },
        ro = {
          filter: to,
          dimensions: { width: 7, height: 7, viewbox: "0 0 12 12" },
        },
        no = {
          filter: to,
          fill: { color: "#666", stroke: "transparent", strokeWidth: "0" },
          dimensions: { width: 17, height: 17, viewbox: "-2 -2 9 9" },
        },
        io = {
          RESET_DEFAULTS: {
            fill: { color: "#fff", stroke: "transparent", strokeWidth: "0" },
            filter: to,
          },
          ONLINE_STATUS: eo(eo({}, ro), {
            fill: {
              color: 'url("#statusOnline")',
              stroke: "transparent",
              strokeWidth: "0",
            },
            gradient: {
              active: !0,
              ID: "statusOnline",
              transform: "translate(4003.99 5792.17) scale(11.88)",
              gradientUnits: "userSpaceOnUse",
              coords: {
                x1: "-243.94",
                y1: "-487.37",
                x2: "-243.94",
                y2: "-486.36",
              },
              scheme: [
                { step: "0", color: "#a3d900" },
                { step: "1", color: "#4c6600" },
              ],
            },
          }),
          AWAY_STATUS: eo(eo({}, ro), {
            fill: {
              color: 'url("#statusIdle")',
              stroke: "transparent",
              strokeWidth: "0",
            },
            gradient: {
              active: !0,
              ID: "statusIdle",
              transform: "matrix(11.88, 0, 0, -11.88, 11469.59, 5991.42)",
              gradientUnits: "userSpaceOnUse",
              coords: {
                x1: "-964.96",
                y1: "504.33",
                x2: "-964.96",
                y2: "503.31",
              },
              scheme: [
                { step: "0", color: "#ffbf00" },
                { step: "1", color: "#b25900" },
              ],
            },
          }),
          OFFLINE_STATUS: eo(eo({}, ro), {
            fill: {
              color: 'url("#statusOffline")',
              stroke: "transparent",
              strokeWidth: "0",
            },
            gradient: {
              active: !0,
              ID: "statusOffline",
              transform: "matrix(11.88, 0, 0, -11.88, 10388.51, 5992.42)",
              gradientUnits: "userSpaceOnUse",
              coords: {
                x1: "-873.96",
                y1: "504.42",
                x2: "-873.96",
                y2: "503.31",
              },
              scheme: [
                { step: "0", color: "#ccc" },
                { step: "1", color: "#666" },
              ],
            },
          }),
          COMPANY_STAR: {
            filter: {
              ID: "companyStarFilter",
              active: !0,
              shadow: { active: !0, x: 0, y: 0, blur: 2, color: "#a3d900" },
            },
            fill: { color: "#a3d900", stroke: "transparent", strokeWidth: "0" },
            dimensions: { width: 17, height: 17, viewbox: "-2 -2 9 9" },
          },
          COMPANY_STAR_EMPTY: no,
        },
        oo = function () {
          return (
            (oo =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            oo.apply(this, arguments)
          );
        },
        ao = { color: "#aaa", stroke: "transparent", strokeWidth: "0" },
        lo = { ID: null, shadow: { active: !1 } },
        co = {
          scheme: [
            { step: 0, color: "#888" },
            { step: 1, color: "#666" },
          ],
          ID: "date-picker-default-arrow-gradient",
          transform: "rotate(90)",
        },
        so = {
          scheme: [
            { step: 0, color: "#ddd" },
            { step: 1, color: "#999" },
          ],
          ID: "date-picker-hover-arrow-gradient",
          transform: "rotate(90)",
        },
        uo = {
          scheme: [
            { step: 0, color: "#222" },
            { step: 1, color: "#333" },
          ],
          ID: "date-picker-disabled-arrow-gradient",
          transform: "rotate(90)",
        },
        fo = { fill: ao, filter: lo, gradient: co },
        mo = {
          fill: { color: "#ccc", stroke: "transparent", strokeWidth: "0" },
          filter: lo,
          gradient: co,
        },
        po = {
          DEFAULT: fo,
          DISABLED: oo(oo({}, fo), {
            fill: oo(oo({}, ao), { color: "#cecece" }),
            gradient: uo,
          }),
          HOVERED: oo(oo({}, fo), {
            fill: oo(oo({}, ao), { color: "#777" }),
            gradient: so,
          }),
          DEFAULT_ARROW: mo,
          HOVERED_ARROW: oo(oo({}, mo), {
            fill: oo(oo({}, mo.fill), { color: "#999" }),
            gradient: so,
          }),
          DISABLED_ARROW: oo(oo({}, mo), {
            fill: oo(oo({}, mo.fill), { color: "#ececec" }),
            gradient: uo,
          }),
          RESET_ICON: {
            fill: { color: "#888", stroke: "transparent", strokeWidth: "0" },
            filter: lo,
          },
          CALENDAR_ICON: oo(oo({}, fo), {
            fill: { color: "#999", stroke: "transparent", strokeWidth: "0" },
          }),
        },
        vo = "15",
        ho = "15",
        _o = "0 0 24 24",
        bo = {
          DEFAULT: { color: "#fff", stroke: "#fff", strokeWidth: "1" },
          BLUE_DIMMED: {
            color: "#d4dfe5",
            stroke: "transparent",
            strokeWidth: 0,
          },
          BLUE_DIMMED_DARK: {
            color: "#74c0fc",
            stroke: "transparent",
            strokeWidth: 0,
          },
          BLUE_HOVERED: {
            color: "#7fa1b2",
            stroke: "transparent",
            strokeWidth: 0,
          },
          BLUE_HOVERED_DARK: {
            color: "#a5d8ff",
            stroke: "transparent",
            strokeWidth: 0,
          },
          ORANGE_DELETED: {
            color: "#e98867",
            stroke: "transparent",
            strokeWidth: 0,
          },
          ORANGE_DELETED_DARK: {
            color: "#ff4343",
            stroke: "transparent",
            strokeWidth: 0,
          },
          ORANGE_DIMMED: {
            color: "#e98867",
            stroke: "transparent",
            strokeWidth: 0,
          },
          ORANGE_HOVERED: {
            color: "#f77245",
            stroke: "transparent",
            strokeWidth: 0,
          },
          GREY_DIMMED: { color: "#ddd", stroke: "transparent", strokeWidth: 0 },
          GREY_COMMON: {
            color: "#a7a7a7",
            stroke: "transparent",
            strokeWidth: 0,
          },
          GREY_HOVERED: {
            color: "#888",
            stroke: "transparent",
            strokeWidth: 0,
          },
          PARTIAL_ERROR: {
            color: "#A58C6A",
            stroke: "transparent",
            strokeWidth: 0,
          },
          CRITICAL_ERROR: {
            color: "#A56F6A",
            stroke: "transparent",
            strokeWidth: 0,
          },
          CURRENT_ACTION: {
            color: "#668FA3",
            stroke: "transparent",
            strokeWidth: 0,
          },
          CHECK_DEFAULT: {
            color: "#A6C170",
            stroke: "transparent",
            strokeWidth: 0,
          },
          CHECK_UNDONE: {
            color: "#E1EACF",
            stroke: "transparent",
            strokeWidth: 0,
          },
          TOP_PAGE_LINK_DIMMED: {
            color: "#777",
            stroke: "transparent",
            strokeWidth: 0,
          },
          TOP_PAGE_LINK_HOVERED: {
            color: "#666",
            stroke: "transparent",
            strokeWidth: 0,
          },
        },
        go = {
          ID: "defaultFilter",
          SHADOW: { X: 0, Y: 0.7, BLUR: 0.1, COLOR: "#fff" },
        },
        Eo = {
          ID: "defaultIconsGradient",
          scheme: [
            { step: "0", color: "#999" },
            { step: "1", color: "#ccc" },
          ],
          transform: "rotate(90)",
          active: !0,
        },
        yo = {
          COPY_ICON: {
            iconName: "Copy",
            dimensions: { width: 15, height: 15, viewbox: "0 0 24 24" },
            gradient: Eo,
            filter: go,
            fill: { color: "url(#defaultIconsGradient)", strokeWidth: "0" },
            onHover: {
              active: !0,
              gradient: {
                transform: "rotate(90)",
                scheme: [
                  { step: "0", color: "#666" },
                  { step: "1", color: "#999" },
                ],
                ID: "hoverDefaultIconsGradient",
              },
              fill: {
                color: "url(#hoverDefaultIconsGradient)",
                strokeWidth: "0",
              },
            },
          },
          LINK_ICON: {
            iconName: "Link",
            dimensions: { width: 15, height: 15, viewbox: "0 0 24 24" },
            gradient: Eo,
            filter: go,
            fill: { color: "url(#defaultIconsGradient)", strokeWidth: "0" },
            onHover: {
              active: !0,
              gradient: {
                transform: "rotate(90)",
                scheme: [
                  { step: "0", color: "#666" },
                  { step: "1", color: "#999" },
                ],
                ID: "hoverDefaultIconsGradient",
              },
              fill: {
                color: "url(#hoverDefaultIconsGradient)",
                strokeWidth: "0",
              },
            },
          },
        },
        Co = function () {
          return (
            (Co =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            Co.apply(this, arguments)
          );
        },
        wo = { color: "#74b816", stroke: "transparent", strokeWidth: "0" },
        Do = Co(Co({}, wo), { color: "#d4d4d4" }),
        Fo = Co(Co({}, wo), { color: "#666" }),
        Io = Co(Co({}, wo), { color: "#5c7cfa" }),
        Oo = Co(Co({}, wo), { color: "#5C7CFA" }),
        Ao = { ID: null, shadow: { active: !1 } },
        To = { viewbox: "0 0 24 24", width: 22, height: 22 },
        ko = { fill: wo, dimensions: To, filter: Ao },
        Bo = {
          fill: { color: "#94D82D", stroke: "transparent", strokeWidth: "0" },
          dimensions: To,
          filter: Ao,
        },
        Po = {
          DEFAULT_PROPERTIES: ko,
          INACTIVE_PROPERTIES: Co(Co({}, ko), { fill: Do }),
          READY_PROPERTIES: Co(Co({}, ko), { fill: Io }),
          DEFAULT_PROPERTIES_DARK_MODE: Bo,
          INACTIVE_PROPERTIES_DARK_MODE: Co(Co({}, Bo), { fill: Fo }),
          READY_PROPERTIES_DARK_MODE: Co(Co({}, Bo), { fill: Oo }),
        },
        So = function () {
          return (
            (So =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            So.apply(this, arguments)
          );
        },
        No = { color: "#999", stroke: "transparent", strokeWidth: "0" },
        Lo = { viewbox: "599.36 433.421 14 12", width: 14, height: 12 },
        Ro = {
          fill: No,
          dimensions: Lo,
          filter: {
            active: !0,
            ID: "default_filter",
            shadow: { active: !0, x: 0, y: 1, blur: 0, color: "#FFFFFFA6" },
          },
        },
        xo = {
          fill: So(So({}, No), { color: "url(#linear-gradient-dark-mode)" }),
          dimensions: Lo,
          gradient: {
            ID: "linear-gradient-dark-mode",
            active: !0,
            transform: "rotate(0)",
            scheme: [
              { step: "0", color: "#666" },
              { step: "1", color: "#888" },
            ],
          },
          filter: {
            active: !0,
            ID: "default_filter_dark_mode",
            shadow: { active: !0, x: 0, y: 1, blur: 2, color: "#00000073" },
          },
        },
        Zo = {
          calendar: O,
          topPageLinks: k,
          ics: $,
          sidebar: Ot,
          searchBar: kr,
          profile: Tr,
          bazaar: Rr,
          christmasTown: hn,
          christmasTownMiniGames: Hn,
          chroniclesArchive: Vn,
          factionPotentialList: ri,
          faction: Ci,
          recentHistory: Bi,
          Loadouts: $n,
          newsTicker: $i,
          header: io,
          activityLog: po,
          global: yo,
          stockMarket: Po,
          personalStats: {
            DEFAULT: Ro,
            DEFAULT_DARK_MODE: xo,
            HOVER: So(So({}, Ro), {
              fill: So(So({}, Ro.fill), { color: "#555" }),
            }),
            HOVER_DARK_MODE: So(So({}, xo), {
              fill: So(So({}, xo.fill), {
                color: "url(#linear-gradient-hover-dark-mode)",
              }),
              gradient: {
                ID: "linear-gradient-hover-dark-mode",
                active: !0,
                transform: "rotate(0)",
                scheme: [
                  { step: "0", color: "#999" },
                  { step: "1", color: "#ddd" },
                ],
              },
              filter: So(So({}, xo.filter), {
                shadow: { active: !0, x: 0, y: 0, blur: 2, color: "#000000" },
              }),
            }),
          },
        },
        jo = "http://www.w3.org/2000/svg",
        Mo = "default___XXAGt",
        Ho =
          ((n = function (e, t) {
            return (
              (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                }),
              n(e, t)
            );
          }),
          function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Class extends value " +
                  String(t) +
                  " is not a constructor or null"
              );
            function r() {
              this.constructor = e;
            }
            n(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((r.prototype = t.prototype), new r()));
          }),
        Vo = function () {
          return (
            (Vo =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            Vo.apply(this, arguments)
          );
        },
        Wo = function (e, t, r, n) {
          return new (r || (r = Promise))(function (i, o) {
            function a(e) {
              try {
                c(n.next(e));
              } catch (e) {
                o(e);
              }
            }
            function l(e) {
              try {
                c(n.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof r
                    ? t
                    : new r(function (e) {
                        e(t);
                      })).then(a, l);
            }
            c((n = n.apply(e, t || [])).next());
          });
        },
        Go = function (e, t) {
          var r,
            n,
            i,
            o,
            a = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = { next: l(0), throw: l(1), return: l(2) }),
            "function" == typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );
          function l(o) {
            return function (l) {
              return (function (o) {
                if (r) throw new TypeError("Generator is already executing.");
                for (; a; )
                  try {
                    if (
                      ((r = 1),
                      n &&
                        (i =
                          2 & o[0]
                            ? n.return
                            : o[0]
                            ? n.throw || ((i = n.return) && i.call(n), 0)
                            : n.next) &&
                        !(i = i.call(n, o[1])).done)
                    )
                      return i;
                    switch (((n = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                      case 0:
                      case 1:
                        i = o;
                        break;
                      case 4:
                        return a.label++, { value: o[1], done: !1 };
                      case 5:
                        a.label++, (n = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !((i = a.trys),
                          (i = i.length > 0 && i[i.length - 1]) ||
                            (6 !== o[0] && 2 !== o[0]))
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!i || (o[1] > i[0] && o[1] < i[3]))
                        ) {
                          a.label = o[1];
                          break;
                        }
                        if (6 === o[0] && a.label < i[1]) {
                          (a.label = i[1]), (i = o);
                          break;
                        }
                        if (i && a.label < i[2]) {
                          (a.label = i[2]), a.ops.push(o);
                          break;
                        }
                        i[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    o = t.call(e, a);
                  } catch (e) {
                    (o = [6, e]), (n = 0);
                  } finally {
                    r = i = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, l]);
            };
          }
        },
        Uo = function (e, t) {
          var r = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              t.indexOf(n) < 0 &&
              (r[n] = e[n]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (n = Object.getOwnPropertySymbols(e); i < n.length; i++)
              t.indexOf(n[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
                (r[n[i]] = e[n[i]]);
          }
          return r;
        },
        zo = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              Object.defineProperty(n, "_parentNode", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(n, "_ref", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(n, "_isMounted", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(n, "_initRefs", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function () {
                  var e = n.props.isDeepParent,
                    t = n._ref && n._ref.current,
                    r = t && t.parentNode;
                  n._parentNode = e ? r && r.parentNode : r;
                },
              }),
              Object.defineProperty(n, "_handlerMouseOver", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function () {
                  n._parentNode.addEventListener("mouseover", n._onEnter),
                    n._parentNode.addEventListener("touchstart", n._onEnter);
                },
              }),
              Object.defineProperty(n, "_handlerMouseLeave", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function () {
                  n._parentNode.addEventListener("mouseleave", n._onLeave),
                    n._parentNode.addEventListener("touchend", n._onLeave);
                },
              }),
              Object.defineProperty(n, "_handlerMouseClick", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function () {
                  n._parentNode.addEventListener("click", n._onClick);
                },
              }),
              Object.defineProperty(n, "_addHandlerListeners", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function () {
                  var e = n.props,
                    t = e.onClick,
                    r = void 0 === t ? {} : t,
                    i = e.onHover,
                    o = void 0 === i ? {} : i;
                  n._parentNode &&
                    (o.active && n._handlerMouseOver(),
                    o.active && n._handlerMouseLeave(),
                    r.active && n._handlerMouseClick());
                },
              }),
              Object.defineProperty(n, "_removeHandlerListeners", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function () {
                  n._parentNode &&
                    (n._parentNode.removeEventListener("mouseover", n._onEnter),
                    n._parentNode.removeEventListener("touchstart", n._onEnter),
                    n._parentNode.removeEventListener("mouseleave", n._onLeave),
                    n._parentNode.removeEventListener("touchend", n._onLeave),
                    n._parentNode.removeEventListener("click", n._onClick));
                },
              }),
              Object.defineProperty(n, "_setAsyncMountFlag", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function (e) {
                  void 0 === e && (e = !1), (n._isMounted = e);
                },
              }),
              Object.defineProperty(n, "_setIconsState", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function (e) {
                  n.setState({
                    iconsToRender: e,
                    updateType: "state",
                    isIconMounted: !0,
                  });
                },
              }),
              Object.defineProperty(n, "_setIcon", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function () {
                  return Wo(n, void 0, void 0, function () {
                    var e, t, n;
                    return Go(this, function (i) {
                      switch (i.label) {
                        case 0:
                          return !(e = this.state.iconsHolder) ||
                            e instanceof Promise
                            ? (t = e)
                              ? [3, 2]
                              : [
                                  4,
                                  Promise.all([r.e(340), r.e(130)]).then(
                                    r.bind(r, 6819)
                                  ),
                                ]
                            : [3, 4];
                        case 1:
                          (t = i.sent()), (i.label = 2);
                        case 2:
                          return [4, t];
                        case 3:
                          return (
                            (n = i.sent().default),
                            this._isMounted
                              ? (this._setIconsState(n), [2])
                              : [2]
                          );
                        case 4:
                          return this._setIconsState(e), [2];
                      }
                    });
                  });
                },
              }),
              Object.defineProperty(n, "_getIcon", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function () {
                  var e = n.state,
                    t = e.iconsToRender,
                    r = e.iconName;
                  return t && r && t[r] ? t[r] : null;
                },
              }),
              Object.defineProperty(n, "_getIconPreset", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function () {
                  var e = n.state.preset;
                  if (!e || !e.type || !Zo[e.type]) return {};
                  var t = e.type,
                    r = e.subtype;
                  return Zo[t][r] || Zo[t].DEFAULTS;
                },
              }),
              Object.defineProperty(n, "_getIconProps", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function () {
                  var e = n.state,
                    t = e.filter,
                    r = e.gradient,
                    i = e.fill,
                    o = e.dimensions,
                    a = e.deepProps,
                    l = n._getIconPreset();
                  return {
                    fill: n._getFill(i, l),
                    dimensions: n._getDimensions(o, l),
                    filter: t || l.filter || go,
                    gradient: r || l.gradient || Eo,
                    deepProps: a || l.deepProps,
                  };
                },
              }),
              Object.defineProperty(n, "_renderGlobalSVGDefs", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function () {
                  var e = d.addDef,
                    t = d.getDefs,
                    r = n._getIconProps(),
                    i = r.filter,
                    o = r.gradient,
                    l = '.svgs_defs_container > svg[class="react_svgs_defs"]';
                  if (document.querySelector(".svgs_defs_container")) {
                    var c = document.querySelector(
                        "".concat(l, ' > defs[class="react_svgs__filters"]')
                      ),
                      s = document.querySelector(
                        "".concat(l, ' > defs[class="react_svgs__gradients"]')
                      ),
                      u = function (r) {
                        var n = r.callback,
                          i = r.type,
                          o = r.def,
                          l = r.node,
                          c = r.optimizeSVGInjection;
                        if (t()[i].includes(o.ID) || !l) return null;
                        e({ type: i, ID: o.ID });
                        var s = (0, a.renderToStaticMarkup)(n(o)),
                          u = c ? f(s) : s;
                        l.innerHTML += u;
                      };
                    u({
                      callback: n._createFilter,
                      type: "filters",
                      def: i,
                      node: c,
                    }),
                      u({
                        callback: n._getColorGradient,
                        type: "gradients",
                        def: o,
                        node: s,
                        optimizeSVGInjection: !0,
                      });
                  }
                },
              }),
              Object.defineProperty(n, "_getDefs", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function () {
                  var e = n.state,
                    t = e.iconName,
                    r = void 0 === t ? "" : t,
                    i = e.type,
                    o = void 0 === i ? "" : i,
                    a = e.activeDefs,
                    l = void 0 === a || a,
                    c = n._getIcon();
                  if (!r || !c.defs || !l) return null;
                  if (o) {
                    var s = c.defs[o];
                    return (s && s.default) || s || null;
                  }
                  return c.defs.default || c.defs;
                },
              }),
              Object.defineProperty(n, "_getShadow", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function (e) {
                  if ((void 0 === e && (e = {}), e && !1 === e.active))
                    return null;
                  var t = {
                    dx: p(e.x) ? e.x : go.SHADOW.X,
                    dy: p(e.y) ? e.y : go.SHADOW.Y,
                    stdDeviation: p(e.blur) ? e.blur : go.SHADOW.BLUR,
                    floodColor: p(e.color) ? e.color : go.SHADOW.COLOR,
                  };
                  return o().createElement("fedropshadow", Vo({}, t));
                },
              }),
              Object.defineProperty(n, "_gradientFiller", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function (e) {
                  return o().createElement("stop", {
                    key: e.color,
                    offset: e.step,
                    stopColor: e.color,
                  });
                },
              }),
              Object.defineProperty(n, "_getColorGradient", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function (e) {
                  var t = e || {},
                    r = t.ID,
                    i = void 0 === r ? "" : r,
                    a = t.active,
                    l = void 0 === a || a,
                    c = t.scheme,
                    s = void 0 === c ? [] : c,
                    u = t.transform,
                    d = void 0 === u ? "" : u,
                    f = t.coords,
                    m = void 0 === f ? {} : f,
                    p = t.gradientUnits,
                    v = void 0 === p ? "objectBoundingBox" : p,
                    h = t.additionalProps,
                    _ = void 0 === h ? {} : h,
                    b = m.x1,
                    g = m.x2,
                    E = m.y1,
                    y = m.y2;
                  if (!i || !l || !e || 0 === Object.keys(e).length)
                    return null;
                  var C = s.map(function (e) {
                    return n._gradientFiller(e);
                  });
                  return o().createElement(
                    "svg",
                    null,
                    o().createElement(
                      "linearGradient",
                      Vo(
                        {
                          id: i,
                          x1: b,
                          y1: E,
                          x2: g,
                          y2: y,
                          gradientUnits: v,
                          gradientTransform: d,
                        },
                        _
                      ),
                      C
                    )
                  );
                },
              }),
              Object.defineProperty(n, "_getFill", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function (e, t) {
                  var r = e || {},
                    n = r.name,
                    i = void 0 === n ? "" : n,
                    o = r.color,
                    a = void 0 === o ? "" : o,
                    l = r.stroke,
                    c = void 0 === l ? "" : l,
                    u = r.strokeWidth,
                    d = void 0 === u ? "" : u,
                    f = t.fill,
                    m = void 0 === f ? {} : f,
                    p = bo[i] || bo.DEFAULT || {},
                    v = p.color,
                    h = void 0 === v ? "" : v,
                    _ = p.stroke,
                    b = void 0 === _ ? "" : _,
                    g = p.strokeWidth,
                    E = void 0 === g ? "" : g;
                  return {
                    fill: s(a) ? a : m.color || h,
                    stroke: s(c) ? c : m.stroke || b,
                    strokeWidth: s(d) ? d : m.strokeWidth || E,
                  };
                },
              }),
              Object.defineProperty(n, "_getDimensions", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function (e, t) {
                  var r = e || {},
                    n = r.width,
                    i = void 0 === n ? "" : n,
                    o = r.height,
                    a = void 0 === o ? "" : o,
                    l = r.viewbox,
                    c = void 0 === l ? "" : l,
                    u = t.dimensions,
                    d = void 0 === u ? {} : u;
                  return {
                    width: s(i) ? i : d.width || vo,
                    height: s(a) ? a : d.height || ho,
                    viewBox: s(c) ? c : d.viewbox || _o,
                  };
                },
              }),
              Object.defineProperty(n, "_getCustomFilter", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function (e) {
                  if (!e || !e.active) return null;
                  var t = n._getIcon();
                  return e.filter || t.filter;
                },
              }),
              Object.defineProperty(n, "_checkDisableFilter", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function () {
                  var e = n._getIconProps().filter,
                    t = e.ID,
                    r = void 0 === t ? null : t,
                    i = e.active;
                  return null === r || !1 === (void 0 === i || i);
                },
              }),
              Object.defineProperty(n, "_getFilter", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function () {
                  var e = n._getIconProps().filter;
                  return n._checkDisableFilter()
                    ? ""
                    : "url(#".concat(e.ID || go.ID, ")");
                },
              }),
              Object.defineProperty(n, "_createFilter", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function (e) {
                  return n._checkDisableFilter()
                    ? null
                    : o().createElement(
                        "filter",
                        { id: e.ID || go.ID },
                        n._getShadow(e.shadow),
                        n._getCustomFilter(e.customFilter)
                      );
                },
              }),
              Object.defineProperty(n, "_renderShapeWithDeepSVGProps", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function (e, t) {
                  var r = Vo(Vo({}, e), {
                    props: Vo(Vo({}, e.props), t.parentProps),
                  });
                  return r.props.children && Array.isArray(r.props.children)
                    ? r.props.children.map(function (e, r) {
                        var n =
                          t.childrenProps[r] ||
                          t.childrenProps[e.props.className];
                        return Vo(Vo({}, e), { props: Vo(Vo({}, e.props), n) });
                      })
                    : r;
                },
              }),
              Object.defineProperty(n, "_renderShape", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function () {
                  var e = n.state.type,
                    t = void 0 === e ? "" : e,
                    r = n._getIconProps().deepProps,
                    i = n._getFilter(),
                    o = n._getIcon().shape,
                    a = o[t] || o.default || o;
                  return r && r.active
                    ? n._renderShapeWithDeepSVGProps(a, r)
                    : m() && i
                    ? [
                        Vo(Vo({}, a), {
                          props: Vo(Vo({}, a.props), { filter: i }),
                        }),
                        a,
                      ]
                    : a;
                },
              }),
              Object.defineProperty(n, "_propsUpdater", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function (e) {
                  var t = e.event,
                    r = e.status,
                    i = n.state[t] || {},
                    o = i.active,
                    a = void 0 !== o && o,
                    l = Uo(i, ["active"]),
                    s = a && !1 !== r ? l : n.props;
                  n.setState(function (e) {
                    return Vo(Vo({}, c()({}, e, s)), { updateType: "state" });
                  });
                },
              }),
              Object.defineProperty(n, "_onClick", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function () {
                  n._propsUpdater({ event: "onClick", status: !0 });
                },
              }),
              Object.defineProperty(n, "_onEnter", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function () {
                  n._propsUpdater({ event: "onHover", status: !0 });
                },
              }),
              Object.defineProperty(n, "_onLeave", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function () {
                  n._propsUpdater({ event: "onHover", status: !1 });
                },
              }),
              (n.state = { updateType: "props", isIconMounted: !1 }),
              (n._ref = o().createRef()),
              n
            );
          }
          return (
            Ho(t, e),
            Object.defineProperty(t, "getDerivedStateFromProps", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                return t.updateType && "props" !== t.updateType
                  ? "state" === t.updateType
                    ? { updateType: "" }
                    : null
                  : Vo(Vo({}, t), e);
              },
            }),
            Object.defineProperty(t.prototype, "componentDidMount", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                return Wo(this, void 0, void 0, function () {
                  return Go(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return (
                          this._setAsyncMountFlag(!0), [4, this._setIcon()]
                        );
                      case 1:
                        return (
                          e.sent(),
                          this._initRefs(),
                          this._addHandlerListeners(),
                          [2]
                        );
                    }
                  });
                });
              },
            }),
            Object.defineProperty(t.prototype, "componentDidUpdate", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                var t = e.onClick,
                  r = void 0 === t ? {} : t,
                  n = e.onHover,
                  i = void 0 === n ? {} : n,
                  o = this.props,
                  a = o.onClick,
                  l = void 0 === a ? {} : a,
                  c = o.onHover,
                  s = void 0 === c ? {} : c;
                (i.active === s.active && r.active === l.active) ||
                  (this._initRefs(),
                  this._removeHandlerListeners(),
                  this._addHandlerListeners());
              },
            }),
            Object.defineProperty(t.prototype, "componentWillUnmount", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                this._removeHandlerListeners(), this._setAsyncMountFlag(!1);
              },
            }),
            Object.defineProperty(t.prototype, "render", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                var e = this.state,
                  t = e.customClass,
                  r = void 0 === t ? "" : t,
                  n = e.iconName,
                  i = void 0 === n ? "" : n,
                  a = e.customStyles,
                  l = e.isIconMounted,
                  c = this._getIconProps(),
                  s = c.fill,
                  u = c.dimensions,
                  d = this._getIcon();
                return (
                  this._renderGlobalSVGDefs(),
                  l
                    ? !i || (!d && l)
                      ? (console.error(
                          'SVG Icon "'.concat(i, '"'),
                          " - IS NOT FOUND! PLEASE, CHECK THROWED ICON NAME!"
                        ),
                        null)
                      : o().createElement(
                          "svg",
                          Vo(
                            {
                              xmlns: jo,
                              ref: this._ref,
                              className: "".concat(Mo, " ").concat(r),
                              style: a,
                              filter: (!m() && this._getFilter()) || "",
                            },
                            s,
                            u
                          ),
                          this._getDefs(),
                          this._renderShape()
                        )
                    : null
                );
              },
            }),
            t
          );
        })(o().PureComponent),
        Ko = zo,
        qo = {
          CTESloped: {
            shape: {
              desktop:
                "\n      M 122 21\n      L 122 5\n      C 122 5 122 1 117 1\n      L 13 1\n      C 13 1 8 1 7 5\n      L 2 21\n      C 2 21 0 26 5 26\n      L 117 26\n      C 117 26 122 26 122 21\n    ",
              tablet:
                "\n      M 113 21\n      L 113 5\n      C 113 5 113 1 108 1\n      L 5 1\n      C 5 1 1 1 1 5\n      L 1 21\n      C 1 21 0 26 5 26\n      L 108 26\n      C 108 26 113 26 113 21\n    ",
              mobile:
                "\n      M 113 21\n      L 113 5\n      C 113 5 113 1 108 1\n      L 5 1\n      C 5 1 1 1 1 5\n      L 1 21\n      C 1 21 0 26 5 26\n      L 108 26\n      C 108 26 113 26 113 21\n    ",
            },
          },
          CTERegular: {
            shape: {
              desktop:
                "\n      M 122 21\n      L 122 5\n      C 122 5 122 1 117 1\n      L 13 1\n      C 13 1 8 1 7 5\n      L 2 21\n      C 2 21 0 26 5 26\n      L 117 26\n      C 117 26 122 26 122 21\n    ",
              tablet:
                "\n      M 113 21\n      L 113 5\n      C 113 5 113 1 108 1\n      L 5 1\n      C 5 1 1 1 1 5\n      L 1 21\n      C 1 21 0 26 5 26\n      L 108 26\n      C 108 26 113 26 113 21\n    ",
              mobile:
                "\n      M 113 21\n      L 113 5\n      C 113 5 113 1 108 1\n      L 5 1\n      C 5 1 1 1 1 5\n      L 1 21\n      C 1 21 0 26 5 26\n      L 108 26\n      C 108 26 113 26 113 21\n    ",
            },
          },
        },
        Yo = {
          DEFAULT: {
            DIMENSIONS: { WIDTH: "123", HEIGHT: "29" },
            FILL: {
              ID: "default-svg-button",
              GRADIENT_TRANSFORM: "rotate(0)",
              STROKE: "#fff",
              STROKE_WIDTH: "1",
            },
            COLOR_SCHEME: [
              { step: "0%", color: "#DAE3E8" },
              { step: "25%", color: "#EEF2F4" },
              { step: "60%", color: "#BDCED7" },
              { step: "80%", color: "#E8EEF1" },
              { step: "100%", color: "#BACDD6" },
            ],
          },
          CHRISTMAS_TOWN: {
            DIMENSIONS: {
              DESKTOP: { WIDTH: "123", HEIGHT: "29" },
              TABLET: { WIDTH: "123", HEIGHT: "29" },
              MOBILE: { WIDTH: "115", HEIGHT: "29" },
            },
            FILL: {
              ACTIVE: {
                ID: "cte-button-create",
                GRADIENT_TRANSFORM: "rotate(90)",
                STROKE: "#8dacbb",
                STROKE_WIDTH: "1",
              },
              CLICKED: {
                ID: "cte-button-create",
                GRADIENT_TRANSFORM: "rotate(90)",
                STROKE: "#8dacbb",
                STROKE_WIDTH: "1",
              },
              DISABLED: {
                ID: "cte-button-create",
                GRADIENT_TRANSFORM: "rotate(90)",
                STROKE: "#c6d5dd",
                STROKE_WIDTH: "1",
              },
            },
            COLOR_SCHEME: {
              ACTIVE: [
                { step: "0%", color: "#DAE3E8" },
                { step: "25%", color: "#EEF2F4" },
                { step: "60%", color: "#BDCED7" },
                { step: "80%", color: "#E8EEF1" },
                { step: "100%", color: "#BACDD6" },
              ],
              CLICKED: [
                { step: "0%", color: "#B9CCD5" },
                { step: "25%", color: "#DCE5EA" },
                { step: "60%", color: "#8AA9B8" },
                { step: "80%", color: "#CEDBE1" },
                { step: "100%", color: "#8DABBA" },
              ],
              DISABLED: [
                { step: "0%", color: "#ECF1F3" },
                { step: "25%", color: "#F5F8F9" },
                { step: "60%", color: "#DEE6EB" },
                { step: "80%", color: "#F2F5F7" },
                { step: "100%", color: "#DFE7EB" },
              ],
            },
          },
        },
        Xo = "default___GxPZ_",
        Jo = (function () {
          var e = function (t, r) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                }),
              e(t, r)
            );
          };
          return function (t, r) {
            if ("function" != typeof r && null !== r)
              throw new TypeError(
                "Class extends value " +
                  String(r) +
                  " is not a constructor or null"
              );
            function n() {
              this.constructor = t;
            }
            e(t, r),
              (t.prototype =
                null === r
                  ? Object.create(r)
                  : ((n.prototype = r.prototype), new n()));
          };
        })();
      !(function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (
            Object.defineProperty(t, "_getButtonType", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: function () {
                var e = t.props.buttonType,
                  r = Yo[void 0 === e ? "" : e] || Yo.DEFAULT;
                return {
                  FILL: r.FILL,
                  DIMENSIONS: r.DIMENSIONS,
                  COLOR_SCHEME: r.COLOR_SCHEME,
                };
              },
            }),
            Object.defineProperty(t, "_gradientFiller", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: function (e) {
                return o().createElement("stop", {
                  key: e.color,
                  offset: e.step,
                  stopColor: e.color,
                });
              },
            }),
            Object.defineProperty(t, "_getFill", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: function (e) {
                var r = t._getButtonType().FILL,
                  n = r[e] || r;
                return {
                  ID: n.ID,
                  STROKE: n.STROKE,
                  STROKE_WIDTH: n.STROKE_WIDTH,
                  GRADIENT_TRANSFORM: n.GRADIENT_TRANSFORM,
                };
              },
            }),
            Object.defineProperty(t, "_getDimenstions", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: function () {
                var e = t.props.mediaType,
                  r = void 0 === e ? "desktop" : e,
                  n = t._getButtonType().DIMENSIONS,
                  i = n[r.toUpperCase()] || n;
                return { WIDTH: i.WIDTH, HEIGHT: i.HEIGHT };
              },
            }),
            Object.defineProperty(t, "_getColorScheme", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: function () {
                var e = t.props,
                  r = e.condition,
                  n = void 0 === r ? "" : r,
                  i = e.customColor,
                  a = t._getButtonType().COLOR_SCHEME,
                  l = t._getFill(n),
                  c = l.ID,
                  s = l.GRADIENT_TRANSFORM;
                if (i)
                  return o().createElement(
                    "linearGradient",
                    { id: c, gradientTransform: s },
                    t._gradientFiller(i)
                  );
                var u = (a[n] || a).map(function (e) {
                  return t._gradientFiller(e);
                });
                return o().createElement(
                  "linearGradient",
                  { id: c, gradientTransform: s },
                  u
                );
              },
            }),
            Object.defineProperty(t, "_getButtonWithMediaType", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: function (e) {
                var r = t.props.mediaType,
                  n = void 0 === r ? "desktop" : r,
                  i = e.shape;
                return "mobile" === n
                  ? i.mobile
                  : "tablet" === n
                  ? i.tablet
                  : i.desktop;
              },
            }),
            Object.defineProperty(t, "_renderButton", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: function () {
                var e = t.props.buttonName,
                  r = qo[e];
                if (!r) return null;
                var n = t._getButtonWithMediaType(r),
                  i = t.props.condition,
                  a = void 0 === i ? "" : i,
                  l = t._getFill(a),
                  c = l.ID,
                  s = l.STROKE,
                  u = l.STROKE_WIDTH;
                return o().createElement("path", {
                  d: n,
                  fill: "url(#".concat(c, ")"),
                  stroke: s,
                  strokeWidth: u,
                });
              },
            }),
            t
          );
        }
        Jo(t, e),
          Object.defineProperty(t.prototype, "render", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function () {
              var e = this.props.customClass,
                t = void 0 === e ? "" : e;
              return o().createElement(
                "svg",
                {
                  className: "".concat(Xo, " ").concat(t),
                  xmlns: jo,
                  width: this._getDimenstions().WIDTH,
                  height: this._getDimenstions().HEIGHT,
                },
                this._getColorScheme(),
                this._renderButton()
              );
            },
          });
      })(i.PureComponent);
    },
    9763: function (e, t, r) {
      r.d(t, {
        LH: function () {
          return i;
        },
        ej: function () {
          return o;
        },
        lC: function () {
          return n;
        },
      });
      var n = function (e, t, r) {
          void 0 === t && (t = null), void 0 === r && (r = !1);
          var n = {
            credentials: "same-origin",
            headers: { "X-Requested-With": "XMLHttpRequest" },
          };
          return (
            t &&
              ((n.method = "post"),
              (n.body = new FormData()),
              Object.keys(t).forEach(function (e) {
                var r = typeof t[e];
                ["number", "string"].includes(r)
                  ? n.body.append(e, t[e])
                  : n.body.append(e, JSON.stringify(t[e]));
              })),
            fetch(e, n)
              .then(function (e) {
                return e.text().then(function (e) {
                  try {
                    var t = "null" === e ? {} : JSON.parse(e);
                    return (
                      t &&
                        r &&
                        (function (e) {
                          var t = e.error,
                            r = e.content;
                          if (t) throw t;
                          if (r) throw r;
                        })(t),
                      t
                    );
                  } catch (t) {
                    throw (
                      ((function (e) {
                        var t = {
                          credentials: "same-origin",
                          headers: { "X-Requested-With": "XMLHttpRequest" },
                        };
                        e &&
                          ((t.method = "post"),
                          (t.body = JSON.stringify({
                            desc: window.location.href,
                            data: e,
                          }))),
                          fetch("/loader.php?sid=setClientLog", t);
                      })({
                        desc: window.location.href,
                        error: t && t.toString(),
                        responce: e,
                      }),
                      new Error("Malformed response"))
                    );
                  }
                });
              })
              .catch(function (e) {
                throw e;
              })
          );
        },
        i = function (e, t) {
          void 0 === t && (t = "");
          for (var r = 0; e >= 1e3; ) (e /= 1e3), r++;
          return (
            t + (e = Math.round(10 * e) / 10) + ["", "k", "M", "B", "T", "P"][r]
          );
        },
        o = function (e) {
          var t = e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1"),
            r =
              document.cookie &&
              document.cookie.match(
                new RegExp("".concat("(?:^|; )").concat(t).concat("=([^;]*)"))
              );
          return r && r[1] ? decodeURIComponent(r[1]) : void 0;
        };
    },
    2323: function (e, t) {
      t.Z = function () {
        return !["www.torn.com", "torn.com"].includes(window.location.host);
      };
    },
    7363: function (e) {
      e.exports = React;
    },
    1533: function (e) {
      e.exports = ReactDOM;
    },
  },
  function (e) {
    var t = function (t) {
      return e((e.s = t));
    };
    e.O(0, [216], function () {
      return t(6168), t(6291);
    });
    e.O();
  },
]);
