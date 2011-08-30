#!/usr/bin/perl
use strict;
use CGI;

my $cgi = CGI->new();

my $json_txt = << "__EOL__";
{
  "results" : [
    {
      "name" : "takke",
      "text" : "サーバからJSONを受けとってBackbone側で処理してみるテスト。",
      "image_profile_url" : "http://a2.twimg.com/profile_images/1158639947/OJBdBWWg"
    },
    {
      "name" : "ngmy",
      "text" : "実際はCGIじゃなくてコントローラのレスポンスになる（はず）。",
      "image_profile_url" : "http://a1.twimg.com/profile_images/1476070388/superfriends.jpg"
    }
  ]
}
__EOL__

print $cgi->header(-content_type => "text/javascript", -charset => "utf-8");
print $json_txt;
