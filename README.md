# Gatsby remark sns images

## Usage
### Install
```bash
npm install --save gatsby-remark-sns-images
# or
yarn add gatsby-remark-sns-images
```

### gatsby-config.js
```js
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
```