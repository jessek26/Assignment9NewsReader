import ArticleCard from '../components/ArticleCard';
import { useArticles } from '../context/ArticlesContext';

function SavedArticlesPage() {
  const { getUserSavedArticles } = useArticles();
  const mySavedArticles = getUserSavedArticles();

  return (
    <div>
      <h2 className="page-heading">Saved Articles</h2>

      {mySavedArticles.length === 0 ? (
        <div className="message">
          No saved articles yet. Browse articles and click the bookmark icon to save them!
        </div>
      ) : (
        <div className="articles-grid">
          {mySavedArticles.map((article, index) => (
            <ArticleCard key={index} article={article} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedArticlesPage;