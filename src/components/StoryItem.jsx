import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';

const StoryItem = ({ story }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{story.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          <Badge variant="secondary">{story.points} points</Badge>
          <a
            href={story.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-500 hover:text-blue-700"
          >
            Read more <ExternalLink className="ml-1 h-4 w-4" />
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default StoryItem;