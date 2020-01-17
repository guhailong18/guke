var Gitment = function(a) {
  function c(d) {
    if (b[d]) return b[d].exports;
    var e = b[d] = {
      i: d,
      l: !1,
      exports: {}
    };
    return a[d].call(e.exports, e, e.exports, c), e.l = !0, e.exports
  }
  var b = {};
  return c.m = a, c.c = b, c.i = function(a) {
    return a
  }, c.d = function(a, b, d) {
    c.o(a, b) || Object.defineProperty(a, b, {
      configurable: !1,
      enumerable: !0,
      get: d
    })
  }, c.n = function(a) {
    var b = a && a.__esModule ? function() {
      return a["default"]
    } : function() {
      return a
    };
    return c.d(b, "a", b), b
  }, c.o = function(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
  }, c.p = "", c(c.s = 5)
}([function(a, b) {
  "use strict";
  Object.defineProperty(b, "__esModule", {
    value: !0
  }), b.LS_ACCESS_TOKEN_KEY = "gitment-comments-token", b.LS_USER_KEY = "gitment-user-info", b.NOT_INITIALIZED_ERROR = new Error("Comments Not Initialized")
}, function(a, b, c) {
  "use strict";
  ! function(c) {
    function i(a) {
      return function(b, c, d) {
        return d && "function" == typeof d.value ? (d.value = _(a, d.value), d.enumerable = !1, d.configurable = !0, d) : f(a).apply(this, arguments)
      }
    }

    function j(a, b, c) {
      var d = "string" == typeof a ? a : a.name || "<unnamed action>",
        e = "function" == typeof a ? a : b,
        f = "function" == typeof a ? b : c;
      return vd("function" == typeof e, qd("m002")), vd(0 === e.length, qd("m003")), vd("string" == typeof d && d.length > 0, "actions should have valid names, got: '" + d + "'"), ab(d, e, f, void 0)
    }

    function k(a) {
      return "function" == typeof a && a.isMobxAction === !0
    }

    function l(a, b, c) {
      var d = function() {
        return ab(b, c, a, arguments)
      };
      d.isMobxAction = !0, Jd(a, b, d)
    }

    function m(a, b, c) {
      function h() {
        e(g)
      }
      var d, e, f, g;
      return "string" == typeof a ? (d = a, e = b, f = c) : (d = a.name || "Autorun@" + td(), e = a, f = b), vd("function" == typeof e, qd("m004")), vd(k(e) === !1, qd("m005")), f && (e = e.bind(f)), g = new Ub(d, function() {
        this.track(h)
      }), g.schedule(), g.getDisposer()
    }

    function n(a, b, c, d) {
      var e, f, g, h, i;
      return "string" == typeof a ? (e = a, f = b, g = c, h = d) : (e = "When@" + td(), f = a, g = b, h = c), i = m(e, function(a) {
        if (f.call(h)) {
          a.dispose();
          var b = xb();
          g.call(h), yb(b)
        }
      })
    }

    function o(a, b, c, d) {
      function l() {
        f(j)
      }
      var e, f, g, h, i, j;
      return "string" == typeof a ? (e = a, f = b, g = c, h = d) : (e = a.name || "AutorunAsync@" + td(), f = a, g = b, h = c), vd(k(f) === !1, qd("m006")), void 0 === g && (g = 1), h && (f = f.bind(h)), i = !1, j = new Ub(e, function() {
        i || (i = !0, setTimeout(function() {
          i = !1, j.isDisposed || j.track(l)
        }, g))
      }), j.schedule(), j.getDisposer()
    }

    function p(a, b, c) {
      function k() {
        if (!j.isDisposed) {
          var c = !1;
          j.track(function() {
            var b = a(j);
            c = Fd(e.compareStructural, i, b), i = b
          }), f && e.fireImmediately && b(i, j), f || c !== !0 || b(i, j), f && (f = !1)
        }
      }
      var e, f, g, i, j;
      return arguments.length > 3 && ud(qd("m007")), rc(a) && ud(qd("m008")), e = "object" === ("undefined" == typeof c ? "undefined" : d(c)) ? c : {}, e.name = e.name || a.name || b.name || "Reaction@" + td(), e.fireImmediately = c === !0 || e.fireImmediately === !0, e.delay = e.delay || 0, e.compareStructural = e.compareStructural || e.struct || !1, b = h(e.name, e.context ? b.bind(e.context) : b), e.context && (a = a.bind(e.context)), f = !0, g = !1, j = new Ub(e.name, function() {
        f || e.delay < 1 ? k() : g || (g = !0, setTimeout(function() {
          g = !1, k()
        }, e.delay))
      }), j.schedule(), j.getDisposer()
    }

    function q(a) {
      return hd(function(b, c, d, e, f) {
        vd("undefined" != typeof f, qd("m009")), vd("function" == typeof f.get, qd("m010"));
        var g = Qc(b, "");
        Tc(g, c, f.get, f.set, a, !1)
      }, function(a) {
        var b = this.$mobx.values[a];
        return void 0 === b ? void 0 : b.get()
      }, function(a, b) {
        this.$mobx.values[a].set(b)
      }, !1, !1)
    }

    function u(a, b) {
      var c, d, f;
      return vd("function" == typeof a && a.length < 2, "createTransformer expects a function that accepts one argument"), c = {}, d = Cb.resetId, f = function(d) {
          function f(b, c) {
            var e = d.call(this, function() {
              return a(c)
            }, void 0, !1, "Transformer-" + a.name + "-" + b, void 0) || this;
            return e.sourceIdentifier = b, e.sourceObject = c, e
          }
          return e(f, d), f.prototype.onBecomeUnobserved = function() {
            var a = this.value;
            d.prototype.onBecomeUnobserved.call(this), delete c[this.sourceIdentifier], b && b(a, this.sourceObject)
          }, f
        }(lb),
        function(a) {
          var b, e;
          return d !== Cb.resetId && (c = {}, d = Cb.resetId), b = v(a), (e = c[b]) ? e.get() : (e = c[b] = new f(b, a), e.get())
        }
    }

    function v(a) {
      if (null === a || "object" !== ("undefined" == typeof a ? "undefined" : d(a))) throw new Error("[mobx] transform expected some kind of object, got: " + a);
      var b = a.$transformId;
      return void 0 === b && (b = td(), Jd(a, "$transformId", b)), b
    }

    function w(a, b) {
      return rb() || console.warn(qd("m013")), t(a, {
        context: b
      }).get()
    }

    function x(a) {
      var c, b = [];
      for (c = 1; c < arguments.length; c++) b[c - 1] = arguments[c];
      return z(a, tc, b)
    }

    function y(a) {
      var c, b = [];
      for (c = 1; c < arguments.length; c++) b[c - 1] = arguments[c];
      return z(a, vc, b)
    }

    function z(a, b, c) {
      var e, f, g, h, i, j;
      for (vd(arguments.length >= 2, qd("m014")), vd("object" === ("undefined" == typeof a ? "undefined" : d(a)), qd("m015")), vd(!Oc(a), qd("m016")), c.forEach(function(a) {
          vd("object" === ("undefined" == typeof a ? "undefined" : d(a)), qd("m017")), vd(!I(a), qd("m018"))
        }), e = Qc(a), f = {}, g = c.length - 1; g >= 0; g--) {
        h = c[g];
        for (i in h)
          if (f[i] !== !0 && Hd(h, i)) {
            if (f[i] = !0, a === h && !Ld(a, i)) continue;
            j = Object.getOwnPropertyDescriptor(h, i), Rc(e, i, j, b)
          }
      }
      return a
    }

    function A(a, b) {
      return B(ed(a, b))
    }

    function B(a) {
      var b = {
        name: a.name
      };
      return a.observing && a.observing.length > 0 && (b.dependencies = Ad(a.observing).map(B)), b
    }

    function C(a, b) {
      return D(ed(a, b))
    }

    function D(a) {
      var b = {
        name: a.name
      };
      return Hb(a) && (b.observers = Ib(a).map(D)), b
    }

    function E(a, b, c) {
      return "function" == typeof c ? G(a, b, c) : F(a, b)
    }

    function F(a, b) {
      return fd(a).intercept(b)
    }

    function G(a, b, c) {
      return fd(a, b).intercept(c)
    }

    function H(a, b) {
      if (null === a || void 0 === a) return !1;
      if (void 0 !== b) {
        if (ad(a) === !1) return !1;
        var c = ed(a, b);
        return mb(c)
      }
      return mb(a)
    }

    function I(a, b) {
      if (null === a || void 0 === a) return !1;
      if (void 0 !== b) {
        if (Kc(a) || Oc(a)) throw new Error(qd("m019"));
        if (ad(a)) {
          var c = a.$mobx;
          return c.values && !!c.values[b]
        }
        return !1
      }
      return ad(a) || !!a.$mobx || kb(a) || _b(a) || mb(a)
    }

    function O(a) {
      if (void 0 === a && (a = void 0), "string" == typeof arguments[1]) return J.apply(null, arguments);
      if (vd(arguments.length <= 1, qd("m021")), vd(!rc(a), qd("m020")), I(a)) return a;
      var b = tc(a, void 0, void 0);
      return b !== a ? b : Q.box(a)
    }

    function R(a) {
      ud("Expected one or two arguments to observable." + a + ". Did you accidentally try to use observable." + a + " as decorator?")
    }

    function S(a) {
      return vd(!!a, ":("), hd(function(b, c, d, e, f) {
        Md(b, c), vd(!f || !f.get, qd("m022"));
        var g = Qc(b, void 0);
        Sc(g, c, d, a)
      }, function(a) {
        var b = this.$mobx.values[a];
        return void 0 === b ? void 0 : b.get()
      }, function(a, b) {
        Zc(this, a, b)
      }, !0, !1)
    }

    function T(a, b, c, d) {
      return "function" == typeof c ? V(a, b, c, d) : U(a, b, c)
    }

    function U(a, b, c) {
      return fd(a).observe(b, c)
    }

    function V(a, b, c, d) {
      return fd(a, b).observe(c, d)
    }

    function W(a, b, c) {
      function e(d) {
        return b && c.push([a, d]), d
      }
      var f, g, h, i, j, k;
      if (void 0 === b && (b = !0), void 0 === c && (c = []), I(a)) {
        if (b && null === c && (c = []), b && null !== a && "object" === ("undefined" == typeof a ? "undefined" : d(a)))
          for (f = 0, g = c.length; g > f; f++)
            if (c[f][0] === a) return c[f][1];
        if (Kc(a)) {
          for (h = e([]), i = a.map(function(a) {
              return W(a, b, c)
            }), h.length = i.length, f = 0, g = i.length; g > f; f++) h[f] = i[f];
          return h
        }
        if (ad(a)) {
          h = e({});
          for (j in a) h[j] = W(a[j], b, c);
          return h
        }
        if (Oc(a)) return k = e({}), a.forEach(function(a, d) {
          return k[d] = W(a, b, c)
        }), k;
        if (dd(a)) return W(a.get(), b, c)
      }
      return a
    }

    function X(a, b) {
      return void 0 === b && (b = void 0), xd(qd("m023")), Y.apply(void 0, arguments)
    }

    function Y(a, b) {
      return void 0 === b && (b = void 0), ab("", a)
    }

    function Z(a) {
      return console.log(a), a
    }

    function $(a, b) {
      switch (arguments.length) {
        case 0:
          if (a = Cb.trackingDerivation, !a) return Z(qd("m024"));
          break;
        case 2:
          a = ed(a, b)
      }
      return a = ed(a), mb(a) ? Z(a.whyRun()) : _b(a) ? Z(a.whyRun()) : ud(qd("m025"))
    }

    function _(a, b) {
      vd("function" == typeof b, qd("m026")), vd("string" == typeof a && a.length > 0, "actions should have valid names, got: '" + a + "'");
      var c = function() {
        return ab(a, b, this, arguments)
      };
      return c.originalFn = b, c.isMobxAction = !0, c
    }

    function ab(a, b, c, d) {
      var e = bb(a, b, c, d);
      try {
        return b.apply(c, d)
      } finally {
        cb(e)
      }
    }

    function bb(a, b, c, d) {
      var g, h, i, j, k, e = bc() && !!a,
        f = 0;
      if (e) {
        if (f = Date.now(), g = d && d.length || 0, h = new Array(g), g > 0)
          for (i = 0; g > i; i++) h[i] = d[i];
        dc({
          type: "action",
          name: a,
          fn: b,
          object: c,
          arguments: h
        })
      }
      return j = xb(), Nb(), k = gb(!0), {
        prevDerivation: j,
        prevAllowStateChanges: k,
        notifySpy: e,
        startTime: f
      }
    }

    function cb(a) {
      hb(a.prevAllowStateChanges), Ob(), yb(a.prevDerivation), a.notifySpy && fc({
        time: Date.now() - a.startTime
      })
    }

    function db(a) {
      vd(null === Cb.trackingDerivation, qd("m028")), Cb.strictMode = a, Cb.allowStateChanges = !a
    }

    function eb() {
      return Cb.strictMode
    }

    function fb(a, b) {
      var d, c = gb(a);
      try {
        d = b()
      } finally {
        hb(c)
      }
      return d
    }

    function gb(a) {
      var b = Cb.allowStateChanges;
      return Cb.allowStateChanges = a, b
    }

    function hb(a) {
      Cb.allowStateChanges = a
    }

    function pb(a) {
      return a instanceof ob
    }

    function qb(a) {
      var b, c, d, e, f;
      switch (a.dependenciesState) {
        case nb.UP_TO_DATE:
          return !1;
        case nb.NOT_TRACKING:
        case nb.STALE:
          return !0;
        case nb.POSSIBLY_STALE:
          for (b = xb(), c = a.observing, d = c.length, e = 0; d > e; e++)
            if (f = c[e], mb(f)) {
              try {
                f.get()
              } catch (g) {
                return yb(b), !0
              }
              if (a.dependenciesState === nb.STALE) return yb(b), !0
            } return zb(a), yb(b), !1
      }
    }

    function rb() {
      return null !== Cb.trackingDerivation
    }

    function sb(a) {
      var b = a.observers.length > 0;
      Cb.computationDepth > 0 && b && ud(qd("m031") + a.name), !Cb.allowStateChanges && b && ud(qd(Cb.strictMode ? "m030a" : "m030b") + a.name)
    }

    function tb(a, b, c) {
      var d, e;
      zb(a), a.newObserving = new Array(a.observing.length + 100), a.unboundDepsCount = 0, a.runId = ++Cb.runId, d = Cb.trackingDerivation, Cb.trackingDerivation = a;
      try {
        e = b.call(c)
      } catch (f) {
        e = new ob(f)
      }
      return Cb.trackingDerivation = d, ub(a), e
    }

    function ub(a) {
      var d, e, f, g, b = a.observing,
        c = a.observing = a.newObserving;
      for (a.newObserving = null, d = 0, e = a.unboundDepsCount, f = 0; e > f; f++) g = c[f], 0 === g.diffValue && (g.diffValue = 1, d !== f && (c[d] = g), d++);
      for (c.length = d, e = b.length; e--;) g = b[e], 0 === g.diffValue && Lb(g, a), g.diffValue = 0;
      for (; d--;) g = c[d], 1 === g.diffValue && (g.diffValue = 0, Kb(g, a))
    }

    function vb(a) {
      for (var b = a.observing, c = b.length; c--;) Lb(b[c], a);
      a.dependenciesState = nb.NOT_TRACKING, b.length = 0
    }

    function wb(a) {
      var b = xb(),
        c = a();
      return yb(b), c
    }

    function xb() {
      var a = Cb.trackingDerivation;
      return Cb.trackingDerivation = null, a
    }

    function yb(a) {
      Cb.trackingDerivation = a
    }

    function zb(a) {
      var b, c;
      if (a.dependenciesState !== nb.UP_TO_DATE)
        for (a.dependenciesState = nb.UP_TO_DATE, b = a.observing, c = b.length; c--;) b[c].lowestObserverState = nb.UP_TO_DATE
    }

    function Db() {
      var a = sd(),
        b = Cb;
      if (a.__mobservableTrackingStack || a.__mobservableViewStack) throw new Error("[mobx] An incompatible version of mobservable is already loaded.");
      if (a.__mobxGlobal && a.__mobxGlobal.version !== b.version) throw new Error("[mobx] An incompatible version of mobx is already loaded.");
      a.__mobxGlobal ? Cb = a.__mobxGlobal : a.__mobxGlobal = b
    }

    function Eb() {
      return Cb
    }

    function Fb() {}

    function Gb() {
      var a, b;
      Cb.resetId++, a = new Bb;
      for (b in a) - 1 === Ab.indexOf(b) && (Cb[b] = a[b]);
      Cb.allowStateChanges = !Cb.strictMode
    }

    function Hb(a) {
      return a.observers && a.observers.length > 0
    }

    function Ib(a) {
      return a.observers
    }

    function Kb(a, b) {
      var c = a.observers.length;
      c && (a.observersIndexes[b.__mapid] = c), a.observers[c] = b, a.lowestObserverState > b.dependenciesState && (a.lowestObserverState = b.dependenciesState)
    }

    function Lb(a, b) {
      var c, d, e, f;
      1 === a.observers.length ? (a.observers.length = 0, Mb(a)) : (c = a.observers, d = a.observersIndexes, e = c.pop(), e !== b && (f = d[b.__mapid] || 0, f ? d[e.__mapid] = f : delete d[e.__mapid], c[f] = e), delete d[b.__mapid])
    }

    function Mb(a) {
      a.isPendingUnobservation || (a.isPendingUnobservation = !0, Cb.pendingUnobservations.push(a))
    }

    function Nb() {
      Cb.inBatch++
    }

    function Ob() {
      var a, b, c;
      if (0 === --Cb.inBatch) {
        for (Zb(), a = Cb.pendingUnobservations, b = 0; b < a.length; b++) c = a[b], c.isPendingUnobservation = !1, 0 === c.observers.length && c.onBecomeUnobserved();
        Cb.pendingUnobservations = []
      }
    }

    function Pb(a) {
      var b = Cb.trackingDerivation;
      null !== b ? b.runId !== a.lastAccessedBy && (a.lastAccessedBy = b.runId, b.newObserving[b.unboundDepsCount++] = a) : 0 === a.observers.length && Mb(a)
    }

    function Rb(a) {
      var b, c, d;
      if (a.lowestObserverState !== nb.STALE)
        for (a.lowestObserverState = nb.STALE, b = a.observers, c = b.length; c--;) d = b[c], d.dependenciesState === nb.UP_TO_DATE && d.onBecomeStale(), d.dependenciesState = nb.STALE
    }

    function Sb(a) {
      var b, c, d;
      if (a.lowestObserverState !== nb.STALE)
        for (a.lowestObserverState = nb.STALE, b = a.observers, c = b.length; c--;) d = b[c], d.dependenciesState === nb.POSSIBLY_STALE ? d.dependenciesState = nb.STALE : d.dependenciesState === nb.UP_TO_DATE && (a.lowestObserverState = nb.UP_TO_DATE)
    }

    function Tb(a) {
      var b, c, d;
      if (a.lowestObserverState === nb.UP_TO_DATE)
        for (a.lowestObserverState = nb.POSSIBLY_STALE, b = a.observers, c = b.length; c--;) d = b[c], d.dependenciesState === nb.UP_TO_DATE && (d.dependenciesState = nb.POSSIBLY_STALE, d.onBecomeStale())
    }

    function Vb(a) {
      vd(this && this.$mobx && _b(this.$mobx), "Invalid `this`"), vd(!this.$mobx.errorHandler, "Only one onErrorHandler can be registered"), this.$mobx.errorHandler = a
    }

    function Wb(a) {
      return Cb.globalReactionErrorHandlers.push(a),
        function() {
          var b = Cb.globalReactionErrorHandlers.indexOf(a);
          b >= 0 && Cb.globalReactionErrorHandlers.splice(b, 1)
        }
    }

    function Zb() {
      Cb.inBatch > 0 || Cb.isRunningReactions || Yb($b)
    }

    function $b() {
      var a, b, c, d, e;
      for (Cb.isRunningReactions = !0, a = Cb.pendingReactions, b = 0; a.length > 0;)
        for (++b === Xb && (console.error("Reaction doesn't converge to a stable state after " + Xb + " iterations." + (" Probably there is a cycle in the reactive function: " + a[0])), a.splice(0)), c = a.splice(0), d = 0, e = c.length; e > d; d++) c[d].runReaction();
      Cb.isRunningReactions = !1
    }

    function ac(a) {
      var b = Yb;
      Yb = function(c) {
        return a(function() {
          return b(c)
        })
      }
    }

    function bc() {
      return !!Cb.spyListeners.length
    }

    function cc(a) {
      var b, c, d;
      if (Cb.spyListeners.length)
        for (b = Cb.spyListeners, c = 0, d = b.length; d > c; c++) b[c](a)
    }

    function dc(a) {
      var b = Ed({}, a, {
        spyReportStart: !0
      });
      cc(b)
    }

    function fc(a) {
      a ? cc(Ed({}, a, ec)) : cc(ec)
    }

    function gc(a) {
      return Cb.spyListeners.push(a), yd(function() {
        var b = Cb.spyListeners.indexOf(a); - 1 !== b && Cb.spyListeners.splice(b, 1)
      })
    }

    function hc(a) {
      return a.interceptors && a.interceptors.length > 0
    }

    function ic(a, b) {
      var c = a.interceptors || (a.interceptors = []);
      return c.push(b), yd(function() {
        var a = c.indexOf(b); - 1 !== a && c.splice(a, 1)
      })
    }

    function jc(a, b) {
      var d, e, f, c = xb();
      try {
        if (d = a.interceptors)
          for (e = 0, f = d.length; f > e && (b = d[e](b), vd(!b || b.type, "Intercept handlers should return nothing or a change object"), b); e++);
        return b
      } finally {
        yb(c)
      }
    }

    function kc(a) {
      return a.changeListeners && a.changeListeners.length > 0
    }

    function lc(a, b) {
      var c = a.changeListeners || (a.changeListeners = []);
      return c.push(b), yd(function() {
        var a = c.indexOf(b); - 1 !== a && c.splice(a, 1)
      })
    }

    function mc(a, b) {
      var e, f, c = xb(),
        d = a.changeListeners;
      if (d) {
        for (d = d.slice(), e = 0, f = d.length; f > e; e++) d[e](b);
        yb(c)
      }
    }

    function nc(a) {
      return xd("asReference is deprecated, use observable.ref instead"), Q.ref(a)
    }

    function oc(a) {
      return xd("asStructure is deprecated. Use observable.struct, computed.struct or reaction options instead."), Q.struct(a)
    }

    function pc(a) {
      return xd("asFlat is deprecated, use observable.shallow instead"), Q.shallow(a)
    }

    function qc(a) {
      return xd("asMap is deprecated, use observable.map or observable.shallowMap instead"), Q.map(a || {})
    }

    function rc(a) {
      return "object" === ("undefined" == typeof a ? "undefined" : d(a)) && null !== a && a.isMobxModifierDescriptor === !0
    }

    function sc(a, b) {
      return vd(!rc(b), "Modifiers cannot be nested"), {
        isMobxModifierDescriptor: !0,
        initialValue: b,
        enhancer: a
      }
    }

    function tc(a, b, c) {
      return rc(a) && ud("You tried to assign a modifier wrapped value to a collection, please define modifiers when creating the collection, not when modifying it"), I(a) ? a : Array.isArray(a) ? Q.array(a, c) : Dd(a) ? Q.object(a, c) : Sd(a) ? Q.map(a, c) : a
    }

    function uc(a, b, c) {
      return rc(a) && ud("You tried to assign a modifier wrapped value to a collection, please define modifiers when creating the collection, not when modifying it"), void 0 === a || null === a ? a : ad(a) || Kc(a) || Oc(a) ? a : Array.isArray(a) ? Q.shallowArray(a, c) : Dd(a) ? Q.shallowObject(a, c) : Sd(a) ? Q.shallowMap(a, c) : ud("The shallow modifier / decorator can only used in combination with arrays, objects and maps")
    }

    function vc(a) {
      return a
    }

    function wc(a, b, c) {
      if (Od(a, b)) return b;
      if (I(a)) return a;
      if (Array.isArray(a)) return new Dc(a, wc, c);
      if (Sd(a)) return new Mc(a, wc, c);
      if (Dd(a)) {
        var d = {};
        return Qc(d, c), z(d, wc, [a]), d
      }
      return a
    }

    function xc(a, b) {
      return Od(a, b) ? b : a
    }

    function Fc(a) {
      var b = Gc(a),
        c = Hc(a);
      Object.defineProperty(Dc.prototype, "" + a, {
        enumerable: !1,
        configurable: !0,
        set: b,
        get: c
      })
    }

    function Gc(a) {
      return function(b) {
        var e, f, g, c = this.$mobx,
          d = c.values;
        if (a < d.length) {
          if (sb(c.atom), e = d[a], hc(c)) {
            if (f = jc(c, {
                type: "update",
                object: c.array,
                index: a,
                newValue: b
              }), !f) return;
            b = f.newValue
          }
          b = c.enhancer(b, e), g = b !== e, g && (d[a] = b, c.notifyArrayChildUpdate(a, b, e))
        } else {
          if (a !== d.length) throw new Error("[mobx.array] Index out of bounds, " + a + " is larger than " + d.length);
          c.spliceWithArray(a, 0, [b])
        }
      }
    }

    function Hc(a) {
      return function() {
        var b = this.$mobx;
        if (b) {
          if (a < b.values.length) return b.atom.reportObserved(), b.values[a];
          console.warn("[mobx.array] Attempt to read an array index (" + a + ") that is out of bounds (" + b.values.length + "). Please check length first. Out of bound indices will not be tracked by MobX")
        }
        return void 0
      }
    }

    function Ic(a) {
      for (var b = Ac; a > b; b++) Fc(b);
      Ac = a
    }

    function Kc(a) {
      return Cd(a) && Jc(a.$mobx)
    }

    function Nc(a) {
      return xd("`mobx.map` is deprecated, use `new ObservableMap` or `mobx.observable.map` instead"), Q.map(a)
    }

    function Qc(a, b) {
      if (ad(a)) return a.$mobx;
      vd(Object.isExtensible(a), qd("m035")), Dd(a) || (b = (a.constructor.name || "ObservableObject") + "@" + td()), b || (b = "ObservableObject@" + td());
      var c = new Pc(a, b);
      return Kd(a, "$mobx", c), c
    }

    function Rc(a, b, c, d) {
      if (a.values[b]) return vd("value" in c, "The property " + b + " in " + a.name + " is already observable, cannot redefine it as computed property"), a.target[b] = c.value, void 0;
      if ("value" in c)
        if (rc(c.value)) {
          var e = c.value;
          Sc(a, b, e.initialValue, e.enhancer)
        } else k(c.value) && c.value.autoBind === !0 ? l(a.target, b, c.value.originalFn) : mb(c.value) ? Uc(a, b, c.value) : Sc(a, b, c.value, d);
      else Tc(a, b, c.get, c.set, !1, !0)
    }

    function Sc(a, b, c, d) {
      var e, f;
      if (Md(a.target, b), hc(a)) {
        if (e = jc(a, {
            object: a.target,
            name: b,
            type: "add",
            newValue: c
          }), !e) return;
        c = e.newValue
      }
      f = a.values[b] = new cd(c, d, a.name + "." + b, !1), c = f.value, Object.defineProperty(a.target, b, Xc(b)), $c(a, a.target, b, c)
    }

    function Tc(a, b, c, d, e, f) {
      f && Md(a.target, b), a.values[b] = new lb(c, a.target, e, a.name + "." + b, d), f && Object.defineProperty(a.target, b, Yc(b))
    }

    function Uc(a, b, c) {
      var d = a.name + "." + b;
      c.name = d, c.scope || (c.scope = a.target), a.values[b] = c, Object.defineProperty(a.target, b, Yc(b))
    }

    function Xc(a) {
      return Vc[a] || (Vc[a] = {
        configurable: !0,
        enumerable: !0,
        get: function() {
          return this.$mobx.values[a].get()
        },
        set: function(b) {
          Zc(this, a, b)
        }
      })
    }

    function Yc(a) {
      return Wc[a] || (Wc[a] = {
        configurable: !0,
        enumerable: !1,
        get: function() {
          return this.$mobx.values[a].get()
        },
        set: function(b) {
          return this.$mobx.values[a].set(b)
        }
      })
    }

    function Zc(a, b, c) {
      var f, g, h, d = a.$mobx,
        e = d.values[b];
      if (hc(d)) {
        if (f = jc(d, {
            type: "update",
            object: a,
            name: b,
            newValue: c
          }), !f) return;
        c = f.newValue
      }
      c = e.prepareNewValue(c), c !== bd && (g = kc(d), h = bc(), f = g || h ? {
        type: "update",
        object: a,
        oldValue: e.value,
        name: b,
        newValue: c
      } : null, h && dc(f), e.setNewValue(c), g && mc(d, f), h && fc())
    }

    function $c(a, b, c, d) {
      var e = kc(a),
        f = bc(),
        g = e || f ? {
          type: "add",
          object: b,
          name: c,
          newValue: d
        } : null;
      f && dc(g), e && mc(a, g), f && fc()
    }

    function ad(a) {
      return Cd(a) ? (jd(a), _c(a.$mobx)) : !1
    }

    function ed(a, b) {
      var c, e, f;
      if ("object" === ("undefined" == typeof a ? "undefined" : d(a)) && null !== a) {
        if (Kc(a)) return vd(void 0 === b, qd("m036")), a.$mobx.atom;
        if (Oc(a)) return c = a, void 0 === b ? ed(c._keys) : (e = c._data[b] || c._hasMap[b], vd(!!e, "the entry '" + b + "' does not exist in the observable map '" + gd(a) + "'"), e);
        if (jd(a), ad(a)) return b ? (f = a.$mobx.values[b], vd(!!f, "no observable property '" + b + "' found on the observable object '" + gd(a) + "'"), f) : ud("please specify a property");
        if (kb(a) || mb(a) || _b(a)) return a
      } else if ("function" == typeof a && _b(a.$mobx)) return a.$mobx;
      return ud("Cannot obtain atom from " + a)
    }

    function fd(a, b) {
      return vd(a, "Expecting some object"), void 0 !== b ? fd(ed(a, b)) : kb(a) || mb(a) || _b(a) ? a : Oc(a) ? a : (jd(a), a.$mobx ? a.$mobx : (vd(!1, "Cannot obtain administration from " + a), void 0))
    }

    function gd(a, b) {
      var c;
      return c = void 0 !== b ? ed(a, b) : ad(a) || Oc(a) ? fd(a) : ed(a), c.name
    }

    function hd(a, b, c, d, e) {
      function f(f, g, h, i, j) {
        var k, l, m;
        return void 0 === j && (j = 0), vd(e || kd(arguments), "This function is a decorator, but it wasn't invoked like a decorator"), h ? (Hd(f, "__mobxLazyInitializers") || Jd(f, "__mobxLazyInitializers", f.__mobxLazyInitializers && f.__mobxLazyInitializers.slice() || []), l = h.value, m = h.initializer, f.__mobxLazyInitializers.push(function(b) {
          a(b, g, m ? m.call(b) : l, i, h)
        }), {
          enumerable: d,
          configurable: !0,
          get: function() {
            return this.__mobxDidRunLazyInitializers !== !0 && jd(this), b.call(this, g)
          },
          set: function(a) {
            this.__mobxDidRunLazyInitializers !== !0 && jd(this), c.call(this, g, a)
          }
        }) : (k = {
          enumerable: d,
          configurable: !0,
          get: function() {
            return this.__mobxInitializedProps && this.__mobxInitializedProps[g] === !0 || id(this, g, void 0, a, i, h), b.call(this, g)
          },
          set: function(b) {
            this.__mobxInitializedProps && this.__mobxInitializedProps[g] === !0 ? c.call(this, g, b) : id(this, g, b, a, i, h)
          }
        }, (arguments.length < 3 || 5 === arguments.length && 3 > j) && Object.defineProperty(f, g, k), k)
      }
      return e ? function() {
        var a, b;
        return kd(arguments) ? f.apply(null, arguments) : (a = arguments, b = arguments.length, function(c, d, e) {
          return f(c, d, e, a, b)
        })
      } : f
    }

    function id(a, b, c, d, e, f) {
      Hd(a, "__mobxInitializedProps") || Jd(a, "__mobxInitializedProps", {}), a.__mobxInitializedProps[b] = !0, d(a, b, c, e, f)
    }

    function jd(a) {
      a.__mobxDidRunLazyInitializers !== !0 && a.__mobxLazyInitializers && (Jd(a, "__mobxDidRunLazyInitializers", !0), a.__mobxDidRunLazyInitializers && a.__mobxLazyInitializers.forEach(function(b) {
        return b(a)
      }))
    }

    function kd(a) {
      return (2 === a.length || 3 === a.length) && "string" == typeof a[1]
    }

    function ld() {
      return "function" == typeof Symbol && Symbol.iterator || "@@iterator"
    }

    function nd(a) {
      vd(a[md] !== !0, "Illegal state: cannot recycle array as iterator"), Kd(a, md, !0);
      var b = -1;
      return Kd(a, "next", function() {
        return b++, {
          done: b >= this.length,
          value: b < this.length ? this[b] : void 0
        }
      }), a
    }

    function od(a, b) {
      Kd(a, ld(), b)
    }

    function qd(a) {
      return pd[a]
    }

    function sd() {
      return c
    }

    function td() {
      return ++Cb.mobxGuid
    }

    function ud(a, b) {
      throw vd(!1, a, b), "X"
    }

    function vd(a, b, c) {
      if (!a) throw new Error("[mobx] Invariant failed: " + b + (c ? " in '" + c + "'" : ""))
    }

    function xd(a) {
      return -1 !== wd.indexOf(a) ? !1 : (wd.push(a), console.error("[mobx] Deprecated: " + a), !0)
    }

    function yd(a) {
      var b = !1;
      return function() {
        return b ? void 0 : (b = !0, a.apply(this, arguments))
      }
    }

    function Ad(a) {
      var b = [];
      return a.forEach(function(a) {
        -1 === b.indexOf(a) && b.push(a)
      }), b
    }

    function Bd(a, b, c) {
      if (void 0 === b && (b = 100), void 0 === c && (c = " - "), !a) return "";
      var d = a.slice(0, b);
      return "" + d.join(c) + (a.length > b ? " (... and " + (a.length - b) + "more)" : "")
    }

    function Cd(a) {
      return null !== a && "object" === ("undefined" == typeof a ? "undefined" : d(a))
    }

    function Dd(a) {
      if (null === a || "object" !== ("undefined" == typeof a ? "undefined" : d(a))) return !1;
      var b = Object.getPrototypeOf(a);
      return b === Object.prototype || null === b
    }

    function Ed() {
      var b, c, d, e, a = arguments[0];
      for (b = 1, c = arguments.length; c > b; b++) {
        d = arguments[b];
        for (e in d) Hd(d, e) && (a[e] = d[e])
      }
      return a
    }

    function Fd(a, b, c) {
      return "number" == typeof b && isNaN(b) ? "number" != typeof c || !isNaN(c) : a ? !Od(b, c) : b !== c
    }

    function Hd(a, b) {
      return Gd.call(a, b)
    }

    function Id(a, b) {
      for (var c = 0; c < b.length; c++) Jd(a, b[c], a[b[c]])
    }

    function Jd(a, b, c) {
      Object.defineProperty(a, b, {
        enumerable: !1,
        writable: !0,
        configurable: !0,
        value: c
      })
    }

    function Kd(a, b, c) {
      Object.defineProperty(a, b, {
        enumerable: !1,
        writable: !1,
        configurable: !0,
        value: c
      })
    }

    function Ld(a, b) {
      var c = Object.getOwnPropertyDescriptor(a, b);
      return !c || c.configurable !== !1 && c.writable !== !1
    }

    function Md(a, b) {
      vd(Ld(a, b), "Cannot make property '" + b + "' observable, it is not configurable and writable in the target object")
    }

    function Nd(a) {
      var c, b = [];
      for (c in a) b.push(c);
      return b
    }

    function Od(a, b) {
      var c, e, f, g, h;
      if (null === a && null === b) return !0;
      if (void 0 === a && void 0 === b) return !0;
      if ("object" !== ("undefined" == typeof a ? "undefined" : d(a))) return a === b;
      if (c = Qd(a), e = Rd(a), c !== Qd(b)) return !1;
      if (e !== Rd(b)) return !1;
      if (c) {
        if (a.length !== b.length) return !1;
        for (f = a.length - 1; f >= 0; f--)
          if (!Od(a[f], b[f])) return !1;
        return !0
      }
      if (e) return a.size !== b.size ? !1 : (g = !0, a.forEach(function(a, c) {
        g = g && Od(b.get(c), a)
      }), g);
      if ("object" === ("undefined" == typeof a ? "undefined" : d(a)) && "object" === ("undefined" == typeof b ? "undefined" : d(b))) {
        if (null === a || null === b) return !1;
        if (Rd(a) && Rd(b)) return a.size !== b.size ? !1 : Od(Q.shallowMap(a).entries(), Q.shallowMap(b).entries());
        if (Nd(a).length !== Nd(b).length) return !1;
        for (h in a) {
          if (!(h in b)) return !1;
          if (!Od(a[h], b[h])) return !1
        }
        return !0
      }
      return !1
    }

    function Pd(a, b) {
      var c = "isMobX" + a;
      return b.prototype[c] = !0,
        function(a) {
          return Cd(a) && a[c] === !0
        }
    }

    function Qd(a) {
      return Array.isArray(a) || Kc(a)
    }

    function Rd(a) {
      return Sd(a) || Oc(a)
    }

    function Sd(a) {
      return void 0 !== sd().Map && a instanceof sd().Map ? !0 : !1
    }

    function Td() {
      return "function" == typeof Symbol && Symbol.toPrimitive || "@@toPrimitive"
    }

    function Ud(a) {
      return null === a ? null : "object" === ("undefined" == typeof a ? "undefined" : d(a)) ? "" + a : a
    }
    var f, g, h, r, s, t, J, K, L, M, N, P, Q, ib, jb, kb, lb, mb, nb, ob, Ab, Bb, Cb, Ub, Xb, Yb, _b, ec, yc, zc, Ac, Bc, Cc, Dc, Ec, Jc, Lc, Mc, Oc, Pc, Vc, Wc, _c, bd, cd, dd, md, pd, rd, wd, zd, Gd, d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
        return typeof a
      } : function(a) {
        return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
      },
      e = void 0 || function() {
        var a = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(a, b) {
          a.__proto__ = b
        } || function(a, b) {
          for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        };
        return function(b, c) {
          function d() {
            this.constructor = b
          }
          a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
        }
      }();
    Object.defineProperty(b, "__esModule", {
        value: !0
      }), Fb(), b.extras = {
        allowStateChanges: fb,
        deepEqual: Od,
        getAtom: ed,
        getDebugName: gd,
        getDependencyTree: A,
        getAdministration: fd,
        getGlobalState: Eb,
        getObserverTree: C,
        isComputingDerivation: rb,
        isSpyEnabled: bc,
        onReactionError: Wb,
        resetGlobalState: Gb,
        shareGlobalState: Db,
        spyReport: cc,
        spyReportEnd: fc,
        spyReportStart: dc,
        setReactionScheduler: ac
      }, "object" === ("undefined" == typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ ? "undefined" : d(__MOBX_DEVTOOLS_GLOBAL_HOOK__)) && __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx(a.exports), a.exports.default = a.exports, f = hd(function(a, b, c, d) {
        var f = d && 1 === d.length ? d[0] : c.name || b || "<unnamed action>",
          g = h(f, c);
        Jd(a, b, g)
      }, function(a) {
        return this[a]
      }, function() {
        vd(!1, qd("m001"))
      }, !1, !0), g = hd(function(a, b, c) {
        l(a, b, c)
      }, function(a) {
        return this[a]
      }, function() {
        vd(!1, qd("m001"))
      }, !1, !1), h = function(a, b) {
        return 1 === arguments.length && "function" == typeof a ? _(a.name || "<unnamed action>", a) : 2 === arguments.length && "function" == typeof b ? _(a, b) : 1 === arguments.length && "string" == typeof a ? i(a) : i(b).apply(null, arguments)
      }, b.action = h, h.bound = function(a) {
        if ("function" == typeof a) {
          var d = _("<not yet bound action>", a);
          return d.autoBind = !0, d
        }
        return g.apply(null, arguments)
      }, b.runInAction = j, b.isAction = k, b.autorun = m, b.when = n, b.autorunAsync = o, b.reaction = p, r = q(!1), s = q(!0), t = function(a, b) {
        if ("string" == typeof b) return r.apply(null, arguments);
        vd("function" == typeof a, qd("m011")), vd(arguments.length < 3, qd("m012"));
        var e = "object" === ("undefined" == typeof b ? "undefined" : d(b)) ? b : {};
        return e.setter = "function" == typeof b ? b : e.setter, new lb(a, e.context, e.compareStructural || e.struct || !1, e.name || a.name || "", e.setter)
      }, b.computed = t, t.struct = s, b.createTransformer = u, b.expr = w, b.extendObservable = x, b.extendShallowObservable = y, b.intercept = E, b.isComputed = H, b.isObservable = I, J = S(tc), K = S(uc), L = S(vc), M = S(wc), N = S(xc), P = function() {
        function a() {}
        return a.prototype.box = function(a, b) {
          return arguments.length > 2 && R("box"), new cd(a, tc, b)
        }, a.prototype.shallowBox = function(a, b) {
          return arguments.length > 2 && R("shallowBox"), new cd(a, vc, b)
        }, a.prototype.array = function(a, b) {
          return arguments.length > 2 && R("array"), new Dc(a, tc, b)
        }, a.prototype.shallowArray = function(a, b) {
          return arguments.length > 2 && R("shallowArray"), new Dc(a, vc, b)
        }, a.prototype.map = function(a, b) {
          return arguments.length > 2 && R("map"), new Mc(a, tc, b)
        }, a.prototype.shallowMap = function(a, b) {
          return arguments.length > 2 && R("shallowMap"), new Mc(a, vc, b)
        }, a.prototype.object = function(a, b) {
          arguments.length > 2 && R("object");
          var c = {};
          return Qc(c, b), x(c, a), c
        }, a.prototype.shallowObject = function(a, b) {
          arguments.length > 2 && R("shallowObject");
          var c = {};
          return Qc(c, b), y(c, a), c
        }, a.prototype.ref = function() {
          return arguments.length < 2 ? sc(vc, arguments[0]) : L.apply(null, arguments)
        }, a.prototype.shallow = function() {
          return arguments.length < 2 ? sc(uc, arguments[0]) : K.apply(null, arguments)
        }, a.prototype.deep = function() {
          return arguments.length < 2 ? sc(tc, arguments[0]) : J.apply(null, arguments)
        }, a.prototype.struct = function() {
          return arguments.length < 2 ? sc(wc, arguments[0]) : M.apply(null, arguments)
        }, a
      }(), b.IObservableFactories = P, Q = O, b.observable = Q, Object.keys(P.prototype).forEach(function(a) {
        return Q[a] = P.prototype[a]
      }), Q.deep.struct = Q.struct, Q.ref.struct = function() {
        return arguments.length < 2 ? sc(xc, arguments[0]) : N.apply(null, arguments)
      }, b.observe = T, b.toJS = W, b.transaction = X, b.whyRun = $, b.useStrict = db, b.isStrictModeEnabled = eb, ib = function() {
        function a(a) {
          void 0 === a && (a = "Atom@" + td()), this.name = a, this.isPendingUnobservation = !0, this.observers = [], this.observersIndexes = {}, this.diffValue = 0, this.lastAccessedBy = 0, this.lowestObserverState = nb.NOT_TRACKING
        }
        return a.prototype.onBecomeUnobserved = function() {}, a.prototype.reportObserved = function() {
          Pb(this)
        }, a.prototype.reportChanged = function() {
          Nb(), Rb(this), Ob()
        }, a.prototype.toString = function() {
          return this.name
        }, a
      }(), b.BaseAtom = ib, jb = function(a) {
        function b(b, c, d) {
          void 0 === b && (b = "Atom@" + td()), void 0 === c && (c = zd), void 0 === d && (d = zd);
          var e = a.call(this, b) || this;
          return e.name = b, e.onBecomeObservedHandler = c, e.onBecomeUnobservedHandler = d, e.isPendingUnobservation = !1, e.isBeingTracked = !1, e
        }
        return e(b, a), b.prototype.reportObserved = function() {
          return Nb(), a.prototype.reportObserved.call(this), this.isBeingTracked || (this.isBeingTracked = !0, this.onBecomeObservedHandler()), Ob(), !!Cb.trackingDerivation
        }, b.prototype.onBecomeUnobserved = function() {
          this.isBeingTracked = !1, this.onBecomeUnobservedHandler()
        }, b
      }(ib), b.Atom = jb, kb = Pd("Atom", ib), lb = function() {
        function a(a, b, c, d, e) {
          this.derivation = a, this.scope = b, this.compareStructural = c, this.dependenciesState = nb.NOT_TRACKING, this.observing = [], this.newObserving = null, this.isPendingUnobservation = !1, this.observers = [], this.observersIndexes = {}, this.diffValue = 0, this.runId = 0, this.lastAccessedBy = 0, this.lowestObserverState = nb.UP_TO_DATE, this.unboundDepsCount = 0, this.__mapid = "#" + td(), this.value = void 0, this.isComputing = !1, this.isRunningSetter = !1, this.name = d || "ComputedValue@" + td(), e && (this.setter = _(d + "-setter", e))
        }
        return a.prototype.onBecomeStale = function() {
          Tb(this)
        }, a.prototype.onBecomeUnobserved = function() {
          vd(this.dependenciesState !== nb.NOT_TRACKING, qd("m029")), vb(this), this.value = void 0
        }, a.prototype.get = function() {
          vd(!this.isComputing, "Cycle detected in computation " + this.name, this.derivation), 0 === Cb.inBatch ? (Nb(), qb(this) && (this.value = this.computeValue(!1)), Ob()) : (Pb(this), qb(this) && this.trackAndCompute() && Sb(this));
          var a = this.value;
          if (pb(a)) throw a.cause;
          return a
        }, a.prototype.peek = function() {
          var a = this.computeValue(!1);
          if (pb(a)) throw a.cause;
          return a
        }, a.prototype.set = function(a) {
          if (this.setter) {
            vd(!this.isRunningSetter, "The setter of computed value '" + this.name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?"), this.isRunningSetter = !0;
            try {
              this.setter.call(this.scope, a)
            } finally {
              this.isRunningSetter = !1
            }
          } else vd(!1, "[ComputedValue '" + this.name + "'] It is not possible to assign a new value to a computed value.")
        }, a.prototype.trackAndCompute = function() {
          var a, b;
          return bc() && cc({
            object: this.scope,
            type: "compute",
            fn: this.derivation
          }), a = this.value, b = this.value = this.computeValue(!0), pb(b) || Fd(this.compareStructural, b, a)
        }, a.prototype.computeValue = function(a) {
          this.isComputing = !0, Cb.computationDepth++;
          var b;
          if (a) b = tb(this, this.derivation, this.scope);
          else try {
            b = this.derivation.call(this.scope)
          } catch (c) {
            b = new ob(c)
          }
          return Cb.computationDepth--, this.isComputing = !1, b
        }, a.prototype.observe = function(a, b) {
          var c = this,
            d = !0,
            e = void 0;
          return m(function() {
            var g, f = c.get();
            (!d || b) && (g = xb(), a({
              type: "update",
              object: c,
              newValue: f,
              oldValue: e
            }), yb(g)), d = !1, e = f
          })
        }, a.prototype.toJSON = function() {
          return this.get()
        }, a.prototype.toString = function() {
          return this.name + "[" + this.derivation.toString() + "]"
        }, a.prototype.valueOf = function() {
          return Ud(this.get())
        }, a.prototype.whyRun = function() {
          var a = Boolean(Cb.trackingDerivation),
            b = Ad(this.isComputing ? this.newObserving : this.observing).map(function(a) {
              return a.name
            }),
            c = Ad(Ib(this).map(function(a) {
              return a.name
            }));
          return "\nWhyRun? computation '" + this.name + "':\n * Running because: " + (a ? "[active] the value of this computation is needed by a reaction" : this.isComputing ? "[get] The value of this computed was requested outside a reaction" : "[idle] not running at the moment") + "\n" + (this.dependenciesState === nb.NOT_TRACKING ? qd("m032") : " * This computation will re-run if any of the following observables changes:\n    " + Bd(b) + "\n    " + (this.isComputing && a ? " (... or any observable accessed during the remainder of the current run)" : "") + "\n	" + qd("m038") + "\n\n  * If the outcome of this computation changes, the following observers will be re-run:\n    " + Bd(c) + "\n")
        }, a
      }(), lb.prototype[Td()] = lb.prototype.valueOf, mb = Pd("ComputedValue", lb),
      function(a) {
        a[a["NOT_TRACKING"] = -1] = "NOT_TRACKING", a[a["UP_TO_DATE"] = 0] = "UP_TO_DATE", a[a["POSSIBLY_STALE"] = 1] = "POSSIBLY_STALE", a[a["STALE"] = 2] = "STALE"
      }(nb || (nb = {})), b.IDerivationState = nb, ob = function() {
        function a(a) {
          this.cause = a
        }
        return a
      }(), b.untracked = wb, Ab = ["mobxGuid", "resetId", "spyListeners", "strictMode", "runId"], Bb = function() {
        function a() {
          this.version = 5, this.trackingDerivation = null, this.computationDepth = 0, this.runId = 0, this.mobxGuid = 0, this.inBatch = 0, this.pendingUnobservations = [], this.pendingReactions = [], this.isRunningReactions = !1, this.allowStateChanges = !0, this.strictMode = !1, this.resetId = 0, this.spyListeners = [], this.globalReactionErrorHandlers = []
        }
        return a
      }(), Cb = new Bb, Ub = function() {
        function a(a, b) {
          void 0 === a && (a = "Reaction@" + td()), this.name = a, this.onInvalidate = b, this.observing = [], this.newObserving = [], this.dependenciesState = nb.NOT_TRACKING, this.diffValue = 0, this.runId = 0, this.unboundDepsCount = 0, this.__mapid = "#" + td(), this.isDisposed = !1, this._isScheduled = !1, this._isTrackPending = !1, this._isRunning = !1
        }
        return a.prototype.onBecomeStale = function() {
          this.schedule()
        }, a.prototype.schedule = function() {
          this._isScheduled || (this._isScheduled = !0, Cb.pendingReactions.push(this), Zb())
        }, a.prototype.isScheduled = function() {
          return this._isScheduled
        }, a.prototype.runReaction = function() {
          this.isDisposed || (Nb(), this._isScheduled = !1, qb(this) && (this._isTrackPending = !0, this.onInvalidate(), this._isTrackPending && bc() && cc({
            object: this,
            type: "scheduled-reaction"
          })), Ob())
        }, a.prototype.track = function(a) {
          var b, c, d;
          Nb(), b = bc(), b && (c = Date.now(), dc({
            object: this,
            type: "reaction",
            fn: a
          })), this._isRunning = !0, d = tb(this, a, void 0), this._isRunning = !1, this._isTrackPending = !1, this.isDisposed && vb(this), pb(d) && this.reportExceptionInDerivation(d.cause), b && fc({
            time: Date.now() - c
          }), Ob()
        }, a.prototype.reportExceptionInDerivation = function(a) {
          var c, d, b = this;
          return this.errorHandler ? (this.errorHandler(a, this), void 0) : (c = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this, d = qd("m037"), console.error(c || d, a), bc() && cc({
            type: "error",
            message: c,
            error: a,
            object: this
          }), Cb.globalReactionErrorHandlers.forEach(function(c) {
            return c(a, b)
          }), void 0)
        }, a.prototype.dispose = function() {
          this.isDisposed || (this.isDisposed = !0, this._isRunning || (Nb(), vb(this), Ob()))
        }, a.prototype.getDisposer = function() {
          var a = this.dispose.bind(this);
          return a.$mobx = this, a.onError = Vb, a
        }, a.prototype.toString = function() {
          return "Reaction[" + this.name + "]"
        }, a.prototype.whyRun = function() {
          var a = Ad(this._isRunning ? this.newObserving : this.observing).map(function(a) {
            return a.name
          });
          return "\nWhyRun? reaction '" + this.name + "':\n * Status: [" + (this.isDisposed ? "stopped" : this._isRunning ? "running" : this.isScheduled() ? "scheduled" : "idle") + "]\n * This reaction will re-run if any of the following observables changes:\n    " + Bd(a) + "\n    " + (this._isRunning ? " (... or any observable accessed during the remainder of the current run)" : "") + "\n	" + qd("m038") + "\n"
        }, a
      }(), b.Reaction = Ub, Xb = 100, Yb = function(a) {
        return a()
      }, _b = Pd("Reaction", Ub), ec = {
        spyReportEnd: !0
      }, b.spy = gc, b.asReference = nc, b.asStructure = oc, b.asFlat = pc, b.asMap = qc, b.isModifierDescriptor = rc, yc = 1e4, zc = function() {
        var a = !1,
          b = {};
        return Object.defineProperty(b, "0", {
          set: function() {
            a = !0
          }
        }), Object.create(b)["0"] = 1, a === !1
      }(), Ac = 0, Bc = function() {
        function a() {}
        return a
      }(), Bc.prototype = [], Cc = function() {
        function a(a, b, c, d) {
          this.array = c, this.owned = d, this.lastKnownLength = 0, this.interceptors = null, this.changeListeners = null, this.atom = new ib(a || "ObservableArray@" + td()), this.enhancer = function(c, d) {
            return b(c, d, a + "[..]")
          }
        }
        return a.prototype.intercept = function(a) {
          return ic(this, a)
        }, a.prototype.observe = function(a, b) {
          return void 0 === b && (b = !1), b && a({
            object: this.array,
            type: "splice",
            index: 0,
            added: this.values.slice(),
            addedCount: this.values.length,
            removed: [],
            removedCount: 0
          }), lc(this, a)
        }, a.prototype.getArrayLength = function() {
          return this.atom.reportObserved(), this.values.length
        }, a.prototype.setArrayLength = function(a) {
          var b, c, d;
          if ("number" != typeof a || 0 > a) throw new Error("[mobx.array] Out of range: " + a);
          if (b = this.values.length, a !== b)
            if (a > b) {
              for (c = new Array(a - b), d = 0; a - b > d; d++) c[d] = void 0;
              this.spliceWithArray(b, 0, c)
            } else this.spliceWithArray(a, b - a)
        }, a.prototype.updateArrayLength = function(a, b) {
          if (a !== this.lastKnownLength) throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed. Did you use peek() to change it?");
          this.lastKnownLength += b, b > 0 && a + b + 1 > Ac && Ic(a + b + 1)
        }, a.prototype.spliceWithArray = function(a, b, c) {
          var e, f, g, h, d = this;
          if (sb(this.atom), e = this.values.length, void 0 === a ? a = 0 : a > e ? a = e : 0 > a && (a = Math.max(0, e + a)), b = 1 === arguments.length ? e - a : void 0 === b || null === b ? 0 : Math.max(0, Math.min(b, e - a)), void 0 === c && (c = []), hc(this)) {
            if (f = jc(this, {
                object: this.array,
                type: "splice",
                index: a,
                removedCount: b,
                added: c
              }), !f) return rd;
            b = f.removedCount, c = f.added
          }
          return c = c.map(function(a) {
            return d.enhancer(a, void 0)
          }), g = c.length - b, this.updateArrayLength(e, g), h = this.spliceItemsIntoValues(a, b, c), (0 !== b || 0 !== c.length) && this.notifyArraySplice(a, c, h), h
        }, a.prototype.spliceItemsIntoValues = function(a, b, c) {
          var d, e;
          return c.length < yc ? (e = this.values).splice.apply(e, [a, b].concat(c)) : (d = this.values.slice(a, a + b), this.values = this.values.slice(0, a).concat(c, this.values.slice(a + b)), d)
        }, a.prototype.notifyArrayChildUpdate = function(a, b, c) {
          var d = !this.owned && bc(),
            e = kc(this),
            f = e || d ? {
              object: this.array,
              type: "update",
              index: a,
              newValue: b,
              oldValue: c
            } : null;
          d && dc(f), this.atom.reportChanged(), e && mc(this, f), d && fc()
        }, a.prototype.notifyArraySplice = function(a, b, c) {
          var d = !this.owned && bc(),
            e = kc(this),
            f = e || d ? {
              object: this.array,
              type: "splice",
              index: a,
              removed: c,
              added: b,
              removedCount: c.length,
              addedCount: b.length
            } : null;
          d && dc(f), this.atom.reportChanged(), e && mc(this, f), d && fc()
        }, a
      }(), Dc = function(a) {
        function b(b, c, d, e) {
          var f, g;
          return void 0 === d && (d = "ObservableArray@" + td()), void 0 === e && (e = !1), f = a.call(this) || this, g = new Cc(d, c, f, e), Kd(f, "$mobx", g), b && b.length ? (g.updateArrayLength(0, b.length), g.values = b.map(function(a) {
            return c(a, void 0, d + "[..]")
          }), g.notifyArraySplice(0, g.values.slice(), rd)) : g.values = [], zc && Object.defineProperty(g.array, "0", Ec), f
        }
        return e(b, a), b.prototype.intercept = function(a) {
          return this.$mobx.intercept(a)
        }, b.prototype.observe = function(a, b) {
          return void 0 === b && (b = !1), this.$mobx.observe(a, b)
        }, b.prototype.clear = function() {
          return this.splice(0)
        }, b.prototype.concat = function() {
          var b, a = [];
          for (b = 0; b < arguments.length; b++) a[b] = arguments[b];
          return this.$mobx.atom.reportObserved(), Array.prototype.concat.apply(this.peek(), a.map(function(a) {
            return Kc(a) ? a.peek() : a
          }))
        }, b.prototype.replace = function(a) {
          return this.$mobx.spliceWithArray(0, this.$mobx.values.length, a)
        }, b.prototype.toJS = function() {
          return this.slice()
        }, b.prototype.toJSON = function() {
          return this.toJS()
        }, b.prototype.peek = function() {
          return this.$mobx.values
        }, b.prototype.find = function(a, b, c) {
          var d, e, f;
          for (void 0 === c && (c = 0), this.$mobx.atom.reportObserved(), d = this.$mobx.values, e = d.length, f = c; e > f; f++)
            if (a.call(b, d[f], f, this)) return d[f];
          return void 0
        }, b.prototype.splice = function(a, b) {
          var d, c = [];
          for (d = 2; d < arguments.length; d++) c[d - 2] = arguments[d];
          switch (arguments.length) {
            case 0:
              return [];
            case 1:
              return this.$mobx.spliceWithArray(a);
            case 2:
              return this.$mobx.spliceWithArray(a, b)
          }
          return this.$mobx.spliceWithArray(a, b, c)
        }, b.prototype.spliceWithArray = function(a, b, c) {
          return this.$mobx.spliceWithArray(a, b, c)
        }, b.prototype.push = function() {
          var b, c, a = [];
          for (b = 0; b < arguments.length; b++) a[b] = arguments[b];
          return c = this.$mobx, c.spliceWithArray(c.values.length, 0, a), c.values.length
        }, b.prototype.pop = function() {
          return this.splice(Math.max(this.$mobx.values.length - 1, 0), 1)[0]
        }, b.prototype.shift = function() {
          return this.splice(0, 1)[0]
        }, b.prototype.unshift = function() {
          var b, c, a = [];
          for (b = 0; b < arguments.length; b++) a[b] = arguments[b];
          return c = this.$mobx, c.spliceWithArray(0, 0, a), c.values.length
        }, b.prototype.reverse = function() {
          this.$mobx.atom.reportObserved();
          var a = this.slice();
          return a.reverse.apply(a, arguments)
        }, b.prototype.sort = function() {
          this.$mobx.atom.reportObserved();
          var b = this.slice();
          return b.sort.apply(b, arguments)
        }, b.prototype.remove = function(a) {
          var b = this.$mobx.values.indexOf(a);
          return b > -1 ? (this.splice(b, 1), !0) : !1
        }, b.prototype.move = function(a, b) {
          function c(a) {
            if (0 > a) throw new Error("[mobx.array] Index out of bounds: " + a + " is negative");
            var b = this.$mobx.values.length;
            if (a >= b) throw new Error("[mobx.array] Index out of bounds: " + a + " is not smaller than " + b)
          }
          var d, e;
          c.call(this, a), c.call(this, b), a !== b && (d = this.$mobx.values, e = b > a ? d.slice(0, a).concat(d.slice(a + 1, b + 1), [d[a]], d.slice(b + 1)) : d.slice(0, b).concat([d[a]], d.slice(b, a), d.slice(a + 1)), this.replace(e))
        }, b.prototype.toString = function() {
          return this.$mobx.atom.reportObserved(), Array.prototype.toString.apply(this.$mobx.values, arguments)
        }, b.prototype.toLocaleString = function() {
          return this.$mobx.atom.reportObserved(), Array.prototype.toLocaleString.apply(this.$mobx.values, arguments)
        }, b
      }(Bc), od(Dc.prototype, function() {
        return nd(this.slice())
      }), Id(Dc.prototype, ["constructor", "intercept", "observe", "clear", "concat", "replace", "toJS", "toJSON", "peek", "find", "splice", "spliceWithArray", "push", "pop", "shift", "unshift", "reverse", "sort", "remove", "move", "toString", "toLocaleString"]), Object.defineProperty(Dc.prototype, "length", {
        enumerable: !1,
        configurable: !0,
        get: function() {
          return this.$mobx.getArrayLength()
        },
        set: function(a) {
          this.$mobx.setArrayLength(a)
        }
      }), ["every", "filter", "forEach", "indexOf", "join", "lastIndexOf", "map", "reduce", "reduceRight", "slice", "some"].forEach(function(a) {
        var b = Array.prototype[a];
        vd("function" == typeof b, "Base function not defined on Array prototype: '" + a + "'"), Jd(Dc.prototype, a, function() {
          return this.$mobx.atom.reportObserved(), b.apply(this.$mobx.values, arguments)
        })
      }), Ec = {
        configurable: !0,
        enumerable: !1,
        set: Gc(0),
        get: Hc(0)
      }, Ic(1e3), Jc = Pd("ObservableArrayAdministration", Cc), b.isObservableArray = Kc, Lc = {}, Mc = function() {
        function a(a, b, c) {
          void 0 === b && (b = tc), void 0 === c && (c = "ObservableMap@" + td()), this.enhancer = b, this.name = c, this.$mobx = Lc, this._data = {}, this._hasMap = {}, this._keys = new Dc(void 0, vc, this.name + ".keys()", !0), this.interceptors = null, this.changeListeners = null, this.merge(a)
        }
        return a.prototype._has = function(a) {
          return "undefined" != typeof this._data[a]
        }, a.prototype.has = function(a) {
          return this.isValidKey(a) ? (a = "" + a, this._hasMap[a] ? this._hasMap[a].get() : this._updateHasMapEntry(a, !1).get()) : !1
        }, a.prototype.set = function(a, b) {
          var c, d;
          if (this.assertValidKey(a), a = "" + a, c = this._has(a), hc(this)) {
            if (d = jc(this, {
                type: c ? "update" : "add",
                object: this,
                newValue: b,
                name: a
              }), !d) return this;
            b = d.newValue
          }
          return c ? this._updateValue(a, b) : this._addValue(a, b), this
        }, a.prototype.delete = function(a) {
          var c, d, e, b = this;
          return this.assertValidKey(a), a = "" + a, hc(this) && (c = jc(this, {
            type: "delete",
            object: this,
            name: a
          }), !c) ? !1 : this._has(a) ? (d = bc(), e = kc(this), c = e || d ? {
            type: "delete",
            object: this,
            oldValue: this._data[a].value,
            name: a
          } : null, d && dc(c), Y(function() {
            b._keys.remove(a), b._updateHasMapEntry(a, !1);
            var c = b._data[a];
            c.setNewValue(void 0), b._data[a] = void 0
          }), e && mc(this, c), d && fc(), !0) : !1
        }, a.prototype._updateHasMapEntry = function(a, b) {
          var c = this._hasMap[a];
          return c ? c.setNewValue(b) : c = this._hasMap[a] = new cd(b, vc, this.name + "." + a + "?", !1), c
        }, a.prototype._updateValue = function(a, b) {
          var d, e, f, c = this._data[a];
          b = c.prepareNewValue(b), b !== bd && (d = bc(), e = kc(this), f = e || d ? {
            type: "update",
            object: this,
            oldValue: c.value,
            name: a,
            newValue: b
          } : null, d && dc(f), c.setNewValue(b), e && mc(this, f), d && fc())
        }, a.prototype._addValue = function(a, b) {
          var d, e, f, c = this;
          Y(function() {
            var d = c._data[a] = new cd(b, c.enhancer, c.name + "." + a, !1);
            b = d.value, c._updateHasMapEntry(a, !0), c._keys.push(a)
          }), d = bc(), e = kc(this), f = e || d ? {
            type: "add",
            object: this,
            name: a,
            newValue: b
          } : null, d && dc(f), e && mc(this, f), d && fc()
        }, a.prototype.get = function(a) {
          return a = "" + a, this.has(a) ? this._data[a].get() : void 0
        }, a.prototype.keys = function() {
          return nd(this._keys.slice())
        }, a.prototype.values = function() {
          return nd(this._keys.map(this.get, this))
        }, a.prototype.entries = function() {
          var a = this;
          return nd(this._keys.map(function(b) {
            return [b, a.get(b)]
          }))
        }, a.prototype.forEach = function(a, b) {
          var c = this;
          this.keys().forEach(function(d) {
            return a.call(b, c.get(d), d, c)
          })
        }, a.prototype.merge = function(a) {
          var b = this;
          return Oc(a) && (a = a.toJS()), Y(function() {
            Dd(a) ? Object.keys(a).forEach(function(c) {
              return b.set(c, a[c])
            }) : Array.isArray(a) ? a.forEach(function(a) {
              var c = a[0],
                d = a[1];
              return b.set(c, d)
            }) : Sd(a) ? a.forEach(function(a, c) {
              return b.set(c, a)
            }) : null !== a && void 0 !== a && ud("Cannot initialize map from " + a)
          }), this
        }, a.prototype.clear = function() {
          var a = this;
          Y(function() {
            wb(function() {
              a.keys().forEach(a.delete, a)
            })
          })
        }, a.prototype.replace = function(a) {
          var b = this;
          return Y(function() {
            b.clear(), b.merge(a)
          }), this
        }, Object.defineProperty(a.prototype, "size", {
          get: function() {
            return this._keys.length
          },
          enumerable: !0,
          configurable: !0
        }), a.prototype.toJS = function() {
          var a = this,
            b = {};
          return this.keys().forEach(function(c) {
            return b[c] = a.get(c)
          }), b
        }, a.prototype.toJSON = function() {
          return this.toJS()
        }, a.prototype.isValidKey = function(a) {
          return null === a || void 0 === a ? !1 : "string" == typeof a || "number" == typeof a || "boolean" == typeof a ? !0 : !1
        }, a.prototype.assertValidKey = function(a) {
          if (!this.isValidKey(a)) throw new Error("[mobx.map] Invalid key: '" + a + "', only strings, numbers and booleans are accepted as key in observable maps.")
        }, a.prototype.toString = function() {
          var a = this;
          return this.name + "[{ " + this.keys().map(function(b) {
            return b + ": " + ("" + a.get(b))
          }).join(", ") + " }]"
        }, a.prototype.observe = function(a, b) {
          return vd(b !== !0, qd("m033")), lc(this, a)
        }, a.prototype.intercept = function(a) {
          return ic(this, a)
        }, a
      }(), b.ObservableMap = Mc, od(Mc.prototype, function() {
        return this.entries()
      }), b.map = Nc, Oc = Pd("ObservableMap", Mc), b.isObservableMap = Oc, Pc = function() {
        function a(a, b) {
          this.target = a, this.name = b, this.values = {}, this.changeListeners = null, this.interceptors = null
        }
        return a.prototype.observe = function(a, b) {
          return vd(b !== !0, "`observe` doesn't support the fire immediately property for observable objects."), lc(this, a)
        }, a.prototype.intercept = function(a) {
          return ic(this, a)
        }, a
      }(), Vc = {}, Wc = {}, _c = Pd("ObservableObjectAdministration", Pc), b.isObservableObject = ad, bd = {}, cd = function(a) {
        function b(b, c, d, e) {
          void 0 === d && (d = "ObservableValue@" + td()), void 0 === e && (e = !0);
          var f = a.call(this, d) || this;
          return f.enhancer = c, f.hasUnreportedChange = !1, f.value = c(b, void 0, d), e && bc() && cc({
            type: "create",
            object: f,
            newValue: f.value
          }), f
        }
        return e(b, a), b.prototype.set = function(a) {
          var c, b = this.value;
          a = this.prepareNewValue(a), a !== bd && (c = bc(), c && dc({
            type: "update",
            object: this,
            newValue: a,
            oldValue: b
          }), this.setNewValue(a), c && fc())
        }, b.prototype.prepareNewValue = function(a) {
          if (sb(this), hc(this)) {
            var b = jc(this, {
              object: this,
              type: "update",
              newValue: a
            });
            if (!b) return bd;
            a = b.newValue
          }
          return a = this.enhancer(a, this.value, this.name), this.value !== a ? a : bd
        }, b.prototype.setNewValue = function(a) {
          var b = this.value;
          this.value = a, this.reportChanged(), kc(this) && mc(this, {
            type: "update",
            object: this,
            newValue: a,
            oldValue: b
          })
        }, b.prototype.get = function() {
          return this.reportObserved(), this.value
        }, b.prototype.intercept = function(a) {
          return ic(this, a)
        }, b.prototype.observe = function(a, b) {
          return b && a({
            object: this,
            type: "update",
            newValue: this.value,
            oldValue: void 0
          }), lc(this, a)
        }, b.prototype.toJSON = function() {
          return this.get()
        }, b.prototype.toString = function() {
          return this.name + "[" + this.value + "]"
        }, b.prototype.valueOf = function() {
          return Ud(this.get())
        }, b
      }(ib), cd.prototype[Td()] = cd.prototype.valueOf, dd = Pd("ObservableValue", cd), b.isBoxedObservable = dd, md = "__$$iterating", pd = {
        m001: "It is not allowed to assign new values to @action fields",
        m002: "`runInAction` expects a function",
        m003: "`runInAction` expects a function without arguments",
        m004: "autorun expects a function",
        m005: "Warning: attempted to pass an action to autorun. Actions are untracked and will not trigger on state changes. Use `reaction` or wrap only your state modification code in an action.",
        m006: "Warning: attempted to pass an action to autorunAsync. Actions are untracked and will not trigger on state changes. Use `reaction` or wrap only your state modification code in an action.",
        m007: "reaction only accepts 2 or 3 arguments. If migrating from MobX 2, please provide an options object",
        m008: "wrapping reaction expression in `asReference` is no longer supported, use options object instead",
        m009: "@computed can only be used on getter functions, like: '@computed get myProps() { return ...; }'. It looks like it was used on a property.",
        m010: "@computed can only be used on getter functions, like: '@computed get myProps() { return ...; }'",
        m011: "First argument to `computed` should be an expression. If using computed as decorator, don't pass it arguments",
        m012: "computed takes one or two arguments if used as function",
        m013: "[mobx.expr] 'expr' should only be used inside other reactive functions.",
        m014: "extendObservable expected 2 or more arguments",
        m015: "extendObservable expects an object as first argument",
        m016: "extendObservable should not be used on maps, use map.merge instead",
        m017: "all arguments of extendObservable should be objects",
        m018: "extending an object with another observable (object) is not supported. Please construct an explicit propertymap, using `toJS` if need. See issue #540",
        m019: "[mobx.isObservable] isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.",
        m020: "modifiers can only be used for individual object properties",
        m021: "observable expects zero or one arguments",
        m022: "@observable can not be used on getters, use @computed instead",
        m023: "Using `transaction` is deprecated, use `runInAction` or `(@)action` instead.",
        m024: "whyRun() can only be used if a derivation is active, or by passing an computed value / reaction explicitly. If you invoked whyRun from inside a computation; the computation is currently suspended but re-evaluating because somebody requested its value.",
        m025: "whyRun can only be used on reactions and computed values",
        m026: "`action` can only be invoked on functions",
        m028: "It is not allowed to set `useStrict` when a derivation is running",
        m029: "INTERNAL ERROR only onBecomeUnobserved shouldn't be called twice in a row",
        m030a: "Since strict-mode is enabled, changing observed observable values outside actions is not allowed. Please wrap the code in an `action` if this change is intended. Tried to modify: ",
        m030b: "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, the render function of a React component? Tried to modify: ",
        m031: "Computed values are not allowed to not cause side effects by changing observables that are already being observed. Tried to modify: ",
        m032: "* This computation is suspended (not in use by any reaction) and won't run automatically.\n	Didn't expect this computation to be suspended at this point?\n	  1. Make sure this computation is used by a reaction (reaction, autorun, observer).\n	  2. Check whether you are using this computation synchronously (in the same stack as they reaction that needs it).",
        m033: "`observe` doesn't support the fire immediately property for observable maps.",
        m034: "`mobx.map` is deprecated, use `new ObservableMap` or `mobx.observable.map` instead",
        m035: "Cannot make the designated object observable; it is not extensible",
        m036: "It is not possible to get index atoms from arrays",
        m037: 'Hi there! I\'m sorry you have just run into an exception.\nIf your debugger ends up here, know that some reaction (like the render() of an observer component, autorun or reaction)\nthrew an exception and that mobx caught it, to avoid that it brings the rest of your application down.\nThe original cause of the exception (the code that caused this reaction to run (again)), is still in the stack.\n\nHowever, more interesting is the actual stack trace of the error itself.\nHopefully the error is an instanceof Error, because in that case you can inspect the original stack of the error from where it was thrown.\nSee `error.stack` property, or press the very subtle "(...)" link you see near the console.error message that probably brought you here.\nThat stack is more interesting than the stack of this console.error itself.\n\nIf the exception you see is an exception you created yourself, make sure to use `throw new Error("Oops")` instead of `throw "Oops"`,\nbecause the javascript environment will only preserve the original stack trace in the first form.\n\nYou can also make sure the debugger pauses the next time this very same exception is thrown by enabling "Pause on caught exception".\n(Note that it might pause on many other, unrelated exception as well).\n\nIf that all doesn\'t help you out, feel free to open an issue https://github.com/mobxjs/mobx/issues!\n',
        m038: "Missing items in this list?\n    1. Check whether all used values are properly marked as observable (use isObservable to verify)\n    2. Make sure you didn't dereference values too early. MobX observes props, not primitives. E.g: use 'person.name' instead of 'name' in your computation.\n"
      }, rd = [], Object.freeze(rd), wd = [], zd = function() {}, Gd = Object.prototype.hasOwnProperty, b.isArrayLike = Qd
  }.call(b, c(4))
}, function(a, b, c) {
  "use strict";

  function g(a, b) {
    var h, i, j, k, c = a.meta,
      d = a.user,
      f = a.reactions,
      g = document.createElement("div");
    return g.lang = "en-US", g.className = "gitment-container gitment-header-container", h = document.createElement("span"), i = f.find(function(a) {
      return "heart" === a.content && a.user.login === d.login
    }), h.className = "gitment-header-like-btn", h.innerHTML = "\n    " + e.heart + "\n    " + (i ? "Unlike" : "Like") + "\n    " + (c.reactions && c.reactions.heart ? " • <strong>" + c.reactions.heart + "</strong> Liked" : "") + "\n  ", i ? (h.classList.add("liked"), h.onclick = function() {
      return b.unlike()
    }) : (h.classList.remove("liked"), h.onclick = function() {
      return b.like()
    }), g.appendChild(h), j = document.createElement("span"), j.innerHTML = "\n    " + (c.comments ? " • <strong>" + c.comments + "</strong> Comments" : "") + "\n  ", g.appendChild(j), k = document.createElement("a"), k.className = "gitment-header-issue-link", k.href = c.html_url, k.target = "_blank", k.innerText = "Issue Page", g.appendChild(k), g
  }

  function h(a, b) {
    var l, m, n, o, p, q, r, s, t, u, v, w, c = a.meta,
      d = a.comments,
      g = a.commentReactions,
      h = a.currentPage,
      i = a.user,
      j = a.error,
      k = document.createElement("div");
    if (k.lang = "en-US", k.className = "gitment-container gitment-comments-container", j) return l = document.createElement("div"), l.className = "gitment-comments-error", j === f.NOT_INITIALIZED_ERROR && i.login && i.login.toLowerCase() === b.owner.toLowerCase() ? (m = document.createElement("div"), n = document.createElement("button"), n.className = "gitment-comments-init-btn", n.onclick = function() {
      n.setAttribute("disabled", !0), b.init().catch(function(a) {
        n.removeAttribute("disabled"), alert(a)
      })
    }, n.innerText = "Initialize Comments", m.appendChild(n), l.appendChild(m)) : l.innerText = j, k.appendChild(l), k;
    if (void 0 === d) return o = document.createElement("div"), o.innerText = "Loading comments...", o.className = "gitment-comments-loading", k.appendChild(o), k;
    if (!d.length) return p = document.createElement("div"), p.className = "gitment-comments-empty", p.innerText = "No Comment Yet", k.appendChild(p), k;
    if (q = document.createElement("ul"), q.className = "gitment-comments-list", d.forEach(function(a) {
        var h, j, k, l, c = new Date(a.created_at),
          d = new Date(a.updated_at),
          f = document.createElement("li");
        f.className = "gitment-comment", f.innerHTML = '\n      <a class="gitment-comment-avatar" href="' + a.user.html_url + '" target="_blank">\n        <img class="gitment-comment-avatar-img" src="' + a.user.avatar_url + '"/>\n      </a>\n      <div class="gitment-comment-main">\n        <div class="gitment-comment-header">\n          <a class="gitment-comment-name" href="' + a.user.html_url + '" target="_blank">\n            ' + a.user.login + '\n          </a>\n          commented on\n          <span title="' + c + '">' + c.toDateString() + "</span>\n          " + (c.toString() !== d.toString() ? ' • <span title="comment was edited at ' + d + '">edited</span>' : "") + '\n          <div class="gitment-comment-like-btn">' + e.heart + " " + (a.reactions.heart || "") + '</div>\n        </div>\n        <div class="gitment-comment-body gitment-markdown">' + a.body_html + "</div>\n      </div>\n    ", h = f.querySelector(".gitment-comment-like-btn"), j = g[a.id] && g[a.id].find(function(a) {
          return "heart" === a.content && a.user.login === i.login
        }), j ? (h.classList.add("liked"), h.onclick = function() {
          return b.unlikeAComment(a.id)
        }) : (h.classList.remove("liked"), h.onclick = function() {
          return b.likeAComment(a.id)
        }), k = document.createElement("img"), l = f.querySelector(".gitment-comment-body"), k.className = "gitment-hidden", k.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", k.onload = function() {
          l.clientHeight > b.maxCommentHeight && (l.classList.add("gitment-comment-body-folded"), l.style.maxHeight = b.maxCommentHeight + "px", l.title = "Click to Expand", l.onclick = function() {
            l.classList.remove("gitment-comment-body-folded"), l.style.maxHeight = "", l.title = "", l.onclick = null
          })
        }, f.appendChild(k), q.appendChild(f)
      }), k.appendChild(q), c && (r = Math.ceil(c.comments / b.perPage), r > 1)) {
      for (s = document.createElement("ul"), s.className = "gitment-comments-pagination", h > 1 && (t = document.createElement("li"), t.className = "gitment-comments-page-item", t.innerText = "Previous", t.onclick = function() {
          return b.goto(h - 1)
        }, s.appendChild(t)), u = function(a) {
          var c = document.createElement("li");
          c.className = "gitment-comments-page-item", c.innerText = a, c.onclick = function() {
            return b.goto(a)
          }, h === a && c.classList.add("gitment-selected"), s.appendChild(c)
        }, v = 1; r >= v; v++) u(v);
      r > h && (w = document.createElement("li"), w.className = "gitment-comments-page-item", w.innerText = "Next", w.onclick = function() {
        return b.goto(h + 1)
      }, s.appendChild(w)), k.appendChild(s)
    }
    return k
  }

  function i(a, b) {
    var h, i, j, k, l, m, n, o, p, q, c = a.user,
      f = a.error,
      g = document.createElement("div");
    return g.lang = "en-US", g.className = "gitment-container gitment-editor-container", h = c.login && !f ? "" : "disabled", i = c.login ? "" : "Login to Comment", g.innerHTML = "\n      " + (c.login ? '<a class="gitment-editor-avatar" href="' + c.html_url + '" target="_blank">\n            <img class="gitment-editor-avatar-img" src="' + c.avatar_url + '"/>\n          </a>' : c.isLoggingIn ? '<div class="gitment-editor-avatar">' + e.spinner + "</div>" : '<a class="gitment-editor-avatar" href="' + b.loginLink + '" title="login with GitHub">\n              ' + e.github + "\n            </a>") + '\n    </a>\n    <div class="gitment-editor-main">\n      <div class="gitment-editor-header">\n        <nav class="gitment-editor-tabs">\n          <button class="gitment-editor-tab gitment-selected">Write</button>\n          <button class="gitment-editor-tab">Preview</button>\n        </nav>\n        <div class="gitment-editor-login">\n          ' + (c.login ? '<a class="gitment-editor-logout-link">Logout</a>' : c.isLoggingIn ? "Logging in..." : '<a class="gitment-editor-login-link" href="' + b.loginLink + '">Login</a> with GitHub') + '\n        </div>\n      </div>\n      <div class="gitment-editor-body">\n        <div class="gitment-editor-write-field">\n          <textarea placeholder="Leave a comment" title="' + i + '" ' + h + '></textarea>\n        </div>\n        <div class="gitment-editor-preview-field gitment-hidden">\n          <div class="gitment-editor-preview gitment-markdown"></div>\n        </div>\n      </div>\n    </div>\n    <div class="gitment-editor-footer">\n      <a class="gitment-editor-footer-tip" href="https://guides.github.com/features/mastering-markdown/" target="_blank">\n        Styling with Markdown is supported\n      </a>\n      <button class="gitment-editor-submit" title="' + i + '" ' + h + ">Comment</button>\n    </div>\n  ", c.login && (g.querySelector(".gitment-editor-logout-link").onclick = function() {
      return b.logout()
    }), j = g.querySelector(".gitment-editor-write-field"), k = g.querySelector(".gitment-editor-preview-field"), l = j.querySelector("textarea"), l.oninput = function() {
      var a, b, c, d;
      l.style.height = "auto", a = window.getComputedStyle(l, null), b = parseInt(a.height, 10), c = l.clientHeight, d = l.scrollHeight, d > c && (l.style.height = b + d - c + "px")
    }, m = g.querySelectorAll(".gitment-editor-tab"), n = d(m, 2), o = n[0], p = n[1], o.onclick = function() {
      o.classList.add("gitment-selected"), p.classList.remove("gitment-selected"), j.classList.remove("gitment-hidden"), k.classList.add("gitment-hidden"), l.focus()
    }, p.onclick = function() {
      var a, c;
      return p.classList.add("gitment-selected"), o.classList.remove("gitment-selected"), k.classList.remove("gitment-hidden"), j.classList.add("gitment-hidden"), a = k.querySelector(".gitment-editor-preview"), (c = l.value.trim()) ? (a.innerText = "Loading preview...", b.markdown(c).then(function(b) {
        return a.innerHTML = b
      }), void 0) : (a.innerText = "Nothing to preview", void 0)
    }, q = g.querySelector(".gitment-editor-submit"), q.onclick = function() {
      q.innerText = "Submitting...", q.setAttribute("disabled", !0), b.post(l.value.trim()).then(function() {
        l.value = "", l.style.height = "auto", q.removeAttribute("disabled"), q.innerText = "Comment"
      }).catch(function(a) {
        alert(a), q.removeAttribute("disabled"), q.innerText = "Comment"
      })
    }, g
  }

  function j() {
    var a = document.createElement("div");
    return a.lang = "en-US", a.className = "gitment-container gitment-footer-container", a.innerHTML = '\n    Powered by\n    <a class="gitment-footer-project-link" href="https://github.com/imsun/gitment" target="_blank">\n      Gitment\n    </a>\n  ', a
  }

  function k(a, b) {
    var c = document.createElement("div");
    return c.lang = "en-US", c.className = "gitment-container gitment-root-container", c.appendChild(b.renderHeader(a, b)), c.appendChild(b.renderComments(a, b)), c.appendChild(b.renderEditor(a, b)), c.appendChild(b.renderFooter(a, b)), c
  }
  var d, e, f;
  Object.defineProperty(b, "__esModule", {
    value: !0
  }), d = function() {
    function a(a, b) {
      var h, g, c = [],
        d = !0,
        e = !1,
        f = void 0;
      try {
        for (g = a[Symbol.iterator](); !(d = (h = g.next()).done) && (c.push(h.value), !b || c.length !== b); d = !0);
      } catch (i) {
        e = !0, f = i
      } finally {
        try {
          !d && g["return"] && g["return"]()
        } finally {
          if (e) throw f
        }
      }
      return c
    }
    return function(b, c) {
      if (Array.isArray(b)) return b;
      if (Symbol.iterator in Object(b)) return a(b, c);
      throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }
  }(), e = c(6), f = c(0), b.default = {
    render: k,
    renderHeader: g,
    renderComments: h,
    renderEditor: i,
    renderFooter: j
  }
}, function(a, b, c) {
  "use strict";

  function g(a) {
    var b = void 0;
    return b = a instanceof Element ? a : f(a) ? document.getElementById(a) : document.createElement("div")
  }

  function i(a) {
    return function(b) {
      var k, c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        d = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "https://api.github.com",
        f = new XMLHttpRequest,
        g = localStorage.getItem(e.LS_ACCESS_TOKEN_KEY),
        i = "" + d + b,
        j = null;
      return ("GET" === a || "DELETE" === a) && (i += h.stringify(c)), k = new Promise(function(a, b) {
        f.addEventListener("load", function() {
          var e, c = f.getResponseHeader("content-type"),
            d = f.responseText;
          return /json/.test(c) ? (e = f.responseText ? JSON.parse(d) : {}, e.message ? b(new Error(e.message)) : a(e), void 0) : (a(d), void 0)
        }), f.addEventListener("error", function(a) {
          return b(a)
        })
      }), f.open(a, i, !0), f.setRequestHeader("Accept", "application/vnd.github.squirrel-girl-preview, application/vnd.github.html+json"), g && f.setRequestHeader("Authorization", "token " + g), "GET" !== a && "DELETE" !== a && (j = JSON.stringify(c), f.setRequestHeader("Content-Type", "application/json")), f.send(j), k
    }
  }
  var d, e, f, h;
  Object.defineProperty(b, "__esModule", {
    value: !0
  }), b.http = b.Query = b.isString = void 0, d = function() {
    function a(a, b) {
      var h, g, c = [],
        d = !0,
        e = !1,
        f = void 0;
      try {
        for (g = a[Symbol.iterator](); !(d = (h = g.next()).done) && (c.push(h.value), !b || c.length !== b); d = !0);
      } catch (i) {
        e = !0, f = i
      } finally {
        try {
          !d && g["return"] && g["return"]()
        } finally {
          if (e) throw f
        }
      }
      return c
    }
    return function(b, c) {
      if (Array.isArray(b)) return b;
      if (Symbol.iterator in Object(b)) return a(b, c);
      throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }
  }(), b.getTargetContainer = g, e = c(0), f = b.isString = function(a) {
    return "[object String]" === toString.call(a)
  }, h = b.Query = {
    parse: function() {
      var b, c, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.search;
      return a ? (b = "?" === a[0] ? a.substring(1) : a, c = {}, b.split("&").forEach(function(a) {
        var b = a.split("="),
          e = d(b, 2),
          f = e[0],
          g = e[1];
        f && (c[f] = g)
      }), c) : {}
    },
    stringify: function(a) {
      var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "?",
        c = Object.keys(a).map(function(b) {
          return b + "=" + encodeURIComponent(a[b] || "")
        }).join("&");
      return c ? b + c : ""
    }
  }, b.http = {
    get: i("GET"),
    post: i("POST"),
    "delete": i("DELETE"),
    put: i("PUT")
  }
}, function(a) {
  "use strict";
  var d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
      return typeof a
    } : function(a) {
      return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
    },
    e = function() {
      return this
    }();
  try {
    e = e || Function("return this")() || (1, eval)("this")
  } catch (f) {
    "object" === ("undefined" == typeof window ? "undefined" : d(window)) && (e = window)
  }
  a.exports = e
}, function(a, b, c) {
  "use strict";

  function j(a) {
    return a && a.__esModule ? a : {
      "default": a
    }
  }

  function k(a, b) {
    if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
  }

  function m(a, b) {
    a[b] = function(c) {
      var d = g.getTargetContainer(c),
        f = a.theme[b] || a.defaultTheme[b];
      return e.autorun(function() {
        var b = f(a.state, a);
        d.firstChild ? d.replaceChild(b, d.firstChild) : d.appendChild(b)
      }), d
    }
  }
  var d = function() {
      function a(a, b) {
        var c, d;
        for (c = 0; c < b.length; c++) d = b[c], d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
      }
      return function(b, c, d) {
        return c && a(b.prototype, c), d && a(b, d), b
      }
    }(),
    e = c(1),
    f = c(0),
    g = c(3),
    h = c(2),
    i = j(h),
    l = "public_repo",
    n = function() {
      function a() {
        var d, h, l, m, n, o, p, q, r, b = this,
          c = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        k(this, a), this.defaultTheme = i.default, this.useTheme(i.default), Object.assign(this, {
          id: window.location.href,
          title: window.document.title,
          link: window.location.href,
          desc: "",
          labels: [],
          theme: i.default,
          oauth: {},
          perPage: 20,
          maxCommentHeight: 250
        }, c), this.useTheme(this.theme), d = {};
        try {
          h = localStorage.getItem(f.LS_USER_KEY), this.accessToken && h && Object.assign(d, JSON.parse(h), {
            fromCache: !0
          })
        } catch (j) {
          localStorage.removeItem(f.LS_USER_KEY)
        }
        this.state = e.observable({
          user: d,
          error: null,
          meta: {},
          comments: void 0,
          reactions: [],
          commentReactions: {},
          currentPage: 1
        }), l = g.Query.parse(), l.code ? (m = this.oauth, n = m.client_id, o = m.client_secret, p = l.code, delete l.code, q = g.Query.stringify(l), r = "" + window.location.origin + window.location.pathname + q + window.location.hash, history.replaceState({}, "", r), Object.assign(this, {
          id: r,
          link: r
        }, c), this.state.user.isLoggingIn = !0, g.http.post("https://gh-oauth.imsun.net", {
          code: p,
          client_id: n,
          client_secret: o
        }, "").then(function(a) {
          b.accessToken = a.access_token, b.update()
        }).catch(function(a) {
          b.state.user.isLoggingIn = !1, alert(a)
        })) : this.update()
      }
      return d(a, [{
        key: "accessToken",
        get: function() {
          return localStorage.getItem(f.LS_ACCESS_TOKEN_KEY)
        },
        set: function(a) {
          localStorage.setItem(f.LS_ACCESS_TOKEN_KEY, a)
        }
      }, {
        key: "loginLink",
        get: function() {
          var a = "https://github.com/login/oauth/authorize",
            b = this.oauth.redirect_uri || window.location.href,
            c = Object.assign({
              scope: l,
              redirect_uri: b
            }, this.oauth);
          return "" + a + g.Query.stringify(c)
        }
      }]), d(a, [{
        key: "init",
        value: function() {
          var a = this;
          return this.createIssue().then(function() {
            return a.loadComments()
          }).then(function(b) {
            return a.state.error = null, b
          })
        }
      }, {
        key: "useTheme",
        value: function() {
          var c, a = this,
            b = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.theme = b, c = Object.keys(this.theme), c.forEach(function(b) {
            return m(a, b)
          })
        }
      }, {
        key: "update",
        value: function() {
          var a = this;
          return Promise.all([this.loadMeta(), this.loadUserInfo()]).then(function() {
            return Promise.all([a.loadComments().then(function() {
              return a.loadCommentReactions()
            }), a.loadReactions()])
          }).catch(function(b) {
            return a.state.error = b
          })
        }
      }, {
        key: "markdown",
        value: function(a) {
          return g.http.post("/markdown", {
            text: a,
            mode: "gfm"
          })
        }
      }, {
        key: "createIssue",
        value: function() {
          var a = this,
            b = this.id,
            c = this.owner,
            d = this.repo,
            e = this.title,
            f = this.link,
            h = this.desc,
            i = this.labels;
          return g.http.post("/repos/" + c + "/" + d + "/issues", {
            title: e,
            labels: i.concat(["gitment", b]),
            body: f + "\n\n" + h
          }).then(function(b) {
            return a.state.meta = b, b
          })
        }
      }, {
        key: "getIssue",
        value: function() {
          return this.state.meta.id ? Promise.resolve(this.state.meta) : this.loadMeta()
        }
      }, {
        key: "post",
        value: function(a) {
          var b = this;
          return this.getIssue().then(function(b) {
            return g.http.post(b.comments_url, {
              body: a
            }, "")
          }).then(function(a) {
            b.state.meta.comments++;
            var c = Math.ceil(b.state.meta.comments / b.perPage);
            return b.state.currentPage === c && b.state.comments.push(a), a
          })
        }
      }, {
        key: "loadMeta",
        value: function() {
          var a = this,
            b = this.id,
            c = this.owner,
            d = this.repo;
          return g.http.get("/repos/" + c + "/" + d + "/issues", {
            creator: c,
            labels: b
          }).then(function(b) {
            return b.length ? (a.state.meta = b[0], b[0]) : Promise.reject(f.NOT_INITIALIZED_ERROR)
          })
        }
      }, {
        key: "loadComments",
        value: function() {
          var a = this,
            b = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.state.currentPage;
          return this.getIssue().then(function(c) {
            return g.http.get(c.comments_url, {
              page: b,
              per_page: a.perPage
            }, "")
          }).then(function(b) {
            return a.state.comments = b, b
          })
        }
      }, {
        key: "loadUserInfo",
        value: function() {
          var a = this;
          return this.accessToken ? g.http.get("/user").then(function(b) {
            return a.state.user = b, localStorage.setItem(f.LS_USER_KEY, JSON.stringify(b)), b
          }) : (this.logout(), Promise.resolve({}))
        }
      }, {
        key: "loadReactions",
        value: function() {
          var a = this;
          return this.accessToken ? this.getIssue().then(function(a) {
            return a.reactions.total_count ? g.http.get(a.reactions.url, {}, "") : []
          }).then(function(b) {
            return a.state.reactions = b, b
          }) : (this.state.reactions = [], Promise.resolve([]))
        }
      }, {
        key: "loadCommentReactions",
        value: function() {
          var b, c, a = this;
          return this.accessToken ? (b = this.state.comments, c = {}, Promise.all(b.map(function(b) {
            if (!b.reactions.total_count) return [];
            var c = a.owner,
              d = a.repo;
            return g.http.get("/repos/" + c + "/" + d + "/issues/comments/" + b.id + "/reactions", {})
          })).then(function(d) {
            return b.forEach(function(a, b) {
              c[a.id] = d[b]
            }), a.state.commentReactions = c, c
          })) : (this.state.commentReactions = {}, Promise.resolve([]))
        }
      }, {
        key: "login",
        value: function() {
          window.location.href = this.loginLink
        }
      }, {
        key: "logout",
        value: function() {
          localStorage.removeItem(f.LS_ACCESS_TOKEN_KEY), localStorage.removeItem(f.LS_USER_KEY), this.state.user = {}
        }
      }, {
        key: "goto",
        value: function(a) {
          return this.state.currentPage = a, this.state.comments = void 0, this.loadComments(a)
        }
      }, {
        key: "like",
        value: function() {
          var b, c, a = this;
          return this.accessToken ? (b = this.owner, c = this.repo, g.http.post("/repos/" + b + "/" + c + "/issues/" + this.state.meta.number + "/reactions", {
            content: "heart"
          }).then(function(b) {
            a.state.reactions.push(b), a.state.meta.reactions.heart++
          })) : (alert("Login to Like"), Promise.reject())
        }
      }, {
        key: "unlike",
        value: function() {
          var b, c, d, e, a = this;
          return this.accessToken ? (b = this.state, c = b.user, d = b.reactions, e = d.findIndex(function(a) {
            return a.user.login === c.login
          }), g.http.delete("/reactions/" + d[e].id).then(function() {
            d.splice(e, 1), a.state.meta.reactions.heart--
          })) : Promise.reject()
        }
      }, {
        key: "likeAComment",
        value: function(a) {
          var c, d, e, b = this;
          return this.accessToken ? (c = this.owner, d = this.repo, e = this.state.comments.find(function(b) {
            return b.id === a
          }), g.http.post("/repos/" + c + "/" + d + "/issues/comments/" + a + "/reactions", {
            content: "heart"
          }).then(function(c) {
            b.state.commentReactions[a].push(c), e.reactions.heart++
          })) : (alert("Login to Like"), Promise.reject())
        }
      }, {
        key: "unlikeAComment",
        value: function(a) {
          var b, c, d, e;
          return this.accessToken ? (b = this.state.commentReactions[a], c = this.state.comments.find(function(b) {
            return b.id === a
          }), d = this.state.user, e = b.findIndex(function(a) {
            return a.user.login === d.login
          }), g.http.delete("/reactions/" + b[e].id).then(function() {
            b.splice(e, 1), c.reactions.heart--
          })) : Promise.reject()
        }
      }]), a
    }();
  a.exports = n
}, function(a, b) {
  "use strict";
  Object.defineProperty(b, "__esModule", {
    value: !0
  }), b.close = '<svg class="gitment-close-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M37.304 11.282l1.414 1.414-26.022 26.02-1.414-1.413z"/><path d="M12.696 11.282l26.022 26.02-1.414 1.415-26.022-26.02z"/></svg>', b.github = '<svg class="gitment-github-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M25 10c-8.3 0-15 6.7-15 15 0 6.6 4.3 12.2 10.3 14.2.8.1 1-.3 1-.7v-2.6c-4.2.9-5.1-2-5.1-2-.7-1.7-1.7-2.2-1.7-2.2-1.4-.9.1-.9.1-.9 1.5.1 2.3 1.5 2.3 1.5 1.3 2.3 3.5 1.6 4.4 1.2.1-1 .5-1.6 1-2-3.3-.4-6.8-1.7-6.8-7.4 0-1.6.6-3 1.5-4-.2-.4-.7-1.9.1-4 0 0 1.3-.4 4.1 1.5 1.2-.3 2.5-.5 3.8-.5 1.3 0 2.6.2 3.8.5 2.9-1.9 4.1-1.5 4.1-1.5.8 2.1.3 3.6.1 4 1 1 1.5 2.4 1.5 4 0 5.8-3.5 7-6.8 7.4.5.5 1 1.4 1 2.8v4.1c0 .4.3.9 1 .7 6-2 10.2-7.6 10.2-14.2C40 16.7 33.3 10 25 10z"/></svg>', b.heart = '<svg class="gitment-heart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M25 39.7l-.6-.5C11.5 28.7 8 25 8 19c0-5 4-9 9-9 4.1 0 6.4 2.3 8 4.1 1.6-1.8 3.9-4.1 8-4.1 5 0 9 4 9 9 0 6-3.5 9.7-16.4 20.2l-.6.5zM17 12c-3.9 0-7 3.1-7 7 0 5.1 3.2 8.5 15 18.1 11.8-9.6 15-13 15-18.1 0-3.9-3.1-7-7-7-3.5 0-5.4 2.1-6.9 3.8L25 17.1l-1.1-1.3C22.4 14.1 20.5 12 17 12z"/></svg>', b.spinner = '<svg class="gitment-spinner-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M25 18c-.6 0-1-.4-1-1V9c0-.6.4-1 1-1s1 .4 1 1v8c0 .6-.4 1-1 1z"/><path opacity=".3" d="M25 42c-.6 0-1-.4-1-1v-8c0-.6.4-1 1-1s1 .4 1 1v8c0 .6-.4 1-1 1z"/><path opacity=".3" d="M29 19c-.2 0-.3 0-.5-.1-.4-.3-.6-.8-.3-1.3l4-6.9c.3-.4.8-.6 1.3-.3.4.3.6.8.3 1.3l-4 6.9c-.2.2-.5.4-.8.4z"/><path opacity=".3" d="M17 39.8c-.2 0-.3 0-.5-.1-.4-.3-.6-.8-.3-1.3l4-6.9c.3-.4.8-.6 1.3-.3.4.3.6.8.3 1.3l-4 6.9c-.2.2-.5.4-.8.4z"/><path opacity=".93" d="M21 19c-.3 0-.6-.2-.8-.5l-4-6.9c-.3-.4-.1-1 .3-1.3.4-.3 1-.1 1.3.3l4 6.9c.3.4.1 1-.3 1.3-.2.2-.3.2-.5.2z"/><path opacity=".3" d="M33 39.8c-.3 0-.6-.2-.8-.5l-4-6.9c-.3-.4-.1-1 .3-1.3.4-.3 1-.1 1.3.3l4 6.9c.3.4.1 1-.3 1.3-.2.1-.3.2-.5.2z"/><path opacity=".65" d="M17 26H9c-.6 0-1-.4-1-1s.4-1 1-1h8c.6 0 1 .4 1 1s-.4 1-1 1z"/><path opacity=".3" d="M41 26h-8c-.6 0-1-.4-1-1s.4-1 1-1h8c.6 0 1 .4 1 1s-.4 1-1 1z"/><path opacity=".86" d="M18.1 21.9c-.2 0-.3 0-.5-.1l-6.9-4c-.4-.3-.6-.8-.3-1.3.3-.4.8-.6 1.3-.3l6.9 4c.4.3.6.8.3 1.3-.2.3-.5.4-.8.4z"/><path opacity=".3" d="M38.9 33.9c-.2 0-.3 0-.5-.1l-6.9-4c-.4-.3-.6-.8-.3-1.3.3-.4.8-.6 1.3-.3l6.9 4c.4.3.6.8.3 1.3-.2.3-.5.4-.8.4z"/><path opacity=".44" d="M11.1 33.9c-.3 0-.6-.2-.8-.5-.3-.4-.1-1 .3-1.3l6.9-4c.4-.3 1-.1 1.3.3.3.4.1 1-.3 1.3l-6.9 4c-.1.2-.3.2-.5.2z"/><path opacity=".3" d="M31.9 21.9c-.3 0-.6-.2-.8-.5-.3-.4-.1-1 .3-1.3l6.9-4c.4-.3 1-.1 1.3.3.3.4.1 1-.3 1.3l-6.9 4c-.2.2-.3.2-.5.2z"/></svg>'
}]);