# edudataJS
JavaScript function to send data to [EduData](http://data.educatea.com.ar).

## Getting started

First add jQuery      
```<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>```

Now add edudata.js     
```<script src="edudata.js"></script>```

First you need to run the 'start' action:   
```ed({ action: 'start', token: 'YOUR-TOKEN', host: 'YOUR-HOST-NAME'});```

Now you can run the 'track' action to start tracking:   
```ed({ action: 'track', tag: 'YOUR-TAG-NAME', values: [ARRAY-OF-VALUES], unit: 'OPTIONAL-UNIT' });```

## Examples

```ed({ action: 'start', token: 'XXXXXXXX', host: 'MyServer'});``` 

```ed({ action: 'track', tag: 'ShoppingCart', values: [1000], unit: '$' });``` 

```ed({ action: 'track', tag: 'ShoppingCartItems', values: [10, 15, 23], unit: '$' });``` 

```ed({ action: 'track', tag: 'AndroidPhonesSold', values: [2], unit: '' });``` 

## Details

Created by [Juan Gesino](https://github.com/juangesino) for [Educatea](http://educatea.com.ar)

## Contributing

1. Fork it ( https://github.com/Educatea/edudataJS/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request
