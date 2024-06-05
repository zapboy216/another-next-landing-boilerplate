import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function LandingComponent() {
  return (
    <div className="bg-[#1a1a1a] font-sans text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <div className="text-lg font-bold">S&G</div>

          <div className="text-sm">422-287-6775</div>
        </div>
      </div>
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold leading-tight">
              Criminal & Personal Injury Attorney
            </h1>
            <p className="text-xl">
              Serious representation from experienced attorneys
            </p>
            <div className="flex space-x-4">
              <Button className="bg-yellow-500 text-black hover:bg-yellow-600">
                Free online consultation
              </Button>
              <Button className="border border-yellow-500 bg-transparent text-yellow-500 hover:border-yellow-600 hover:text-yellow-600">
                Meet our attorneys
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              alt="Attorney"
              className="rounded-full"
              height="500"
              src="/placeholder.svg"
              style={{
                aspectRatio: '400/500',
                objectFit: 'cover',
              }}
              width="400"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#333333] py-12">
        <div className="container mx-auto grid grid-cols-2 gap-4 px-6 md:grid-cols-4">
          <Card className="bg-[#4d4d4d]">
            <CardHeader>
              <CardTitle>Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Our attorneys have over 60 years of combined legal experience
              </p>
            </CardContent>
          </Card>
          <Card className="bg-[#4d4d4d]">
            <CardHeader>
              <CardTitle>Trial Skill</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We have handled hundreds of cases in criminal law and personal
                injury
              </p>
            </CardContent>
          </Card>
          <Card className="bg-[#4d4d4d]">
            <CardHeader>
              <CardTitle>Team Approach</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Working together, we share our knowledge and strategy on each
                case
              </p>
            </CardContent>
          </Card>
          <Card className="bg-[#4d4d4d]">
            <CardHeader>
              <CardTitle>Service</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We communicate with clients, return their calls, and take the
                time to understand their needs
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
