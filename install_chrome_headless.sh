
echo "deb http://dl.google.com/linux/chrome/deb/ stable main" | tee -a /etc/apt/sources.list
wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
apt-get -qq update -y
apt-get -qq install -y google-chrome-stable xvfb gtk2-engines-pixbuf xfonts-cyrillic xfonts-100dpi xfonts-75dpi xfonts-base xfonts-scalable imagemagick x11-apps default-jre
Xvfb :0 -ac -screen 0 1024x768x24 &
export DISPLAY=:99
node ./node_modules/.bin/webdriver-manager update