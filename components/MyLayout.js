import Header from './header'

export default function Layout(props) {
  return (
    <div className="container">
      <Header />
      {props.children}
      <style jsx global>{`
        html, body, div, span, applet, object, iframe, blockquote,
        a, abbr, acronym, address, big, cite, code,
        del, dfn, em, img, ins, kbd, q, s, samp,
        small, strike, strong, sub, sup, tt, var,
        b, u, i, center,
        dl, dt, dd, ol, ul, li,
        fieldset, form, label, legend,
        table, caption, tbody, tfoot, thead, tr, th, td,
        article, aside, canvas, details, embed,
        figure, figcaption, footer, header,
        menu, nav, output, ruby, section, summary,
        time, mark, audio, video, input {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          font-weight: normal;
          vertical-align: baseline;
        }
        article, aside, details, figcaption, figure,
        footer, header, menu, nav, section {
          display: block;
        }

        p, code, pre {
          line-height: 1.5;
        }

        pre {
          background-color: #f6f8fa;
          border-radius: 3px;
          overflow: auto;
          padding: 16px;
        }

        html, body {
          height: 100%;
        }

        body {
          -webkit-text-size-adjust: none;
          line-height: 1;
          user-select: none;
          -webkit-tap-highlight-color: transparent;
          color: #222222;
        }

        blockquote, q {
          quotes: none;
        }

        blockquote:before, blockquote:after,
        q:before, q:after {
          content: none;
        }
        table {
          border-collapse: collapse;
          border-spacing: 0;
        }

        a {
          color: #7e8c8d;
          -webkit-backface-visibility: hidden;
          text-decoration: none;
        }

        li {
          list-style: none;
        }
        .container {
          width: 1020px;
          margin: 0 auto
        }
      `}</style>
    </div>
  )
}