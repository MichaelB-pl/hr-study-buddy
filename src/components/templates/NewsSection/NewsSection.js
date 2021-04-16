import React from 'react';
import { Wrapper, NewsSectionHeader, ArticleWrapper, TitleWrapper, ContentWrapper } from './NewsSection.styles';
import { Button } from 'components/atoms/Button/Button';

const data = [
  {
    title: 'New computers at school1',
    category: 'Tech news',
    content:
      'Amet nisi proident consectetur quis fugiat sunt id elit. Irure proident labore proident aute magna est laborum. Occaecat dolore commodo excepteur deserunt magna et incididunt qui incididunt culpa. Proident in dolor veniam laborum. Minim dolor deserunt est occaecat in sint in dolor enim ullamco nostrud elit.',
  },
  {
    title: 'New computers at school2',
    category: 'Tech news',
    content:
      'Laboris laboris exercitation ullamco adipisicing qui excepteur. Ut ad et cillum ea officia minim cupidatat sunt commodo qui ad voluptate cupidatat. Consectetur nulla nisi eu aliquip ex ut consectetur deserunt cillum exercitation aliquip. Do duis aliquip eu dolor enim Lorem. Culpa proident labore ut enim exercitation esse fugiat culpa Lorem mollit aliqua.',
    image: 'https://unsplash.it/500/400',
  },
  {
    title: 'New computers at school3',
    category: 'Tech news',
    content:
      'Eiusmod ut eiusmod occaecat voluptate velit eiusmod aute laboris enim est commodo irure ad. Exercitation ad nisi sint enim deserunt aute ad incididunt nisi ullamco nulla enim. Fugiat pariatur exercitation ad qui occaecat aute eiusmod do mollit id aliqua nostrud labore consequat.',
  },
];

const NewsSection = () => {
  return (
    <Wrapper>
      <NewsSectionHeader>University news feed</NewsSectionHeader>
      {data.map(({ title, category, content, image = null }) => (
        <ArticleWrapper key={title}>
          <TitleWrapper>
            <h3>{title}</h3>
            <p>{category}</p>
          </TitleWrapper>
          <ContentWrapper>
            <p>{content}</p>
            {image ? <img src={image} alt="article" /> : null}
          </ContentWrapper>
          <Button isBig>Read more</Button>
        </ArticleWrapper>
      ))}
    </Wrapper>
  );
};

export default NewsSection;
