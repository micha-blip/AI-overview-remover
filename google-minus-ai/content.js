const url = new URL(location.href);
const q = url.searchParams.get('q');

if (q && !q.split(/\s+/).includes('-ai')) {
  url.searchParams.set('q', q + ' -ai');
  location.replace(url.toString());
}
