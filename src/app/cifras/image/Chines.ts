import { CifraImage } from "../../../app/cifras/image/CifraImage";

export class Chines extends CifraImage {
    constructor() {
        super("Chinês",
            [
                  'data:image/gif;base64,R0lGODlhFAAUAHAAACH5BAEAAAEALAAAAAAUABQAgAAAAAAAAAIijI+pAevY3oty0ZouPnozn4GQyJFGt6GYWrGSO5mfCctLAQA7'
                , 'data:image/gif;base64,R0lGODlhFAAUAHAAACH5BAEAAAEALAAAAAAUABQAgAAAAAAAAAImjI+pAevY3oty0ZouPnozn4GQaADmiaYnR5bt13abjNGVLeGvUwAAOw=='
                , 'data:image/gif;base64,R0lGODlhFAAUAHAAACH5BAEAAAEALAAAAAAUABQAgAAAAAAAAAInjI+pAevY3oty0ZouPnozn4EcQJbmSXKigbanun5xt9GYXeGSHj8FADs='
                , 'data:image/gif;base64,R0lGODlhFAAUAHAAACH5BAEAAAEALAAAAAAUABQAgAAAAAAAAAIojI+pAevY3oty0ZouPnozDwHiSJYiB3LmSqIpw8bu2201dle5tL9SAQA7'
                , 'data:image/gif;base64,R0lGODlhFAAUAHAAACH5BAEAAAEALAAAAAAUABQAgAAAAAAAAAImjI+pAbxvWoNL0upushrxHmWgM40feHaptl4t9ULxM2MlKo56UAAAOw=='
                , 'data:image/gif;base64,R0lGODlhFAAUAHAAACH5BAEAAAEALAAAAAAUABQAgAAAAAAAAAIpjI+pAbxvWoNL0upushrxHmWgM41fB6TqyqrHiYogrNGXTeGQ/vAjVQAAOw=='
                , 'data:image/gif;base64,R0lGODlhFAAUAHAAACH5BAEAAAEALAAAAAAUABQAgAAAAAAAAAIrjI+pAbxvWoNL0upushrxHmWgM4HAiaYqenzdCqutaNKvrbl3WfP7CEQUAAA7'
                , 'data:image/gif;base64,R0lGODlhFAAUAHAAACH5BAEAAAEALAAAAAAUABQAgAAAAAAAAAIrjI+pAbxvWoNL0upushrxHmUgQJbmWR5fh7anKrLuDE+gY48xu2srn7sJCwA7'
                , 'data:image/gif;base64,R0lGODlhFAAUAHAAACH5BAEAAAEALAAAAAAUABQAgAAAAAAAAAImjI+pAey7moTRNZrmxUdz5H1GKJKfyaGYSrGQW02i9ZT0DCv5TBUAOw=='
                , 'data:image/gif;base64,R0lGODlhFAAUAHAAACH5BAEAAAEALAAAAAAUABQAgAAAAAAAAAIrjI+pAey7moTRNZrmxUdz5H1GKJKfiQHqyrZrZ4ljLKMpXeKnztmUL/sUAAA7'
                , 'data:image/gif;base64,R0lGODlhFAAUAHAAACH5BAEAAAEALAAAAAAUABQAgAAAAAAAAAIsjI+pAey7moTRNZrmxUdz5H1GKJIcgKbqmnaWyLCy6k6web63XvIfjgHCRAUAOw=='
                , 'data:image/gif;base64,R0lGODlhFAAUAHAAACH5BAEAAAEALAAAAAAUABQAgAAAAAAAAAItjI+pAey7moTRNZrmxUdz5H1G+AHmiaZnZ4mMCqPsJMb2Rpatm3M99qMEXZ8CADs='
                , 'data:image/gif;base64,R0lGODlhFAAUAHAAACH5BAEAAAEALAAAAAAUABQAgAAAAAAAAAIvjI+pAey7moTRNZrmxUdz5H0MQJbmSXaWOKJuqU7iS2/hV7/xM6/sjfP1ZKyioQAAOw=='
                , 'data:image/gif;base64,R0lGODlhFAAUAHAAACH5BAEAAAEALAAAAAAUABQAgAAAAAAAAAIwjI+pAey7moTRNZrmxUfzDoTiSIad9RnlSp5TysabB8ur+3z2raIputH5YMOfMVAAADs='
                , 'data:image/gif;base64,R0lGODlhFAAUAHAAACH5BAEAAAEALAAAAAAUABQAgAAAAAAAAAIpjI+pAey9UpsuIkrtwVW/732Zx0GkGKKmVqZt+J4cjNKzDOIjW6e+UQAAOw=='
                , 'data:image/gif;base64,R0lGODlhFAAUAHAAACH5BAEAAAEALAAAAAAUABQAgAAAAAAAAAItjI+pAey9UpsuIkrtwVW/732Zx0GkGKKmBbTuC7sbGpapXdMnl/M7+BulhoECADs='
                , 'data:image/gif;base64,R0lGODlhFAAUAHAAACH5BAEAAAEALAAAAAAUABQAgAAAAAAAAAIvjI+pAey9UpsuIkrtwVW/732Zx0GkGALqyrbrhpLuzMJcGp+3DvKjVgqhTMJioAAAOw=='
                , 'data:image/gif;base64,R0lGODlhFAAUAHAAACH5BAEAAAEALAAAAAAUABQAgAAAAAAAAAIvjI+pAey9UpsuIkrtwVW/732Zx0EagKbqmm5iyMary5HyTYPkC/N7/dOdfKHioQAAOw=='
                , 'data:image/gif;base64,R0lGODlhFAAUAHAAACH5BAEAAAEALAAAAAAUABQAgAAAAAAAAAIwjI+pAey9UpsuIkrtwVW/732ZBpTmiZqbGKYuunLeS0OsbdVvDM5s+/PJhL2Q8VAAADs='
                , 'data:image/gif;base64,R0lGODlhFAAUAHAAACH5BAEAAAEALAAAAAAUABQAgAAAAAAAAAIyjI+pAey9UpsuIkrtwVW/7wHiSJbj9kGayZYoF7byC65yS2f2bebdmvIYOCogTIhEFAAAOw=='
                , 'data:image/gif;base64,R0lGODlhFAAUAHAAACH5BAEAAAEALAAAAAAUABQAgAAAAAAAAAIrjI+pAezd1oHPSUPzxZVu7V2gJXakNEbl+Jkq6m7xu6Sy3bKrmfO7JgsmCgA7'
                , 'data:image/gif;base64,R0lGODlhFAAUAHAAACH5BAEAAAEALAAAAAAUABQAgAAAAAAAAAIwjI+pAezd1oHPSUPzxZVu7V2gJXakNEblKALuC8fuZKpoveH2kub9hwOyVqacMVEAADs='
                , 'data:image/gif;base64,R0lGODlhFAAUAHAAACH5BAEAAAEALAAAAAAUABQAgAAAAAAAAAIyjI+pAezd1oHPSUPzxZVu7V2gJXakNEYowLbuy06musD2K4/fvPF0zdvpSkNUsIdEFAAAOw=='
                , 'data:image/gif;base64,R0lGODlhFAAUAHAAACH5BAEAAAEALAAAAAAUABQAgAAAAAAAAAIyjI+pAezd1oHPSUPzxZVu7V2gJXbkAqTqyqqTGUntzL6jSOe2+cGbH5P5erdS8Yc8FAAAOw=='
                , 'data:image/gif;base64,R0lGODlhFAAUAHAAACH5BAEAAAEALAAAAAAUABQAgAAAAAAAAAIyjI+pAezd1oHPSUPzxZVu7V2gJQHmiabn1JGLCqfsKMb23NY2jGtfGxEBN8NgaUhMJgoAOw=='
                , 'data:image/gif;base64,R0lGODlhFAAUAHAAACH5BAEAAAEALAAAAAAUABQAgAAAAAAAAAIyjI+pAezd1oHPSUPzxZVu7UnASJYmOXWWeLZlCn7uDKvXTHPxjbe19lFFbsJNcWhMHgoAOw=='
            ]
       ,'chines.html' );
    }
}

