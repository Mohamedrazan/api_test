const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/api/version', (req, res) => {
  const versionData = {
    version_code: "0.0.1",
    version_name: "Plush Pro v0.0.1",
    message: "New update available!",
    new: ["Bug fixes", "Performance improvements", "New features"],
    app_update_links: {
      android: "https://play.google.com/store/apps/details?id=com.radevelopers.wstatus",
      ios: "https://apps.apple.com/us/app/plush-pro/id123456789"
    },
    additional_info: {
      release_date: "2024-02-01",
      changelog: "Check our website for detailed release notes."
    }
  };

  res.json(versionData);
});

// Ensure that your server listens to the correct port
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
