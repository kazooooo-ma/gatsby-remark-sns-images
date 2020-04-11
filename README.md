# Gatsby remark sns images
Make a SNS ogp image using your article title on Gatsby.js.
## Usage
### Install
```bash
npm install --save gatsby-remark-sns-images
# or
yarn add gatsby-remark-sns-images
```

### gatsby-config.js

```js
// Example
resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
          resolve: `gatsby-remark-sns-images`,
            options: {
              output: {
                directory: '',
                fileName: 'thumbnail.png'
              },
              image: {
                width: 1200,
                height: 630,
                backgroundColor: '#15202B',
              },
              style: {
                title: {
                  fontFamily: 'Noto Sans CJK JP',
                  fontColor: '#1DA1F2',
                  fontWeight: 'bold',
                  fontSize: 64,
                  paddingTop: 100,
                  paddingBottom: 200,
                  paddingLeft: 150,
                  paddingRight: 150,
                },
                author: {
                  fontFamily: 'Noto Sans CJK JP',
                  fontColor: '#DDDDDD',
                  fontWeight: '400',
                  fontSize: 42,
                }
              },
              meta: {
                title: '',
                author: '@psbss'
              },
              fontFile: [
                {
                  path: require.resolve('./src/utils/fonts/NotoSansCJKjp-Bold.otf'),
                  family: 'Noto Sans CJK JP',
                  weight: 'bold',
                },
                {
                  path: require.resolve('./src/utils/fonts/NotoSansCJKjp-Regular.otf'),
                  family: 'Noto Sans CJK JP',
                  weight: '400',
                },
              ],
              iconFile: require.resolve('./content/assets/siteicon.png'),
              timeout: 10000,
            },
          },
        ],
      },
```

### options

![example](https://github.com/psbss/gatsby-remark-sns-images/blob/master/gatsby-remark-sns-images.png)

- output
  - directory : default is public/article_directory/
  - fileName : image file name
- image
  - width : image width
  - height : image height
  - backgroundColor : image background color
- style
  - title
    - fontFamily : Font family
    - fontColor : Font color (Can use Hex color codes)
    - fontWeight : Font family's option (You should use Bold)
    - fontSize : default is 64px
    - paddingTop : padding top
    - paddingBottom : padding bottom
    - paddingLeft : padding left
    - paddingRight : padding right
  - author
    - fontFamily : Font family
    - fontColor : Font color (Can use Hex color codes)
    - fontWeight : Font family's option (You should use Regular)
    - fontSize : default is 42px
- meta
  - title : meta options
  - author : author name
- fontFile
  - path : Font file path
  - family : Utilize font name
  - weight : Utilize font weight
- iconFile : Next to author
- timeout : Timeout on build time limit

## Note
If I have some issues, Please give me [new issues](https://github.com/psbss/gatsby-remark-sns-images/issues)
