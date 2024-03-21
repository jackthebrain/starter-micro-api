const { google } = require('googleapis');

const clientEmail = "hcsa-api@hcsa-api.iam.gserviceaccount.com";
const privateKey = "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC9rw/sjJoKwsQi\nXijPpdm+V+U5oRjP8vY/6+4h/qJp6tdXozzU8Q97jazH2qRPbLkvxvCu4F6FtXE9\ngJqekjYDP+zhpsFrqJWRn5s59iEORsX/TCi04VPGZqmhunmd86touQYzr8UJDMcn\nWmXSxyE+BQ/++yr2ZYFjKiQeYF04Xj9LR5bRrO1b+aKBnkCRFunQcyIJYLXXVmk2\nSNMU2/w1DfK+I4zlA9F8xB9WA7s1lXrpiXw0dvvAHdLkHuEU2QIw4LsXVs8+EnbS\nfphHOaUPBiUFZRbTTwuYt+nGdRwK5qPIXr+Sf0qqJglBRTmDFqjoY84hX0XCFzW3\nSODn71JvAgMBAAECggEALi23b7xPKD2AaGmJ//t9hjR5zszkcIPS5X73q3kFa0nM\nAT7xaVoCje7Q2JrnE5sBfpstLzXabSzeE74CZoZr9eCTN+BUCHSzbQ9xR+we4g3i\n2CNfaaHNtmh59bCjOQwAd+9LjjvFeU2OEouUbHskIagz27ykGfZeSJkSz/5f03/a\ncfHE4rqcfDB9XesmCVaOkk9KTk4JRmMm8KW/vrAW9OAPJ7swx7fhQXdh7Sz0h31M\ngiP9bnJgoGvTRr6ZIZQpqAFL7LPOEguc8aAjZuFEk1yN8iEVwxHl24Q0szXF5A6o\nivv+1Sp0mK0t8RELn0GGALsgH0BY/wwzGoKNew/1iQKBgQD15asZCHA24tfSTDDh\noPmjl5nRLPdo1nd/MLTnJPNujnC4NiFsvc3saxUQ2Xl/N7sEX4nlhUQpSb6gLmPw\nm5Az7MFSsED9lIHl3Odwr1nAmf5zt+IrYlb7WIDbknFeVQmQ2eMARD2ZRRxZze18\nSKxkSpK4yYWD/xfukVPt5imG+wKBgQDFeiVHXnsf+RvBYF8r8FA8LhGbu+oaDabh\nGpoXu7t445XdCikr1eIbiWb92tKy6TS/vvSSjcN3vxjgjLiM9YRgpKKHnEd3XN/D\n4ftjXG7EVztu5aabFbWztkIPGFRFGhayy38SUhIbXuFOTzWVhxep34kXW9q3Mpqb\nviqas2KYHQKBgDfiACZqQoZWu1GxuxIr8U/6bhyZqYiL5RBk01gMj746ZOeYdbQu\n1pO6KklwAyqkUb5GsCIXTUxM1CO3J0NRN051qeHO6JY4n+TLdVWopC8fUDKgQag2\nayooDPDZsSYNEWV3/xzaZV1l1XGbWTN7mKIaSInyUoOS/69aG8bfHeTtAoGAYRCR\nxEu/b07NgrZw8TL07S+jvg2Wmum87gZaWXIQSvJqljRJWl+N/QUDl6F4UTJpmBov\nMt31hyVp/+2LRNXlFG+357o8MoJ3BlxMaWFknKNX9kFxK+d24XejbrIBsdmJ8KYv\ntnyao9N2ITyz1OSLEBds1gtzLPr1nbnSTSoBO00CgYA4FXOnEIdSyLe9YvChqdkU\nBQa1f5fohhokzrfKD5gdwhnkIDJV31vj5Z8LC0LhdtTgUQxunVx4GYFD99IvT4zo\nhCRu+nJ9fgHV08aXUUOutCQ6S1ZjUuAM6Scs2bGriaH9SUfjGZ53SFyhuYymke01\nh00cDE96Bhaom4AXcbrt4A==\n-----END PRIVATE KEY-----\n";
const SheetId = '1EIrbmlozZa2_XbSBfo0I0U50fspVj8ZsOfcZ2xEyEFo';

const privateKeyEdited = privateKey.replace(/\\n/g, '\n');

const auth = new google.auth.JWT(
    clientEmail,
    null,
    privateKeyEdited,
    'https://www.googleapis.com/auth/spreadsheets'
  );

module.exports= {auth,SheetId};

