const url = new URL(location);

url.toString();
// => "https://qiita.com/search?q=test&sort=like"

// ’Ç‰Á
url.searchParams.set("foo", "bar");

url.searchParams.get("foo");
// => "bar"

url.toString();
// => "https://qiita.com/search?q=test&sort=like&foo=bar"

// XV
url.searchParams.set("foo", "hoge");

url.searchParams.get("foo");
// => "hoge"

url.toString();
// => "https://qiita.com/search?q=test&sort=like&foo=hoge"