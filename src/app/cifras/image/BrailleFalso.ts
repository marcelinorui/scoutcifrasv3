import { CifraImage } from "../../../app/cifras/image/CifraImage";

export class BrailleFalso extends CifraImage {
    constructor() {
        super("Braille Falso",
           

[ 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAlklEQVRIS+2VIQ6AMAxF3xIk3BCJAAeCUyDAgUByQ5AI0mRqydQGW0jnt9f/+7saEh2TiIuCP3PeZ3UBTEBjK9mBEbhjVeYDz0DvQBZgeBt8AqUDuYDqt+AVaB11G9C9rVhslnDVFnTYcIndUU52H4iOk/RVxyko3b5U6zjpdgoKllz2hSvZWtTtFNxT94Hs1mJ0har4AZmpKh+8pt/YAAAAAElFTkSuQmCC',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAArklEQVRIS+2VMQ6DMAxFHxIj3LAjA2ww9BQd2q0dGLkhjAwoUoYqUqIomCaqnDnRs3/8/SsynSoTFwX/THmf1DXwADpbyQzcgV2qMh/4CYwO5AVMV4NXoHEgG9D+LfgN9E53H2C4umMjsxmumwUtdriM3CKnuAWidjL/qnY6Nd2+qVY7faeTiNVS0kkkuXzgUDqJJFdx4FA6iSRXip1ErFZcOp3aSjGPteMYlUTuHEzEOB/GElnMAAAAAElFTkSuQmCC',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAuUlEQVRIS+2VMQ7CMAxFX6SOcEPGDu0GA6dggA2Gjr0hjB2qSBnaSLGsJKURJKtbPdv5P9+w0zE7cangr20+tOoGuAGt62QArsCUq7MQ+A6cPcgDuGwNfgMHD/IBjj8LfgKdN90L6Lee2K7ZiuvkQKMTl113llPcA1LtZO+12ilJ3SFVVzst00mymtqGMekkJZc61UJgKZ1iaysxFgeW0im2pppYslNsTQVOehw0PxcXi5qmk775v4lnd8FGH3NAkAcAAAAASUVORK5CYII=',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAt0lEQVRIS+2UMQ7CMBAEJxIl+SElBXRQ5BUU0IWCkh9CSYEsuYgs+YrTXmJQ/IG5Xd9cx0KvW4jLCp6t+VrVG+AC7PMkD2AAPqrJauArcCogN+AcDX4B2wLyBvq/BY/AoUh3B47RiVPNabl2GfTMy5XqlrzmDoilk0Q1j04S1WpgSyeJas2BLZ0kqtUSWzpJVPspnUIPiEQZa0LPVocmlrjqSSxRxgOWKOMBS/5xBU8baO5yhf/xF6F2OB9qRh7SAAAAAElFTkSuQmCC',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAsUlEQVRIS+2VMQoCMRBFX8BSb7ilhdtp4Sks1k4Ly72hlhYSyIIEZkD5uwmaHCAv/zNvEih0QiEuDbxY81bVK+AEbNNLbsAReKpeZoEHYJ9BzsBhbvAdWGeQB7D5WfAF2GXprkA/d+JYcxyuLoHGNFyxbsmpboF4OklU+0YniWoW2NNJolp1YE8niWpWYk8niWpNp2kreco0nWJLH3+Z1nA1nSRf4fsl1XksT5hf+H+JX1SRRh/hFZAOAAAAAElFTkSuQmCC',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAuElEQVRIS+3VMQ6CQBBG4UdiiTe0tJBOCk5hoR0Wlt5QSwuyydJsspMJ+Vc2BA7A25nsBw0rPc1KXfbw3zafW/UBuAHneJIXMAA/1cly4TtwTSIPoC8d/gBtEvkCx82GR+CSTPcEutIThzWHy3WKoXe8XGHdkqe6D4jFSUJtCScJtVzY4iShVl3Y4iShlpvY4iShthlObmpqTm5q6lvtplZdeCknNzU1Jze16jhJ/rnWS/aJi694Dkx/jlQfVZ6xKAAAAABJRU5ErkJggg==',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAwklEQVRIS+2VsQoCMRBE34Gl/qGlhXZa+BUW2p2FpX+opYUEImggyzLseYcm7cK+zGQn2zHS6Ubi0sBfc75m9Qw4AKt8kwuwBx5RN6uBj8C2gJyA3dDgGzAvIHdg8bPgHlgX6s7AZmjFyeY0XMsMuubhSnaHnMl9IFac1NqHU0qcrKi5Y1gDW3FSay7FanN3/muKrTipNZdiK05qzQUOyarVpG2nlzvu6VTfRMmxynINV9tOIfa+N5ncWgxXWDb8P8VPITRGH9G1bCkAAAAASUVORK5CYII=',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAyElEQVRIS+2VMQ7CMAxFXyVGuGFHBthg4BQd6FYGRm4IIwOKlIVIsawvl5ZCVrd5+a5f0zDRaibi8gd/rPO1Vq+ADtjmk1yBE/CMOlkNfAYOBaQHjmOD78C6gDyAzWLBA7Ar0l2A/diJU5vTcLUZdMvDldodsmb3A7F0UmtvnVJ0slRza1gDWzqpNVdidXO3/7XElk5qzZXY0kmtucAhrlqbKLdTyM0VrZO7U9E6fS84RBlluEKUUcDub6U+OLtrUQ3ifu/3Er8A1EBUH6ERNdEAAAAASUVORK5CYII=',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAvElEQVRIS+2VsQrCMBCGv0LH9g0dO9jNDj6Fg251cPQNdXQogQg1kOO4po2UZD3Il/u5L1eR6VSZuBTwZsnHoq6BC9D5lzyAM/BJ9bIY+AqcAsgNGNYGv4AmgLyBdrfgETgG3d2Bfu2OXcxuuA4e9PTD5eJOcv7uA5F0stZ+krLoJKmm1jAGlnSy1lQdWy9X+x/rWNLJWlN1LOlkranASVyVLrFsp6KTS/S7uRZPddFpvp32qVM2jws4eQIT/z1iH4ZLI/EAAAAASUVORK5CYII=',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAv0lEQVRIS+2WsQ7CMAxEXyXG8oeMDHSDga9ggK0MjPwhjAwoUhYixaouBgspWS/1s08+pQNBZwji0sE/c75m9Qo4AdvcyQ04Ai/A0hY3XgOfgX1R5QIcAEtrBj+AsajyBNaApf0veAZ2RftXYAIsrXniZHNark2udM/Lley2tGbw4gLqRSVOKuvjOyVOXwW7RMbqsDZxGNglMsrELpFRwC4LpIBdXiAF7PICKeCwrQ4D9zi5x6v/V7tbWisYZvUb9ig4H8XydTkAAAAASUVORK5CYII=',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAxUlEQVRIS+2WMQ7CMAxFXyVGuGFHBthg4BQdYCsDIzeEkQFFChKNFCv8hEaIdP2Jn/1lx+2o9HWVuDTwbM7HrF4AA7D2mVyAA/AALC058Rj4COyCKCdgD1haNvgGLIMod2AFWNrvgkdgE6R/BraApWVX7Gx2zdX7SFffXM5uS8sGJwdQDyrjpLIm95Rx+iq4yMhYGcYqrgYuMjJKxUVGRgEXaSAF3LaTc61tp/feeW2u5KaMPSD/t52SLVMPth961bmP7z0BqUNGH3+jOwgAAAAASUVORK5CYII=',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAzElEQVRIS+2WMQ7CMAxFXyXGckNGBrrBwCkYYCsDIzeEkQFFCgORYkU/LgHRrm78bMs/Px2Nvq4Rlxn8scnnRr0ADsA6VnIB9sADsGLFhefAR2CbZDkBO8CKVYNvQJ9kuQNLwIr9LngENkn5Z2AArFh1x2HMYblWMdM1LlcYtxWrBhcnUH9U5KSy3s4pcpoU7CIZq8Jcx83ALpJROnaRjAJ2WSAFrLpTsXMpcnJxLmWrXZzr68CqOxXLMNex6k7FMpyft5NfHC/A/436CdRAVB8waMD+AAAAAElFTkSuQmCC',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAuklEQVRIS+3XMQoCMRCF4W/BUm9oaaGdFp7CQjstLL2hlhYSWUEWNixJdBGT9iXzzzxmGNIY6TQjcVXw15zvs3qCHRZtJmdscUdMG5x4H3iPdSfKARvEtGzwFdNOlBtmiGm/Cz5i2Un/hBViWnbFwebQXPM20qVtrmB3TMsGDw6QerGO08u5Ok7BiTpOqZP0fJcyTlnA1+OU7fRRcJENFMuwr+LRwEU2UErFRTZQCrhIA1XwuwP/95N4AP31Rh8sEAmYAAAAAElFTkSuQmCC',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAApklEQVRIS+3WsQrCQBCE4S9gqW9oaaGdFj6FhXZaWPqGWlrISQQJ5DhyahA27dzN7A37Qxojfc1IuSL4Z833VT3BDot2kjO2uCOnFQ/eF7zHuuNywAY5rTr4imnH5YYZctr/Bh+x7Ix/wgo5rfrFqea0XPPW6dIuV6o7p1UHFxsMPRg4vZoLnFITgdNQkp73AqfA6X2BAqev4FRlWnI5fuhLWvrImQexEFQfHzgkPwAAAABJRU5ErkJggg==',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAu0lEQVRIS+3WIQ4CMRQE0LcJEm6IRIADwSkQ4EAguSFIBFmymE3alHbDQmjttH/+n3Q6bYy0mpF4VeKPKR+SeoIdFl0nZ2xxRwxLbjxEvMe6V+WADWJYMfEV016VG2aIYb9LfMSy1/4JK8Sw4olbmdvLNe8qXbrL1codw4qJkwvkbqx2eilX7dQqUe2U66TnuaHtlJxcQ6dTcnKFiHPtlJxcX0ecm07JyRWaODedkpOrfm+LHoV3Dv+f1A/cDWIf/gJW6AAAAABJRU5ErkJggg==',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAxUlEQVRIS+2VOw4CMQwFZyVKuCElBdtBwSkooIOCcm8IJQWKlCpSrCfHYsNnWydvbCujHZjpG2bi8ge/bfO1VS+AI7DJndyAA/AErJrceA18AnZFyhnYA1atGXwHlkXKA1gBVu1zwRdgW7R/BUbAqjVPnNacHtc6J035caV1W7VmsBzgPRitk6xatE6yajWwVydZte7AXp1k1WoTe3WSVevufyxrEe2xrEU0WNbia8CyFtETy1pEg7158r3uPJY79x78vYlffbNUH6uPphcAAAAASUVORK5CYII=',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAxElEQVRIS+2VsQpCMQxFzwNH/UNHB9+mg1/hoJsOju8PdXSQQgUpNFzS4qvYrrfNTUJPMjDTGWbypRt/rfO5Vi+AI7CJmdyAA/AELE1OPGd8AnZJlDOwByyt2PgOLJMoD2AFWNrvGl+AbZL+FRgBSyuuOLQ5fK51jDTFzxXabWnFxnIA78XaOMmo1cZJRi1n7MVJRq05Yy9OMmq5ir04yag1t4/7dgoDqm+nzzH93lzy6K6NU7GxHMB7sTmOvYXI7/6v4hcwzmIfoUcUYQAAAABJRU5ErkJggg==',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAxElEQVRIS+2VoQ5CMQxFz0uQ8IdIBDgQfAUC3EMg+UOQCLJkT7BkzU33wkbY7N1622anHah0hkq+dOOvdT7X6gVwAjYxkxtwBF6ApcmJ54zPwD6JcgEOgKUVGz+AZRLlCawAS/td4xHYJulfgR1gacUVhzaHz7WOke7xc4V2W1qxsRzAe3FunGTU5sZJRi1n7MVJRq05Yy9OMmq5ir04yag1t4+926njFAbbtNU+hlzHaWrH/+Hk3Xbyu+YGiJy592K1it9by3AfhuZ4PQAAAABJRU5ErkJggg==',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAtklEQVRIS+3VsQrCMBSF4a/gqG/o6KCbDj6Fg246OPqGOjpIoB0sNJSQWNF0PSV/7uH+pDHR10zEVcEfa36o6hkOWLU3uWKPJ1Kzt6GGwEdse+OfsENqNgp8x7wHfmCB1Oy7wWesexNfsEFqNmriUHNYrmX7961drlB3ajYKXFyrFJ2yXCpFp6LgmDK/CY4pU3TimDJFwVkOjx1SderaqTqFJrrXKcviDS3X/+mUpc4Ujys4ewMvyphGH3yY4fcAAAAASUVORK5CYII=',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAyElEQVRIS+2WsQ7CMAxEXyXG8oeMDHSDga9ggK0MjPwhjAwoUhYi1TKHQxBqVyd5vpNPbkejr2vEZQZ/zfkpqxfAAVjnTi7AHngAau1F1BT4CGwL+SdgB6g1F/gG9AX4DiwBtfbb4BHYFIrPwACoNZfiZHMarlU+fc3DlexWay5w9VgpcQppSolTVbAVmf8EW5GpqtiKTFVwyOPWI0qcrO3kbliJk7WdPgaHbCDF6mbgkA2kKA7ZQArYPSTqwfm/WnXu7XvNrH4CfbNUHwsXzVwAAAAASUVORK5CYII=',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAxUlEQVRIS+2WsQ6CMBRFD4kj/qGjA2wy+BUOusHg6B/q6ECa1MEmbV5ueGK0rJf09F16e2lY6WlW4lLBH3M+Z/UGOAH7uJMrcASegKq9DZUDn4FDMv4FGABVM4HvQJuAH8AWULXvBo9Al0w8AT2gaqaJg83hcO3i27d4uILdqmYCu8dKidMim1Li5AouReY3waXIuE5ciowreJHFS4socartFBy1NJfpylSrz5z/3DdWG8gcwxxYbSBzDOvvrfvF8QL8n9UzqLBiH2JLaD8AAAAASUVORK5CYII=',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAwUlEQVRIS+2VoQ4CMRBE3yVI+EMkAhwIvgIB7hBI/hAkgjSpoUk3m2FLgVztNPd2JjvXgU5n6MRlAn8s+VrUM+AArPIkF2APPABVezFVAx+BbWH/BOwAVXOBb8C8AN+BBaBq3w0egXXh+AxsAFVzOU4xp+Va5tvXvFwpblVzgZvXKrpO7oGj6/Q2OKQy1hQ1x93AIZVRHIdURgG7l0S9qNRJZbl+INYL1BRsbfV/gq06NXVs1akpOOTjP9XjyXF4Ak/SZVQfXWr+ZwAAAABJRU5ErkJggg==',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAuElEQVRIS+3WoQ4CMRCE4e8SJLwhEgEOBE+BAAcCyRuCRJBLDsElJc1SKKK107t/Z7KTtFPpdJW4GvhnyaeinmCHxTDJGVvcEdVeTKXAe6xH9g/YIKplga+YjsA3zBDV/ht8xHLk+IQVolqW4z7mfrnmw+3LsFx93FEtC/z1WpWuU/bApev0MbhIZd5NkXJcDVykMhHHRSoTAWcvSfRiq9MzuWpbXQ3c6hRtTfK79q4uHmnqh9WifgCFgGIfKdA7DwAAAABJRU5ErkJggg==',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAzUlEQVRIS+2WoQ4CMRBE3yVI+EMkAhwIvgIBDgSSPwSJIE1qaNLNZK7QE3d2u3k7k532Bjp9QycuM/hvztesXgAnYJMnuQNH4A24tS9RNfAZ2BfyL8ABcGsS+AksC/ALWAFubdrgK7AtFN+AHeDWJMXJ5rRc63z6kZcr2e3WJPDPY9U6TvLAreM0GtwkMtEUNcXdwE0i4yhuEhkHLC+Je7B1nKKXS7pA3Bco6pPA7lZHfdMGu3GK+iTFbpyiPgnspkTum/+rZavGHuxm9QewfXAfrnAOjgAAAABJRU5ErkJggg==',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAwklEQVRIS+2WIQ4CMRRE3yZIuCESAQ4Ep0CAWwSSG4JEkCZF0KTNZOjSFV37+/v+TDvpDjT6hkZcOvhvzuesXgAnYBMnuQFH4AW4tS9ROfAZ2CfyL8ABcGsS+AEsE/ATWAFubd7gEdgmiq/ADnBrkuJgc7hc67j6Hi9XsNutSeDJY9Xj9LHYjUypTzrjZmA3MqU+SbEbmVKfBJ5lnKoM5bxOk4LlWLhT5BQ3A8uxqK1YjkVtsLuf3Nf/q2Wrfl3YzOo3UiNiHxFZ6eYAAAAASUVORK5CYII=',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAwElEQVRIS+2WsQ6CMBRFD4kj/KGjg2w68BUOuungyB/C6GCa1MEmNI9bsJKU9fX19N6+m1KR6asycSngnzk/ZfUOuAAHf5In0AEvQK19iZoCX4FTIP8GnAG1ZgIPQB2AR6AB1Np/g+/AMVD8AFpArZkUO5vdcO396t4Pl7NbrZnAq8eqxOljsRqZWJ/pjrOB1cjE+kyK1cjE+kzgzcXJfOClX6dksDrV2wWrcUpWrMYpGWzeQF1Y/qtV52b3ZbP6DQU+cB9pmSI2AAAAAElFTkSuQmCC' ]
     ,"braille-falso.html"   );
    }
}
