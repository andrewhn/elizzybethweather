# elizzybethweather

To deploy:
 - Register for api key from openweathermap.org and add &appid={api_key} to `WEATHER_API` (also change to https)
 - Add following nginx server block (note use of $remote_addr)
 
```
server {
        server_name <domain>;
        
        root <path>;
        index index.html index.htm;

        location / {
                try_files $uri $uri/ =404;
        }

        location /weather {
                rewrite /weather(.*) /$remote_addr  break;
                proxy_pass http://localhost:<port>;
        }
}
```

