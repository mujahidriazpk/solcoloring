# SolColoring - AI-Powered Coloring Page Generator

A modern web application that generates beautiful coloring pages using artificial intelligence. Built with Next.js, OpenAI, and deployed on Vercel.

![SolColoring Banner](public/banner-ai-art.jpg)

## 🎨 Features

- **AI-Powered Generation**: Create unique coloring pages using OpenAI's DALL-E
- **Multiple Categories**: Browse animals, vehicles, nature, fantasy, and more
- **Responsive Design**: Beautiful, modern UI that works on all devices
- **Real-time Generation**: Instant coloring page creation
- **Download Ready**: High-quality images ready for printing
- **Dark Mode Support**: Toggle between light and dark themes

## 🚀 Tech Stack

- **Framework**: Next.js 14.1.3
- **Styling**: Tailwind CSS 3.4.1
- **AI Integration**: OpenAI API (DALL-E 3)
- **Language**: TypeScript
- **Deployment**: Vercel
- **Icons**: React Icons

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/solcoloring.git
cd solcoloring
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:
```env
OPENAI_API_KEY=your_openai_api_key_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌐 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Add your environment variables in Vercel dashboard
4. Deploy with one click

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## 📝 Environment Variables

- `OPENAI_API_KEY`: Your OpenAI API key for image generation

## 🎯 Usage

1. **Browse Categories**: Explore different coloring page categories
2. **Create Custom**: Use the "Create" page to generate custom coloring pages
3. **Generate**: Enter a prompt describing what you want to color
4. **Download**: Save the generated coloring page to your device

## 🏗️ Project Structure

```
solcoloring/
├── app/
│   ├── api/
│   │   └── generate/          # OpenAI API integration
│   ├── categories/            # Category browsing page
│   ├── create/               # Coloring page creation
│   ├── data/                 # Category data
│   └── globals.css           # Global styles
├── components/
│   └── navigation/           # Navigation components
├── public/                   # Static assets
└── tailwind.config.ts        # Tailwind configuration
```

## 🎨 Categories

- 🦁 **Animals**: Lions, tigers, elephants, and more
- 🚗 **Vehicles**: Cars, planes, boats, trucks
- 🌺 **Nature**: Flowers, trees, landscapes
- 🧚 **Fantasy**: Dragons, unicorns, magical creatures
- 🏰 **Architecture**: Buildings, castles, monuments
- 🎭 **Characters**: People, cartoons, superheroes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- OpenAI for the DALL-E API
- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Vercel for seamless deployment

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

Made with ❤️ by [Your Name]
