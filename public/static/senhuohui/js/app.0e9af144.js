(function (e) {
  function t(t) {
    for (
      var r, o, u = t[0], s = t[1], c = t[2], l = 0, f = [];
      l < u.length;
      l++
    )
      (o = u[l]),
        Object.prototype.hasOwnProperty.call(a, o) && a[o] && f.push(a[o][0]),
        (a[o] = 0);
    for (r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r]);
    p && p(t);
    while (f.length) f.shift()();
    return i.push.apply(i, c || []), n();
  }
  function n() {
    for (var e, t = 0; t < i.length; t++) {
      for (var n = i[t], r = !0, o = 1; o < n.length; o++) {
        var u = n[o];
        0 !== a[u] && (r = !1);
      }
      r && (i.splice(t--, 1), (e = s((s.s = n[0]))));
    }
    return e;
  }
  var r = {},
    o = { app: 0 },
    a = { app: 0 },
    i = [];
  function u(e) {
    return (
      s.p +
      'js/' +
      ({
        about: 'about',
        failure: 'failure',
        'home~login~profile': 'home~login~profile',
        home: 'home',
        login: 'login',
        profile: 'profile',
        result: 'result',
        success: 'success',
      }[e] || e) +
      '.' +
      {
        about: '3c881b92',
        failure: '62380ea2',
        'home~login~profile': '4fc7eb68',
        home: 'a125ad39',
        login: 'daa14279',
        profile: 'e393f1de',
        result: '140cd4c8',
        success: '961986d7',
      }[e] +
      '.js'
    );
  }
  function s(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, s), (n.l = !0), n.exports;
  }
  (s.e = function (e) {
    var t = [],
      n = {
        failure: 1,
        'home~login~profile': 1,
        home: 1,
        login: 1,
        profile: 1,
        result: 1,
        success: 1,
      };
    o[e]
      ? t.push(o[e])
      : 0 !== o[e] &&
        n[e] &&
        t.push(
          (o[e] = new Promise(function (t, n) {
            for (
              var r =
                  'css/' +
                  ({
                    about: 'about',
                    failure: 'failure',
                    'home~login~profile': 'home~login~profile',
                    home: 'home',
                    login: 'login',
                    profile: 'profile',
                    result: 'result',
                    success: 'success',
                  }[e] || e) +
                  '.' +
                  {
                    about: '31d6cfe0',
                    failure: 'f7597e2c',
                    'home~login~profile': '83e760db',
                    home: 'f5a509b3',
                    login: '3ed8045e',
                    profile: 'fb06d944',
                    result: 'ed838958',
                    success: 'c165a57b',
                  }[e] +
                  '.css',
                a = s.p + r,
                i = document.getElementsByTagName('link'),
                u = 0;
              u < i.length;
              u++
            ) {
              var c = i[u],
                l = c.getAttribute('data-href') || c.getAttribute('href');
              if ('stylesheet' === c.rel && (l === r || l === a)) return t();
            }
            var f = document.getElementsByTagName('style');
            for (u = 0; u < f.length; u++) {
              (c = f[u]), (l = c.getAttribute('data-href'));
              if (l === r || l === a) return t();
            }
            var p = document.createElement('link');
            (p.rel = 'stylesheet'),
              (p.type = 'text/css'),
              (p.onload = t),
              (p.onerror = function (t) {
                var r = (t && t.target && t.target.src) || a,
                  i = new Error(
                    'Loading CSS chunk ' + e + ' failed.\n(' + r + ')',
                  );
                (i.code = 'CSS_CHUNK_LOAD_FAILED'),
                  (i.request = r),
                  delete o[e],
                  p.parentNode.removeChild(p),
                  n(i);
              }),
              (p.href = a);
            var d = document.getElementsByTagName('head')[0];
            d.appendChild(p);
          }).then(function () {
            o[e] = 0;
          })),
        );
    var r = a[e];
    if (0 !== r)
      if (r) t.push(r[2]);
      else {
        var i = new Promise(function (t, n) {
          r = a[e] = [t, n];
        });
        t.push((r[2] = i));
        var c,
          l = document.createElement('script');
        (l.charset = 'utf-8'),
          (l.timeout = 120),
          s.nc && l.setAttribute('nonce', s.nc),
          (l.src = u(e));
        var f = new Error();
        c = function (t) {
          (l.onerror = l.onload = null), clearTimeout(p);
          var n = a[e];
          if (0 !== n) {
            if (n) {
              var r = t && ('load' === t.type ? 'missing' : t.type),
                o = t && t.target && t.target.src;
              (f.message =
                'Loading chunk ' + e + ' failed.\n(' + r + ': ' + o + ')'),
                (f.name = 'ChunkLoadError'),
                (f.type = r),
                (f.request = o),
                n[1](f);
            }
            a[e] = void 0;
          }
        };
        var p = setTimeout(function () {
          c({ type: 'timeout', target: l });
        }, 12e4);
        (l.onerror = l.onload = c), document.head.appendChild(l);
      }
    return Promise.all(t);
  }),
    (s.m = e),
    (s.c = r),
    (s.d = function (e, t, n) {
      s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (s.r = function (e) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (s.t = function (e, t) {
      if ((1 & t && (e = s(e)), 8 & t)) return e;
      if (4 & t && 'object' === typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (s.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var r in e)
          s.d(
            n,
            r,
            function (t) {
              return e[t];
            }.bind(null, r),
          );
      return n;
    }),
    (s.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e['default'];
            }
          : function () {
              return e;
            };
      return s.d(t, 'a', t), t;
    }),
    (s.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (s.p = ''),
    (s.oe = function (e) {
      throw (console.error(e), e);
    });
  var c = (window['webpackJsonp'] = window['webpackJsonp'] || []),
    l = c.push.bind(c);
  (c.push = t), (c = c.slice());
  for (var f = 0; f < c.length; f++) t(c[f]);
  var p = l;
  i.push([0, 'chunk-vendors']), n();
})({
  0: function (e, t, n) {
    e.exports = n('cd49');
  },
  '034f': function (e, t, n) {
    'use strict';
    n('85ec');
  },
  1: function (e, t) {},
  '85ec': function (e, t, n) {},
  adcf: function (e, t, n) {},
  cd49: function (e, t, n) {
    'use strict';
    n.r(t);
    n('e260'), n('e6cf'), n('cca6'), n('a79d');
    var r = n('2b0e'),
      o = (n('499a'), n('f5df1'), n('772a')),
      a = n('565f'),
      i = n('b650'),
      u = n('44bf'),
      s = n('d399'),
      c = n('5530'),
      l = n('d4ec'),
      f = n('bee2'),
      p = (n('e9c4'), n('d3b7'), n('bc3a')),
      d = n.n(p),
      h = n('4328'),
      m = n.n(h),
      b = (function () {
        function e() {
          Object(l['a'])(this, e),
            (this.axiosRef = d.a.create({
              timeout: 1e4,
              transformRequest: function (e, t) {
                return -1 !=
                  t.post['Content-Type'].indexOf(
                    'application/x-www-form-urlencoded',
                  )
                  ? m.a.stringify(e)
                  : JSON.stringify(e);
              },
            })),
            this.registerRequestInterceptor(),
            this.registerResponseInterceptor(),
            (this.api = this.transformRequestMethods(this.apiBaseURL())),
            (this.apiCDN = this.transformRequestMethods(this.apiBaseURL()));
        }
        return (
          Object(f['a'])(e, [
            {
              key: 'apiBaseURL',
              value: function () {
                return 'http://www.shinejoy.xyz/';
              },
            },
            {
              key: 'transformRequestMethods',
              value: function (e) {
                var t = this.axiosRef;
                return {
                  get: function (n, r) {
                    return t.get(
                      n,
                      Object(c['a'])(Object(c['a'])({}, r), {}, { baseURL: e }),
                    );
                  },
                  post: function (n, r) {
                    return t.request(
                      Object(c['a'])(
                        Object(c['a'])({ baseURL: e, url: n }, r),
                        {},
                        { method: 'POST' },
                      ),
                    );
                  },
                  postJSON: function (e, t) {
                    var n = { post: { 'Content-Type': 'application/json' } };
                    return this.post(
                      e,
                      Object(c['a'])(Object(c['a'])({}, t), {}, { headers: n }),
                    );
                  },
                };
              },
            },
            {
              key: 'registerRequestInterceptor',
              value: function () {
                this.axiosRef.interceptors.request.use(
                  function (e) {
                    var t = e.params,
                      n = e.method,
                      r = void 0 === n ? 'GET' : n;
                    return (
                      'GET' != r.toUpperCase() &&
                        ((e.data = t), (e.params = {})),
                      e
                    );
                  },
                  function (e) {
                    console.log(e), Promise.reject(e);
                  },
                );
              },
            },
            {
              key: 'registerResponseInterceptor',
              value: function () {
                this.axiosRef.interceptors.response.use(
                  function (e) {
                    var t = e.data,
                      n = t.code,
                      r = t.data;
                    t.message;
                    return (
                      console.log('__LYG_JAX', t),
                      0 == n ? r : Promise.reject(t)
                    );
                  },
                  function (e) {
                    var t = { message: '网络不给力', statusCode: -999 };
                    return Promise.reject(t);
                  },
                );
              },
            },
          ]),
          e
        );
      })(),
      g = new b(),
      v = g,
      y = {
        install: function (e) {
          Object.defineProperties(e.prototype, {
            $xhr: {
              get: function () {
                return v;
              },
            },
          });
        },
      },
      j = y,
      O = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n('div', { attrs: { id: 'app' } }, [n('router-view')], 1);
      },
      w = [],
      P = n('262e'),
      R = n('2caf'),
      x = n('9ab4'),
      _ = n('60a3'),
      k = (function (e) {
        Object(P['a'])(n, e);
        var t = Object(R['a'])(n);
        function n() {
          return Object(l['a'])(this, n), t.apply(this, arguments);
        }
        return (
          Object(f['a'])(n, [{ key: 'mounted', value: function () {} }]), n
        );
      })(_['c']);
    k = Object(x['a'])([Object(_['a'])({ name: 'Home', components: {} })], k);
    var T = k,
      C = T,
      E = (n('034f'), n('2877')),
      S = Object(E['a'])(C, O, w, !1, null, null, null),
      L = S.exports,
      q = (n('3ca3'), n('ddb0'), n('8c4f'));
    r['a'].use(q['a']);
    var A = [
        {
          path: '/about',
          name: 'About',
          component: function () {
            return n.e('about').then(n.bind(null, 'f820'));
          },
        },
        {
          path: '/home',
          name: 'home',
          component: function () {
            return Promise.all([n.e('home~login~profile'), n.e('home')]).then(
              n.bind(null, 'bb51'),
            );
          },
        },
        {
          path: '/login',
          name: 'login',
          component: function () {
            return Promise.all([n.e('home~login~profile'), n.e('login')]).then(
              n.bind(null, 'a55b'),
            );
          },
        },
        {
          path: '/profile',
          name: 'profile',
          component: function () {
            return Promise.all([
              n.e('home~login~profile'),
              n.e('profile'),
            ]).then(n.bind(null, 'c66d'));
          },
        },
        {
          path: '/success',
          name: 'success',
          component: function () {
            return n.e('success').then(n.bind(null, 'bb0d'));
          },
        },
        {
          path: '/failure',
          name: 'failure',
          component: function () {
            return n.e('failure').then(n.bind(null, 'e3b5'));
          },
        },
        {
          path: '/result',
          name: 'result',
          component: function () {
            return n.e('result').then(n.bind(null, 'eeac'));
          },
        },
      ],
      N = new q['a']({ mode: 'hash', base: '', routes: A }),
      M = N;
    n('adcf'), n('56fa'), n('fdc4'), n('0147'), n('e2ab'), n('c2d8');
    (r['a'].config.productionTip = !1),
      r['a'].use(o['a']).use(a['a']).use(i['a']).use(u['a']).use(s['a']),
      r['a'].use(j),
      new r['a']({
        router: M,
        render: function (e) {
          return e(L);
        },
      }).$mount('#app');
  },
});
//# sourceMappingURL=app.0e9af144.js.map
