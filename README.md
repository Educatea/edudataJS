# edudataJS
JavaScript function to send data to [EduData](http://data.educatea.com.ar).

## Getting started

First add jQuery      
```<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>```

Now add edudata.js     
```<script src="edudata.js"></script>```

Send some data:   
```benchmark ('YOUR-TOKEN', 'YOUR-TAG-NAME', 'YOUR-HOST-NAME', [ARRAY-OF-VALUES], 'OPTIONAL-UNIT')```

## Examples

```benchmark ('XXXXXXX', 'ShoppingCart', 'MyServer', [1000], '$')``` 

```benchmark ('XXXXXXX', 'ShoppingCartItems', 'MyServer', [10, 15, 23], '$')``` 

```benchmark ('XXXXXXX', 'AndroidPhonesSold', 'MyServer', [2], '')``` 


## Details

Created by [Juan Gesino](https://github.com/juangesino) for [Educatea](http://educatea.com.ar)

## Contributing

1. Fork it ( https://github.com/juangesino/edudata/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request
